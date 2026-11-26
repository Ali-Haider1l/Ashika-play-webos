(function(){
"use strict";
const $=id=>document.getElementById(id),KEY="ashikaPlay.playlist.v1";
const state={page:"home",items:[],favorites:new Set(),query:""};
const labels={home:["START WATCHING","Explore Ashika Play"],live:["LIVE CHANNELS","Live TV"],movies:["ON DEMAND","Movies"],series:["EPISODIC ENTERTAINMENT","Series"],sports:["LIVE ACTION","Sports"],favorites:["YOUR COLLECTION","My List"]};
function toast(s){const t=$("toast");t.textContent=s;t.classList.remove("hidden");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.add("hidden"),2600)}
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function category(x){const s=(x.group+" "+x.name).toLowerCase();if(/sport|cricket|football|tennis/.test(s))return"sports";if(/movie|film|cinema/.test(s))return"movies";if(/series|drama|episode/.test(s))return"series";return"live"}
function parseM3U(text){const out=[];let meta=null;for(const raw of text.replace(/^\uFEFF/,"").split(/\r?\n/)){const line=raw.trim();if(!line)continue;if(line.startsWith("#EXTINF")){const p=line.indexOf(",");const a=p>=0?line.slice(0,p):line;const get=k=>{const m=a.match(new RegExp(k+'="([^"]*)"',"i"));return m?m[1]:""};meta={name:p>=0?line.slice(p+1).trim():"Unnamed channel",group:get("group-title")}}else if(!line.startsWith("#")&&/^https?:\/\//i.test(line)){out.push({name:meta?meta.name:"Channel "+(out.length+1),group:meta?meta.group:"",url:line});meta=null}}return out}
function render(){const items=state.items.filter(x=>{const c=category(x),p=state.page;const ok=p==="home"||p==="live"&&c==="live"||p===c||p==="favorites"&&state.favorites.has(x.url);return ok&&(!state.query||(x.name+" "+x.group).toLowerCase().includes(state.query.toLowerCase()))});$("kicker").textContent=labels[state.page][0];$("heading").textContent=labels[state.page][1];$("grid").innerHTML=items.map((x,i)=>'<button class="tile" data-i="'+i+'"><span>▶　'+esc(category(x).toUpperCase())+'</span><strong>'+esc(x.name)+'</strong><small>'+esc(x.group||"Streaming")+'</small></button>').join("");$("empty").classList.toggle("hidden",items.length>0);document.querySelectorAll(".nav").forEach(b=>b.classList.toggle("active",b.dataset.page===state.page));document.querySelectorAll(".tile").forEach(b=>b.addEventListener("click",()=>play(items[Number(b.dataset.i)])))}
function page(p){state.page=p;state.query="";$("search").value="";render()}
function play(x){$("nowPlaying").textContent=x.name;$("player").classList.remove("hidden");$("playError").classList.add("hidden");const v=$("video");v.pause();v.removeAttribute("src");v.load();v.src=x.url;const p=v.play();if(p&&p.catch)p.catch(()=>{$("playError").textContent="Playback failed. The stream may be offline, restricted, or unsupported by this TV."; $("playError").classList.remove("hidden")})}
function closePlayer(){const v=$("video");v.pause();v.removeAttribute("src");v.load();$("player").classList.add("hidden")}
async function loadPlaylist(){const url=$("playlist").value.trim();if(!/^https?:\/\//i.test(url)){$("status").textContent="Enter a valid HTTP or HTTPS playlist URL.";return}$("status").textContent="Loading playlist…";try{const r=await fetch(url,{cache:"no-store"});if(!r.ok)throw Error("HTTP "+r.status);const list=parseM3U(await r.text());if(!list.length)throw Error("No stream entries found");state.items=list;localStorage.setItem(KEY,JSON.stringify({url,items:list}));$("status").textContent="Imported "+list.length+" entries."; $("settingsModal").classList.add("hidden");page("live");toast("Playlist imported")}catch(e){$("status").textContent="Could not load playlist: "+e.message+". Check the URL and CORS permissions."}}
try{const saved=JSON.parse(localStorage.getItem(KEY)||"null");if(saved&&Array.isArray(saved.items)){$("playlist").value=saved.url||"";state.items=saved.items}}catch(e){}
document.querySelectorAll(".nav").forEach(b=>b.addEventListener("click",()=>page(b.dataset.page)));
$("settings").onclick=$("addHero").onclick=$("addEmpty").onclick=()=>$("settingsModal").classList.remove("hidden");
$("closeSettings").onclick=()=>$("settingsModal").classList.add("hidden");
$("load").onclick=loadPlaylist;
$("clear").onclick=()=>{localStorage.removeItem(KEY);state.items=[];state.favorites.clear();render();$("status").textContent="Saved playlist cleared."};
$("search").oninput=e=>{state.query=e.target.value;render()};
$("back").onclick=closePlayer;
document.addEventListener("keydown",e=>{if(e.key==="Escape"||e.key==="Backspace"){if(!$("player").classList.contains("hidden"))closePlayer();else $("settingsModal").classList.add("hidden")}});
render();
})();