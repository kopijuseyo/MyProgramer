(function(){
  // Easter Egg
  console.log(
    "%cCURRENT BREW: %c LemonWintermelon & FlatWhite\n" +
    "%cON REPEAT: %c'Rex Incognito' (Genshin Impact OST)\n" +
    "%cLE MANS HYPERCAR: %cFerrari 499P & Toyota GR010 Hybrid\n" +
    "%cGT3 PADDOCK: %cPorsche 911 GT3 R & Lexus RC F GT3",
    "color: #7f5ae0; font-weight: bold; font-size: 12px;",
    "color: #23304a; font-size: 12px;",
    "color: #7f5ae0; font-weight: bold; font-size: 12px;",
    "color: #23304a; font-size: 12px;",
    "color: #7f5ae0; font-weight: bold; font-size: 12px;",
    "color: #23304a; font-size: 12px;",
    "color: #7f5ae0; font-weight: bold; font-size: 12px;",
    "color: #23304a; font-size: 12px;"
  );

  var root=document.documentElement;

  var mode=document.getElementById('mode');
  function label(){mode.setAttribute('aria-label',root.dataset.theme==='dark'?'Switch to light mode':'Switch to dark mode')}
  mode.addEventListener('click',function(){
    var n=root.dataset.theme==='dark'?'light':'dark';
    root.dataset.theme=n;
    try{localStorage.setItem('theme',n)}catch(e){}
    label();
  });
  label();

  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.2}):null;
  document.querySelectorAll('h1,h2').forEach(function(h){
    var t=h.textContent.trim();
    h.innerHTML='<span class="sr">'+t+'</span>'+t.split(/\s+/).map(function(w,i){
      return '<span class="w" aria-hidden="true"><span style="--i:'+i+'">'+w+'</span></span>';
    }).join(' ');
    io?io.observe(h):h.classList.add('in');
  });

  var f=document.getElementById('f');
  if(f)f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f);
    var body=encodeURIComponent(d.get('msg')+'\n\n– '+d.get('name')+' ('+d.get('email')+')');
    document.getElementById('ok').classList.add('show');
    location.href='mailto:jamessicat@gmail.com?subject='+encodeURIComponent('New project from '+d.get('name'))+'&body='+body;
  });
})();

(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;

  var mode=document.getElementById('mode');
  mode.addEventListener('click',function(){
    if(reduce)return;
    mode.classList.remove('spin');void mode.offsetWidth;mode.classList.add('spin');
  });

  var nav=document.querySelector('header nav');
  if(nav){
    var links=[].slice.call(nav.querySelectorAll('a'));
    var cur=nav.querySelector('[aria-current="page"]');
    var pill=document.createElement('span');pill.className='pill snap';pill.setAttribute('aria-hidden','true');
    nav.appendChild(pill);nav.classList.add('has-pill');
    var move=function(a){
      if(!a){pill.classList.remove('on');return}
      pill.style.width=a.offsetWidth+'px';
      pill.style.transform='translateX('+a.offsetLeft+'px)';
      pill.classList.add('on');
    };
    var rest=function(){move(cur)};
    rest();requestAnimationFrame(function(){pill.classList.remove('snap')});
    links.forEach(function(a){
      a.addEventListener('pointerenter',function(){move(a)});
      a.addEventListener('focus',function(){move(a)});
    });
    nav.addEventListener('pointerleave',rest);
    nav.addEventListener('focusout',function(e){if(!nav.contains(e.relatedTarget))rest()});
    addEventListener('resize',function(){pill.classList.add('snap');rest();requestAnimationFrame(function(){pill.classList.remove('snap')})});
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){pill.classList.add('snap');rest();requestAnimationFrame(function(){pill.classList.remove('snap')})});
  }

  var hdr=document.querySelector('header');
  if(hdr&&!reduce){
    var bar=document.createElement('div');bar.className='progress';bar.setAttribute('aria-hidden','true');hdr.appendChild(bar);
    var tick=false;
    var upd=function(){
      var h=document.documentElement.scrollHeight-innerHeight;
      bar.style.setProperty('--p',h>0?Math.min(1,scrollY/h):0);tick=false;
    };
    addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
    upd();
  }

  if(fine&&!reduce){
    document.querySelectorAll('.btn').forEach(function(b){
      b.addEventListener('pointermove',function(e){
        var r=b.getBoundingClientRect();
        b.style.setProperty('--mx',((e.clientX-r.left-r.width/2)*.12).toFixed(1)+'px');
        b.style.setProperty('--my',((e.clientY-r.top-r.height/2)*.2).toFixed(1)+'px');
      });
      b.addEventListener('pointerleave',function(){b.style.removeProperty('--mx');b.style.removeProperty('--my')});
    });
  }

  var mail=document.querySelector('.mail');
  if(mail&&navigator.clipboard){
    var row=document.createElement('div');row.className='copy-row';
    mail.parentNode.insertBefore(row,mail);row.appendChild(mail);
    var c=document.createElement('button');c.type='button';c.className='copy';c.textContent='Copy address';
    var live=document.createElement('span');live.className='sr';live.setAttribute('role','status');
    row.appendChild(c);row.appendChild(live);
    c.addEventListener('click',function(){
      navigator.clipboard.writeText('jamessicat@gmail.com').then(function(){
        c.textContent='Copied';c.classList.add('done');live.textContent='Email address copied';
        setTimeout(function(){c.textContent='Copy address';c.classList.remove('done');live.textContent=''},2000);
      }).catch(function(){c.textContent='Copy failed'});
    });
  }
  var f=document.getElementById('f');
  if(f){
    var s=f.querySelector('[type="submit"]');
    f.addEventListener('submit',function(){
      s.setAttribute('aria-busy','true');s.textContent='Opening your email app…';
      setTimeout(function(){s.removeAttribute('aria-busy');s.textContent='Send message'},3000);
    });
  }
})();

(function(){
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  if(!document.querySelector('.proj'))return;

  const cur = document.createElement('div');
  cur.className = 'cur';
  cur.textContent = 'View';
  cur.setAttribute('aria-hidden', 'true');
  document.body.append(cur);
  document.body.classList.add('has-cur');

  let tx = 0, ty = 0, x = 0, y = 0, raf = 0, last = null;
  const tick = () => {
    x += (tx - x) * .18;
    y += (ty - y) * .18;
    cur.style.setProperty('--x', x + 'px');
    cur.style.setProperty('--y', y + 'px');
    raf = Math.abs(tx - x) + Math.abs(ty - y) > .3 ? requestAnimationFrame(tick) : 0;
  };

  const tilt = (a, mx, my) => {
    a.style.setProperty('--mx', mx);
    a.style.setProperty('--my', my);
  };

  document.addEventListener('pointermove', e => {
    tx = e.clientX;
    ty = e.clientY;
    if (!cur.classList.contains('on')) { x = tx; y = ty; }
    if (!raf) raf = requestAnimationFrame(tick);

    const pr = e.target.closest('.proj');
    if (pr !== last) {
      if (last) tilt(last.querySelector('.art'), 0, 0);
      if (pr) {
        const cs = getComputedStyle(pr);
        cur.style.setProperty('--cc', cs.getPropertyValue('--cc'));
        cur.style.setProperty('--cx', cs.getPropertyValue('--cx'));
      }
      last = pr;
    }

    cur.classList.toggle('on', !!pr);

    if (pr) {
      const a = pr.querySelector('.art'), r = a.getBoundingClientRect();
      tilt(a, Math.max(-1, Math.min(1, (e.clientX - r.left) / r.width * 2 - 1)), Math.max(-1, Math.min(1, (e.clientY - r.top) / r.height * 2 - 1)));
    }
  });

  document.documentElement.addEventListener('pointerleave', () => cur.classList.remove('on'));
})();