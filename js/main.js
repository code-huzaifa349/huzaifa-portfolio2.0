const $=s=>document.querySelector(s),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#y').textContent=new Date().getFullYear();
// marquee
const T=['HTML','CSS','JavaScript','Tailwind','Firebase','Git','Kali Linux','Termux','Gobuster','ExifTool','TryHackMe'];
$('#mq').innerHTML=[...T,...T].map(t=>`<span>${t}</span>`).join('');
// scramble headline
const H=$('#h'),txt=H.textContent,ch='!<>-_\\/[]{}=+*^?#01';
if(rm)H.textContent=txt;else{let f=0;const id=setInterval(()=>{H.textContent=txt.split('').map((c,i)=>c===' '?' ':i<f/2?c:ch[Math.random()*ch.length|0]).join('');if(++f>txt.length*2+2){clearInterval(id);H.textContent=txt}},32)}
// glow + progress
addEventListener('mousemove',e=>{$('#glow').style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
addEventListener('scroll',()=>{$('#bar').style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%'});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);setTimeout(()=>{e.target.style.transitionDelay=''},1400)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
// spotlight + tilt
document.querySelectorAll('.card').forEach(c=>{
 c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--x',x+'px');c.style.setProperty('--y',y+'px');if(!rm&&!c.classList.contains('ct-card'))c.style.transform=`perspective(800px) rotateX(${(y/r.height-.5)*-9}deg) rotateY(${(x/r.width-.5)*9}deg) translateY(-6px)`});
 c.addEventListener('mouseleave',()=>c.style.transform='')});
// magnetic buttons
document.querySelectorAll('.mag').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();if(!rm)b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
// live card previews
const rnd=()=>Array.from({length:14},()=>'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%'[Math.random()*60|0]).join('');
$('#pw').closest('.card').addEventListener('mouseenter',()=>{let n=0;const i=setInterval(()=>{$('#pw').textContent=rnd();if(++n>12)clearInterval(i)},50)});
setInterval(()=>$('#clk').textContent=new Date().toLocaleTimeString('en-GB'),1000);$('#clk').textContent=new Date().toLocaleTimeString('en-GB');
const sc=['22 closed','80 open','443 open','3000 open'];let si=0;setInterval(()=>$('#sc').textContent='port '+sc[si++%4],1200);
// copy email
const cp=()=>{navigator.clipboard&&navigator.clipboard.writeText('codehuzaifa349@gmail.com');$('#toast').classList.add('s');setTimeout(()=>$('#toast').classList.remove('s'),1800)};
$('#mail').onclick=cp;$('#mail').onkeydown=e=>e.key==='Enter'&&cp();
// particle network
const cv=$('#bg'),g=cv.getContext('2d');let W,Hh,P=[],M={x:-999,y:-999};
function rs(){W=cv.width=innerWidth;Hh=cv.height=innerHeight;P=Array.from({length:Math.min(80,W/16|0)},()=>({x:Math.random()*W,y:Math.random()*Hh,vx:Math.random()-.5,vy:Math.random()-.5}))}
rs();addEventListener('resize',rs);addEventListener('mousemove',e=>{M.x=e.clientX;M.y=e.clientY});
(function d(){g.clearRect(0,0,W,Hh);P.forEach((p,i)=>{p.x+=p.vx*.5;p.y+=p.vy*.5;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>Hh)p.vy*=-1;g.fillStyle='rgba(124,92,255,.7)';g.fillRect(p.x,p.y,2,2);
 for(let j=i+1;j<P.length;j++){const q=P[j],D=Math.hypot(p.x-q.x,p.y-q.y);if(D<120){g.strokeStyle=`rgba(124,92,255,${.16*(1-D/120)})`;g.beginPath();g.moveTo(p.x,p.y);g.lineTo(q.x,q.y);g.stroke()}}
 const m=Math.hypot(p.x-M.x,p.y-M.y);if(m<170){g.strokeStyle=`rgba(56,225,255,${.5*(1-m/170)})`;g.beginPath();g.moveTo(p.x,p.y);g.lineTo(M.x,M.y);g.stroke()}});
 if(!rm)requestAnimationFrame(d)})();
// ring cursor
const rg=$('#ring');addEventListener('mousemove',e=>{rg.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
document.querySelectorAll('a,button,.card,.lv,input').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('h'));el.addEventListener('mouseleave',()=>document.body.classList.remove('h'))});
// CTF
const FL=['flag{view_source_master}','flag{base64_is_not_encryption}','flag{console_explorer}'],dn=new Set();
console.log('%cLevel 3 flag: flag{console_explorer}','color:#ffb020;font:700 15px monospace');
document.querySelectorAll('.lv').forEach((lv,i)=>lv.querySelector('form').onsubmit=e=>{e.preventDefault();const st=lv.querySelector('.st');
 if(lv.querySelector('input').value.trim()===FL[i]){lv.classList.add('ok');st.textContent='Solved. Nice work.';dn.add(i);$('#pg').textContent=dn.size+'/3';
  if(dn.size===3){$('#win').style.display='block';$('#win').scrollIntoView({behavior:'smooth',block:'center'});for(let k=0;k<70;k++){const c=document.createElement('i');c.className='cf';c.style.cssText=`left:${Math.random()*100}vw;background:${['#7c5cff','#38e1ff','#ffb020','#3ddc84'][k%4]};animation-delay:${Math.random()*.8}s`;document.body.appendChild(c);setTimeout(()=>c.remove(),3600)}}}
 else st.textContent='Wrong flag. Try again.'});
// certificates: counts and filter
const segs=document.querySelectorAll('.ct-seg');
$('.ct-seg[data-filter="all"] b').textContent=document.querySelectorAll('.ct-card').length;
$('.ct-seg[data-filter="verify"] b').textContent=document.querySelectorAll('.ct-card[data-verify]').length;
segs.forEach(s=>s.addEventListener('click',()=>{
 segs.forEach(x=>x.setAttribute('aria-pressed',x===s));
 const only=s.dataset.filter==='verify';
 document.querySelectorAll('.ct-card').forEach(c=>{c.hidden=only&&!c.dataset.verify});
 document.querySelectorAll('.ct-stack').forEach(k=>{k.hidden=!k.querySelector('.ct-card:not([hidden])')});
 document.querySelectorAll('.ct-year').forEach(y=>{y.hidden=!y.querySelector('.ct-card:not([hidden])')});
}));
// certificates: lightbox (buttons and arrow keys move between certificates)
const lb=$('#lb'),lbi=$('#lbi'),lbt=$('#lbt'),lbm=$('#lbm'),lbv=$('#lbv');let lf,items=[],at=0;
const thumbs=()=>[...document.querySelectorAll('.ct-card:not([hidden]) .ct-thumb[data-src]')];
function showLb(i){items=thumbs();at=(i+items.length)%items.length;const d=items[at].dataset;
 lbi.src=d.src;lbi.alt=d.alt;lbt.textContent=d.title;lbm.textContent=d.issuer+', '+d.date+' ('+(at+1)+' of '+items.length+')';
 lbv.hidden=!d.url;if(d.url)lbv.href=d.url}
function openLb(card){lf=document.activeElement;showLb(thumbs().indexOf(card.querySelector('.ct-thumb')));lb.classList.add('o');$('#lbx').focus()}
function closeLb(){lb.classList.remove('o');lf&&lf.focus()}
document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>openLb(b.closest('.ct-card'))));
lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});
$('#lbx').onclick=closeLb;$('#lbp').onclick=()=>showLb(at-1);$('#lbn').onclick=()=>showLb(at+1);
addEventListener('keydown',e=>{if(!lb.classList.contains('o'))return;
 if(e.key==='Escape')closeLb();
 else if(e.key==='ArrowLeft')showLb(at-1);
 else if(e.key==='ArrowRight')showLb(at+1);
 else if(e.key==='Tab'){const f=[...lb.querySelectorAll('button,a[href]')].filter(x=>!x.hidden),i=f.indexOf(document.activeElement);
  if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}});
// terminal
const out=$('#out'),cmd=$('#cmd'),A=t=>`<span class="c">${t}</span>`,E=s=>s.replace(/</g,'&lt;');
const C={help:()=>`Commands: ${['about','skills','certs','projects','contact','scan','clear'].map(A).join(' ')}`,
about:()=>`<b>Muhammad Huzaifa Khan</b>\nStudent, Hyderabad, Pakistan.\nGoal: Full-Stack Developer + Ethical Hacker.`,
skills:()=>`<b>Build</b>  HTML, CSS, JS, Tailwind, Firebase, Git\n<b>Secure</b> Kali, Termux, Gobuster, ExifTool`,
certs:()=>`10 certificates (Nov 2023 to Oct 2026):\nOPSWAT Critical Infrastructure Protection, TestDome HTML/CSS (top 25%), Simplilearn Ethical Hacking 101, WsCube Ethical Hacking masterclass, UrduCourses CyberSavvy, TryHackMe x2, Google, Cisco, (ISC)²`,
projects:()=>`AI Fitness Coach, Cyber Tools Collection, Password Generator, Digital Clock`,
contact:()=>`<a href="mailto:codehuzaifa349@gmail.com">codehuzaifa349@gmail.com</a>\n<a href="https://wa.me/923043697071" target="_blank" rel="noopener">WhatsApp</a>`,
scan:()=>{['22/tcp closed','80/tcp '+A('open'),'443/tcp '+A('open'),'Result: 0 vulnerabilities. Hire him anyway.'].forEach((l,i)=>setTimeout(()=>{out.insertAdjacentHTML('beforeend',l+'\n');out.scrollTop=1e5},400*(i+1)));return'Scanning huzaifa.dev ...'},
clear:()=>{out.innerHTML='';return''}};
function run(r){const c=r.trim().toLowerCase();if(!c)return;out.insertAdjacentHTML('beforeend',`\n${A('$')} ${E(c)}\n`);let o;
 if(c==='sudo hire huzaifa'){o='Permission granted. Opening contact...';setTimeout(()=>$('#contact').scrollIntoView(),700)}
 else if(c.startsWith('sudo'))o='Nice try. Hint: sudo hire huzaifa';
 else if(C[c])o=C[c]();else o=`command not found: ${E(c)}. Type ${A('help')}.`;
 if(o)out.insertAdjacentHTML('beforeend',o+'\n');out.scrollTop=1e5}
$('#f').onsubmit=e=>{e.preventDefault();run(cmd.value);cmd.value=''};
['about','skills','certs','scan','contact'].forEach(n=>{const b=document.createElement('button');b.type='button';b.textContent=n;b.onclick=()=>run(n);$('#chips').appendChild(b)});
out.innerHTML='<span style="color:#8391b3">Live terminal. Type a command or tap a button.</span>\n';run('help');
