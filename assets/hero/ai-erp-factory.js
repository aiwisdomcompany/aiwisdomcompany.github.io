/**
 * AI Wisdom Technologies — AI ERP Mini Factory (v2)
 * Zero dependencies. Self-contained SVG + CSS + vanilla JS Web Component.
 * Usage: <script src="/ai-erp-factory.js" defer></script><ai-erp-factory></ai-erp-factory>
 * CSS variables: --factory-red, --factory-red-bright, --factory-background, --factory-text
 * This is a depth-shaded isometric SVG animation, not a Blender/WebGL render.
 */
class AIErpFactory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this._anim = null;
    this._start = 0;
    this._elapsed = 0;
    this._lastStage = -1;
    this._reduced = false;
    this._visible = true;
    this._playing = true;
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
<style>
:host{display:block;isolation:isolate;width:100%;max-width:960px;--factory-red:#ff385c;--factory-red-bright:#ff6681;--factory-background:#050505;--factory-text:#eff0f4;color:var(--factory-text);font-family:"Noto Sans TC","PingFang TC",ui-sans-serif,system-ui,sans-serif;}
*,*::before,*::after{box-sizing:border-box}
.factory{position:relative;overflow:hidden;width:100%;border-radius:26px;background:radial-gradient(ellipse 66% 62% at 52% 44%,rgba(120,17,40,.17),transparent 85%),radial-gradient(ellipse 57% 40% at 56% 85%,rgba(255,40,78,.07),transparent 90%),transparent;}
.factory::before{content:"";position:absolute;pointer-events:none;inset:4% 2% 12%;border-radius:50%;border:1px solid rgba(242,48,83,.08);filter:blur(2px)}
.canvas{width:100%;display:block;overflow:visible;filter:drop-shadow(0 20px 35px rgba(0,0,0,.32))}
.titlebar{position:absolute;left:5.5%;top:2.5%;right:5.5%;display:flex;align-items:center;justify-content:space-between;z-index:2;pointer-events:none}
.brandtag{display:flex;align-items:center;gap:9px;color:#f4dce2;letter-spacing:.19em;font-size:10px;font-weight:800}
.brandmark{width:8px;height:8px;background:var(--factory-red);border-radius:2px;box-shadow:0 0 16px var(--factory-red)}
.live{font-size:10px;letter-spacing:.13em;font-weight:750;color:#8b94a8;display:flex;gap:8px;align-items:center}
.live-dot{width:6px;height:6px;border-radius:50%;background:#ff455d;box-shadow:0 0 13px #fc3551;animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.42;transform:scale(.72)}}
.stepbar{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin:-7.5% 5% 0;z-index:4;border-top:1px solid rgba(255,255,255,.14);border-bottom:1px solid rgba(255,255,255,.14)}
.step{min-width:0;border:0;border-left:1px solid rgba(255,255,255,.14);background:rgba(8,9,13,.72);backdrop-filter:blur(12px);padding:11px 12px 10px;transition:background .4s,color .4s;}
.step:last-child{border-right:1px solid rgba(255,255,255,.14)}
.step.active{background:linear-gradient(90deg,rgba(133,20,43,.62),rgba(40,13,20,.82))}
.step .num{font-size:9px;color:#788195;letter-spacing:.15em;font-weight:750;display:block;margin-bottom:3px}
.step.active .num{color:#ff6b7f}
.step .zh{font-size:clamp(10px,1.7vw,13px);font-weight:700;white-space:nowrap;display:block;color:#9ca2af}
.step.active .zh{color:#fff}
.step .en{font-size:8px;color:#636b79;letter-spacing:.09em;white-space:nowrap;display:block;margin-top:2px}
.step.active .en{color:#ec8b9a}
.svg-label{fill:#e3e6ec;font-weight:760;font-size:13px;letter-spacing:1.5px}
.svg-small{fill:#9299ac;font-weight:650;font-size:10px;letter-spacing:1px}
.svg-tiny{fill:#777f91;font-weight:650;font-size:8px;letter-spacing:.5px}
.station .halo{opacity:.12;transition:opacity .5s}
.station.active .halo{opacity:.85}
.station .lamp{fill:#333b48;transition:fill .35s,filter .35s}
.station.active .lamp{fill:#ff526a;filter:drop-shadow(0 0 6px #fd3f56)}
#bot-body{animation:botbob 3.3s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
#bot-head{animation:bottilt 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 75%}
.bot-eye{animation:blink 5.2s infinite;transform-box:fill-box;transform-origin:center}
#bot-arm-right{animation:wave 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:0% 20%}
#bot-orb{animation:pulseorb 2.5s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
@keyframes botbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes bottilt{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(3deg)}}
@keyframes blink{0%,42%,45%,100%{transform:scaleY(1)}43%,44%{transform:scaleY(.14)}}
@keyframes wave{0%,100%{transform:rotate(-11deg)}50%{transform:rotate(17deg)}}
@keyframes pulseorb{0%,100%{transform:scale(.95);opacity:.7}50%{transform:scale(1.12);opacity:1}}
#mini-scan{animation:scan 2.3s ease-in-out infinite alternate}
#packing-claw{transform-box:fill-box;transform-origin:center;}
#station-2.active #packing-claw{animation:claw 1.6s ease-in-out infinite}
@keyframes claw{0%,100%{transform:translateY(-8px)}45%{transform:translateY(4px)}65%{transform:translateY(4px)}}
@keyframes scan{from{transform:translateY(-13px);opacity:.2}to{transform:translateY(20px);opacity:.9}}
#rack-light{animation:rackblink 3s infinite}
@keyframes rackblink{50%{opacity:.25}}
#conveyor-belt{animation:belt 1s linear infinite}
@keyframes belt{to{stroke-dashoffset:-37}}
#sparkles>g{animation:spark 2.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
#sparkles>g:nth-child(2){animation-delay:.6s}#sparkles>g:nth-child(3){animation-delay:1.1s}#sparkles>g:nth-child(4){animation-delay:1.65s}
@keyframes spark{0%,100%{transform:scale(.5);opacity:.2}50%{transform:scale(1.15);opacity:1}}
#success-bubble{transition:opacity .55s,transform .55s;opacity:.13;transform:translateY(9px)}
#success-bubble.show{opacity:1;transform:translateY(0)}
#order-sheet{animation:sheetslide 3s ease-in-out infinite alternate}
@keyframes sheetslide{from{transform:translateY(0)}to{transform:translateY(-7px)}}
#stock-bar{transition:width .6s}#stock-meter{transition:opacity .5s}
@media(max-width:520px){.factory{border-radius:15px}.titlebar{top:1.5%}.brandtag{font-size:8px;letter-spacing:.11em}.live{font-size:8px}.stepbar{margin-left:2%;margin-right:2%}.step{padding:8px 4px}.step .num{font-size:7px}.step .zh{font-size:10px}.step .en{font-size:6px;letter-spacing:0}}
@media(prefers-reduced-motion:reduce){#bot-body,#bot-head,.bot-eye,#bot-arm-right,#bot-orb,#packing-claw,#mini-scan,#rack-light,#conveyor-belt,#sparkles>g,#order-sheet,.live-dot{animation:none!important}.step,.station .halo,.station .lamp,#success-bubble{transition:none!important}}
</style>
<div class="factory" role="img" aria-label="AI ERP 智慧工廠自動化流程動畫">
  <div class="titlebar"><div class="brandtag"><span class="brandmark"></span>AI ERP · SMART FACTORY</div><div class="live"><span class="live-dot"></span>AUTOMATED WORKFLOW</div></div>
  <svg class="canvas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 630" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="bgAura"><stop offset="0" stop-color="#53202d" stop-opacity=".55"/><stop offset=".58" stop-color="#40131e" stop-opacity=".16"/><stop offset="1" stop-color="#07090e" stop-opacity="0"/></radialGradient>
      <linearGradient id="floorTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#1d2029"/><stop offset=".55" stop-color="#161820"/><stop offset="1" stop-color="#0c1018"/></linearGradient>
      <linearGradient id="floorSide" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#24242e"/><stop offset="1" stop-color="#0a0d14"/></linearGradient>
      <linearGradient id="redSurface" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ff8191"/><stop offset=".4" stop-color="#e00b41"/><stop offset="1" stop-color="#95203c"/></linearGradient>
      <linearGradient id="redMetal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ff5570"/><stop offset="1" stop-color="#92174d"/></linearGradient>
      <linearGradient id="whiteMetal" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#fff"/><stop offset=".46" stop-color="#d6dce8"/><stop offset="1" stop-color="#8e99b3"/></linearGradient>
      <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#3d414f"/><stop offset=".6" stop-color="#252936"/><stop offset="1" stop-color="#10141e"/></linearGradient>
      <linearGradient id="darkPanel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#252633"/><stop offset=".6" stop-color="#121721"/><stop offset="1" stop-color="#0d101a"/></linearGradient>
      <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2c0d20"/><stop offset=".65" stop-color="#210d16"/><stop offset="1" stop-color="#10131b"/></linearGradient>
      <linearGradient id="boxTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f3ad75"/><stop offset="1" stop-color="#c47b55"/></linearGradient>
      <linearGradient id="boxLeft" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ce8e60"/><stop offset="1" stop-color="#9e573d"/></linearGradient>
      <linearGradient id="boxRight" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#b57550"/><stop offset="1" stop-color="#794331"/></linearGradient>
      <filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="8"/></filter>
      <filter id="softshadow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="14"/></filter>
      <filter id="neon" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="matrix(1,.44,-1,.44,480,40)"><path d="M32 0H0V32" fill="none" stroke="#40404e" stroke-opacity=".37" stroke-width=".9"/></pattern>
      <clipPath id="floorclip"><path d="M85 298 L424 135 L828 339 L477 542 Z"/></clipPath>
      <path id="flowPath" d="M184 388 C257 358 279 330 359 336 S492 402 572 392 S677 374 747 424" fill="none"/>
    </defs>

    <!-- Atmospheric depth and construction slab -->
    <ellipse cx="465" cy="316" rx="403" ry="250" fill="url(#bgAura)"/>
    <ellipse cx="465" cy="507" rx="352" ry="52" fill="#000" opacity=".54" filter="url(#softshadow)"/>
    <path d="M85 298L424 135L828 339L477 542L85 326L85 298" fill="url(#floorSide)" stroke="#3a202d" stroke-width="1.4"/>
    <path d="M477 542L828 339L828 365L477 568Z" fill="#10131c" stroke="#542130" stroke-width="1.7"/>
    <path d="M85 326L477 568L477 542L85 298Z" fill="#15151d" stroke="#46212b" stroke-width="1.3"/>
    <path d="M85 298L424 135L828 339L477 542Z" fill="url(#floorTop)" stroke="#59303c" stroke-width="1.8"/>
    <path d="M85 298L424 135L828 339L477 542Z" fill="url(#grid)" opacity=".66"/>
    <g clip-path="url(#floorclip)" opacity=".8">
      <path d="M48 347L459 151M94 380L503 180M139 406L554 209M184 436L604 240M239 475L656 273M305 503L699 305" stroke="#612337" stroke-width=".7" opacity=".23"/>
      <path d="M421 166L818 369M364 195L760 399M306 226L700 431M248 253L640 462M192 287L584 495" stroke="#612337" stroke-width=".7" opacity=".23"/>
    </g>
    <path d="M85 298L424 135L828 339" fill="none" stroke="#d23752" stroke-opacity=".6" stroke-width="2"/>
    <path d="M477 542L828 339" fill="none" stroke="#ff4a61" stroke-opacity=".64" stroke-width="2"/>
    <g fill="#ff4d67" filter="url(#neon)"><circle cx="130" cy="331" r="2.5"/><circle cx="280" cy="411" r="2.5"/><circle cx="478" cy="539" r="2.5"/><circle cx="649" cy="447" r="2.5"/><circle cx="812" cy="350" r="2.5"/></g>

    <!-- Rear red conduit pipes -->
    <path d="M150 287Q265 213 360 251T601 285T758 336" fill="none" stroke="#561e32" stroke-width="11" opacity=".65"/>
    <path d="M150 287Q265 213 360 251T601 285T758 336" fill="none" stroke="#ff3f60" stroke-width="1.8" opacity=".7" stroke-dasharray="5 12"/>

    <!-- ORDER station -->
    <g class="station" id="station-0">
      <ellipse class="halo" cx="192" cy="276" rx="86" ry="46" fill="#ff344f" filter="url(#glow)"/>
      <ellipse cx="191" cy="290" rx="76" ry="28" fill="#07080d" opacity=".65"/>
      <path d="M111 233L175 199L235 230L171 266Z" fill="#363441" stroke="#6a4853" stroke-width="1"/>
      <path d="M111 233L171 266L171 300L111 265Z" fill="#1c202b"/>
      <path d="M171 266L235 230L235 264L171 300Z" fill="#10151e"/>
      <path d="M145 175L197 148L222 161L172 190Z" fill="#323745"/>
      <path d="M145 175L172 190L172 257L145 242Z" fill="#161a25" stroke="#4e4c58"/>
      <path d="M172 190L222 161L222 224L172 257Z" fill="url(#darkPanel)" stroke="#63505a"/>
      <path d="M180 193L214 174L214 217L180 237Z" fill="url(#screen)" stroke="#e2455f" stroke-width="1.4"/>
      <path d="M186 199L205 188M186 205L209 192M186 211L201 202" stroke="#ff7687" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M181 225L188 221L195 225" stroke="#f45b72" stroke-width="1.5" fill="none"/>
      <path d="M131 222L160 207L186 220L156 237Z" fill="#4a4651" stroke="#98606a"/>
      <g id="order-sheet"><path d="M143 192L175 175L190 183L157 201Z" fill="#faf4ef" stroke="#ffd2d8"/>
        <path d="M153 190L168 182M157 194L178 183M161 197L173 190" stroke="#e45769" stroke-width="1.6"/>
      </g>
      <circle class="lamp" cx="204" cy="150" r="4.1"/>
      <text x="129" y="119" class="svg-label">01 · AI ORDER</text>
      <text x="130" y="135" class="svg-small">AI 智慧接單</text>
    </g>

    <!-- INVENTORY rack -->
    <g class="station" id="station-1">
      <ellipse class="halo" cx="340" cy="273" rx="85" ry="51" fill="#fe355a" filter="url(#glow)"/>
      <ellipse cx="342" cy="310" rx="90" ry="24" fill="#05070c" opacity=".72"/>
      <!-- metal storage structure -->
      <path d="M280 168L347 132L410 162L343 200Z" fill="#444552" stroke="#807078"/>
      <path d="M280 168L343 200L343 322L280 290Z" fill="#1a1d28" stroke="#625460"/>
      <path d="M343 200L410 162L410 282L343 322Z" fill="#141924" stroke="#60505e"/>
      <path d="M285 207L342 235L405 201M285 249L342 277L405 243" stroke="#7a5160" stroke-width="5" fill="none"/>
      <path d="M284 173L284 286M342 203L342 317M407 165L407 280" stroke="#8a7a85" stroke-width="5"/>
      <g class="stockbox"><path d="M292 181L310 172L328 180L309 190Z" fill="url(#boxTop)"/><path d="M292 181L309 190L309 215L292 205Z" fill="url(#boxLeft)"/><path d="M309 190L328 180L328 205L309 215Z" fill="url(#boxRight)"/></g>
      <g><path d="M345 196L364 186L382 194L363 205Z" fill="url(#boxTop)"/><path d="M345 196L363 205L363 230L345 220Z" fill="url(#boxLeft)"/><path d="M363 205L382 194L382 220L363 230Z" fill="url(#boxRight)"/></g>
      <g><path d="M294 224L313 214L331 224L312 234Z" fill="url(#boxTop)"/><path d="M294 224L312 234L312 259L294 250Z" fill="url(#boxLeft)"/><path d="M312 234L331 224L331 250L312 259Z" fill="url(#boxRight)"/></g>
      <g><path d="M352 239L371 229L389 239L370 249Z" fill="url(#boxTop)"/><path d="M352 239L370 249L370 275L352 265Z" fill="url(#boxLeft)"/><path d="M370 249L389 239L389 264L370 275Z" fill="url(#boxRight)"/></g>
      <circle class="lamp" cx="350" cy="140" r="4"/>
      <path id="rack-light" d="M286 201L335 227" stroke="#f3425c" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      <text x="300" y="87" class="svg-label">02 · AUTOMATION</text>
      <text x="300" y="103" class="svg-small">流程自動處理</text>
    </g>

    <!-- Packing robotic arm module -->
    <g class="station" id="station-2">
      <ellipse class="halo" cx="583" cy="315" rx="117" ry="67" fill="#ff3356" filter="url(#glow)"/>
      <ellipse cx="588" cy="341" rx="98" ry="31" fill="#050505" opacity=".7"/>
      <!-- base -->
      <path d="M556 310L593 290L630 308L594 330Z" fill="#565263" stroke="#a94d5f"/>
      <path d="M556 310L594 330L594 352L556 332Z" fill="#272633"/>
      <path d="M594 330L630 308L630 331L594 352Z" fill="#171924"/>
      <!-- robot hydraulic arm -->
      <path d="M590 298L599 253" stroke="#262a36" stroke-width="22" stroke-linecap="round"/>
      <path d="M590 298L599 253" stroke="url(#whiteMetal)" stroke-width="15" stroke-linecap="round"/>
      <circle cx="599" cy="253" r="12" fill="#353743" stroke="#f75a72" stroke-width="4"/>
      <path d="M599 253L650 229" stroke="#232734" stroke-width="21" stroke-linecap="round"/>
      <path d="M599 253L650 229" stroke="url(#whiteMetal)" stroke-width="14" stroke-linecap="round"/>
      <circle cx="650" cy="229" r="10" fill="#383a47" stroke="#fa576e" stroke-width="4"/>
      <path d="M650 229L658 277" stroke="#3f414c" stroke-width="13" stroke-linecap="round"/>
      <path d="M650 229L658 277" stroke="url(#whiteMetal)" stroke-width="8" stroke-linecap="round"/>
      <g id="packing-claw"><path d="M645 280L658 288L672 280M645 280L641 293M672 280L676 293" stroke="#ff6073" stroke-width="5" stroke-linecap="round" fill="none"/></g>
      <circle class="lamp" cx="609" cy="258" r="4"/>
      <text x="545" y="142" class="svg-label">03 · SMART STOCK</text>
      <text x="545" y="158" class="svg-small">AI 智慧庫存</text>
      <g id="mini-scan"><path d="M641 295L673 301" stroke="#ff3c55" stroke-width="3" filter="url(#neon)" opacity=".55"/></g>
    </g>

    <!-- customer delivery platform -->
    <g class="station" id="station-3">
      <ellipse class="halo" cx="724" cy="404" rx="91" ry="64" fill="#ff3252" filter="url(#glow)"/>
      <path d="M683 360L729 335L785 364L738 389Z" fill="#3c3945" stroke="#bb5667"/>
      <path d="M683 360L738 389L738 446L683 416Z" fill="#21212b"/>
      <path d="M738 389L785 364L785 419L738 446Z" fill="#111721"/>
      <!-- delivery door and smart display -->
      <path d="M738 391L776 370L776 411L738 433Z" fill="#24212c" stroke="#a74d60"/>
      <path d="M749 389L767 379L767 401L749 411Z" fill="url(#screen)" stroke="#ff6a7d"/>
      <path d="M752 391L755 394L763 385" stroke="#ff7c8d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <g id="success-bubble">
        <rect x="700" y="291" width="108" height="50" rx="13" fill="#351a27" stroke="#ff5670" stroke-width="1.7"/>
        <path d="M720 341L733 341L725 354Z" fill="#351a27" stroke="#ff5670"/>
        <circle cx="726" cy="316" r="14" fill="#ff4965"/>
        <path d="M718 319Q726 327 734 319" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
        <circle cx="721" cy="313" r="1.7" fill="#fff"/><circle cx="731" cy="313" r="1.7" fill="#fff"/>
        <text x="748" y="312" fill="#fff" font-size="10" font-weight="750">HAPPY</text>
        <text x="748" y="325" fill="#ffd6dc" font-size="9" font-weight="600">CUSTOMER</text>
      </g>
      <circle class="lamp" cx="753" cy="350" r="4"/>
      <text x="706" y="252" class="svg-label">04 · DELIVERED</text>
      <text x="706" y="268" class="svg-small">客戶滿意</text>
    </g>

    <!-- Conveyor: the solid rail, 3D depth and running belt -->
    <use href="#flowPath" stroke="#07080d" stroke-width="61" stroke-linecap="round" opacity=".65" transform="translate(3 16)"/>
    <use href="#flowPath" stroke="#401e2c" stroke-width="55" stroke-linecap="round" transform="translate(1 10)"/>
    <use href="#flowPath" stroke="#14151e" stroke-width="55" stroke-linecap="round"/>
    <use href="#flowPath" stroke="#65606d" stroke-width="46" stroke-linecap="round" opacity=".85"/>
    <use href="#flowPath" stroke="url(#steel)" stroke-width="37" stroke-linecap="round"/>
    <use href="#flowPath" id="conveyor-belt" stroke="#858390" stroke-width="20" stroke-dasharray="7 14" stroke-linecap="butt" opacity=".4"/>
    <use href="#flowPath" stroke="#fd4b69" stroke-width="2.2" stroke-linecap="round" filter="url(#neon)" opacity=".82" transform="translate(0 -19)"/>
    <use href="#flowPath" stroke="#ff8192" stroke-width="1.3" stroke-linecap="round" opacity=".75" transform="translate(0 19)"/>
    <!-- package transported by flowPath JS -->
    <g id="moving-package" transform="translate(185 386)">
      <ellipse cy="13" rx="27" ry="9" fill="#000" opacity=".55" filter="url(#softshadow)"/>
      <path d="M-23 -14L-1 -27L24 -15L1 -1Z" fill="url(#boxTop)" stroke="#ffc899" stroke-width="1.5"/>
      <path d="M-23 -14L1 -1L1 27L-23 14Z" fill="url(#boxLeft)" stroke="#d6a07e" stroke-width="1"/>
      <path d="M1 -1L24 -15L24 13L1 27Z" fill="url(#boxRight)" stroke="#ce8a68" stroke-width="1"/>
      <path d="M-11 -21L13 -9L13 19M-11 -21L-11 -8" fill="none" stroke="#f9d2af" stroke-width="4" opacity=".85"/>
      <path d="M-8 8L-2 12L9 4" fill="none" stroke="#fff0d7" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <!-- Cute ERP robot, above conveyor in visual hierarchy -->
    <g id="robot" transform="translate(457 215)">
      <ellipse cx="0" cy="136" rx="56" ry="13" fill="#000" opacity=".72" filter="url(#softshadow)"/>
      <ellipse cx="0" cy="135" rx="38" ry="5" fill="#f82f53" opacity=".27" filter="url(#glow)"/>
      <g id="bot-body">
        <!-- tiny hover jets -->
        <path d="M-22 105L-17 128L-10 109M10 109L17 128L22 105" fill="#fc5367" opacity=".48" filter="url(#neon)"/>
        <!-- arms -->
        <path d="M-42 53Q-73 54 -72 30" stroke="#e2e5eb" stroke-width="16" stroke-linecap="round" fill="none"/>
        <circle cx="-74" cy="29" r="12" fill="url(#whiteMetal)" stroke="#fc4b62" stroke-width="2"/>
        <g id="bot-arm-right"><path d="M40 54Q76 54 83 26" stroke="#e1e5ed" stroke-width="16" stroke-linecap="round" fill="none"/>
          <circle cx="84" cy="24" r="12" fill="url(#whiteMetal)" stroke="#fc4b62" stroke-width="2"/></g>
        <!-- body -->
        <rect x="-47" y="37" width="94" height="83" rx="34" fill="url(#whiteMetal)" stroke="#eff4f7" stroke-width="1.6"/>
        <path d="M-29 44Q0 56 29 44" stroke="#fff" stroke-width="3" opacity=".55" fill="none"/>
        <rect x="-29" y="72" width="58" height="31" rx="15" fill="#28303e" stroke="#9ba5b6"/>
        <g id="bot-orb"><circle cx="0" cy="88" r="11" fill="#f73b56" filter="url(#neon)"/><path d="M-6 88L-1 93L7 82" fill="none" stroke="#ffe7e9" stroke-width="2.4" stroke-linecap="round"/></g>
        <!-- head -->
        <g id="bot-head">
          <rect x="-59" y="-40" width="118" height="96" rx="38" fill="url(#whiteMetal)" stroke="#fff" stroke-width="2"/>
          <rect x="-50" y="-25" width="100" height="63" rx="26" fill="#171924" stroke="#70758a" stroke-width="1.4"/>
          <ellipse cx="-22" cy="2" rx="10" ry="12" fill="#fa385a" filter="url(#neon)" class="bot-eye"/>
          <ellipse cx="22" cy="2" rx="10" ry="12" fill="#fa385a" filter="url(#neon)" class="bot-eye"/>
          <path d="M-10 23Q0 30 10 23" fill="none" stroke="#ff7488" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="-41" cy="20" rx="7" ry="4" fill="#e94162" opacity=".45"/>
          <ellipse cx="41" cy="20" rx="7" ry="4" fill="#e94162" opacity=".45"/>
          <path d="M0 -40L0 -57" stroke="#c2cad7" stroke-width="6" stroke-linecap="round"/>
          <circle cx="0" cy="-63" r="9" fill="#ff4c6a" filter="url(#neon)"/>
          <path d="M-51 -10L-62 -10M51 -10L62 -10" stroke="#c8ceda" stroke-width="6" stroke-linecap="round"/>
        </g>
      </g>
      <!-- mini AI badge -->
      <g transform="translate(45,-72)"><rect x="0" y="0" width="42" height="22" rx="10" fill="#562134" stroke="#fa5670"/><text x="21" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#ffb3bf">AI ✓</text></g>
    </g>

    <!-- Decorative AR indicators -->
    <g id="sparkles" fill="none" stroke="#ff647c" stroke-width="2" stroke-linecap="round" filter="url(#neon)">
      <g transform="translate(255 148)"><path d="M-7 0H7M0 -7V7"/></g>
      <g transform="translate(512 123)"><path d="M-5 0H5M0 -5V5"/></g>
      <g transform="translate(640 167)"><path d="M-5 0H5M0 -5V5"/></g>
      <g transform="translate(810 298)"><path d="M-5 0H5M0 -5V5"/></g>
    </g>
    <g id="packet-dots" fill="#ff657d" filter="url(#neon)"><circle class="packet" r="3"/><circle class="packet" r="2.2"/><circle class="packet" r="2.2"/></g>
    <!-- Lower front-side equipment markings -->
    <text x="449" y="558" text-anchor="middle" font-size="10" fill="#ee5570" font-weight="800" letter-spacing="4" transform="rotate(27 449 558)">AI-POWERED OPERATIONS</text>
  </svg>
  <div class="stepbar">
    <div class="step active" data-step="0"><span class="num">STAGE 01</span><span class="zh">AI 接單</span><span class="en">AI ORDER</span></div>
    <div class="step" data-step="1"><span class="num">STAGE 02</span><span class="zh">自動化處理</span><span class="en">AUTOMATION</span></div>
    <div class="step" data-step="2"><span class="num">STAGE 03</span><span class="zh">智慧庫存</span><span class="en">SMART STOCK</span></div>
    <div class="step" data-step="3"><span class="num">STAGE 04</span><span class="zh">客戶滿意</span><span class="en">DELIVERED</span></div>
  </div>
</div>`;
    this._steps = [...this.shadowRoot.querySelectorAll('.step')];
    this._stations = [...this.shadowRoot.querySelectorAll('.station')];
    this._path = this.shadowRoot.querySelector('#flowPath');
    this._package = this.shadowRoot.querySelector('#moving-package');
    this._success = this.shadowRoot.querySelector('#success-bubble');
    this._packets = [...this.shadowRoot.querySelectorAll('.packet')];
    this._duration = 12000;
    this._pathLength = this._path.getTotalLength();
    this._reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this._reduced = this._reducedQuery.matches;
    this._reducedChange = (e)=>{this._reduced=e.matches;if(this._reduced){this._pause();this._draw(7500)}else{this._play()}};
    this._reducedQuery.addEventListener?.('change', this._reducedChange);
    this._observer = new IntersectionObserver((entries)=>{this._visible = entries[0]?.isIntersecting??true;if(this._visible && this._playing && !this._reduced)this._schedule();else cancelAnimationFrame(this._anim)}, {threshold: .02});
    this._observer.observe(this);
    this._visibilityChange = ()=>{if(document.hidden)cancelAnimationFrame(this._anim);else if(this._visible && this._playing && !this._reduced)this._schedule()};
    document.addEventListener('visibilitychange',this._visibilityChange);
    this._draw(this._reduced?7500:0);
    if(!this._reduced){this._start=performance.now();this._schedule()}
    else {this._playing=false}
  }
  disconnectedCallback(){cancelAnimationFrame(this._anim);this._observer?.disconnect();document.removeEventListener('visibilitychange',this._visibilityChange);this._reducedQuery?.removeEventListener?.('change',this._reducedChange)}
  _pause(){if(this._playing){this._elapsed=(performance.now()-this._start)%this._duration;this._playing=false;cancelAnimationFrame(this._anim)}}
  _play(){if(this._reduced)return;this._playing=true;this._start=performance.now()-(this._elapsed||0);this._schedule()}
  _schedule(){cancelAnimationFrame(this._anim);if(!this._playing||!this._visible||document.hidden||this._reduced)return;const tick=(now)=>{this._elapsed=(now-this._start)%this._duration;this._draw(this._elapsed);this._anim=requestAnimationFrame(tick)};this._anim=requestAnimationFrame(tick)}
  _draw(ms){
    const cycle=((ms%this._duration)+this._duration)%this._duration;
    const stage=Math.floor(cycle/3000);
    const local=(cycle%3000)/3000;
    if(stage!==this._lastStage){
      this._lastStage=stage;
      this._steps.forEach((e,i)=>e.classList.toggle('active',i===stage));
      this._stations.forEach((e,i)=>e.classList.toggle('active',i===stage));
      this._success.classList.toggle('show',stage===3);
    }
    // Ease between 4 workstations, leaving a brief stop at each one.
    const smooth=(x)=>x*x*(3-2*x);
    const segment=local<.12?0:local>.88?1:smooth((local-.12)/.76);
    const stations=[0.02,.31,.68,.985];
    const progress=stations[stage]+(stations[(stage+1)%4]-stations[stage])*segment;
    // The box moves back to the order-entry loading dock at the beginning of the next cycle.
    const travel=stage===3?(stations[stage]+(.995-stations[stage])*segment):progress;
    const p=this._path.getPointAtLength(Math.max(0,Math.min(1,travel))*this._pathLength);
    this._package.setAttribute('transform',`translate(${p.x.toFixed(2)} ${(p.y-23-(Math.sin(ms/140)*1.4)).toFixed(2)})`);
    this._package.style.opacity=stage===3 && local>.92?String(Math.max(0,1-(local-.92)/.08)): '1';
    this._packets.forEach((dot,i)=>{const u=(((ms/this._duration)*2.7+i/3)%1);const q=this._path.getPointAtLength(u*this._pathLength);dot.setAttribute('cx',q.x.toFixed(2));dot.setAttribute('cy',(q.y-20).toFixed(2));dot.setAttribute('opacity',String(.3+.65*(1-Math.abs(u-.5)*1.1)))});
  }
}
if(!customElements.get('ai-erp-factory'))customElements.define('ai-erp-factory',AIErpFactory);
