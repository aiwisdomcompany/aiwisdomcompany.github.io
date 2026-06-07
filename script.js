const heroBadges = [
  {
    title: "數發部數位解決方案 銅牌 & 評審獎",
    meta: "政府評選雙重肯定",
  },
  {
    title: "App Store 教育類別第 1 名",
    meta: "教育產品實戰成效",
  },
  {
    title: "喜來登飯店 Line AI 客服開發",
    meta: "高標準服務場景導入",
  },
];

const services = [
  {
    title: "AI Agent / 多功能智能代理開發",
    description:
      "以企業任務為核心，打造可執行、可擴展、可監控的智能代理流程，從客服到內部決策支援皆可落地。",
  },
  {
    title: "LLM 應用與企業知識系統",
    description:
      "整合內部文件、SOP 與歷史資料，建立可查詢、可推理、可持續更新的知識中樞，降低資訊斷層。",
  },
  {
    title: "AI 聊天機器人",
    description:
      "打造符合品牌語氣與商業流程的對話體驗，串接網站、Line 或內部平台，提升客服效率與轉換率。",
  },
  {
    title: "AI 互動教學系統",
    description:
      "結合學習路徑、即時回饋與情境互動，提供高參與度的教學體驗，支援教育與企業訓練場景。",
  },
  {
    title: "自動化流程與內部系統整合",
    description:
      "將零散工具與人工流程整合成一致工作流，透過資料同步與自動化任務降低營運成本。",
  },
  {
    title: "企業 AI 導入顧問與客製開發",
    description:
      "從導入評估、技術路線到產品化執行，協助企業以最短路徑取得可衡量成果與長期競爭力。",
  },
];

const projects = [
  {
    name: "慶鴻精密 企業官方網站",
    type: "Corporate Website",
    description: "代理 Mitutoyo、Siemens 設計應用軟體與工業設計精密加工服務的企業形象官網。",
    link: "https://www.chptw.com/",
    tags: ["企業官網", "品牌資訊架構", "精密工業"],
    media: "assets/projects/ching_hong.mp4",
    mediaType: "video",
    tone: "tone-1",
    featured: true,
    showCaseLink: true,
    fillMedia: true,
  },
  {
    name: "汽車百貨官網",
    type: "Brand Website",
    description: "結合 AI Agent 推薦與 LLM 導購流程，提升詢單轉換。",
    link: "",
    tags: ["官網重構", "品牌策略", "轉換優化"],
    media: "assets/projects/yaris_demo.mp4",
    mediaType: "video",
    tone: "tone-1",
    featured: false,
    showCaseLink: false,
    fillMedia: true,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "保全公司官網",
    type: "Corporate Site",
    description: "導入 NLP 問答與 AI 風險分流，強化 B2B 洽詢效率。",
    link: "",
    tags: ["企業官網", "資訊架構", "B2B UX"],
    media: "assets/projects/taixiang_demo.mp4",
    mediaType: "video",
    tone: "tone-2",
    featured: false,
    showCaseLink: false,
    fillMedia: true,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "Design_lab 設計公司 Airtable 整合案",
    type: "Automation",
    description: "串接 Airtable 與 AI Workflow Automation，加速專案交付。",
    link: "",
    tags: ["Airtable", "流程自動化", "系統整合"],
    media: "assets/projects/design_lab_demo.mp4",
    mediaType: "video",
    tone: "tone-3",
    featured: false,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "SK2 TOEFL 互動模擬考試",
    type: "EdTech + AI",
    description: "以 LLM 評分與 AI Tutor 回饋，優化托福模考體驗。",
    link: "",
    tags: ["互動教學", "AI 回饋", "學習體驗"],
    media: "assets/projects/toefl_demo.mp4",
    mediaType: "video",
    tone: "tone-4",
    featured: false,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "Desko 教育 AI ERP 系統",
    type: "AI ERP",
    description: "整合 ERP、RAG 知識庫與 AI Agent，支援教務決策。",
    link: "",
    tags: ["AI ERP", "資料整合", "教育科技"],
    media: "assets/projects/desko_demo.mov",
    mediaType: "video",
    tone: "tone-5",
    featured: true,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "國立資訊圖書館智慧館員 - AI曉書 chatbot",
    type: "AI Chatbot",
    description: "以 RAG + LLM 打造智慧館員 chatbot，提供即時館務問答。",
    link: "",
    tags: ["智慧館員", "RAG問答", "圖書館場景"],
    media: "assets/projects/library.png",
    mediaType: "image",
    tone: "tone-2",
    featured: false,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
];

const awards = [
  {
    year: "2025",
    title: "經濟部 Best AI Awards 入選決賽",
    description: "以可落地的 AI 解決方案獲決賽肯定，展現技術與商業場景整合能力。",
  },
  {
    year: "2025",
    title: "交通部公路局 資料創新應用競賽 入選決賽",
    description: "在資料應用與創新實作面向通過評選，延伸出可複製的落地模式。",
  },
  {
    year: "2024",
    title: "數位發展部 數位科技解決方案 銅牌獎 & 評審獎",
    description: "同時獲得銅牌與評審肯定，驗證團隊跨領域整合與產品設計實力。",
  },
  {
    year: "2024",
    title: "榮獲 SiTi 台北市產業發展獎勵補助計畫",
    description: "入選補助計畫，支持團隊持續投入 AI 產品研發與商業化落地。",
  },
];

const proofPoints = [
  {
    label: "Best Ranking",
    value: "App Store 教育類第 1 名",
    description: "教育產品在真實市場驗證成長，具備從設計到交付的完整能力。",
    image: "assets/projects/app_no1.png",
    alt: "App Store 教育類別第一名成果畫面",
    layout: "layout-hero",
    imageClass: "img-no1",
  },
  {
    label: "Hospitality AI",
    value: "喜來登飯店 Line AI 客服",
    description: "為高標準服務場景建立 AI 對話流程與客服整合系統。",
    image: "assets/projects/sheraton_line.png",
    alt: "喜來登飯店 Line AI 客服示意畫面",
    layout: "layout-side",
    imageClass: "img-sheraton",
  },
  {
    label: "Domain Coverage",
    value: "網站 × 教育 × 企業系統",
    description: "跨產業實戰經驗，能依商業目標快速定義最適 AI 技術路線。",
    image: "assets/projects/edu_system.png",
    alt: "教育與企業系統整合成果畫面",
    layout: "layout-side",
  },
  {
    label: "Delivery Style",
    value: "策略、設計、開發一體",
    description: "以一體化流程縮短溝通成本，讓專案更快進入可運轉階段。",
    image: "assets/projects/strategy.svg",
    alt: "策略到交付的一體化流程示意",
    layout: "layout-hero",
    imageClass: "img-compact",
  },
];

const LOADER_MIN_DURATION_MS = 700;
const LOADER_MAX_WAIT_MS = 12000;
const ASSET_TIMEOUT_MS = 8000;

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function collectMediaAssets() {
  const elements = document.querySelectorAll("main img[src], main video[src]");
  const seen = new Set();
  const assets = [];

  elements.forEach((element) => {
    const rawSrc = element.getAttribute("src");
    if (!rawSrc) return;

    const absoluteSrc = new URL(rawSrc, window.location.href).href;
    if (seen.has(absoluteSrc)) return;
    seen.add(absoluteSrc);

    assets.push({
      src: absoluteSrc,
      type: element.tagName.toLowerCase() === "video" ? "video" : "image",
    });
  });

  return assets;
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;

    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    const timer = window.setTimeout(done, ASSET_TIMEOUT_MS);

    image.onload = () => {
      window.clearTimeout(timer);
      done();
    };

    image.onerror = () => {
      window.clearTimeout(timer);
      done();
    };

    image.src = src;

    if (image.complete) {
      window.clearTimeout(timer);
      done();
    }
  });
}

function preloadVideo(src) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    let settled = false;

    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    const timer = window.setTimeout(done, ASSET_TIMEOUT_MS);

    const onReady = () => {
      window.clearTimeout(timer);
      done();
    };

    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.addEventListener("loadeddata", onReady, { once: true });
    video.addEventListener("canplay", onReady, { once: true });
    video.addEventListener("error", onReady, { once: true });
    video.src = src;
    video.load();
  });
}

async function runInitialLoadingExperience() {
  const loader = document.querySelector("#site-loader");
  if (!loader) {
    document.body.classList.remove("is-loading");
    return;
  }

  const start = performance.now();
  document.body.classList.add("is-loading");

  const assets = collectMediaAssets();
  if (assets.length > 0) {
    const tasks = assets.map((asset) => {
      return asset.type === "video" ? preloadVideo(asset.src) : preloadImage(asset.src);
    });

    await Promise.race([Promise.allSettled(tasks), wait(LOADER_MAX_WAIT_MS)]);
  }

  const elapsed = performance.now() - start;
  if (elapsed < LOADER_MIN_DURATION_MS) {
    await wait(LOADER_MIN_DURATION_MS - elapsed);
  }

  loader.classList.add("is-hidden");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");

  window.setTimeout(() => {
    loader.remove();
  }, 600);
}

function initMetamorphosis() {
  const canvas = document.querySelector("#metamorphosis-canvas");
  if (!canvas) return;

  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
  });
  if (!gl) {
    canvas.hidden = true;
    return;
  }

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const vertSrc = `
    attribute vec2 a_pos;
    void main() {
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;

  const fragSrc = `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_res;
    uniform float u_morphSpeed;
    uniform float u_blobCount;
    uniform vec2 u_mouse;

    #define PI 3.14159265359
    #define TAU 6.28318530718
    #define MAX_STEPS 48
    #define MAX_DIST 20.0
    #define SURF_DIST 0.002
    #define BLOB_MAX 6

    vec3 g_pos[BLOB_MAX];
    vec3 g_radStretch[BLOB_MAX];
    mat2 g_rotXY[BLOB_MAX];
    mat2 g_rotYZ[BLOB_MAX];
    int g_count;

    float smin(float a, float b, float k) {
      float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
      return mix(b, a, h) - k * h * (1.0 - h);
    }

    float sdEllipsoid(vec3 p, vec3 r) {
      float k0 = length(p / r);
      float k1 = length(p / (r * r));
      return k0 * (k0 - 1.0) / k1;
    }

    float scene(vec3 p) {
      float d = MAX_DIST;
      for (int i = 0; i < BLOB_MAX; i++) {
        if (i >= g_count) break;
        vec3 q = p - g_pos[i];
        q = vec3(g_rotXY[i] * q.xy, q.z);
        q = vec3(q.x, g_rotYZ[i] * q.yz);
        d = smin(d, sdEllipsoid(q, g_radStretch[i]), 0.6);
      }
      return d;
    }

    vec3 calcNormal(vec3 p) {
      vec2 e = vec2(0.002, -0.002);
      return normalize(
        e.xyy * scene(p + e.xyy) +
        e.yyx * scene(p + e.yyx) +
        e.yxy * scene(p + e.yxy) +
        e.xxx * scene(p + e.xxx)
      );
    }

    float softShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
      float res = 1.0;
      float ph = 1e10;
      float t = mint;
      for (int i = 0; i < 16; i++) {
        float h = scene(ro + rd * t);
        if (h < 0.001) return 0.0;
        float y = h * h / (2.0 * ph);
        float d = sqrt(max(h * h - y * y, 0.0));
        res = min(res, k * d / max(0.0, t - y));
        ph = h;
        t += h;
        if (t > maxt) break;
      }
      return clamp(res, 0.0, 1.0);
    }

    float calcAO(vec3 p, vec3 n) {
      float occ = 0.0;
      float sca = 1.0;
      for (int i = 0; i < 3; i++) {
        float h = 0.01 + 0.12 * float(i) / 2.0;
        float d = scene(p + h * n);
        occ += (h - d) * sca;
        sca *= 0.95;
      }
      return clamp(1.0 - 3.0 * occ, 0.0, 1.0);
    }

    float fresnel(float cosTheta, float f0) {
      return f0 + (1.0 - f0) * pow(1.0 - cosTheta, 5.0);
    }

    vec3 envMap(vec3 rd) {
      float y = rd.y * 0.5 + 0.5;
      vec3 sky = mix(vec3(0.42, 0.28, 0.3), vec3(0.98, 0.72, 0.78), y);
      float sun = pow(max(dot(rd, normalize(vec3(2.0, 3.0, 1.0))), 0.0), 32.0);
      sky += vec3(1.0, 0.92, 0.88) * sun * 0.62;
      float fill = pow(max(dot(rd, normalize(vec3(-2.0, 1.0, -1.0))), 0.0), 8.0);
      sky += vec3(1.0, 0.58, 0.68) * fill * 0.16;
      float rim = pow(max(dot(rd, normalize(vec3(0.0, 0.5, -2.0))), 0.0), 16.0);
      sky += vec3(0.96, 0.78, 0.8) * rim * 0.2;
      return sky;
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);
      float aspect = u_res.x / u_res.y;
      uv.x -= mix(0.12, 0.42, smoothstep(1.1, 1.7, aspect));
      uv.y += mix(0.0, 0.04, smoothstep(1.1, 1.7, aspect));
      float t = u_time;
      float speed = t * u_morphSpeed;

      g_count = int(u_blobCount);
      for (int i = 0; i < BLOB_MAX; i++) {
        if (i >= g_count) break;
        float fi = float(i);
        float phase = fi * TAU / 6.0;
        g_pos[i] = vec3(
          sin(speed * 0.7 + phase) * 0.8 + sin(speed * 0.3 + phase * 2.3) * 0.3,
          cos(speed * 0.5 + phase * 1.4) * 0.6 + sin(speed * 0.8 + phase * 0.7) * 0.25,
          sin(speed * 0.6 + phase * 1.8) * 0.5 + cos(speed * 0.4 + phase * 2.1) * 0.2
        );
        float base = 0.36 + fi * 0.025;
        float pulse = sin(speed * 1.2 + fi * 1.7) * 0.08 + sin(speed * 0.5 + fi * 3.1) * 0.05;
        float r = base + pulse;
        float sx = 1.0 + sin(speed * 0.9 + fi * 2.3) * 0.25;
        float sy = 1.0 + cos(speed * 0.7 + fi * 1.9) * 0.2;
        float sz = 1.0 + sin(speed * 1.1 + fi * 2.7) * 0.2;
        float norm = pow(1.0 / (sx * sy * sz), 0.333);
        g_radStretch[i] = vec3(r) * vec3(sx, sy, sz) * norm;
        float ca = cos(speed * 0.3 + fi * 1.1), sa = sin(speed * 0.3 + fi * 1.1);
        g_rotXY[i] = mat2(ca, -sa, sa, ca);
        float cb = cos(speed * 0.2 + fi * 0.9), sb = sin(speed * 0.2 + fi * 0.9);
        g_rotYZ[i] = mat2(cb, -sb, sb, cb);
      }

      if (u_mouse.x > 0.0) {
        vec2 mUV = (u_mouse - u_res * 0.5) / min(u_res.x, u_res.y);
        vec3 mouseWorld = vec3(mUV.x * 3.0, mUV.y * 3.0, 0.5);
        for (int i = 0; i < BLOB_MAX; i++) {
          if (i >= g_count) break;
          vec3 toMouse = mouseWorld - g_pos[i];
          float mDist = length(toMouse);
          float pull = 0.45 / (1.0 + mDist * mDist * 2.0);
          g_pos[i] += toMouse * pull;
        }
      }

      vec3 ro = vec3(0.25, 0.28, 4.45);
      vec3 target = vec3(0.62, -0.04, 0.0);
      vec3 fwd = normalize(target - ro);
      vec3 right = normalize(cross(fwd, vec3(0.0, 1.0, 0.0)));
      vec3 up = cross(right, fwd);
      vec3 rd = normalize(fwd * 1.5 + right * uv.x + up * uv.y);

      float bsB = dot(ro, rd);
      float bsC = dot(ro, ro) - 6.25;
      float bsDisc = bsB * bsB - bsC;

      float totalDist = 0.0;
      float dist = 0.0;
      vec3 p = ro;
      bool hit = false;

      if (bsDisc > 0.0) {
        float sqrtDisc = sqrt(bsDisc);
        float t0 = -bsB - sqrtDisc;
        float t1 = -bsB + sqrtDisc;
        if (t1 > 0.0) {
          totalDist = max(t0, 0.0);
          float marchLimit = min(t1, MAX_DIST);
          for (int i = 0; i < MAX_STEPS; i++) {
            p = ro + rd * totalDist;
            dist = scene(p);
            if (dist < SURF_DIST) {
              hit = true;
              break;
            }
            if (totalDist > marchLimit) break;
            totalDist += dist;
          }
        }
      }

      vec3 col = vec3(0.0);
      float alpha = 0.0;

      if (hit) {
        vec3 n = calcNormal(p);
        vec3 v = normalize(ro - p);

        vec3 baseColor = vec3(1.0, 0.78, 0.82);
        vec3 roseColor = vec3(1.0, 0.54, 0.65);
        vec3 copperColor = vec3(0.96, 0.66, 0.68);
        vec3 sageColor = vec3(0.86, 0.78, 0.74);

        float colorMix1 = sin(p.x * 3.0 + p.z * 2.0 + t * u_morphSpeed * 0.4) * 0.5 + 0.5;
        float colorMix2 = sin(p.y * 4.0 - p.x * 2.5 + t * u_morphSpeed * 0.3) * 0.5 + 0.5;
        vec3 albedo = mix(baseColor, roseColor, colorMix1 * 0.34);
        albedo = mix(albedo, copperColor, colorMix2 * 0.24);
        albedo = mix(albedo, sageColor, smoothstep(0.3, 1.0, n.y) * 0.12);

        float metallic = 0.9;
        float roughness = 0.14;

        vec3 lightDir1 = normalize(vec3(2.0, 3.0, 1.5));
        vec3 lightCol1 = vec3(1.0, 0.92, 0.9) * 1.65;
        vec3 lightDir2 = normalize(vec3(-2.0, 1.0, -1.0));
        vec3 lightCol2 = vec3(1.0, 0.5, 0.62) * 0.42;
        vec3 lightDir3 = normalize(vec3(0.0, 0.5, -2.0));
        vec3 lightCol3 = vec3(0.96, 0.76, 0.78) * 0.38;

        float diff1 = max(dot(n, lightDir1), 0.0);
        float diff2 = max(dot(n, lightDir2), 0.0);
        float diff3 = max(dot(n, lightDir3), 0.0);

        float specPow = mix(256.0, 32.0, roughness);
        vec3 h1 = normalize(lightDir1 + v);
        vec3 h2 = normalize(lightDir2 + v);
        vec3 h3 = normalize(lightDir3 + v);
        float spec1 = pow(max(dot(n, h1), 0.0), specPow);
        float spec2 = pow(max(dot(n, h2), 0.0), specPow);
        float spec3 = pow(max(dot(n, h3), 0.0), specPow);

        float NdotV = max(dot(n, v), 0.0);
        float fres = fresnel(NdotV, 0.04 + metallic * 0.76);
        float shadow = softShadow(p + n * 0.01, lightDir1, 0.02, 5.0, 16.0);
        float ao = calcAO(p, n);

        vec3 diffuse = albedo * (1.0 - metallic) * (
          lightCol1 * diff1 * shadow +
          lightCol2 * diff2 +
          lightCol3 * diff3
        );
        vec3 specColor = mix(vec3(0.04), albedo, metallic);
        vec3 specular = specColor * (
          lightCol1 * spec1 * shadow * 1.6 +
          lightCol2 * spec2 * 0.9 +
          lightCol3 * spec3
        );

        vec3 envRefl = envMap(reflect(-v, n));
        vec3 envContrib = envRefl * mix(vec3(0.04), albedo, metallic) * fres;
        float rimFactor = pow(1.0 - NdotV, 4.0);
        vec3 rimColor = vec3(1.0, 0.62, 0.7) * rimFactor * 0.62;
        float topSpec = pow(max(dot(n, h1), 0.0), 512.0) * shadow;

        col = (diffuse + specular + envContrib + rimColor) * ao;
        col += vec3(1.0, 0.94, 0.92) * topSpec * 1.7;
        alpha = clamp(0.44 + fres * 0.2 + rimFactor * 0.1, 0.0, 0.68);
      }

      float closestT = max(-dot(ro, rd), 0.0);
      vec3 closestP = ro + rd * closestT;
      float closestDist = length(closestP - vec3(0.45, 0.0, 0.0));
      float atmosGlow = exp(-closestDist * closestDist * 0.75) * 0.18;
      vec3 glowColor = vec3(1.0, 0.55, 0.65) * atmosGlow;
      glowColor += vec3(1.0, 0.82, 0.82) * atmosGlow * 0.45;
      col += glowColor;
      alpha += atmosGlow * 0.22;

      col = col * (2.51 * col + 0.03) / (col * (2.43 * col + 0.59) + 0.14);
      col = pow(max(col, vec3(0.0)), vec3(0.95, 0.98, 1.04));
      float vig = 1.0 - dot(uv, uv) * 0.2;
      col *= vig;
      float readableSide = smoothstep(-0.24, 0.36, uv.x);
      alpha *= mix(0.48, 1.0, readableSide);
      alpha = clamp(alpha * vig, 0.0, 0.66);

      gl_FragColor = vec4(col, alpha);
    }
  `;

  function compile(type, src) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn(gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }

  const vert = compile(gl.VERTEX_SHADER, vertSrc);
  const frag = compile(gl.FRAGMENT_SHADER, fragSrc);
  if (!vert || !frag) {
    canvas.hidden = true;
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program));
    canvas.hidden = true;
    return;
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(program, "a_pos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(program, "u_time");
  const uRes = gl.getUniformLocation(program, "u_res");
  const uMorphSpeed = gl.getUniformLocation(program, "u_morphSpeed");
  const uBlobCount = gl.getUniformLocation(program, "u_blobCount");
  const uMouse = gl.getUniformLocation(program, "u_mouse");

  let dpr = Math.min(window.devicePixelRatio || 1, 1.4);
  let needsResize = true;
  let running = true;
  let mouseX = -1;
  let mouseY = -1;

  function resize() {
    needsResize = false;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const height = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uRes, width, height);
    }
  }

  window.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (event.clientX - rect.left) * dpr;
    mouseY = (rect.height - (event.clientY - rect.top)) * dpr;
  });

  window.addEventListener("mouseleave", () => {
    mouseX = -1;
    mouseY = -1;
  });

  function render(now) {
    if (!running) return;
    if (needsResize) resize();
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uTime, prefersReduced ? 0 : now * 0.001);
    gl.uniform1f(uMorphSpeed, 0.48);
    gl.uniform1f(uBlobCount, 4.0);
    gl.uniform2f(uMouse, mouseX, mouseY);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    window.requestAnimationFrame(render);
  }

  window.addEventListener("resize", () => {
    needsResize = true;
  });

  resize();
  window.requestAnimationFrame(render);

  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) window.requestAnimationFrame(render);
  });
}

function renderHeroBadges() {
  const container = document.querySelector("#hero-badges");
  if (!container) return;
  container.innerHTML = heroBadges
    .map(
      (item, index) => `
      <li class="hero-badge-item">
        <span class="hero-badge-index">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="hero-badge-title">${item.title}</p>
          <p class="hero-badge-meta">${item.meta}</p>
        </div>
      </li>
    `,
    )
    .join("");
}

function renderServices() {
  const container = document.querySelector("#services-grid");
  if (!container) return;
  container.innerHTML = services
    .map(
      (service, index) => `
      <article class="service-card reveal" tabindex="0" aria-label="${service.title}">
        <span class="service-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `,
    )
    .join("");
}

function renderProjects() {
  const container = document.querySelector("#project-grid");
  if (!container) return;
  container.innerHTML = projects
    .map((project) => {
      const hasMedia = Boolean(project.media);
      const isVideo = project.mediaType === "video";
      const hasLink = Boolean(project.link);
      const mediaLabel = hasMedia ? `${project.name} 專案預覽圖` : `${project.name} 專案預覽圖（placeholder）`;
      const mediaTone = hasMedia ? "" : project.tone;
      const cardClass = [project.featured ? "featured" : "", hasMedia ? "has-media" : "", isVideo ? "has-video" : ""]
        .join(" ")
        .trim();
      const isExternal = hasLink && /^https?:\/\//.test(project.link);
      const linkTarget = isExternal ? 'target="_blank" rel="noopener noreferrer"' : "";
      const caseLink = project.showCaseLink && hasLink
        ? `<a class="project-link" href="${project.link}" ${linkTarget} aria-label="查看 ${project.name} 專案">進入網站</a>`
        : "";
      const mockUrl = hasLink ? project.link : project.note ? "private project preview" : "video preview";
      const projectNote = project.note ? `<p class="project-note">${project.note}</p>` : "";

      let mediaInner = "<span>Project Preview</span>";
      if (hasMedia && isVideo) {
        const videoClass = `mock-canvas-media ${project.fillMedia ? "media-fill" : ""}`.trim();
        mediaInner = `
          <video class="${videoClass}" src="${project.media}" autoplay muted loop controls playsinline preload="auto" aria-label="${project.name} 影片預覽"></video>
          <span class="media-chip">Video Preview</span>
        `;
      } else if (hasMedia) {
        mediaInner = `<img class="mock-canvas-media" src="${project.media}" alt="${project.name} 視覺預覽圖" loading="lazy" />`;
      }

      return `
      <article class="project-card ${cardClass} reveal" aria-label="${project.name}">
        <div class="project-media">
          <div class="mock-browser" role="img" aria-label="${mediaLabel}">
            <div class="mock-top">
              <div class="dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <span class="mock-url">${mockUrl}</span>
            </div>
            <div class="mock-canvas ${mediaTone}">
              ${mediaInner}
            </div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span class="project-type">${project.type}</span>
            ${caseLink}
          </div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          ${projectNote}
          <ul class="tags" aria-label="${project.name} 技術標籤">
            ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderAwards() {
  const container = document.querySelector("#award-list");
  if (!container) return;
  container.innerHTML = awards
    .map(
      (award) => `
      <article class="award-item reveal" aria-label="${award.title}">
        <p class="award-year">${award.year}</p>
        <h3>${award.title}</h3>
        <p>${award.description}</p>
      </article>
    `,
    )
    .join("");
}

function renderProofPoints() {
  const container = document.querySelector("#proof-grid");
  if (!container) return;
  container.innerHTML = proofPoints
    .map(
      (point) => `
      <article class="proof-card ${point.layout || ""} reveal" aria-label="${point.value}">
        <figure class="proof-media">
          <img class="${point.imageClass || ""}" src="${point.image}" alt="${point.alt}" loading="lazy" />
        </figure>
        <div class="proof-content">
          <p class="proof-label">${point.label}</p>
          <p class="proof-value">${point.value}</p>
          <p class="proof-desc">${point.description}</p>
        </div>
      </article>
    `,
    )
    .join("");
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  elements.forEach((element) => observer.observe(element));
}

function setCurrentYear() {
  const el = document.querySelector("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

async function initPage() {
  document.body.classList.add("is-loading");
  renderHeroBadges();
  renderServices();
  renderProjects();
  renderAwards();
  renderProofPoints();
  initMetamorphosis();
  initRevealAnimations();
  setCurrentYear();
  await runInitialLoadingExperience();
}

document.addEventListener("DOMContentLoaded", () => {
  void initPage();
});
