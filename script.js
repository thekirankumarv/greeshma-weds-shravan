(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const MAP_URL = 'https://maps.app.goo.gl/SPCPene5PYdfRgtG9';
  const MUHURTHAM = new Date('2026-11-25T09:50:00+05:30').getTime();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = (tag, attrs, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };

  /* ---------- toran: marigold garland with mango leaves ---------- */
  (() => {
    const svg = el('svg', { viewBox: '0 0 1000 120', preserveAspectRatio: 'none' }, document.getElementById('toran'));
    const defs = el('defs', {}, svg);
    const g1 = el('radialGradient', { id: 'mg1' }, defs);
    el('stop', { offset: '0', 'stop-color': '#ffd34d' }, g1);
    el('stop', { offset: '1', 'stop-color': '#f08a12' }, g1);
    const g2 = el('radialGradient', { id: 'mg2' }, defs);
    el('stop', { offset: '0', 'stop-color': '#fff1a8' }, g2);
    el('stop', { offset: '1', 'stop-color': '#f4c21b' }, g2);
    el('rect', { x: 0, y: 0, width: 1000, height: 8, fill: '#8a5a17' }, svg);
    const swags = 6, w = 1000 / swags;
    for (let s = 0; s < swags; s++) {
      const x0 = s * w;
      const leaf = el('path', {
        class: 'leaf', d: `M${x0} 6 q-9 26 0 58 q9 -32 0 -58z`, fill: '#3f7d3a', stroke: '#2b5a27', 'stroke-width': 1.2,
        style: `animation-delay:${-s * 0.5}s`
      }, svg);
      for (let i = 0; i <= 22; i++) {
        const t = i / 22, x = x0 + t * w, y = 8 + Math.sin(Math.PI * t) * 46;
        el('circle', { cx: x, cy: y, r: 7.5, fill: i % 2 ? 'url(#mg2)' : 'url(#mg1)', stroke: '#c46a0a', 'stroke-width': .6 }, svg);
      }
      const cx = x0 + w / 2;
      for (let j = 0; j < 4; j++) el('circle', { cx, cy: 62 + j * 13, r: 6.5, fill: j % 2 ? 'url(#mg2)' : 'url(#mg1)' }, svg);
      el('circle', { cx, cy: 62 + 4 * 13 - 4, r: 4, fill: '#b8152f' }, svg);
    }
    el('path', { class: 'leaf', d: 'M1000 6 q-9 26 0 58 q9 -32 0 -58z', fill: '#3f7d3a', stroke: '#2b5a27', 'stroke-width': 1.2 }, svg);
  })();

  /* ---------- rangoli mandalas ---------- */
  const mandala = (id, rings) => {
    const svg = document.getElementById(id);
    rings.forEach(([r, n, len, wid, sw]) => {
      el('circle', { cx: 0, cy: 0, r: r - len, fill: 'none', stroke: '#d6a441', 'stroke-width': .6, 'stroke-dasharray': '2 4' }, svg);
      for (let i = 0; i < n; i++) {
        const a = (360 / n) * i;
        el('ellipse', { cx: 0, cy: -r, rx: wid, ry: len, fill: 'none', stroke: '#d6a441', 'stroke-width': sw, transform: `rotate(${a})` }, svg);
        el('circle', { cx: 0, cy: -(r + len + 5), r: 1.6, fill: '#f6dc94', transform: `rotate(${a + 180 / n})` }, svg);
      }
    });
  };
  mandala('mandalaA', [[178, 36, 14, 5, .8], [140, 24, 18, 7, .9], [100, 16, 16, 8, 1]]);
  mandala('mandalaB', [[160, 20, 22, 9, 1], [110, 12, 18, 10, 1.2]]);

  /* ---------- coast: Kudroli gopura, coconut palms, Arabian sea ---------- */
  (() => {
    const svg = document.getElementById('coast');
    const dark = '#14040a', mid = '#1a050c';
    // gopura: stacked tiers narrowing upward
    const gx = 500, base = 200;
    let wTier = 210, y = base;
    for (let i = 0; i < 6; i++) {
      const h = i === 0 ? 46 : 20;
      el('path', { d: `M${gx - wTier / 2} ${y} L${gx - wTier / 2 + 6} ${y - h} L${gx + wTier / 2 - 6} ${y - h} L${gx + wTier / 2} ${y} Z`, fill: mid, stroke: '#5a3a14', 'stroke-width': 1 }, svg);
      y -= h; wTier -= 30;
    }
    el('path', { d: `M${gx - 50} ${y} q50 -30 100 0 Z`, fill: mid, stroke: '#5a3a14', 'stroke-width': 1 }, svg);
    for (let k = -1; k <= 1; k++) {
      el('path', { d: `M${gx + k * 26} ${y - 12} q-5 -8 0 -16 q5 8 0 16z`, fill: '#d6a441' }, svg);
    }
    el('rect', { x: gx - 16, y: base - 34, width: 32, height: 34, rx: 16, fill: '#3a1a08' }, svg);
    el('circle', { cx: gx, cy: base - 50, r: 4, fill: '#f39a1e', class: 'glow' }, svg);
    // palms
    const palm = (x, h, lean, s) => {
      const top = [x + lean, base - h];
      el('path', { d: `M${x} ${base + 10} Q${x + lean * 0.2} ${base - h * 0.5} ${top[0]} ${top[1]}`, fill: 'none', stroke: dark, 'stroke-width': 7 * s, 'stroke-linecap': 'round' }, svg);
      for (let i = 0; i < 9; i++) {
        const a = (-170 + i * 20) * Math.PI / 180, L = (70 + (i % 2) * 14) * s;
        const ex = top[0] + Math.cos(a) * L, ey = top[1] + Math.sin(a) * L * 0.55 + 34 * s;
        const cx2 = top[0] + Math.cos(a) * L * 0.5, cy2 = top[1] + Math.sin(a) * L * 0.6 - 10 * s;
        el('path', { d: `M${top[0]} ${top[1]} Q${cx2} ${cy2} ${ex} ${ey}`, fill: 'none', stroke: dark, 'stroke-width': 4 * s, 'stroke-linecap': 'round' }, svg);
      }
      el('circle', { cx: top[0] + 4, cy: top[1] + 8, r: 5 * s, fill: dark }, svg);
      el('circle', { cx: top[0] - 4, cy: top[1] + 10, r: 5 * s, fill: dark }, svg);
    };
    palm(90, 170, 30, 1.1); palm(200, 120, -18, .85); palm(790, 140, 22, .95); palm(910, 180, -30, 1.15);
    el('path', { class: 'wave', d: 'M-60 214 q40 -12 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 V260 H-60z', fill: '#3a0d16' }, svg);
    el('path', { class: 'wave b', d: 'M-60 232 q40 -10 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 V260 H-60z', fill: '#2a0a10' }, svg);
  })();

  /* ---------- calendar + QR ---------- */
  const cal = new URL('https://calendar.google.com/calendar/render');
  cal.search = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Wedding of Greeshma & Shravan',
    dates: '20261125T042000Z/20261125T073000Z',
    location: 'Jaya C. Suvarna Kalyana Mantapa, Sri Gokarnanatha Kshethra, Kudroli, Mangalore',
    details: 'Muhurtham: 9:50 a.m., Dhanu Lagnam\nDirections: ' + MAP_URL
  }).toString();
  document.getElementById('calLink').href = cal.toString();
  try {
    new QRCode(document.getElementById('qr'), { text: MAP_URL, width: 336, height: 336, colorDark: '#2a0a0f', colorLight: '#fbf5e6', correctLevel: QRCode.CorrectLevel.M });
  } catch (e) {
    document.querySelector('.qr-card').hidden = true;
  }

  /* ---------- countdown ---------- */
  const pad = n => String(n).padStart(2, '0');
  const tick = () => {
    const ms = MUHURTHAM - Date.now();
    if (ms <= 0) {
      document.getElementById('countdown').hidden = true;
      document.getElementById('cdDone').hidden = false;
      return false;
    }
    const s = Math.floor(ms / 1000);
    document.getElementById('cdD').textContent = Math.floor(s / 86400);
    document.getElementById('cdH').textContent = pad(Math.floor(s / 3600) % 24);
    document.getElementById('cdM').textContent = pad(Math.floor(s / 60) % 60);
    document.getElementById('cdS').textContent = pad(s % 60);
    return true;
  };
  if (tick()) { const t = setInterval(() => tick() || clearInterval(t), 1000); }

  /* ---------- petals: jasmine, marigold, rose ---------- */
  const cv = document.getElementById('petals'), ctx = cv.getContext('2d');
  const petals = [];
  const MAX = 220;
  let W = 0, H = 0, ambient = 0, running = !reduced;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  addEventListener('resize', resize); resize();
  const KINDS = ['jasmine', 'jasmine', 'marigold', 'marigold', 'rose'];
  const spawn = (x, y, burst) => {
    if (petals.length >= MAX) return;
    const a = Math.random() * Math.PI * 2, sp = burst ? 2 + Math.random() * 7 : 0;
    petals.push({
      x, y, vx: Math.cos(a) * sp, vy: burst ? Math.sin(a) * sp - 3 : 0.6 + Math.random() * 0.8,
      r: Math.random() * 6.28, vr: (Math.random() - .5) * .08, s: 5 + Math.random() * 6,
      ph: Math.random() * 6.28, k: KINDS[(Math.random() * KINDS.length) | 0], life: 0
    });
  };
  const draw = p => {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
    if (p.k === 'jasmine') {
      ctx.fillStyle = '#fffdf4';
      for (let i = 0; i < 5; i++) { ctx.rotate(1.2566); ctx.beginPath(); ctx.ellipse(0, -p.s * .55, p.s * .28, p.s * .55, 0, 0, 6.283); ctx.fill(); }
      ctx.fillStyle = '#f3d36b'; ctx.beginPath(); ctx.arc(0, 0, p.s * .16, 0, 6.283); ctx.fill();
    } else {
      ctx.fillStyle = p.k === 'rose' ? '#c0172f' : (p.s > 8 ? '#f7b52c' : '#f08a12');
      ctx.beginPath(); ctx.ellipse(0, 0, p.s * .5, p.s * .9, 0, 0, 6.283); ctx.fill();
      ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.beginPath(); ctx.ellipse(0, p.s * .2, p.s * .18, p.s * .5, 0, 0, 6.283); ctx.fill();
    }
    ctx.restore();
  };
  let last = 0;
  const loop = t => {
    if (!running) return;
    const dt = Math.min((t - last) / 16.7 || 1, 3); last = t;
    ctx.clearRect(0, 0, W, H);
    if (ambient && petals.length < ambient && Math.random() < .08 * dt) spawn(Math.random() * W, -12, false);
    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.life += dt; p.ph += .03 * dt;
      p.vx = p.vx * Math.pow(.97, dt) + Math.sin(p.ph) * .04;
      p.vy = Math.min(p.vy + .06 * dt, 1.6);
      p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt;
      if (p.y > H + 20 || p.x < -40 || p.x > W + 40) { petals.splice(i, 1); continue; }
      draw(p);
    }
    requestAnimationFrame(loop);
  };
  const startLoop = () => { if (!running) return; last = performance.now(); requestAnimationFrame(loop); };
  document.addEventListener('visibilitychange', () => {
    if (reduced) return;
    running = !document.hidden;
    if (running) startLoop();
  });
  const burst = (x, y, n) => { if (!reduced) for (let i = 0; i < n; i++) spawn(x, y, true); };
  document.querySelector('main').addEventListener('pointerdown', e => {
    if (!e.target.closest('a,button')) burst(e.clientX, e.clientY, 10);
  });

  /* ---------- sound: temple bells + tanpura drone (synthesised) ---------- */
  let ac, master, droneTimer;
  const bell = (when, f, vol) => {
    [[1, 1], [2.01, .5], [2.76, .35], [5.4, .18], [8.93, .08]].forEach(([m, a]) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = f * m; o.type = 'sine';
      g.gain.setValueAtTime(0, when);
      g.gain.linearRampToValueAtTime(vol * a, when + .005);
      g.gain.exponentialRampToValueAtTime(.0001, when + 4.5 / Math.sqrt(m));
      o.connect(g).connect(master); o.start(when); o.stop(when + 5);
    });
  };
  const pluck = (when, f) => {
    const o = ac.createOscillator(), lp = ac.createBiquadFilter(), g = ac.createGain();
    o.type = 'sawtooth'; o.frequency.value = f;
    lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 6;
    lp.frequency.setValueAtTime(1600, when); lp.frequency.exponentialRampToValueAtTime(500, when + 3);
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(.07, when + .03);
    g.gain.exponentialRampToValueAtTime(.0001, when + 3.6);
    o.connect(lp).connect(g).connect(master); o.start(when); o.stop(when + 3.8);
  };
  const SA = 138.59, NOTES = [SA * .75, SA, SA, SA / 2];
  const startDrone = () => {
    let i = 0, next = ac.currentTime + 1.2;
    droneTimer = setInterval(() => {
      while (next < ac.currentTime + .5) { pluck(next, NOTES[i++ % 4]); next += i % 4 === 0 ? 1.4 : .95; }
    }, 200);
  };
  const soundBtn = document.getElementById('sound');
  soundBtn.addEventListener('click', () => {
    if (!ac) return;
    const on = soundBtn.getAttribute('aria-pressed') !== 'true';
    soundBtn.setAttribute('aria-pressed', on);
    on ? ac.resume() : ac.suspend();
  });

  /* ---------- open the doors ---------- */
  const gate = document.getElementById('gate');
  document.getElementById('openBtn').addEventListener('click', () => {
    if (gate.classList.contains('open')) return;
    try {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      master = ac.createGain(); master.gain.value = .5; master.connect(ac.destination);
      ac.resume();
      const t = ac.currentTime + .05;
      bell(t, 880, .22); bell(t + .55, 1174.7, .16); bell(t + 1.1, 659.3, .2);
      startDrone();
      soundBtn.hidden = false;
    } catch (e) { /* audio is optional */ }
    gate.classList.add('open');
    if (!reduced) {
      startLoop();
      setTimeout(() => { burst(W / 2, H * .45, 110); }, 450);
      setTimeout(() => { ambient = 26; }, 1800);
    }
    setTimeout(() => {
      document.documentElement.classList.remove('locked');
      document.body.classList.add('opened');
      gate.classList.add('gone');
    }, reduced ? 50 : 1700);
    setTimeout(() => gate.remove(), reduced ? 300 : 2800);
  });
})();
