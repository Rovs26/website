# Fits a flat screen plate onto a device screen in a photo with a perspective warp.
# Usage: python3 composite.py '{"scene_path": ..., "plate_path": ..., "quad": [[TLx,TLy],[TRx,TRy],[BRx,BRy],[BLx,BLy]], "out_path": ...}'
# Options: radius (screen corner radius in scene px), keep_dark [x0,y0,x1,y1,threshold] to keep a camera notch,
# keep_mask (PNG of pixels to keep, e.g. fingers over the screen), tint, gain, glare, blur, noise.
# Needs numpy and opencv-python.
import sys, json, numpy as np, cv2
def composite(scene_path, plate_path, quad, out_path, keep_mask=None, tint=(1.0, 0.975, 0.93), gain=0.94, glare=0.05, blur=0.6, noise=2.0, notch=None, radius=0, keep_dark=None):
    scene = cv2.imread(scene_path).astype(np.float32)
    plate = cv2.imread(plate_path).astype(np.float32)
    H, W = scene.shape[:2]; ph, pw = plate.shape[:2]
    src = np.float32([[0,0],[pw,0],[pw,ph],[0,ph]])
    dst = np.float32(quad)
    M = cv2.getPerspectiveTransform(src, dst)
    # supersample the warp for clean edges
    ss = 2
    Ms = cv2.getPerspectiveTransform(src, dst*ss)
    warped = cv2.warpPerspective(plate, Ms, (W*ss, H*ss), flags=cv2.INTER_AREA)
    alpha = np.ones((ph,pw),np.float32)
    if radius:
        r = int(radius * pw / (np.ptp(dst[:,0])))
        alpha = np.zeros((ph,pw),np.uint8)
        cv2.rectangle(alpha,(r,0),(pw-r,ph),255,-1); cv2.rectangle(alpha,(0,r),(pw,ph-r),255,-1)
        for cx,cy in [(r,r),(pw-r,r),(r,ph-r),(pw-r,ph-r)]: cv2.circle(alpha,(cx,cy),r,255,-1,lineType=cv2.LINE_AA)
        alpha = alpha.astype(np.float32)/255
    mask = cv2.warpPerspective(alpha, Ms, (W*ss, H*ss), flags=cv2.INTER_LINEAR)
    warped = cv2.resize(warped, (W,H), interpolation=cv2.INTER_AREA)
    mask = cv2.resize(mask, (W,H), interpolation=cv2.INTER_AREA)
    if blur: warped = cv2.GaussianBlur(warped, (0,0), blur)
    # screen look: gain + warm tint (BGR order)
    warped = warped * gain * np.float32([tint[2], tint[1], tint[0]])
    # soft diagonal glare across the screen
    if glare:
        yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
        cx, cy = np.mean(dst[:,0]), np.mean(dst[:,1]); span = max(np.ptp(dst[:,0]), np.ptp(dst[:,1]))
        g = np.clip(1 - np.abs((xx-cx)*0.6 + (yy-cy)*0.8 + span*0.15)/(span*0.35), 0, 1) ** 2
        warped = warped + (255 - warped) * (g[...,None] * glare)
    if noise:
        warped = warped + np.random.default_rng(7).normal(0, noise, warped.shape).astype(np.float32)
    m = mask[...,None]
    if keep_mask is not None:
        km = cv2.imread(keep_mask, cv2.IMREAD_GRAYSCALE).astype(np.float32)/255.0
        m = m * (1 - km[...,None])
    if keep_dark is not None:
        x0,y0,x1,y1,thr = keep_dark
        g = cv2.cvtColor(scene.astype(np.uint8), cv2.COLOR_BGR2GRAY)
        kd = np.zeros((H,W),np.float32); sub = (g[y0:y1,x0:x1] < thr).astype(np.float32)
        kd[y0:y1,x0:x1] = cv2.GaussianBlur(sub,(0,0),0.8)
        m = m * (1 - kd[...,None])
    out = scene*(1-m) + warped*m
    if notch is not None:
        cx, cy, r = notch
        cv2.circle(out, (int(cx), int(cy)), int(r), (12,12,12), -1, lineType=cv2.LINE_AA)
    cv2.imwrite(out_path, np.clip(out,0,255).astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, 92])
if __name__ == '__main__':
    cfg = json.loads(sys.argv[1]); composite(**cfg)
