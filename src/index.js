const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#10234a">
<title>JOINOVA — Connect. Share. Trade. Grow.</title>
<style>
:root{--navy:#10234a;--orange:#ff8c22;--bg:#f3f5f9;--muted:#667085}
*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:#17233b}
header{background:var(--navy);color:white;padding:14px 4%;display:flex;align-items:center;justify-content:space-between;gap:12px;position:sticky;top:0;z-index:5}
.logo{font-size:25px;font-weight:800;letter-spacing:1px;color:#ff9a36}.tag{font-size:12px;color:#e6eaf2}
nav{display:flex;gap:8px;flex-wrap:wrap}nav button,.primary{border:0;border-radius:9px;padding:10px 13px;cursor:pointer;font-weight:700}
nav button{background:#243b64;color:white}.primary{background:var(--orange);color:#17233b}
.wrap{max-width:1100px;margin:22px auto;padding:0 14px}.hero{background:linear-gradient(120deg,#10234a,#244c7c);color:white;border-radius:18px;padding:34px 25px;display:grid;grid-template-columns:1.4fr 1fr;gap:20px;align-items:center}
.hero h1{font-size:clamp(30px,5vw,48px);margin:0 0 12px}.hero p{line-height:1.6;color:#e3eaf5}.hero .badge{background:#ffffff18;border:1px solid #ffffff33;border-radius:14px;padding:18px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:18px 0}.card{background:white;border-radius:14px;padding:18px;box-shadow:0 3px 14px #14213b0c}.card h3{margin:5px 0 8px}.muted{color:var(--muted);font-size:14px;line-height:1.5}
.section{display:grid;grid-template-columns:1fr 300px;gap:16px;margin-top:18px}.composer textarea{width:100%;min-height:85px;border:1px solid #d8deea;border-radius:10px;padding:12px;font:inherit;resize:vertical}.post{margin-top:12px}.posthead{font-weight:700}.post p{line-height:1.5;white-space:pre-wrap}.actions{display:flex;gap:8px;flex-wrap:wrap}.actions button{background:#eef2f8;border:0;padding:8px 11px;border-radius:8px;cursor:pointer}
input{padding:11px;border:1px solid #d8deea;border-radius:9px;width:100%;margin:5px 0 10px}footer{text-align:center;padding:25px;color:var(--muted);font-size:13px}
.notice{background:#fff7e8;border:1px solid #ffd99b;padding:12px;border-radius:10px;color:#67410c;font-size:13px;line-height:1.5}
.hidden{display:none}.product{border:1px solid #edf0f5;border-radius:10px;padding:12px;margin-top:10px}
@media(max-width:760px){.hero,.section{grid-template-columns:1fr}.grid{grid-template-columns:1fr 1fr}header{align-items:flex-start;flex-direction:column}.wrap{margin-top:14px}}
@media(max-width:440px){.grid{grid-template-columns:1fr}nav button{font-size:12px;padding:9px}}
</style>
</head>
<body>
<header>
 <div><div class="logo">JOINOVA</div><div class="tag">Connect. Share. Trade. Grow.</div></div>
 <nav>
  <button onclick="show('home')">Home</button><button onclick="show('community')">Community</button>
  <button onclick="show('market')">Marketplace</button><button onclick="show('business')">Business</button>
 </nav>
</header>
<main class="wrap">
<section id="home">
 <div class="hero">
  <div><h1>One place to connect, create and grow.</h1>
   <p>Join a growing community. Share ideas, discover products and help your business reach more people.</p>
   <button class="primary" onclick="show('community')">Explore community</button>
  </div>
  <div class="badge"><h2>Welcome to JOINOVA</h2><p>Social community · Marketplace · Business directory</p><strong>Built for people with ideas.</strong></div>
 </div>
 <div class="grid">
  <div class="card"><h3>🌍 Community</h3><p class="muted">Share updates and connect with others.</p></div>
  <div class="card"><h3>🛍️ Marketplace</h3><p class="muted">Discover products and services from sellers.</p></div>
  <div class="card"><h3>🏢 Business</h3><p class="muted">Give your business a place to be discovered.</p></div>
 </div>
 <div class="notice"><b>Early preview:</b> This is the first front-end version. Posts created here are only saved in this browser. Accounts, cloud uploads, messaging, payments and creator payouts are not connected yet.</div>
</section>
<section id="community" class="hidden">
 <h2>Community feed</h2>
 <div class="card composer"><h3>Create a post</h3><textarea id="postText" placeholder="What would you like to share?"></textarea><p><button class="primary" onclick="addPost()">Publish post</button></p></div>
 <div id="feed"></div>
</section>
<section id="market" class="hidden">
 <h2>Marketplace</h2><p class="muted">Explore products and services. Demo listings only.</p>
 <div class="grid">
  <div class="card"><h3>📱 Phones & accessories</h3><p class="muted">Discover devices, cases and accessories.</p></div>
  <div class="card"><h3>👗 Fashion</h3><p class="muted">Clothing, shoes and personal style.</p></div>
  <div class="card"><h3>🧰 Services</h3><p class="muted">Find local skills and business services.</p></div>
 </div>
 <div class="notice">Seller listings, checkout, delivery and payments will need a secure backend before real transactions.</div>
</section>
<section id="business" class="hidden">
 <h2>Business centre</h2><div class="grid">
  <div class="card"><h3>Promote your business</h3><p class="muted">Create a business profile and reach customers.</p></div>
  <div class="card"><h3>Advertise</h3><p class="muted">Sponsored placements can be added after moderation and billing are implemented.</p></div>
  <div class="card"><h3>Grow your audience</h3><p class="muted">Build trust with useful updates and customer service.</p></div>
 </div>
</section>
<section class="section">
 <div class="card"><h3>Join the JOINOVA community</h3><p class="muted">Account registration will be added with secure authentication in the next development stage.</p><label for="email">Get product updates</label><input id="email" type="email" placeholder="Your email address"><button class="primary" onclick="subscribe()">Join updates</button><p id="subMsg" class="muted" aria-live="polite"></p></div>
 <aside class="card"><h3>Platform roadmap</h3><p class="muted">✓ First responsive website interface<br>○ Secure user accounts<br>○ Database-backed social feed<br>○ Photo/video storage<br>○ Marketplace listings<br>○ Messaging and notifications<br>○ Monetization and payouts</p></aside>
</section>
</main>
<footer>© <span id="year"></span> JOINOVA. Connect. Share. Trade. Grow.</footer>
<script>
function show(id){['home','community','market','business'].forEach(x=>document.getElementById(x).classList.toggle('hidden',x!==id));window.scrollTo({top:0,behavior:'smooth'})}
function addPost(){const box=document.getElementById('postText');const value=box.value.trim();if(!value)return;const posts=JSON.parse(localStorage.getItem('joinova_demo_posts')||'[]');posts.unshift({text:value,date:new Date().toLocaleString()});localStorage.setItem('joinova_demo_posts',JSON.stringify(posts));box.value='';renderPosts()}
function renderPosts(){const posts=JSON.parse(localStorage.getItem('joinova_demo_posts')||'[]');document.getElementById('feed').innerHTML=posts.map(p=>'<article class="card post"><div class="posthead">JOINOVA member <span class="muted">· '+escapeHtml(p.date)+'</span></div><p>'+escapeHtml(p.text)+'</p><div class="actions"><button onclick="alert(\\'Likes will be enabled with user accounts.\\')">♡ Like</button><button onclick="alert(\\'Comments will be enabled with the backend.\\')">Comment</button><button onclick="alert(\\'Sharing will be added in a later version.\\')">Share</button></div></article>').join('')}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function subscribe(){const e=document.getElementById('email').value.trim();document.getElementById('subMsg').textContent=e.includes('@')?'Thanks! This preview does not yet store email addresses.':'Please enter a valid email address.'}
document.getElementById('year').textContent=new Date().getFullYear();renderPosts();
</script>
</body></html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ ok: true, app: "JOINOVA" });
    }
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "x-content-type-options": "nosniff"
      }
    });
  }
};
