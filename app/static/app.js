/* ============================================================
   Flash Market — Myntra-Style E-Commerce Product Catalog
   Pure client-side seeded catalog (zero backend API dependency)
   ============================================================ */

const PRODUCTS = [
  { id: 101, brand: "Levi's", title: "Men Slim Fit Crew Neck Cotton T-Shirt", category: "men", color: "Navy", price: 799, mrp: 1299, discount: 38, rating: 4.4, reviews: "3.6k", sizes: ["S","M","L","XL"], tags: ["new","u999","u1999"], seed: "fm101" },
  { id: 102, brand: "H&M", title: "Men Relaxed Fit Heavyweight Tee", category: "men", color: "Black", price: 699, mrp: 999, discount: 30, rating: 4.3, reviews: "2.1k", sizes: ["XS","S","M","L","XL"], tags: ["sale","u999","u1999"], seed: "fm102" },
  { id: 103, brand: "Zara", title: "Men Textured Linen Blend Overshirt", category: "men", color: "Beige", price: 2499, mrp: 3990, discount: 37, rating: 4.6, reviews: "890", sizes: ["S","M","L","XL"], tags: ["new"], seed: "fm103" },
  { id: 104, brand: "Nike", title: "Men Dri-FIT Running Training T-Shirt", category: "men", color: "Blue", price: 1495, mrp: 1995, discount: 25, rating: 4.7, reviews: "5.4k", sizes: ["S","M","L","XL"], tags: ["u1999"], seed: "fm104" },
  { id: 105, brand: "Puma", title: "Men Essential Logo Motorsport Polo", category: "men", color: "Red", price: 1199, mrp: 1999, discount: 40, rating: 4.2, reviews: "1.8k", sizes: ["M","L","XL"], tags: ["sale","u1999"], seed: "fm105" },
  { id: 106, brand: "Allen Solly", title: "Men Slim Fit Checked Formal Shirt", category: "men", color: "White", price: 1379, mrp: 2299, discount: 40, rating: 4.5, reviews: "4.2k", sizes: ["S","M","L","XL"], tags: ["bundle","u1999"], seed: "fm106" },
  { id: 107, brand: "Pepe Jeans", title: "Men Tapered Mid-Rise Stretch Jeans", category: "men", color: "Blue", price: 1899, mrp: 3199, discount: 41, rating: 4.3, reviews: "2.9k", sizes: ["S","M","L","XL"], tags: ["sale","u1999"], seed: "fm107" },
  { id: 108, brand: "Levi's", title: "Men 511 Slim Fit Indigo Denim", category: "men", color: "Navy", price: 2399, mrp: 3599, discount: 33, rating: 4.6, reviews: "6.1k", sizes: ["S","M","L","XL"], tags: ["bundle"], seed: "fm108" },

  { id: 201, brand: "Mango", title: "Women Pleated Midi Wrap Dress", category: "women", color: "Pink", price: 2790, mrp: 4490, discount: 38, rating: 4.7, reviews: "1.9k", sizes: ["XS","S","M","L"], tags: ["new"], seed: "fm201" },
  { id: 202, brand: "Zara", title: "Women Satin Collar Ruched Blouse", category: "women", color: "White", price: 1790, mrp: 2590, discount: 31, rating: 4.5, reviews: "1.4k", sizes: ["XS","S","M","L"], tags: ["u1999"], seed: "fm202" },
  { id: 203, brand: "W", title: "Women Embroidered Straight Cotton Kurta", category: "women", color: "Green", price: 1199, mrp: 1999, discount: 40, rating: 4.4, reviews: "3.1k", sizes: ["XS","S","M","L","XL"], tags: ["sale","u1999"], seed: "fm203" },
  { id: 204, brand: "Fabindia", title: "Women Handblock Printed Silk Blend Kurta", category: "women", color: "Red", price: 1890, mrp: 2700, discount: 30, rating: 4.8, reviews: "2.2k", sizes: ["S","M","L","XL"], tags: ["new","u1999"], seed: "fm204" },
  { id: 205, brand: "H&M", title: "Women Ribbed Knit Fitted Top", category: "women", color: "Black", price: 799, mrp: 1299, discount: 38, rating: 4.3, reviews: "4.7k", sizes: ["XS","S","M","L"], tags: ["u999","u1999"], seed: "fm205" },
  { id: 206, brand: "Mango", title: "Women High-Waist Tailored Trousers", category: "women", color: "Beige", price: 2190, mrp: 3290, discount: 33, rating: 4.5, reviews: "950", sizes: ["XS","S","M","L"], tags: ["bundle"], seed: "fm206" },

  { id: 301, brand: "H&M", title: "Kids Organic Cotton Printed Hoodie", category: "kids", color: "Blue", price: 899, mrp: 1499, discount: 40, rating: 4.6, reviews: "1.3k", sizes: ["XS","S","M"], tags: ["u999","u1999","sale"], seed: "fm301" },
  { id: 302, brand: "Puma", title: "Kids Colorblock Tracksuit Set", category: "kids", color: "Red", price: 1599, mrp: 2499, discount: 36, rating: 4.5, reviews: "780", sizes: ["XS","S","M","L"], tags: ["bundle","u1999"], seed: "fm302" },
  { id: 303, brand: "Pepe Jeans", title: "Kids Distressed Stretch Denim Shorts", category: "kids", color: "Navy", price: 749, mrp: 1199, discount: 38, rating: 4.2, reviews: "640", sizes: ["XS","S","M"], tags: ["u999","u1999"], seed: "fm303" },

  { id: 401, brand: "Fabindia", title: "Handwoven Cotton Queen Bedsheet Set", category: "home", color: "Beige", price: 1899, mrp: 2999, discount: 37, rating: 4.7, reviews: "2.5k", sizes: ["M","L"], tags: ["bundle","u1999"], seed: "fm401" },
  { id: 402, brand: "H&M", title: "Ceramic Ribbed Table Vase Duo", category: "home", color: "White", price: 949, mrp: 1499, discount: 37, rating: 4.6, reviews: "1.1k", sizes: ["M"], tags: ["new","u999","u1999"], seed: "fm402" },
  { id: 403, brand: "Fabindia", title: "Block Print Cushion Covers (Set of 4)", category: "home", color: "Green", price: 1199, mrp: 1799, discount: 33, rating: 4.4, reviews: "890", sizes: ["M"], tags: ["bundle","u1999"], seed: "fm403" },

  { id: 501, brand: "Zara", title: "Niacinamide 10% + Zinc Glow Serum", category: "beauty", color: "White", price: 899, mrp: 1250, discount: 28, rating: 4.8, reviews: "7.2k", sizes: ["M"], tags: ["new","u999","u1999"], seed: "fm501" },
  { id: 502, brand: "Mango", title: "Hydrating Rosewater Mist & Lip Tint Set", category: "beauty", color: "Pink", price: 1299, mrp: 1999, discount: 35, rating: 4.5, reviews: "1.9k", sizes: ["M"], tags: ["bundle","u1999"], seed: "fm502" },
  { id: 503, brand: "Fabindia", title: "Vitamin C & Saffron Overnight Gel", category: "beauty", color: "Beige", price: 649, mrp: 899, discount: 28, rating: 4.4, reviews: "2.3k", sizes: ["M"], tags: ["u999","u1999"], seed: "fm503" },

  { id: 601, brand: "Nike", title: "Air Zoom Pegasus Running Sneakers", category: "sports", color: "Black", price: 4299, mrp: 6995, discount: 39, rating: 4.9, reviews: "8.4k", sizes: ["S","M","L","XL"], tags: ["new","sale"], seed: "fm601" },
  { id: 602, brand: "Puma", title: "Nitro Velocity Training Shoes", category: "sports", color: "Blue", price: 3199, mrp: 4999, discount: 36, rating: 4.6, reviews: "3.2k", sizes: ["S","M","L","XL"], tags: ["sale"], seed: "fm602" },
  { id: 603, brand: "Nike", title: "Pro Compression Training Shorts", category: "sports", color: "Black", price: 1395, mrp: 1995, discount: 30, rating: 4.5, reviews: "2.8k", sizes: ["S","M","L","XL"], tags: ["u1999"], seed: "fm603" },
  { id: 604, brand: "Allen Solly", title: "Studio Tailored Linen Blazer", category: "studio", color: "Navy", price: 3499, mrp: 5499, discount: 36, rating: 4.7, reviews: "1.1k", sizes: ["S","M","L","XL"], tags: ["new"], seed: "fm604" },
  { id: 605, brand: "Zara", title: "Studio Monogram Silk Midi Skirt", category: "studio", color: "Green", price: 2990, mrp: 4590, discount: 35, rating: 4.6, reviews: "740", sizes: ["XS","S","M","L"], tags: ["new"], seed: "fm605" }
];

const state = {
  navCategory: "all",
  categories: new Set(["men"]),
  brands: new Set(),
  colors: new Set(),
  minPrice: 0,
  maxPrice: 5000,
  minDiscount: 0,
  pill: "all",
  sort: "recommended",
  search: "",
  wishlist: new Set(JSON.parse(localStorage.getItem("fm_wishlist") || "[]")),
  bag: JSON.parse(localStorage.getItem("fm_bag") || "[]"),
  wishlistOnly: false,
  selectedSizes: {}
};

function imgUrl(seed, w = 400, h = 533) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

function saveState() {
  localStorage.setItem("fm_wishlist", JSON.stringify([...state.wishlist]));
  localStorage.setItem("fm_bag", JSON.stringify(state.bag));
}

function updateBadges() {
  const wishBadge = document.getElementById("wishlist-count");
  const bagBadge = document.getElementById("bag-count");
  const wishCount = state.wishlist.size;
  const bagCount = state.bag.reduce((sum, item) => sum + item.qty, 0);
  wishBadge.textContent = wishCount;
  wishBadge.setAttribute("data-count", wishCount);
  bagBadge.textContent = bagCount;
  bagBadge.setAttribute("data-count", bagCount);
}

function showToast(msg) {
  let toast = document.getElementById("fm-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "fm-toast";
    toast.style.cssText = "position:fixed;top:76px;right:24px;z-index:500;background:#282C3F;color:#fff;padding:12px 18px;border-radius:4px;font-size:13px;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,.2);transition:opacity .2s;";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = "0"; }, 2200);
}

function getFilteredProducts() {
  let list = PRODUCTS.filter(p => {
    if (state.wishlistOnly && !state.wishlist.has(p.id)) return false;
    if (state.categories.size > 0 && !state.categories.has(p.category)) return false;
    if (state.brands.size > 0 && !state.brands.has(p.brand)) return false;
    if (state.colors.size > 0 && !state.colors.has(p.color)) return false;
    if (p.price < state.minPrice || p.price > state.maxPrice) return false;
    if (p.discount < state.minDiscount) return false;
    if (state.pill !== "all") {
      if (state.pill === "u999" && p.price >= 999) return false;
      else if (state.pill === "u1999" && p.price >= 1999) return false;
      else if (state.pill !== "u999" && state.pill !== "u1999" && !p.tags.includes(state.pill)) return false;
    }
    if (state.search.trim()) {
      const q = state.search.toLowerCase();
      if (!`${p.brand} ${p.title} ${p.category} ${p.color}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  if (state.sort === "price_asc") list.sort((a, b) => a.price - b.price);
  else if (state.sort === "price_desc") list.sort((a, b) => b.price - a.price);
  else if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
  else if (state.sort === "new_first") list.sort((a, b) => (b.tags.includes("new") ? 1 : 0) - (a.tags.includes("new") ? 1 : 0));

  return list;
}

function renderGrid() {
  const grid = document.getElementById("product-grid");
  const heading = document.getElementById("result-heading");
  const countEl = document.getElementById("result-count");
  const list = getFilteredProducts();

  if (state.wishlistOnly) {
    heading.textContent = "My Wishlist";
  } else if (state.categories.size === 1) {
    const c = [...state.categories][0];
    heading.textContent = c.charAt(0).toUpperCase() + c.slice(1) + " Collection";
  } else {
    heading.textContent = "All Products";
  }
  countEl.textContent = `— ${list.length} items`;

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#535766;">
      <p style="font-size:16px;font-weight:700;color:#282C3F;margin-bottom:8px;">No products match your filters</p>
      <p style="font-size:13px;">Try clearing some filters or searching for another term.</p>
    </div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const wished = state.wishlist.has(p.id);
    const chosenSize = state.selectedSizes[p.id] || p.sizes[0];
    return `
      <article class="product-card" data-id="${p.id}">
        <div class="card-img-wrap">
          <img class="card-img" src="${imgUrl(p.seed)}" alt="${p.brand} ${p.title}" loading="lazy">
          <button class="card-wish ${wished ? "wished" : ""}" data-wish="${p.id}" aria-label="Toggle wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 21C12 21 3 14.5 3 8.5A5.5 5.5 0 0112 5.1 5.5 5.5 0 0121 8.5C21 14.5 12 21 12 21Z"/>
            </svg>
          </button>
          <div class="card-rating">
            <span>${p.rating} ★</span>
            <span class="rating-sep">|</span>
            <span class="rating-count">${p.reviews}</span>
          </div>
          <div class="card-hover-actions">
            <div class="size-pills">
              ${p.sizes.map(s => `<button type="button" class="size-pill ${s === chosenSize ? "selected" : ""}" data-card-size="${p.id}:${s}">${s}</button>`).join("")}
            </div>
            <button type="button" class="add-to-bag-btn" data-add-bag="${p.id}">ADD TO BAG</button>
          </div>
        </div>
        <div class="card-info">
          <div class="card-brand">${p.brand}</div>
          <div class="card-title">${p.title}</div>
          <div class="card-price-row">
            <span class="card-price">₹${p.price.toLocaleString("en-IN")}</span>
            <span class="card-mrp">₹${p.mrp.toLocaleString("en-IN")}</span>
            <span class="card-off">(${p.discount}% OFF)</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function addToBag(productId, size) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const chosenSize = size || state.selectedSizes[p.id] || p.sizes[0];
  const existing = state.bag.find(item => item.id === p.id && item.size === chosenSize);
  if (existing) existing.qty += 1;
  else state.bag.push({ id: p.id, brand: p.brand, title: p.title, price: p.price, mrp: p.mrp, size: chosenSize, seed: p.seed, qty: 1 });
  saveState();
  updateBadges();
  showToast(`Added ${p.brand} (${chosenSize}) to bag`);
}

function openQuickView(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const overlay = document.getElementById("modal-overlay");
  const gallery = document.getElementById("modal-gallery");
  const info = document.getElementById("modal-info");
  const wished = state.wishlist.has(p.id);
  let selectedSize = state.selectedSizes[p.id] || p.sizes[0];

  gallery.innerHTML = [1, 2, 3, 4].map(n =>
    `<img src="${imgUrl(p.seed + "v" + n, 400, 500)}" alt="${p.title} view ${n}">`
  ).join("");

  info.innerHTML = `
    <div class="modal-brand">${p.brand}</div>
    <div class="modal-title">${p.title}</div>
    <div class="modal-rating">
      <strong>${p.rating} ★</strong>
      <span>|</span>
      <span>${p.reviews} Ratings</span>
    </div>
    <div class="modal-price-row">
      <span class="modal-price">₹${p.price.toLocaleString("en-IN")}</span>
      <span class="modal-mrp">MRP ₹${p.mrp.toLocaleString("en-IN")}</span>
      <span class="modal-off">(${p.discount}% OFF)</span>
    </div>
    <div style="font-size:12px;color:#03a685;font-weight:700;margin-bottom:14px;">inclusive of all taxes</div>

    <div class="modal-section-label">COLOR: ${p.color.toUpperCase()}</div>
    <div class="modal-colors">
      <span class="modal-color-swatch active" style="background:${colorHex(p.color)}" title="${p.color}"></span>
    </div>

    <div class="modal-section-label">SELECT SIZE</div>
    <div class="modal-sizes" id="modal-sizes">
      ${p.sizes.map(s => `<button type="button" class="modal-size-pill ${s === selectedSize ? "selected" : ""}" data-msize="${s}">${s}</button>`).join("")}
    </div>

    <div class="modal-cta-row">
      <button type="button" class="btn-add-bag" id="modal-add-bag">ADD TO BAG</button>
      <button type="button" class="btn-wishlist ${wished ? "wished" : ""}" id="modal-wish-btn">${wished ? "♥ WISHLISTED" : "♡ WISHLIST"}</button>
    </div>

    <div class="pincode-row">
      <input type="text" class="pincode-input" id="pincode-input" placeholder="Enter pincode" maxlength="6">
      <button type="button" class="pincode-check" id="pincode-check">Check</button>
    </div>
    <div id="pincode-msg" style="font-size:12px;color:#03a685;margin-top:6px;min-height:16px;"></div>

    <div class="offers-box">
      <div class="offers-box-title">BEST OFFERS</div>
      <div class="offer-item"><span class="offer-tag">FLASH200</span><span>Flat ₹200 off on orders above ₹1,499</span></div>
      <div class="offer-item"><span class="offer-tag">BANK10</span><span>10% Instant Discount on HDFC &amp; ICICI Cards</span></div>
    </div>
  `;

  overlay.hidden = false;

  info.querySelectorAll("[data-msize]").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSize = btn.dataset.msize;
      state.selectedSizes[p.id] = selectedSize;
      info.querySelectorAll("[data-msize]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  document.getElementById("modal-add-bag").addEventListener("click", () => {
    addToBag(p.id, selectedSize);
    document.getElementById("modal-add-bag").textContent = "GO TO BAG →";
    document.getElementById("modal-add-bag").onclick = () => {
      overlay.hidden = true;
      openBagDrawer();
    };
  });

  document.getElementById("modal-wish-btn").addEventListener("click", (e) => {
    toggleWishlist(p.id);
    const nowWished = state.wishlist.has(p.id);
    e.currentTarget.classList.toggle("wished", nowWished);
    e.currentTarget.textContent = nowWished ? "♥ WISHLISTED" : "♡ WISHLIST";
  });

  document.getElementById("pincode-check").addEventListener("click", () => {
    const pin = document.getElementById("pincode-input").value.trim();
    const msg = document.getElementById("pincode-msg");
    if (/^\d{6}$/.test(pin)) {
      msg.style.color = "#03a685";
      msg.textContent = `✓ Express delivery available to ${pin} by Tomorrow`;
    } else {
      msg.style.color = "#FF3F6C";
      msg.textContent = "Please enter a valid 6-digit pincode";
    }
  });
}

function colorHex(name) {
  const map = { Black: "#222", White: "#f5f5f5", Navy: "#1a2a6c", Red: "#e53e3e", Green: "#276749", Blue: "#3182ce", Pink: "#FF3F6C", Beige: "#d9c9a8" };
  return map[name] || "#ccc";
}

function toggleWishlist(id) {
  if (state.wishlist.has(id)) state.wishlist.delete(id);
  else state.wishlist.add(id);
  saveState();
  updateBadges();
  renderGrid();
}

function openBagDrawer() {
  const overlay = document.getElementById("drawer-overlay");
  const drawer = document.getElementById("bag-drawer");
  overlay.hidden = false;
  drawer.hidden = false;
  renderBagDrawer();
}

function closeBagDrawer() {
  document.getElementById("drawer-overlay").hidden = true;
  document.getElementById("bag-drawer").hidden = true;
}

function renderBagDrawer() {
  const itemsEl = document.getElementById("drawer-items");
  const footerEl = document.getElementById("drawer-footer");

  if (state.bag.length === 0) {
    itemsEl.innerHTML = `<div class="drawer-empty">
      <p style="font-weight:700;color:#282C3F;margin-bottom:6px;">Hey, it feels so light!</p>
      <p>There is nothing in your bag. Let's add some items.</p>
    </div>`;
    footerEl.innerHTML = "";
    return;
  }

  itemsEl.innerHTML = state.bag.map((item, idx) => `
    <div class="bag-item">
      <img class="bag-item-img" src="${imgUrl(item.seed, 150, 200)}" alt="${item.title}">
      <div class="bag-item-info">
        <div class="bag-item-brand">${item.brand}</div>
        <div class="bag-item-title">${item.title}</div>
        <div class="bag-item-meta">Size: ${item.size}</div>
        <div class="bag-item-price">₹${(item.price * item.qty).toLocaleString("en-IN")}</div>
        <div class="qty-row">
          <button type="button" class="qty-btn" data-qty="${idx}:-1">−</button>
          <span class="qty-val">${item.qty}</span>
          <button type="button" class="qty-btn" data-qty="${idx}:1">+</button>
          <button type="button" class="bag-item-remove" data-remove="${idx}">Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  const subtotal = state.bag.reduce((sum, i) => sum + i.price * i.qty, 0);
  const mrpTotal = state.bag.reduce((sum, i) => sum + i.mrp * i.qty, 0);
  footerEl.innerHTML = `
    <div class="subtotal-row"><span class="subtotal-label">Total MRP</span><span>₹${mrpTotal.toLocaleString("en-IN")}</span></div>
    <div class="subtotal-row"><span class="subtotal-label">Discount on MRP</span><span style="color:#03a685">-₹${(mrpTotal - subtotal).toLocaleString("en-IN")}</span></div>
    <div class="subtotal-row" style="font-size:16px;padding-top:6px;border-top:1px solid #eaeaec;"><span>Total Amount</span><span>₹${subtotal.toLocaleString("en-IN")}</span></div>
    <button type="button" class="place-order-btn" id="place-order-btn">PLACE ORDER</button>
  `;

  document.getElementById("place-order-btn").addEventListener("click", () => {
    state.bag = [];
    saveState();
    updateBadges();
    closeBagDrawer();
    showToast("Order placed successfully! Thank you for shopping.");
  });
}

function initEvents() {
  // Primary Nav
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      state.wishlistOnly = false;
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      const cat = link.dataset.cat;
      state.categories.clear();
      if (cat === "all") state.categories.add("men");
      else state.categories.add(cat);
      document.querySelectorAll('input[name="cat"]').forEach(cb => {
        cb.checked = state.categories.has(cb.value);
      });
      renderGrid();
    });
  });

  // Search
  document.getElementById("search-input").addEventListener("input", e => {
    state.search = e.target.value;
    renderGrid();
  });

  // Sidebar Categories
  document.querySelectorAll('input[name="cat"]').forEach(cb => {
    cb.addEventListener("change", () => {
      state.wishlistOnly = false;
      if (cb.checked) state.categories.add(cb.value);
      else state.categories.delete(cb.value);
      renderGrid();
    });
  });

  // Brands
  document.querySelectorAll('input[name="brand"]').forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) state.brands.add(cb.value);
      else state.brands.delete(cb.value);
      renderGrid();
    });
  });

  // Colors
  document.querySelectorAll('input[name="color"]').forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) state.colors.add(cb.value);
      else state.colors.delete(cb.value);
      renderGrid();
    });
  });

  // Price Sliders
  const minSlider = document.getElementById("price-min");
  const maxSlider = document.getElementById("price-max");
  const minLabel = document.getElementById("price-min-label");
  const maxLabel = document.getElementById("price-max-label");

  function syncPrice() {
    let lo = parseInt(minSlider.value, 10);
    let hi = parseInt(maxSlider.value, 10);
    if (lo > hi) [lo, hi] = [hi, lo];
    state.minPrice = lo;
    state.maxPrice = hi;
    minLabel.textContent = lo;
    maxLabel.textContent = hi;
    renderGrid();
  }
  minSlider.addEventListener("input", syncPrice);
  maxSlider.addEventListener("input", syncPrice);

  // Discount
  document.querySelectorAll('input[name="discount"]').forEach(r => {
    r.addEventListener("change", () => {
      state.minDiscount = parseInt(r.value, 10) || 0;
      renderGrid();
    });
  });

  // Clear Filters
  document.getElementById("clear-filters").addEventListener("click", () => {
    state.categories.clear();
    state.brands.clear();
    state.colors.clear();
    state.minPrice = 0;
    state.maxPrice = 5000;
    state.minDiscount = 0;
    state.pill = "all";
    state.search = "";
    state.wishlistOnly = false;
    document.getElementById("search-input").value = "";
    minSlider.value = 0; maxSlider.value = 5000;
    minLabel.textContent = "0"; maxLabel.textContent = "5000";
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(i => { i.checked = false; });
    document.querySelectorAll(".pill").forEach(p => p.classList.toggle("active", p.dataset.pill === "all"));
    renderGrid();
  });

  // Pills
  document.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      state.pill = btn.dataset.pill;
      document.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid();
    });
  });

  // Sort
  document.getElementById("sort-select").addEventListener("change", e => {
    state.sort = e.target.value;
    renderGrid();
  });

  // Grid delegation (card click, wish, size, add to bag)
  document.getElementById("product-grid").addEventListener("click", e => {
    const wishBtn = e.target.closest("[data-wish]");
    if (wishBtn) {
      e.stopPropagation();
      toggleWishlist(parseInt(wishBtn.dataset.wish, 10));
      return;
    }
    const sizeBtn = e.target.closest("[data-card-size]");
    if (sizeBtn) {
      e.stopPropagation();
      const [idStr, size] = sizeBtn.dataset.cardSize.split(":");
      state.selectedSizes[parseInt(idStr, 10)] = size;
      sizeBtn.parentElement.querySelectorAll(".size-pill").forEach(b => b.classList.remove("selected"));
      sizeBtn.classList.add("selected");
      return;
    }
    const bagBtn = e.target.closest("[data-add-bag]");
    if (bagBtn) {
      e.stopPropagation();
      addToBag(parseInt(bagBtn.dataset.addBag, 10));
      return;
    }
    const card = e.target.closest(".product-card");
    if (card) {
      openQuickView(parseInt(card.dataset.id, 10));
    }
  });

  // Modal Close
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("modal-overlay").hidden = true;
  });
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target.id === "modal-overlay") document.getElementById("modal-overlay").hidden = true;
  });

  // Header Actions
  document.getElementById("bag-btn").addEventListener("click", openBagDrawer);
  document.getElementById("drawer-close").addEventListener("click", closeBagDrawer);
  document.getElementById("drawer-overlay").addEventListener("click", closeBagDrawer);
  document.getElementById("wishlist-btn").addEventListener("click", () => {
    state.wishlistOnly = !state.wishlistOnly;
    if (state.wishlistOnly) state.categories.clear();
    renderGrid();
  });
  document.getElementById("profile-btn").addEventListener("click", () => {
    showToast("Signed in as Tejas H R (Bengaluru)");
  });

  // Bag Drawer Delegation
  document.getElementById("drawer-items").addEventListener("click", e => {
    const qtyBtn = e.target.closest("[data-qty]");
    if (qtyBtn) {
      const [idx, delta] = qtyBtn.dataset.qty.split(":").map(Number);
      state.bag[idx].qty += delta;
      if (state.bag[idx].qty <= 0) state.bag.splice(idx, 1);
      saveState();
      updateBadges();
      renderBagDrawer();
      return;
    }
    const remBtn = e.target.closest("[data-remove]");
    if (remBtn) {
      state.bag.splice(parseInt(remBtn.dataset.remove, 10), 1);
      saveState();
      updateBadges();
      renderBagDrawer();
    }
  });
}

initEvents();
updateBadges();
renderGrid();
