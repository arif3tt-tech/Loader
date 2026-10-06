(()=>{document.body.innerHTML=`
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;height:100%;overflow:hidden}
body{font-family:system-ui,-apple-system,"Noto Sans Bengali",sans-serif;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 10% 12%,rgba(0,229,255,.55),transparent 30%),radial-gradient(circle at 90% 18%,rgba(255,91,210,.42),transparent 30%),radial-gradient(circle at 82% 90%,rgba(115,84,255,.52),transparent 34%),linear-gradient(135deg,#dffcff 0%,#fff 45%,#eee9ff 100%)}
.bg{position:fixed;inset:-20%;background:radial-gradient(circle at 25% 35%,rgba(37,211,255,.20),transparent 22%),radial-gradient(circle at 70% 65%,rgba(139,92,246,.18),transparent 25%);filter:blur(35px);animation:float 8s ease-in-out infinite alternate}
.card{position:relative;width:min(88%,520px);padding:55px 28px;text-align:center;border-radius:36px;background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.82);box-shadow:0 30px 80px rgba(72,91,180,.18),inset 0 1px 0 #fff;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
.logo{width:82px;height:82px;margin:0 auto 25px;display:block;filter:drop-shadow(0 12px 22px rgba(55,110,245,.28));animation:logoFloat 4s ease-in-out infinite}
.badge{display:inline-block;padding:9px 18px;border-radius:999px;background:linear-gradient(90deg,#18cfe8,#6b6ff5,#a15cf4);color:#fff;font-size:11px;font-weight:800;letter-spacing:3px;box-shadow:0 8px 25px rgba(91,104,238,.25);margin-bottom:28px}
h1{font-size:clamp(34px,9vw,60px);line-height:1.1;font-weight:900;letter-spacing:1px;background:linear-gradient(90deg,#00aeca,#397cf5,#8d4ff0,#e04bc1);-webkit-background-clip:text;background-clip:text;color:transparent}
.credit{margin-top:20px;color:#61718a;font-size:15px;font-weight:700;letter-spacing:1px}
.credit a{text-decoration:none;margin-left:4px;font-weight:900;background:linear-gradient(90deg,#00cfff,#397cff,#8d4ff0,#f04fc4,#00d9c6);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:0 0 5px rgba(0,210,255,.45),0 0 12px rgba(100,80,255,.45),0 0 22px rgba(235,70,200,.35);animation:multiGlow 3s ease-in-out infinite,gradientMove 4s linear infinite}
@keyframes logoFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes multiGlow{0%,100%{filter:drop-shadow(0 0 4px rgba(0,210,255,.55)) drop-shadow(0 0 10px rgba(90,90,255,.35))}50%{filter:drop-shadow(0 0 7px rgba(0,210,255,.9)) drop-shadow(0 0 16px rgba(150,70,255,.75)) drop-shadow(0 0 25px rgba(255,70,190,.55))}}
@keyframes gradientMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes float{to{transform:translate3d(2%,-2%,0) scale(1.04)}}
</style>
<div class="bg"></div>
<main class="card">
<svg class="logo" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="shortnerLogo" x1="20" y1="10" x2="80" y2="110" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#17d9eb"/><stop offset="52%" stop-color="#537bf6"/><stop offset="100%" stop-color="#8a5cf3"/></linearGradient></defs>
<path d="M50 5C50 5 14 45 14 69C14 94 30 111 50 111C70 111 86 94 86 69C86 45 50 5 50 5Z" fill="url(#shortnerLogo)"/>
<path d="M32 67C35 48 48 30 57 21" fill="none" stroke="rgba(255,255,255,.75)" stroke-width="5" stroke-linecap="round"/>
</svg>
<div class="badge">FALLBACK</div>
<h1>Gua mara sara, baba .</h1>
<div class="credit">ক্রেডিট টা অন্ততঃ দিও <a href="https://t.me/ftgaming2" target="_blank" rel="noopener noreferrer">(Arafat)</a></div>
</main>`})()
