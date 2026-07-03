// ── DATA ──
  const menuItems = [
    { id:1, name:"Truffle Mushroom Crostini", cat:"starters", emoji:"🍄", desc:"Wild mushrooms, aged parmesan, white truffle oil on toasted sourdough.", price:"₹ 850", chef:true },
    { id:2, name:"Saffron Lobster Bisque", cat:"starters", emoji:"🦞", desc:"Velvety bisque of Atlantic lobster, saffron cream and cognac.", price:"₹ 1,100", chef:false },
    { id:3, name:"Burrata & Heirloom Tomato", cat:"starters", emoji:"🍅", desc:"Creamy burrata, heirloom tomatoes, basil oil, sea salt flakes.", price:"₹ 780", chef:false },
    { id:4, name:"Pan-Seared Duck Breast", cat:"mains", emoji:"🦆", desc:"Orange jus, pomme purée, roasted baby carrots, thyme crumble.", price:"₹ 2,400", chef:true },
    { id:5, name:"Black Truffle Risotto", cat:"mains", emoji:"🍚", desc:"Carnaroli rice, 24-month Parmigiano, shaved black truffle, chives.", price:"₹ 1,900", chef:false },
    { id:6, name:"Himalayan Lamb Rack", cat:"mains", emoji:"🥩", desc:"Herb-crusted, mint jelly, roasted garlic dauphinoise, chimichurri.", price:"₹ 3,200", chef:true },
    { id:7, name:"Miso-Glazed Sea Bass", cat:"mains", emoji:"🐟", desc:"White miso glaze, jasmine rice, pickled cucumber, sesame dashi.", price:"₹ 2,600", chef:false },
    { id:8, name:"Warm Chocolate Fondant", cat:"desserts", emoji:"🍫", desc:"70% Valrhona dark chocolate, vanilla bean ice cream, gold leaf.", price:"₹ 950", chef:true },
    { id:9, name:"Mango Saffron Panna Cotta", cat:"desserts", emoji:"🥭", desc:"Alphonso mango coulis, saffron cream, pistachio praline.", price:"₹ 780", chef:false },
    { id:10, name:"Gold Leaf Tiramisu", cat:"desserts", emoji:"☕", desc:"Mascarpone, espresso-soaked ladyfingers, cocoa dust, edible gold.", price:"₹ 850", chef:false },
    { id:11, name:"Elderflower Spritz", cat:"drinks", emoji:"🌸", desc:"Elderflower cordial, sparkling water, cucumber, fresh mint.", price:"₹ 480", chef:false },
    { id:12, name:"Mango Chilli Margarita", cat:"drinks", emoji:"🥭", desc:"Alphonso mango, jalapeño, fresh lime, Tajín rim.", price:"₹ 620", chef:true },
    { id:13, name:"Royal Masala Chai", cat:"drinks", emoji:"🍵", desc:"Hand-blended Darjeeling, cardamom, saffron, rose petals, cream.", price:"₹ 320", chef:false },
  ];

  const tableData = [
    { id:"window", icon:"🪟", name:"Window Table", desc:"Panoramic city views, intimate lighting, perfect for couples.", avail:"4 tables available" },
    { id:"rooftop", icon:"🌃", name:"Rooftop Open Air", desc:"Under the stars, open sky, gentle breeze — the full LUMINA experience.", avail:"6 tables available" },
    { id:"booth", icon:"🛋️", name:"Private Booth", desc:"Plush seating, soundproofing, dedicated butler service.", avail:"2 booths available" },
    { id:"vip", icon:"👑", name:"VIP Lounge", desc:"Exclusive terrace, priority service, personalised chef menu.", avail:"1 suite available" },
  ];

  const tableVisuals = {
    window:  { emoji:"🪟", name:"Window Table", desc:"Dramatic floor-to-ceiling city views. Watch the city glow as you dine in style." },
    rooftop: { emoji:"🌃", name:"Rooftop Open Air", desc:"The full sky above you, the city below. Pure magic under a canopy of stars." },
    booth:   { emoji:"🛋️", name:"Private Booth", desc:"Your own intimate world. A haven of privacy and absolute luxury." },
    vip:     { emoji:"👑", name:"VIP Lounge", desc:"The pinnacle of fine dining. Exclusive terrace, personal chef, unmatched views." },
  };

  const galleryItems = [
    { emoji:"🦞", label:"Saffron Lobster", cat:"Signature" },
    { emoji:"🥩", label:"Himalayan Lamb", cat:"Mains" },
    { emoji:"🍫", label:"Chocolate Fondant", cat:"Desserts" },
    { emoji:"🌃", label:"Rooftop View", cat:"Ambience" },
    { emoji:"🍚", label:"Truffle Risotto", cat:"Signature" },
    { emoji:"🌸", label:"Garden Gallery", cat:"Ambience" },
    { emoji:"🦆", label:"Duck Breast", cat:"Mains" },
    { emoji:"☕", label:"Gold Tiramisu", cat:"Desserts" },
    { emoji:"🥭", label:"Mango Panna Cotta", cat:"Desserts" },
  ];

  const reviews = [
    { text:"Absolutely breathtaking. The rooftop view combined with the truffle risotto was an experience I will cherish forever.", name:"Priya Sharma", meta:"Verified Guest · May 2025", stars:5 },
    { text:"LUMINA raised the bar for fine dining in Hyderabad. Chef Arjun's duck breast is the best dish I've ever tasted.", name:"Rahul Verma", meta:"Food Critic · April 2025", stars:5 },
    { text:"Our anniversary dinner was pure magic. The team decorated our table beautifully without even being asked. Exceptional!", name:"Sunita & Karan", meta:"Anniversary Guests · March 2025", stars:5 },
    { text:"The ambience switch feature at the entrance — moving from Day to Night view — is absolutely genius. Unforgettable evening.", name:"Deepika Reddy", meta:"Verified Guest · June 2025", stars:5 },
    { text:"Michelin quality at its finest, right here in Hyderabad. The saffron lobster bisque deserves its own award.", name:"Aditya Nair", meta:"Food Blogger · May 2025", stars:5 },
    { text:"From the moment we arrived to the last bite of the chocolate fondant, every second was perfection. Will be back monthly.", name:"Meera Pillai", meta:"Verified Guest · April 2025", stars:5 },
  ];

  const journeySteps = [
    { icon:"🚗", label:"Arrival", desc:"Valet parking and a warm welcome from our host team." },
    { icon:"🍷", label:"Welcome Drink", desc:"A signature LUMINA cocktail as you are seated at your table." },
    { icon:"📖", label:"Menu Presentation", desc:"Chef Arjun's personal menu introduction, curated for the evening." },
    { icon:"🍽️", label:"Dinner", desc:"A symphony of flavours, courses crafted with intention and artistry." },
    { icon:"🍰", label:"Dessert", desc:"Sweet finales that linger — the gold-leaf tiramisu awaits." },
    { icon:"🌃", label:"Sky View", desc:"Step out to the open terrace. The city glows beneath you." },
    { icon:"❤️", label:"Happy Memories", desc:"An evening you carry home in your heart, always." },
  ];

  const wheelDishes = [
    { emoji:"🦞", dish:"Saffron Lobster Bisque", detail:"Rich, velvety, deeply luxurious. A bowl of pure indulgence.", price:"₹ 1,100", pairing:"Elderflower Spritz" },
    { emoji:"🥩", dish:"Himalayan Lamb Rack", detail:"Herb-crusted perfection with chimichurri and dauphinoise.", price:"₹ 3,200", pairing:"Red Wine Selection" },
    { emoji:"🍫", dish:"Warm Chocolate Fondant", detail:"Molten Valrhona centre, vanilla ice cream, edible gold.", price:"₹ 950", pairing:"Masala Chai" },
    { emoji:"🍚", dish:"Black Truffle Risotto", detail:"Carnaroli rice, aged parmesan, shaved black truffle.", price:"₹ 1,900", pairing:"Elderflower Spritz" },
    { emoji:"🦆", dish:"Pan-Seared Duck Breast", detail:"Orange jus, pomme purée, roasted baby carrots.", price:"₹ 2,400", pairing:"Mango Margarita" },
    { emoji:"🥭", dish:"Mango Saffron Panna Cotta", detail:"Light, fragrant, a tropical dream of a dessert.", price:"₹ 780", pairing:"Royal Masala Chai" },
  ];

  const todaySpecials = [
    { dish:"Truffle Butter Lobster", desc:"Fresh Atlantic lobster in truffle butter with saffron risotto.", price:"₹ 2,800", emoji:"🦞" },
    { dish:"Black Pepper Wagyu", desc:"A5 Wagyu beef, black pepper crust, roasted bone marrow jus.", price:"₹ 4,500", emoji:"🥩" },
    { dish:"Chef's Saffron Prawn", desc:"Tiger prawns, gold saffron bisque, charred brioche.", price:"₹ 1,800", emoji:"🍤" },
  ];

  // ── INIT ──
  let favs = JSON.parse(localStorage.getItem('lumina-favs') || '[]');
  let selectedOccasion = '';
  let currentLbIndex = 0;
  let wheelSpinning = false;

  // Loader
  window.addEventListener('load', () => {
    const letters = 'LUMINA'.split('');
    const wrap = document.getElementById('loader-letters');
    letters.forEach((l, i) => {
      const s = document.createElement('span');
      s.textContent = l;
      s.style.animationDelay = `${0.15 + i * 0.1}s`;
      wrap.appendChild(s);
    });
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        showWeather();
        setTimeout(() => document.getElementById('offer-banner').classList.add('show'), 1200);
      }, 800);
    }, 2800);
  });

  // Stars
  (function createStars() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 120; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 70 + '%';
      s.style.setProperty('--d', (2 + Math.random() * 4) + 's');
      s.style.setProperty('--o', (0.3 + Math.random() * 0.7).toString());
      s.style.animationDelay = Math.random() * 4 + 's';
      s.style.width = s.style.height = (1 + Math.random() * 2) + 'px';
      container.appendChild(s);
    }
  })();

  // Custom cursor
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx+'px'; dot.style.top = my+'px'; });
  (function animRing() {
    rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(animRing);
  })();

  // Scroll progress + navbar + back to top
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('scroll-progress').style.width = pct + '%';
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('back-top').classList.toggle('show', window.scrollY > 400);
    revealOnScroll();
  });

  // Reveal on scroll
  function revealOnScroll() {
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('visible');
    });
  }
  revealOnScroll();

  // Clock + Open/Closed
  function updateTime() {
    const now = new Date();
    const h = now.getHours(), m = now.getMinutes();
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hh = h % 12 || 12;
    const mm = String(m).padStart(2,'0');
    document.getElementById('current-time').textContent = `${hh}:${mm} ${ampm} IST`;
    const open = (h >= 18) || (h === 0 && m < 60);
    const pill = document.getElementById('open-status');
    pill.className = 'status-pill ' + (open ? 'open' : 'closed');
    document.getElementById('open-text').textContent = open ? 'Open Now' : 'Opens at 6 PM';
  }
  updateTime(); setInterval(updateTime, 60000);

  // Today's Special (random)
  const sp = todaySpecials[Math.floor(Math.random() * todaySpecials.length)];
  document.getElementById('special-dish').textContent = sp.dish;
  document.getElementById('special-desc').textContent = sp.desc;
  document.getElementById('special-price').textContent = sp.price;
  document.getElementById('special-emoji').textContent = sp.emoji;

  // Weather suggestion (simulated)
  function showWeather() {
    const h = new Date().getHours();
    const ws = document.getElementById('weather-suggestion');
    if (h >= 20 || h < 6) ws.innerHTML = '🌙 <span>Cool night ahead:</span> Perfect for our Himalayan Lamb Rack.';
    else if (h >= 17) ws.innerHTML = '🌅 <span>Golden hour:</span> Rooftop Open Air seating is calling your name.';
    else ws.innerHTML = '☀️ <span>Beautiful day:</span> Book our Window Table for tonight\'s sunset.';
    ws.classList.add('show');
    setTimeout(() => ws.classList.remove('show'), 6000);
  }

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('open');
  });
  document.querySelectorAll('.mob-link').forEach(l => {
    l.addEventListener('click', () => document.getElementById('mobile-nav').classList.remove('open'));
  });

  // Ambience switcher
  document.querySelectorAll('.amb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.amb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.className = btn.dataset.mode === 'night' ? '' : btn.dataset.mode;
    });
  });
  document.querySelector('[data-mode="night"]').classList.add('active');

  // Menu
  function renderMenu(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = menuItems
      .filter(i => filter === 'all' || i.cat === filter)
      .map(i => `
        <div class="menu-card reveal">
          <div class="menu-card-img">
            ${i.chef ? '<span class="chef-badge">Chef\'s Special</span>' : ''}
            <span class="dish-emoji">${i.emoji}</span>
          </div>
          <div class="menu-card-body">
            <p class="menu-card-category">${i.cat}</p>
            <h3 class="menu-card-name">${i.name}</h3>
            <p class="menu-card-desc">${i.desc}</p>
            <div class="menu-card-footer">
              <span class="menu-card-price">${i.price}</span>
              <button class="fav-btn ${favs.includes(i.id) ? 'active' : ''}" onclick="toggleFav(${i.id}, this)">
                <i class="fa${favs.includes(i.id) ? 's' : 'r'} fa-heart"></i>
              </button>
            </div>
          </div>
        </div>`).join('');
    setTimeout(revealOnScroll, 50);
  }
  renderMenu();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.filter);
    });
  });

  function toggleFav(id, btn) {
    if (favs.includes(id)) { favs = favs.filter(f => f !== id); btn.classList.remove('active'); btn.innerHTML = '<i class="far fa-heart"></i>'; }
    else { favs.push(id); btn.classList.add('active'); btn.innerHTML = '<i class="fas fa-heart"></i>'; }
    localStorage.setItem('lumina-favs', JSON.stringify(favs));
  }

  // Spin wheel
  function spinWheel() {
    if (wheelSpinning) return;
    wheelSpinning = true;
    const wheel = document.getElementById('spin-wheel');
    const deg = 1440 + Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${deg}deg)`;
    setTimeout(() => {
      const pick = wheelDishes[Math.floor(Math.random() * wheelDishes.length)];
      const res = document.getElementById('wheel-result');
      res.className = 'show';
      res.innerHTML = `
        <div style="font-size:3.5rem;margin-bottom:0.5rem">${pick.emoji}</div>
        <div class="result-dish">${pick.dish}</div>
        <div class="result-detail">${pick.detail}<br><br>🍷 Best paired with: <strong style="color:var(--gold)">${pick.pairing}</strong></div>
        <div class="result-price">${pick.price}</div>`;
      wheelSpinning = false;
    }, 3100);
  }

  // Table Preview
  (function renderTables() {
    const wrap = document.getElementById('table-options');
    wrap.innerHTML = tableData.map(t => `
      <div class="table-card" onclick="selectTable('${t.id}', this)">
        <div class="t-icon">${t.icon}</div>
        <div class="t-name">${t.name}</div>
        <div class="t-desc">${t.desc}</div>
        <div class="t-avail"><span style="width:6px;height:6px;background:#34d399;border-radius:50%;display:inline-block"></span> ${t.avail}</div>
      </div>`).join('');
  })();

  function selectTable(id, el) {
    document.querySelectorAll('.table-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    const v = tableVisuals[id];
    document.getElementById('table-visual').innerHTML = `
      <div class="tv-emoji" style="animation:float 4s ease-in-out infinite">${v.emoji}</div>
      <div class="tv-name">${v.name}</div>
      <div class="tv-desc">${v.desc}</div>
      <a href="#reservation" class="btn-gold" style="margin-top:1rem;display:inline-block">Reserve This Table</a>`;
  }

  // Gallery
  (function renderGallery() {
    document.getElementById('gallery-grid').innerHTML = galleryItems.map((g, i) => `
      <div class="gallery-item reveal" onclick="openLightbox(${i})">
        <div class="g-inner">
          ${g.emoji}
          <div class="gallery-overlay">
            <div class="g-label">${g.label}</div>
            <div class="g-cat">${g.cat}</div>
          </div>
        </div>
      </div>`).join('');
  })();

  function openLightbox(i) {
    currentLbIndex = i;
    showLb();
    document.getElementById('lightbox').classList.add('open');
  }
  function showLb() {
    const g = galleryItems[currentLbIndex];
    document.getElementById('lb-content').innerHTML = `<div class="lightbox-emoji">${g.emoji}</div><div class="lightbox-name">${g.label}</div>`;
  }
  document.getElementById('lb-close').onclick = () => document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lb-prev').onclick = () => { currentLbIndex = (currentLbIndex - 1 + galleryItems.length) % galleryItems.length; showLb(); };
  document.getElementById('lb-next').onclick = () => { currentLbIndex = (currentLbIndex + 1) % galleryItems.length; showLb(); };
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'ArrowLeft') { currentLbIndex = (currentLbIndex-1+galleryItems.length)%galleryItems.length; showLb(); }
    if (e.key === 'ArrowRight') { currentLbIndex = (currentLbIndex+1)%galleryItems.length; showLb(); }
    if (e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
  });

  // Reviews (infinite scroll, duplicated)
  (function renderReviews() {
    const allRevs = [...reviews, ...reviews];
    document.getElementById('reviews-track').innerHTML = allRevs.map(r => `
      <div class="review-card">
        <div class="review-stars">${'★'.repeat(r.stars)}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="reviewer">
          <div class="reviewer-avatar">${r.name.charAt(0)}</div>
          <div><p class="reviewer-name">${r.name}</p><p class="reviewer-meta">${r.meta}</p></div>
        </div>
      </div>`).join('');
  })();

  // Journey Timeline
  (function renderTimeline() {
    document.getElementById('timeline').innerHTML = journeySteps.map(s => `
      <div class="t-step reveal">
        <div class="t-icon-wrap">${s.icon}</div>
        <div class="t-content">
          <div class="t-label">${s.label}</div>
          <div class="t-desc">${s.desc}</div>
        </div>
      </div>`).join('');
  })();

  // Occasion pills
  document.querySelectorAll('.occ-pill').forEach(p => {
    p.addEventListener('click', () => {
      document.querySelectorAll('.occ-pill').forEach(pp => pp.classList.remove('active'));
      p.classList.add('active');
      selectedOccasion = p.dataset.occ;
    });
  });

  // Set min date for reservation
  document.getElementById('res-date').min = new Date().toISOString().split('T')[0];

  // Reservation submit
  function submitReservation(e) {
    e.preventDefault();
    const fname = document.getElementById('res-fname').value;
    const lname = document.getElementById('res-lname').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const seat = document.getElementById('res-seat').value;
    const phone = document.getElementById('res-phone').value;
    document.getElementById('booking-summary').innerHTML = `
      <div class="booking-summary-row"><span class="bs-label">Guest</span><span class="bs-val">${fname} ${lname}</span></div>
      <div class="booking-summary-row"><span class="bs-label">Date</span><span class="bs-val">${date}</span></div>
      <div class="booking-summary-row"><span class="bs-label">Time</span><span class="bs-val">${time}</span></div>
      <div class="booking-summary-row"><span class="bs-label">Guests</span><span class="bs-val">${guests}</span></div>
      <div class="booking-summary-row"><span class="bs-label">Seating</span><span class="bs-val">${seat}</span></div>
      ${selectedOccasion ? `<div class="booking-summary-row"><span class="bs-label">Occasion</span><span class="bs-val">${selectedOccasion}</span></div>` : ''}
      <div class="booking-summary-row"><span class="bs-label">Contact</span><span class="bs-val">${phone}</span></div>`;
    document.getElementById('booking-modal').classList.add('open');
    e.target.reset();
    document.querySelectorAll('.occ-pill').forEach(p => p.classList.remove('active'));
    selectedOccasion = '';
  }

  // Parallax hero on mousemove
  document.getElementById('hero').addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.querySelector('.hero-content').style.transform = `translate(${x*0.3}px, ${y*0.3}px)`;
    document.querySelector('.city-skyline').style.transform = `translateX(${x*0.5}px)`;
  });