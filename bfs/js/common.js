// ===== Shared handlers =====
function k1(){window.open('https://www.qq.com');}
function k2(){window.open('https://google.com');}

// ===== Nav: hide on scroll down, show on scroll up =====
(function(){
var l=0,n=document.getElementById('navWrap');
if(!n)return;
window.addEventListener('scroll',function(){
  var s=window.scrollY;
  if(s>l&&s>200)n.classList.add('hide');
  else n.classList.remove('hide');
  l=s;
},{passive:true});
})();

// ===== Scroll reveal =====
(function(){
var o=new IntersectionObserver(function(e){
  e.forEach(function(x){
    if(x.isIntersecting){x.target.classList.add('on');o.unobserve(x.target);}
  });
},{threshold:0.1,rootMargin:'0px 0px -24px 0px'});
document.querySelectorAll('.reveal').forEach(function(el){o.observe(el)});
})();
