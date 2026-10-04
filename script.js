/* ==========================================================================
   DriveX — Premium Car Rental
   1. Car Data · 2. DOM Elements · 3. Helpers & State · 4. Navigation
   5. Search · 6. Filtering · 7. Sorting · 8. Rendering · 9. Favorites
   10. Modal · 11. Booking · 12. Price Calculation · 13. Form Validation
   14. LocalStorage · 15. FAQ · 16. Counters · 17. Scroll Animations
   18. Theme, Toasts & Misc · 19. Init
   ========================================================================== */
"use strict";

/* ---------- 1. Car Data ---------- */
const IMG = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
const ALL_CITIES = ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Peshawar", "Multan", "Faisalabad"];

const SERVICE_FEE = 1500;
const PRICE_MIN = 5000;
const PRICE_MAX = 35000;

const cars = [
    {
        id: 1, name: "Toyota Corolla Altis", category: "Sedan", price: 8500, deposit: 20000,
        seats: 5, doors: 4, transmission: "Automatic", fuel: "Petrol", mileage: "14 km/l",
        rating: 4.9, reviews: 214, image: "1621007947382-bb3c3994e3fb", available: true,
        locations: ALL_CITIES,
        description: "Pakistan's favourite sedan. Smooth, reliable and economical — ideal for city commutes, business trips and family drives on the motorway.",
        features: ["Air Conditioning", "Bluetooth", "USB Charging", "Reverse Camera", "Cruise Control", "Safety Airbags"]
    },
    {
        id: 2, name: "Honda Civic RS", category: "Sedan", price: 11500, deposit: 25000,
        seats: 5, doors: 4, transmission: "Automatic", fuel: "Petrol", mileage: "13 km/l",
        rating: 4.8, reviews: 168, image: "1555215695-3004980ad54e", available: true,
        locations: ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Multan"],
        description: "Sporty turbocharged performance with a premium cabin. The Civic RS makes every drive feel like an occasion.",
        features: ["Air Conditioning", "Bluetooth", "Apple CarPlay", "Reverse Camera", "Cruise Control", "Lane Watch", "Safety Airbags"]
    },
    {
        id: 3, name: "Toyota Yaris ATIV", category: "Economy", price: 6500, deposit: 15000,
        seats: 5, doors: 4, transmission: "Automatic", fuel: "Petrol", mileage: "16 km/l",
        rating: 4.7, reviews: 142, image: "1541899481282-d53bffe3c35d", available: true,
        locations: ALL_CITIES,
        description: "Compact, efficient and easy to park. A smart choice for daily errands and budget-conscious travellers.",
        features: ["Air Conditioning", "Bluetooth", "USB Charging", "Safety Airbags", "ABS Brakes"]
    },
    {
        id: 4, name: "Suzuki Swift GLX", category: "Economy", price: 5500, deposit: 12000,
        seats: 5, doors: 5, transmission: "Manual", fuel: "Petrol", mileage: "18 km/l",
        rating: 4.6, reviews: 97, image: "1549317661-bd32c8ce0db2", available: true,
        locations: ALL_CITIES,
        description: "Nimble hatchback with excellent fuel economy. Perfect for zipping through busy city streets.",
        features: ["Air Conditioning", "Bluetooth", "USB Charging", "Touchscreen Display", "Safety Airbags"]
    },
    {
        id: 5, name: "Toyota Fortuner Legender", category: "SUV", price: 18000, deposit: 40000,
        seats: 7, doors: 5, transmission: "Automatic", fuel: "Diesel", mileage: "11 km/l",
        rating: 4.9, reviews: 186, image: "1533473359331-0135ef1b58bf", available: true,
        locations: ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Peshawar"],
        description: "Commanding 4x4 presence with seven seats and diesel torque. Built for northern-area adventures and long highway journeys.",
        features: ["Climate Control", "Bluetooth", "GPS Navigation", "360° Camera", "Cruise Control", "4x4 Drive", "7 Airbags"]
    },
    {
        id: 6, name: "Honda BR-V", category: "SUV", price: 9500, deposit: 20000,
        seats: 7, doors: 5, transmission: "Automatic", fuel: "Petrol", mileage: "13 km/l",
        rating: 4.6, reviews: 88, image: "1519641471654-76ce0107ad1b", available: true,
        locations: ["Lahore", "Islamabad", "Karachi", "Multan", "Peshawar", "Faisalabad"],
        description: "A practical seven-seater crossover with generous space for the whole family and their luggage.",
        features: ["Air Conditioning", "Bluetooth", "USB Charging", "Reverse Camera", "Rear AC Vents", "Safety Airbags"]
    },
    {
        id: 7, name: "Kia Sportage AWD", category: "SUV", price: 14000, deposit: 30000,
        seats: 5, doors: 5, transmission: "Automatic", fuel: "Petrol", mileage: "12 km/l",
        rating: 4.8, reviews: 131, image: "1609521263047-f8f205293f24", available: true,
        locations: ["Lahore", "Islamabad", "Karachi", "Rawalpindi"],
        description: "Stylish all-wheel-drive SUV with a panoramic sunroof and a refined, quiet ride.",
        features: ["Climate Control", "Bluetooth", "GPS Navigation", "Panoramic Sunroof", "Reverse Camera", "Cruise Control", "Safety Airbags"]
    },
    {
        id: 8, name: "Toyota Corolla Cross HEV", category: "SUV", price: 15000, deposit: 30000,
        seats: 5, doors: 5, transmission: "Automatic", fuel: "Hybrid", mileage: "21 km/l",
        rating: 4.8, reviews: 74, image: "1617469767053-d3b523a0b982", available: true,
        locations: ["Lahore", "Islamabad", "Karachi"],
        description: "Hybrid efficiency meets crossover versatility. Whisper-quiet in the city and remarkably frugal on long trips.",
        features: ["Climate Control", "Bluetooth", "Apple CarPlay", "Reverse Camera", "Adaptive Cruise", "Lane Assist", "Safety Airbags"]
    },
    {
        id: 9, name: "Toyota Land Cruiser ZX", category: "Luxury", price: 35000, deposit: 100000,
        seats: 7, doors: 5, transmission: "Automatic", fuel: "Diesel", mileage: "8 km/l",
        rating: 5.0, reviews: 63, image: "1563720223185-11003d516935", available: true,
        locations: ["Lahore", "Islamabad", "Karachi"],
        description: "The flagship of luxury off-roaders. Unmatched comfort, presence and capability for VIP travel and weddings.",
        features: ["4-Zone Climate", "Leather Seats", "GPS Navigation", "360° Camera", "Adaptive Cruise", "Premium Audio", "10 Airbags"]
    },
    {
        id: 10, name: "Mercedes-Benz E-Class", category: "Luxury", price: 30000, deposit: 80000,
        seats: 5, doors: 4, transmission: "Automatic", fuel: "Petrol", mileage: "10 km/l",
        rating: 4.9, reviews: 58, image: "1590362891991-f776e747a588", available: false,
        locations: ["Lahore", "Islamabad", "Karachi"],
        description: "Executive elegance with cutting-edge technology. The E-Class is the definitive business-class sedan.",
        features: ["Climate Control", "Leather Seats", "GPS Navigation", "Reverse Camera", "Ambient Lighting", "Burmester Audio", "Safety Airbags"]
    },
    {
        id: 11, name: "Audi A6", category: "Luxury", price: 26000, deposit: 70000,
        seats: 5, doors: 4, transmission: "Automatic", fuel: "Petrol", mileage: "11 km/l",
        rating: 4.7, reviews: 49, image: "1606664515524-ed2f786a0bd6", available: true,
        locations: ["Lahore", "Islamabad", "Karachi", "Rawalpindi"],
        description: "Understated luxury with a beautifully crafted interior and confident, composed handling.",
        features: ["Climate Control", "Leather Seats", "GPS Navigation", "Virtual Cockpit", "Reverse Camera", "Cruise Control", "Safety Airbags"]
    },
    {
        id: 12, name: "Toyota Hiace Grand Cabin", category: "Van", price: 16000, deposit: 35000,
        seats: 13, doors: 4, transmission: "Manual", fuel: "Diesel", mileage: "9 km/l",
        rating: 4.7, reviews: 112, image: "1527786356703-4b100091cd2c", available: true,
        locations: ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Peshawar", "Multan"],
        description: "Spacious group transport for family tours, corporate events and airport transfers. Driver available on request.",
        features: ["Air Conditioning", "Rear AC Vents", "USB Charging", "Bluetooth", "Large Luggage Space"]
    }
];

const locations = [
    { city: "Lahore", vehicles: 64, image: "1622546758596-f1f06ba11f58" },
    { city: "Islamabad", vehicles: 52, image: "1506905925346-21bda4d32df4" },
    { city: "Karachi", vehicles: 58, image: "1567157577867-05ccb1388e66" },
    { city: "Rawalpindi", vehicles: 30, image: "1469854523086-cc02fe5d8800" },
    { city: "Peshawar", vehicles: 22, image: "1500530855697-b586d89ba3ee" },
    { city: "Multan", vehicles: 24, image: "1494905998402-395d579af36f" }
];

const infoPages = {
    careers: {
        title: "Careers at DriveX",
        body: `<p>We're growing across Pakistan and looking for people who love cars and great service.</p>
               <ul><li>Branch Operations Executive — Lahore</li><li>Customer Experience Associate — Islamabad</li><li>Fleet Maintenance Supervisor — Karachi</li></ul>
               <p>Send your CV to <a href="mailto:careers@drivex.pk"><strong>careers@drivex.pk</strong></a>.</p>`
    },
    terms: {
        title: "Terms of Rental",
        body: `<ul><li>Drivers must be 21+ with a valid Pakistani or international driving licence.</li>
               <li>A refundable security deposit is collected at pick-up.</li>
               <li>Free cancellation up to 24 hours before pick-up.</li>
               <li>Vehicles must be returned with the same fuel level.</li>
               <li>Traffic fines during the rental period are the renter's responsibility.</li></ul>`
    },
    privacy: {
        title: "Privacy Policy",
        body: `<p>DriveX only collects the information needed to process your booking: name, contact details and CNIC for identity verification.</p>
               <p>Your data is never sold to third parties. On this demo site, all booking information is stored only in your own browser.</p>`
    }
};

/* ---------- 2. DOM Elements ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const dom = {
    header: $("#siteHeader"),
    menuToggle: $("#menuToggle"),
    menuClose: $("#menuClose"),
    mobileMenu: $("#mobileMenu"),
    backdrop: $("#drawerBackdrop"),
    themeToggle: $("#themeToggle"),
    myBookingBtn: $("#myBookingBtn"),
    bookingDot: $("#bookingDot"),
    signInBtn: $("#signInBtn"),
    signInLabel: $("#signInLabel"),

    searchForm: $("#search"),
    searchLocation: $("#searchLocation"),
    searchPickup: $("#searchPickup"),
    searchReturn: $("#searchReturn"),
    searchType: $("#searchType"),
    searchError: $("#searchError"),

    filtersPanel: $("#filtersPanel"),
    filtersOpen: $("#filtersOpen"),
    filtersClose: $("#filtersClose"),
    filtersApply: $("#filtersApply"),
    resetFilters: $("#resetFilters"),
    priceRange: $("#priceRange"),
    priceOutput: $("#priceOutput"),
    favoritesToggle: $("#favoritesToggle"),
    favCount: $("#favCount"),
    sortSelect: $("#sortSelect"),
    resultsTitle: $("#resultsTitle"),
    resultsCount: $("#resultsCount"),
    chips: $("#activeChips"),
    carGrid: $("#carGrid"),
    emptyState: $("#emptyState"),
    emptyReset: $("#emptyReset"),
    locationGrid: $("#locationGrid"),

    detailsModal: $("#detailsModal"),
    detailsContent: $("#detailsContent"),

    bookingModal: $("#bookingModal"),
    bookingFormView: $("#bookingFormView"),
    confirmView: $("#confirmView"),
    bookingForm: $("#bookingForm"),
    selectedCar: $("#selectedCar"),
    formAlert: $("#formAlert"),
    bkLocation: $("#bkLocation"),
    bkPickup: $("#bkPickup"),
    bkReturn: $("#bkReturn"),
    bkName: $("#bkName"),
    bkEmail: $("#bkEmail"),
    bkPhone: $("#bkPhone"),
    bkCnic: $("#bkCnic"),
    bkRequest: $("#bkRequest"),
    sumCarName: $("#sumCarName"),
    sumRateLabel: $("#sumRateLabel"),
    sumSubtotal: $("#sumSubtotal"),
    sumService: $("#sumService"),
    sumDeposit: $("#sumDeposit"),
    sumTotal: $("#sumTotal"),
    sumDates: $("#sumDates"),

    myBookingModal: $("#myBookingModal"),
    myBookingContent: $("#myBookingContent"),
    signInModal: $("#signInModal"),
    signInForm: $("#signInForm"),
    infoModal: $("#infoModal"),
    infoTitle: $("#infoTitle"),
    infoBody: $("#infoBody"),

    toastStack: $("#toastStack"),
    backToTop: $("#backToTop"),
    printArea: $("#printArea")
};

/* ---------- 3. Helpers & State ---------- */
const STORAGE = {
    theme: "drivex-theme",
    favorites: "drivex-favorites",
    booking: "drivex-booking",
    user: "drivex-user",
    reserved: "drivex-reserved"
};

const store = {
    get(key, fallback, area = localStorage) {
        try {
            const raw = area.getItem(key);
            return raw === null ? fallback : JSON.parse(raw);
        } catch {
            return fallback;
        }
    },
    set(key, value, area = localStorage) {
        try { area.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
    },
    remove(key, area = localStorage) {
        try { area.removeItem(key); } catch { /* storage unavailable */ }
    }
};

const session = (() => { try { return window.sessionStorage; } catch { return null; } })();

const state = {
    location: null,
    type: "All",
    transmission: "All",
    fuel: "All",
    maxPrice: PRICE_MAX,
    favoritesOnly: false,
    sort: "recommended",
    pickup: "",
    returnDate: "",
    favorites: new Set(store.get(STORAGE.favorites, [])),
    reserved: new Set(session ? store.get(STORAGE.reserved, [], session) : []),
    currentCar: null
};

const formatPKR = (n) => `PKR ${Math.round(n).toLocaleString("en-PK")}`;
const pad = (n) => String(n).padStart(2, "0");
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseISO = (str) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(str || "")) return null;
    const [y, m, d] = str.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return Number.isNaN(date.getTime()) ? null : date;
};
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const addDays = (date, n) => { const d = new Date(date); d.setDate(d.getDate() + n); return d; };
const daysBetween = (a, b) => Math.round((b - a) / 86400000);
const formatDate = (str, opts = { month: "long", day: "numeric", year: "numeric" }) => {
    const d = parseISO(str);
    return d ? d.toLocaleDateString("en-US", opts) : "—";
};
const shortDate = (str) => formatDate(str, { month: "short", day: "numeric" });
const findCar = (id) => cars.find((c) => c.id === Number(id));
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

const escapeHTML = (str = "") =>
    String(str).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

const debounce = (fn, wait = 150) => {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

/**
 * Validates a pick-up/return pair.
 * Returns { pickupError, returnError, days } — days is 0 when invalid.
 */
function validateDates(pickupStr, returnStr) {
    const result = { pickupError: "", returnError: "", days: 0 };
    const pickup = parseISO(pickupStr);
    const ret = parseISO(returnStr);

    if (!pickup) result.pickupError = "Please select a pick-up date.";
    else if (pickup < today()) result.pickupError = "Pick-up date cannot be in the past.";

    if (!ret) result.returnError = "Please select a valid return date.";
    else if (pickup && ret <= pickup) result.returnError = "Please select a valid return date — at least 1 day after pick-up.";

    if (!result.pickupError && !result.returnError) result.days = daysBetween(pickup, ret);
    return result;
}

/** Keeps a pair of date inputs consistent: min values and auto-adjusted return date. */
function syncDatePair(pickupInput, returnInput) {
    const min = toISO(today());
    pickupInput.min = min;
    const pickup = parseISO(pickupInput.value);
    const minReturn = toISO(addDays(pickup && pickup >= today() ? pickup : today(), 1));
    returnInput.min = minReturn;
    const ret = parseISO(returnInput.value);
    if (pickup && (!ret || ret <= pickup)) returnInput.value = minReturn;
}

/* ---------- 4. Navigation ---------- */
let menuOpen = false;
let filtersOpen = false;
const modalStack = [];

function updateScrollLock() {
    document.body.classList.toggle("no-scroll", menuOpen || filtersOpen || modalStack.length > 0);
}

function showBackdrop(show) {
    if (show) {
        dom.backdrop.hidden = false;
        requestAnimationFrame(() => dom.backdrop.classList.add("visible"));
    } else {
        dom.backdrop.classList.remove("visible");
        setTimeout(() => { if (!menuOpen && !filtersOpen) dom.backdrop.hidden = true; }, 300);
    }
}

function openMenu() {
    menuOpen = true;
    dom.mobileMenu.classList.add("open");
    dom.mobileMenu.setAttribute("aria-hidden", "false");
    dom.menuToggle.setAttribute("aria-expanded", "true");
    showBackdrop(true);
    updateScrollLock();
    setTimeout(() => dom.menuClose.focus(), 50);
}

function closeMenu({ restoreFocus = true } = {}) {
    if (!menuOpen) return;
    menuOpen = false;
    dom.mobileMenu.classList.remove("open");
    dom.mobileMenu.setAttribute("aria-hidden", "true");
    dom.menuToggle.setAttribute("aria-expanded", "false");
    showBackdrop(false);
    updateScrollLock();
    if (restoreFocus) dom.menuToggle.focus();
}

function openFilters() {
    filtersOpen = true;
    dom.filtersPanel.classList.add("open");
    showBackdrop(true);
    updateScrollLock();
    setTimeout(() => dom.filtersClose.focus(), 50);
}

function closeFilters() {
    if (!filtersOpen) return;
    filtersOpen = false;
    dom.filtersPanel.classList.remove("open");
    showBackdrop(false);
    updateScrollLock();
    dom.filtersOpen.focus();
}

function initNavigation() {
    dom.menuToggle.addEventListener("click", openMenu);
    dom.menuClose.addEventListener("click", () => closeMenu());
    dom.backdrop.addEventListener("click", () => { closeMenu({ restoreFocus: false }); closeFilters(); });

    $$(".mobile-link", dom.mobileMenu).forEach((link) =>
        link.addEventListener("click", () => closeMenu({ restoreFocus: false }))
    );

    // Header background + back-to-top visibility (rAF-throttled)
    let ticking = false;
    const onScroll = () => {
        const y = window.scrollY;
        dom.header.classList.toggle("scrolled", y > 24);
        dom.backToTop.classList.toggle("visible", y > 600);
        ticking = false;
    };
    window.addEventListener("scroll", () => {
        if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    // "Book a Car" links focus the search widget after scrolling
    $$('a[href="#search"]').forEach((link) =>
        link.addEventListener("click", () => setTimeout(() => dom.searchLocation.focus({ preventScroll: true }), 500))
    );

    // Active nav link based on section in view
    const navLinks = $$(".nav-link");
    const sections = navLinks.map((l) => $(l.getAttribute("href"))).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
}

/* ---------- 5. Search ---------- */
function initSearch() {
    const start = addDays(today(), 1);
    dom.searchPickup.value = toISO(start);
    dom.searchReturn.value = toISO(addDays(start, 3));
    syncDatePair(dom.searchPickup, dom.searchReturn);

    const clearSearchError = () => {
        dom.searchError.textContent = "";
        dom.searchPickup.classList.remove("invalid");
        dom.searchReturn.classList.remove("invalid");
    };

    dom.searchPickup.addEventListener("change", () => { syncDatePair(dom.searchPickup, dom.searchReturn); clearSearchError(); });
    dom.searchReturn.addEventListener("change", clearSearchError);

    dom.searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const location = dom.searchLocation.value;
        const pickup = dom.searchPickup.value;
        const ret = dom.searchReturn.value;
        const type = dom.searchType.value;

        const check = validateDates(pickup, ret);
        if (check.pickupError || check.returnError) {
            dom.searchError.textContent = check.pickupError || check.returnError;
            dom.searchPickup.classList.toggle("invalid", Boolean(check.pickupError));
            dom.searchReturn.classList.toggle("invalid", Boolean(check.returnError));
            (check.pickupError ? dom.searchPickup : dom.searchReturn).focus();
            return;
        }

        clearSearchError();
        state.location = location;
        state.pickup = pickup;
        state.returnDate = ret;
        state.type = type;
        syncFilterUI();
        renderCars();

        $("#cars").scrollIntoView({ behavior: "smooth" });
        const count = getVisibleCars().length;
        showToast(`${plural(count, "car")} available in ${location}`, count ? "success" : "info");
    });
}

/* ---------- 6. Filtering ---------- */
function getVisibleCars() {
    const list = cars.filter((car) => {
        if (state.location && !car.locations.includes(state.location)) return false;
        if (state.type !== "All" && car.category !== state.type) return false;
        if (state.transmission !== "All" && car.transmission !== state.transmission) return false;
        if (state.fuel !== "All" && car.fuel !== state.fuel) return false;
        if (car.price > state.maxPrice) return false;
        if (state.favoritesOnly && !state.favorites.has(car.id)) return false;
        return true;
    });
    return sortCars(list);
}

function updatePriceOutput() {
    const value = Number(dom.priceRange.value);
    const pct = ((value - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
    dom.priceRange.style.setProperty("--fill", `${pct}%`);
    dom.priceOutput.textContent = `${formatPKR(PRICE_MIN)} — ${formatPKR(value)}`;
}

/** Reflects state in all filter controls (pills, selects, slider, toggle). */
function syncFilterUI() {
    $$(".pill-group").forEach((group) => {
        const key = group.dataset.filter;
        $$(".pill", group).forEach((pill) => {
            const active = pill.dataset.value === state[key];
            pill.classList.toggle("active", active);
            pill.setAttribute("aria-pressed", String(active));
        });
    });
    if (state.location) dom.searchLocation.value = state.location;
    dom.searchType.value = state.type;
    dom.priceRange.value = state.maxPrice;
    updatePriceOutput();
    dom.favoritesToggle.classList.toggle("active", state.favoritesOnly);
    dom.favoritesToggle.setAttribute("aria-pressed", String(state.favoritesOnly));
    $("i", dom.favoritesToggle).className = `fa-${state.favoritesOnly ? "solid" : "regular"} fa-heart`;
    dom.sortSelect.value = state.sort;
}

function resetAllFilters() {
    Object.assign(state, {
        location: null, type: "All", transmission: "All", fuel: "All",
        maxPrice: PRICE_MAX, favoritesOnly: false
    });
    syncFilterUI();
    renderCars();
}

function initFilters() {
    $$(".pill-group").forEach((group) => {
        group.addEventListener("click", (e) => {
            const pill = e.target.closest(".pill");
            if (!pill) return;
            state[group.dataset.filter] = pill.dataset.value;
            syncFilterUI();
            renderCars();
        });
    });

    const debouncedRender = debounce(renderCars, 120);
    dom.priceRange.addEventListener("input", () => {
        state.maxPrice = Number(dom.priceRange.value);
        updatePriceOutput();
        debouncedRender();
    });

    dom.favoritesToggle.addEventListener("click", () => {
        state.favoritesOnly = !state.favoritesOnly;
        syncFilterUI();
        renderCars();
    });

    dom.resetFilters.addEventListener("click", () => { resetAllFilters(); showToast("Filters cleared", "info"); });
    dom.emptyReset.addEventListener("click", () => { resetAllFilters(); showToast("Filters cleared", "info"); });

    dom.filtersOpen.addEventListener("click", openFilters);
    dom.filtersClose.addEventListener("click", closeFilters);
    dom.filtersApply.addEventListener("click", () => {
        closeFilters();
        showToast("Filter applied");
    });

    // Removable filter chips (event delegation)
    dom.chips.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-chip]");
        if (!btn) return;
        const key = btn.dataset.chip;
        if (key === "all") return resetAllFilters();
        if (key === "location") state.location = null;
        else if (key === "maxPrice") state.maxPrice = PRICE_MAX;
        else if (key === "favoritesOnly") state.favoritesOnly = false;
        else state[key] = "All";
        syncFilterUI();
        renderCars();
    });
}

/* ---------- 7. Sorting ---------- */
function sortCars(list) {
    const sorted = [...list];
    switch (state.sort) {
        case "price-asc": sorted.sort((a, b) => a.price - b.price); break;
        case "price-desc": sorted.sort((a, b) => b.price - a.price); break;
        case "rating": sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews); break;
        default: sorted.sort((a, b) => a.id - b.id);
    }
    return sorted;
}

function initSorting() {
    dom.sortSelect.addEventListener("change", () => {
        state.sort = dom.sortSelect.value;
        renderCars();
    });
}

/* ---------- 8. Rendering ---------- */
const carStatus = (car) => {
    if (state.reserved.has(car.id)) return "reserved";
    if (!car.available) return "unavailable";
    return "available";
};

function carCardHTML(car, index) {
    const status = carStatus(car);
    const fav = state.favorites.has(car.id);
    const badge = status === "reserved" ? '<span class="car-badge reserved">Reserved</span>'
        : status === "unavailable" ? '<span class="car-badge unavailable">Currently Booked</span>'
        : `<span class="car-badge">${car.category}</span>`;
    const rentLabel = status === "reserved" ? "Reserved" : status === "unavailable" ? "Unavailable" : "Rent Now";

    return `
    <article class="car-card ${status !== "available" ? `is-${status}` : ""}" style="animation-delay:${Math.min(index, 8) * 50}ms">
        <div class="car-media">
            <img src="${IMG(car.image)}" alt="${car.name} rental car" loading="lazy" decoding="async" width="800" height="500">
            ${badge}
            <button type="button" class="fav-btn ${fav ? "active" : ""}" data-action="fav" data-id="${car.id}"
                aria-pressed="${fav}" aria-label="${fav ? "Remove" : "Add"} ${car.name} ${fav ? "from" : "to"} favorites">
                <i class="fa-${fav ? "solid" : "regular"} fa-heart" aria-hidden="true"></i>
            </button>
        </div>
        <div class="car-body">
            <div class="car-top">
                <div>
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-cat">${car.category}</p>
                </div>
                <span class="car-rating" aria-label="Rated ${car.rating} out of 5"><i class="fa-solid fa-star" aria-hidden="true"></i>${car.rating.toFixed(1)}</span>
            </div>
            <ul class="car-specs" role="list">
                <li><i class="fa-solid fa-user-group" aria-hidden="true"></i>${car.seats} Seats</li>
                <li><i class="fa-solid fa-gears" aria-hidden="true"></i>${car.transmission}</li>
                <li><i class="fa-solid fa-gas-pump" aria-hidden="true"></i>${car.fuel}</li>
            </ul>
            <p class="car-price"><strong>${formatPKR(car.price)}</strong><span>/ day</span></p>
            <div class="car-actions">
                <button type="button" class="btn btn-outline" data-action="details" data-id="${car.id}">View Details</button>
                <button type="button" class="btn btn-primary" data-action="rent" data-id="${car.id}" ${status !== "available" ? "disabled" : ""}>${rentLabel}</button>
            </div>
        </div>
    </article>`;
}

function renderChips() {
    const chips = [];
    if (state.location) chips.push(["location", `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${state.location}`]);
    if (state.type !== "All") chips.push(["type", state.type]);
    if (state.transmission !== "All") chips.push(["transmission", state.transmission]);
    if (state.fuel !== "All") chips.push(["fuel", state.fuel]);
    if (state.maxPrice < PRICE_MAX) chips.push(["maxPrice", `Up to ${formatPKR(state.maxPrice)}`]);
    if (state.favoritesOnly) chips.push(["favoritesOnly", `<i class="fa-solid fa-heart" aria-hidden="true"></i> Favorites`]);

    dom.chips.innerHTML = chips.map(([key, label]) => `
        <span class="chip">${label}
            <button type="button" data-chip="${key}" aria-label="Remove ${key === "maxPrice" ? "price" : key} filter"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
        </span>`).join("") + (chips.length > 1 ? '<button type="button" class="chip-clear" data-chip="all">Clear all</button>' : "");
}

function renderCars() {
    const list = getVisibleCars();
    dom.carGrid.innerHTML = list.map(carCardHTML).join("");
    dom.emptyState.hidden = list.length > 0;
    dom.carGrid.hidden = list.length === 0;

    if (!list.length) {
        const noFavs = state.favoritesOnly && state.favorites.size === 0;
        $("h3", dom.emptyState).textContent = noFavs ? "No favorites yet." : "No vehicles found.";
        $("p", dom.emptyState).textContent = noFavs
            ? "Tap the heart on any car to save it here."
            : "Try changing your filters or rental dates.";
    }

    const where = state.location ? `for ${state.location}` : "across Pakistan";
    let dates = "";
    const check = validateDates(state.pickup, state.returnDate);
    if (state.pickup && check.days) dates = ` · ${shortDate(state.pickup)} – ${shortDate(state.returnDate)} (${plural(check.days, "day")})`;
    dom.resultsTitle.textContent = state.location ? "Available Cars" : "All Vehicles";
    dom.resultsCount.innerHTML = `<strong>${plural(list.length, "vehicle")}</strong> found ${where}${dates}`;

    renderChips();
    dom.favCount.textContent = state.favorites.size;
}

function renderLocations() {
    dom.locationGrid.innerHTML = locations.map((loc) => {
        const models = cars.filter((c) => c.locations.includes(loc.city)).length;
        return `
        <article class="location-card reveal">
            <img src="${IMG(loc.image, 700)}" alt="${loc.city}, Pakistan" loading="lazy" decoding="async">
            <div class="location-body">
                <div>
                    <h3>${loc.city}</h3>
                    <p><i class="fa-solid fa-car" aria-hidden="true"></i>${loc.vehicles} vehicles · ${models} models</p>
                </div>
                <button type="button" class="btn btn-accent" data-action="explore" data-city="${loc.city}" aria-label="Explore cars in ${loc.city}">
                    Explore Cars <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </button>
            </div>
        </article>`;
    }).join("");
}

/* ---------- 9. Favorites ---------- */
function toggleFavorite(id) {
    const car = findCar(id);
    if (!car) return;
    if (state.favorites.has(car.id)) {
        state.favorites.delete(car.id);
        showToast(`Removed ${car.name} from favorites`, "info");
    } else {
        state.favorites.add(car.id);
        showToast("Added to favorites");
    }
    store.set(STORAGE.favorites, [...state.favorites]);

    // Update hearts in place (cards + open details modal) to keep the animation smooth
    $$(`[data-action="fav"][data-id="${car.id}"]`).forEach((btn) => {
        const fav = state.favorites.has(car.id);
        btn.classList.toggle("active", fav);
        btn.setAttribute("aria-pressed", String(fav));
        btn.setAttribute("aria-label", `${fav ? "Remove" : "Add"} ${car.name} ${fav ? "from" : "to"} favorites`);
        $("i", btn).className = `fa-${fav ? "solid" : "regular"} fa-heart`;
    });
    dom.favCount.textContent = state.favorites.size;
    if (state.favoritesOnly) renderCars();
}

/* ---------- 10. Modal ---------- */
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function openModal(modal, { returnFocus = document.activeElement } = {}) {
    clearTimeout(modal._hideTimer);
    modal._returnFocus = returnFocus;
    modal.hidden = false;
    if (!modalStack.includes(modal)) modalStack.push(modal);
    updateScrollLock();
    requestAnimationFrame(() => {
        modal.classList.add("open");
        const first = $$(FOCUSABLE, modal).find((el) => !el.classList.contains("modal-close")) || $(".modal-close", modal);
        first?.focus({ preventScroll: true });
    });
}

function closeModal(modal, { restoreFocus = true } = {}) {
    if (!modal || modal.hidden) return;
    modal.classList.remove("open");
    const idx = modalStack.indexOf(modal);
    if (idx > -1) modalStack.splice(idx, 1);
    updateScrollLock();
    modal._hideTimer = setTimeout(() => { modal.hidden = true; }, 300);
    if (restoreFocus && modal._returnFocus && document.contains(modal._returnFocus)) {
        modal._returnFocus.focus({ preventScroll: true });
    }
}

function initModals() {
    $$(".modal").forEach((modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target.closest("[data-close]")) closeModal(modal);
        });
    });

    document.addEventListener("keydown", (e) => {
        const top = modalStack[modalStack.length - 1];
        if (e.key === "Escape") {
            if (top) closeModal(top);
            else if (menuOpen) closeMenu();
            else if (filtersOpen) closeFilters();
            return;
        }
        if (e.key !== "Tab") return;
        const container = top || (menuOpen ? dom.mobileMenu : filtersOpen ? dom.filtersPanel : null);
        if (!container) return;
        const items = $$(FOCUSABLE, container).filter((el) => el.offsetParent !== null);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
}

function openDetails(id, trigger) {
    const car = findCar(id);
    if (!car) return;
    const status = carStatus(car);
    const fav = state.favorites.has(car.id);
    const specs = [
        ["fa-user-group", "Seats", car.seats],
        ["fa-door-open", "Doors", car.doors],
        ["fa-gears", "Transmission", car.transmission],
        ["fa-gas-pump", "Fuel", car.fuel],
        ["fa-gauge-high", "Mileage", car.mileage],
        ["fa-shield-halved", "Insurance", "Comprehensive"]
    ];

    dom.detailsContent.innerHTML = `
        <div class="details-media">
            <img src="${IMG(car.image, 1200)}" alt="${car.name}" loading="lazy">
            <span class="car-badge ${status === "available" ? "" : status}">${status === "reserved" ? "Reserved" : status === "unavailable" ? "Currently Booked" : car.category}</span>
        </div>
        <div class="details-info">
            <div>
                <span class="eyebrow">${car.category}</span>
                <h2 id="detailsTitle">${car.name}</h2>
                <div class="details-meta">
                    <span class="car-rating"><i class="fa-solid fa-star" aria-hidden="true"></i>${car.rating.toFixed(1)}</span>
                    <span>${car.reviews} reviews</span>
                    <span aria-hidden="true">·</span>
                    <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${car.locations.length === ALL_CITIES.length ? "All cities" : car.locations.join(", ")}</span>
                </div>
            </div>
            <p class="details-desc">${car.description}</p>
            <div class="spec-grid">
                ${specs.map(([icon, label, value]) => `
                    <div class="spec"><i class="fa-solid ${icon}" aria-hidden="true"></i><span>${label}</span><strong>${value}</strong></div>`).join("")}
            </div>
            <div>
                <h3 class="details-h">Features</h3>
                <ul class="feature-list" role="list">
                    ${car.features.map((f) => `<li><i class="fa-solid fa-circle-check" aria-hidden="true"></i>${f}</li>`).join("")}
                </ul>
            </div>
            <div class="details-foot">
                <div class="details-price">
                    <strong>${formatPKR(car.price)} <small>/ day</small></strong>
                    <span>Security deposit: ${formatPKR(car.deposit)} (refundable)</span>
                </div>
                <div class="car-actions">
                    <button type="button" class="btn btn-outline fav-btn-inline ${fav ? "active" : ""}" data-action="fav" data-id="${car.id}" aria-pressed="${fav}" aria-label="${fav ? "Remove" : "Add"} ${car.name} ${fav ? "from" : "to"} favorites">
                        <i class="fa-${fav ? "solid" : "regular"} fa-heart" aria-hidden="true"></i> Save
                    </button>
                    <button type="button" class="btn btn-accent" data-action="rent" data-id="${car.id}" ${status !== "available" ? "disabled" : ""}>
                        ${status === "available" ? "Rent This Car" : status === "reserved" ? "Reserved" : "Unavailable"}
                    </button>
                </div>
            </div>
        </div>`;

    openModal(dom.detailsModal, { returnFocus: trigger });
}

/* ---------- 11. Booking ---------- */
function openBooking(id, trigger) {
    const car = findCar(id);
    if (!car) return;
    const status = carStatus(car);
    if (status !== "available") {
        showToast(`${car.name} is ${status === "reserved" ? "already reserved" : "currently unavailable"}`, "error");
        return;
    }
    state.currentCar = car;

    // If coming from the details modal, close it and return focus to the original card button
    let returnFocus = trigger;
    if (!dom.detailsModal.hidden) {
        returnFocus = dom.detailsModal._returnFocus || trigger;
        closeModal(dom.detailsModal, { restoreFocus: false });
    }

    dom.selectedCar.innerHTML = `
        <img src="${IMG(car.image, 300)}" alt="${car.name}">
        <div>
            <h3>${car.name}</h3>
            <p>${car.category} · ${car.transmission} · ${car.fuel}</p>
            <p><strong>${formatPKR(car.price)}</strong>/day</p>
        </div>`;
    dom.sumCarName.textContent = car.name;

    // Prefill rental details from the search widget
    dom.bkLocation.value = state.location || dom.searchLocation.value;
    const searchCheck = validateDates(dom.searchPickup.value, dom.searchReturn.value);
    if (searchCheck.days) {
        dom.bkPickup.value = dom.searchPickup.value;
        dom.bkReturn.value = dom.searchReturn.value;
    } else {
        const start = addDays(today(), 1);
        dom.bkPickup.value = toISO(start);
        dom.bkReturn.value = toISO(addDays(start, 3));
    }
    syncDatePair(dom.bkPickup, dom.bkReturn);

    // Prefill email for signed-in users
    const user = store.get(STORAGE.user, null);
    if (user && !dom.bkEmail.value) dom.bkEmail.value = user.email;

    clearFormErrors(dom.bookingForm);
    dom.bookingFormView.hidden = false;
    dom.confirmView.hidden = true;
    dom.bookingModal.setAttribute("aria-labelledby", "bookingTitle");
    updatePrice();
    openModal(dom.bookingModal, { returnFocus });
}

function initBooking() {
    dom.bkPickup.addEventListener("change", () => {
        syncDatePair(dom.bkPickup, dom.bkReturn);
        validateDateFields();
        updatePrice();
    });
    dom.bkReturn.addEventListener("change", () => { validateDateFields(); updatePrice(); });

    // Auto-format CNIC as 12345-1234567-1
    dom.bkCnic.addEventListener("input", () => {
        const digits = dom.bkCnic.value.replace(/\D/g, "").slice(0, 13);
        let out = digits.slice(0, 5);
        if (digits.length > 5) out += `-${digits.slice(5, 12)}`;
        if (digits.length > 12) out += `-${digits.slice(12)}`;
        dom.bkCnic.value = out;
    });

    // Live validation: on blur, and re-check while typing once a field is flagged
    Object.keys(validators).forEach((key) => {
        const input = dom[key];
        input.addEventListener("blur", () => { if (input.value.trim()) validateField(key); });
        input.addEventListener("input", () => { if (input.getAttribute("aria-invalid") === "true") validateField(key); });
    });

    dom.bookingForm.addEventListener("submit", handleBookingSubmit);
}

/* ---------- 12. Price Calculation ---------- */
function calculatePrice(car, days) {
    const subtotal = car.price * days;
    const total = subtotal + SERVICE_FEE + car.deposit;
    return { rate: car.price, days, subtotal, service: SERVICE_FEE, deposit: car.deposit, total };
}

function updatePrice() {
    const car = state.currentCar;
    if (!car) return;
    const { days } = validateDates(dom.bkPickup.value, dom.bkReturn.value);

    dom.sumService.textContent = formatPKR(SERVICE_FEE);
    dom.sumDeposit.textContent = formatPKR(car.deposit);

    if (!days) {
        dom.sumRateLabel.textContent = `${formatPKR(car.price)} × — days`;
        dom.sumSubtotal.textContent = "—";
        dom.sumTotal.textContent = "—";
        dom.sumDates.textContent = "Please select a valid return date.";
        return;
    }

    const price = calculatePrice(car, days);
    const prevTotal = dom.sumTotal.textContent;
    dom.sumRateLabel.textContent = `${formatPKR(price.rate)} × ${plural(days, "day")}`;
    dom.sumSubtotal.textContent = formatPKR(price.subtotal);
    dom.sumTotal.textContent = formatPKR(price.total);
    dom.sumDates.textContent = `${formatDate(dom.bkPickup.value)} → ${formatDate(dom.bkReturn.value)}`;

    if (prevTotal !== dom.sumTotal.textContent) {
        dom.sumTotal.classList.remove("bump");
        void dom.sumTotal.offsetWidth; // restart animation
        dom.sumTotal.classList.add("bump");
    }
}

/* ---------- 13. Form Validation ---------- */
const validators = {
    bkName: (v) => {
        if (!v) return "Please enter your full name.";
        if (!/^[A-Za-z][A-Za-z .'-]{2,59}$/.test(v)) return "Name should contain letters only (at least 3 characters).";
        return "";
    },
    bkEmail: (v) => {
        if (!v) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Please enter a valid email, e.g. name@example.com.";
        return "";
    },
    bkPhone: (v) => {
        if (!v) return "Please enter your phone number.";
        const clean = v.replace(/[\s-]/g, "");
        if (!/^(?:\+92|0092|92|0)3\d{9}$/.test(clean)) return "Enter a valid Pakistani mobile number, e.g. 0300 1234567 or +92 300 1234567.";
        return "";
    },
    bkCnic: (v) => {
        if (!v) return "Please enter your CNIC number.";
        if (!/^\d{5}-\d{7}-\d$/.test(v)) return "CNIC must be in the format 12345-1234567-1.";
        return "";
    }
};

function setFieldError(input, message) {
    const err = $(`#${input.id}-err`);
    if (err) err.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    input.classList.toggle("valid", !message && Boolean(input.value.trim()));
}

function validateField(key) {
    const input = dom[key];
    const message = validators[key](input.value.trim());
    setFieldError(input, message);
    return !message;
}

function validateDateFields() {
    const { pickupError, returnError } = validateDates(dom.bkPickup.value, dom.bkReturn.value);
    setFieldError(dom.bkPickup, pickupError);
    setFieldError(dom.bkReturn, returnError);
    return !pickupError && !returnError;
}

function clearFormErrors(form) {
    $$("[aria-invalid]", form).forEach((el) => { el.removeAttribute("aria-invalid"); el.classList.remove("valid"); });
    $$(".field-error", form).forEach((el) => { el.textContent = ""; });
    if (form === dom.bookingForm) dom.formAlert.hidden = true;
}

function validateBookingForm() {
    const datesOk = validateDateFields();
    const fieldsOk = Object.keys(validators).map(validateField).every(Boolean);
    return datesOk && fieldsOk;
}

/* ---------- 14. LocalStorage (booking persistence) ---------- */
const generateBookingId = () => `DX-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
const getBooking = () => store.get(STORAGE.booking, null);

function handleBookingSubmit(e) {
    e.preventDefault();
    const car = state.currentCar;
    if (!car) return;

    if (!validateBookingForm()) {
        dom.formAlert.hidden = false;
        // Restart the shake animation each time
        dom.formAlert.style.animation = "none";
        void dom.formAlert.offsetWidth;
        dom.formAlert.style.animation = "";
        const firstInvalid = $('[aria-invalid="true"]', dom.bookingForm);
        firstInvalid?.focus();
        return;
    }
    dom.formAlert.hidden = true;

    const { days } = validateDates(dom.bkPickup.value, dom.bkReturn.value);
    const booking = {
        id: generateBookingId(),
        createdAt: new Date().toISOString(),
        car: {
            id: car.id, name: car.name, category: car.category, image: car.image,
            transmission: car.transmission, fuel: car.fuel, seats: car.seats
        },
        location: dom.bkLocation.value,
        pickup: dom.bkPickup.value,
        returnDate: dom.bkReturn.value,
        pricing: calculatePrice(car, days),
        customer: {
            name: dom.bkName.value.trim(),
            email: dom.bkEmail.value.trim(),
            phone: dom.bkPhone.value.trim(),
            cnic: dom.bkCnic.value.trim(),
            request: dom.bkRequest.value.trim()
        }
    };

    store.set(STORAGE.booking, booking);
    state.reserved.add(car.id);
    if (session) store.set(STORAGE.reserved, [...state.reserved], session);

    renderCars();
    updateBookingIndicator();

    dom.confirmView.innerHTML = `
        <div class="confirm-check"><i class="fa-solid fa-check" aria-hidden="true"></i></div>
        <h2 id="confirmTitle" tabindex="-1">Booking Confirmed</h2>
        <p>Your car has been successfully reserved. A confirmation has been sent to <strong>${escapeHTML(booking.customer.email)}</strong>.</p>
        ${ticketHTML(booking)}
        <div class="confirm-actions">
            <button type="button" class="btn btn-primary btn-lg" data-action="print"><i class="fa-solid fa-print" aria-hidden="true"></i> Print Booking</button>
            <button type="button" class="btn btn-outline btn-lg" data-action="home"><i class="fa-solid fa-house" aria-hidden="true"></i> Back to Home</button>
        </div>`;
    dom.bookingFormView.hidden = true;
    dom.confirmView.hidden = false;
    dom.bookingModal.setAttribute("aria-labelledby", "confirmTitle");
    dom.bookingModal.scrollTop = 0;
    $("#confirmTitle").focus();

    dom.bookingForm.reset();
    clearFormErrors(dom.bookingForm);
    showToast("Booking saved successfully");
}

function ticketHTML(b) {
    const p = b.pricing;
    return `
    <div class="ticket">
        <div class="ticket-head">
            <div><span>Booking ID</span><strong>${escapeHTML(b.id)}</strong></div>
            <div><span>Status</span><strong>Confirmed</strong></div>
        </div>
        <div class="ticket-car">
            <img src="${IMG(b.car.image, 300)}" alt="${escapeHTML(b.car.name)}">
            <div>
                <h3>${escapeHTML(b.car.name)}</h3>
                <p>${b.car.category} · ${b.car.transmission} · ${b.car.fuel}</p>
            </div>
        </div>
        <div class="ticket-grid">
            <div><span>Pickup</span><strong>${escapeHTML(b.location)}</strong><small>${formatDate(b.pickup)}</small></div>
            <div><span>Return</span><strong>${escapeHTML(b.location)}</strong><small>${formatDate(b.returnDate)}</small></div>
            <div><span>Customer</span><strong>${escapeHTML(b.customer.name)}</strong><small>${escapeHTML(b.customer.phone)}</small></div>
            <div><span>Duration</span><strong>${plural(p.days, "day")}</strong><small>${formatPKR(p.rate)} / day</small></div>
        </div>
        <dl class="ticket-lines">
            <div><dt>Subtotal</dt><dd>${formatPKR(p.subtotal)}</dd></div>
            <div><dt>Service Fee</dt><dd>${formatPKR(p.service)}</dd></div>
            <div><dt>Security Deposit</dt><dd>${formatPKR(p.deposit)}</dd></div>
        </dl>
        <div class="ticket-total"><span>Total</span><strong>${formatPKR(p.total)}</strong></div>
    </div>`;
}

function printHTML(b) {
    const p = b.pricing;
    const row = (label, value) => `<tr><th>${label}</th><td>${value}</td></tr>`;
    return `
    <div class="print-doc">
        <div class="print-head">
            <span class="logo-text">Drive<span>X</span></span>
            <p>Lahore, Pakistan · +92 300 1234567 · support@drivex.pk</p>
        </div>
        <div class="print-title">
            <h1>Booking Confirmation</h1>
            <span class="print-status">CONFIRMED</span>
        </div>
        <table class="print-table">
            ${row("Booking ID", escapeHTML(b.id))}
            ${row("Booked on", new Date(b.createdAt).toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" }))}
        </table>
        <p class="print-section">Vehicle</p>
        <table class="print-table">
            ${row("Car", `${escapeHTML(b.car.name)} (${b.car.category})`)}
            ${row("Specs", `${b.car.seats} seats · ${b.car.transmission} · ${b.car.fuel}`)}
        </table>
        <p class="print-section">Rental</p>
        <table class="print-table">
            ${row("Pickup", `${escapeHTML(b.location)} — ${formatDate(b.pickup)}`)}
            ${row("Return", `${escapeHTML(b.location)} — ${formatDate(b.returnDate)}`)}
            ${row("Duration", plural(p.days, "day"))}
        </table>
        <p class="print-section">Customer</p>
        <table class="print-table">
            ${row("Name", escapeHTML(b.customer.name))}
            ${row("Email", escapeHTML(b.customer.email))}
            ${row("Phone", escapeHTML(b.customer.phone))}
            ${row("CNIC", escapeHTML(b.customer.cnic))}
            ${b.customer.request ? row("Special Request", escapeHTML(b.customer.request)) : ""}
        </table>
        <p class="print-section">Payment Summary</p>
        <table class="print-table">
            ${row(`Daily Rate × ${plural(p.days, "day")}`, `${formatPKR(p.rate)} × ${p.days} = ${formatPKR(p.subtotal)}`)}
            ${row("Service Fee", formatPKR(p.service))}
            ${row("Security Deposit (refundable)", formatPKR(p.deposit))}
            <tr class="total"><th>Total</th><td>${formatPKR(p.total)}</td></tr>
        </table>
        <p class="print-foot">Please bring your original CNIC and driving licence at pick-up. Free cancellation up to 24 hours before pick-up. Thank you for choosing DriveX — Your Journey. Your Car. Your Freedom.</p>
    </div>`;
}

function printBooking() {
    const booking = getBooking();
    if (!booking) { showToast("No booking to print", "error"); return; }
    dom.printArea.innerHTML = printHTML(booking);
    window.print();
}

function renderMyBooking() {
    const booking = getBooking();
    if (!booking) {
        dom.myBookingContent.innerHTML = `
            <div class="my-booking-empty">
                <div class="empty-icon"><i class="fa-regular fa-calendar-xmark" aria-hidden="true"></i></div>
                <h3>No bookings yet</h3>
                <p>Once you reserve a car, your booking details will appear here.</p>
                <button type="button" class="btn btn-primary" data-action="browse">Browse Cars</button>
            </div>`;
        return;
    }
    dom.myBookingContent.innerHTML = `
        <p class="modal-sub">Your latest reservation, saved on this device.</p>
        ${ticketHTML(booking)}
        <div class="confirm-actions">
            <button type="button" class="btn btn-primary" data-action="print"><i class="fa-solid fa-print" aria-hidden="true"></i> Print Booking</button>
            <button type="button" class="btn btn-outline" data-action="cancel-booking"><i class="fa-solid fa-ban" aria-hidden="true"></i> Cancel Booking</button>
        </div>`;
}

function cancelBooking(btn) {
    // Two-step confirmation without a blocking dialog
    if (btn.dataset.confirm !== "1") {
        btn.dataset.confirm = "1";
        btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Tap again to confirm';
        btn.classList.add("btn-danger");
        setTimeout(() => {
            if (document.contains(btn)) {
                btn.dataset.confirm = "";
                btn.innerHTML = '<i class="fa-solid fa-ban" aria-hidden="true"></i> Cancel Booking';
            }
        }, 4000);
        return;
    }
    const booking = getBooking();
    if (booking) {
        state.reserved.delete(booking.car.id);
        if (session) store.set(STORAGE.reserved, [...state.reserved], session);
    }
    store.remove(STORAGE.booking);
    renderCars();
    renderMyBooking();
    updateBookingIndicator();
    showToast("Booking cancelled", "info");
}

function updateBookingIndicator() {
    dom.bookingDot.hidden = !getBooking();
}

/* ---------- 15. FAQ ---------- */
function initFAQ() {
    $("#faqList").addEventListener("click", (e) => {
        const trigger = e.target.closest(".acc-trigger");
        if (!trigger) return;
        const item = trigger.closest(".acc-item");
        const willOpen = !item.classList.contains("open");

        // Single-open accordion for a tidy layout
        $$(".acc-item.open", item.parentElement).forEach((other) => {
            other.classList.remove("open");
            $(".acc-trigger", other).setAttribute("aria-expanded", "false");
        });
        item.classList.toggle("open", willOpen);
        trigger.setAttribute("aria-expanded", String(willOpen));
    });
}

/* ---------- 16. Counters ---------- */
function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = Number(el.dataset.decimals || 0);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = (target * easeOut(progress)).toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

function initCounters() {
    const counters = $$(".stat-num");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.6 });
    counters.forEach((c) => observer.observe(c));
}

/* ---------- 17. Scroll Animations ---------- */
function initReveal() {
    const items = $$(".reveal");
    // Stagger siblings for a subtle cascade
    items.forEach((el) => {
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
        const index = siblings.indexOf(el);
        if (index > 0) el.style.transitionDelay = `${Math.min(index, 6) * 90}ms`;
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => observer.observe(el));
}

/* ---------- 18. Theme, Toasts & Misc ---------- */
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const dark = theme === "dark";
    dom.themeToggle.setAttribute("aria-pressed", String(dark));
    dom.themeToggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
    $("i", dom.themeToggle).className = `fa-solid fa-${dark ? "sun" : "moon"}`;
    $('meta[name="theme-color"]').setAttribute("content", dark ? "#0B0F14" : "#FFFFFF");
}

function initTheme() {
    applyTheme(store.get(STORAGE.theme, "light") === "dark" ? "dark" : "light");
    dom.themeToggle.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        store.set(STORAGE.theme, next);
        showToast(`${next === "dark" ? "Dark" : "Light"} mode enabled`, "info");
    });
}

function showToast(message, type = "success") {
    const icons = { success: "fa-check", error: "fa-xmark", info: "fa-info" };
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", type === "error" ? "alert" : "status");
    toast.innerHTML = `<span class="toast-icon"><i class="fa-solid ${icons[type] || icons.info}" aria-hidden="true"></i></span><span>${escapeHTML(message)}</span>`;
    dom.toastStack.appendChild(toast);

    // Cap visible toasts
    while (dom.toastStack.children.length > 3) dom.toastStack.firstElementChild.remove();

    setTimeout(() => {
        toast.classList.add("leaving");
        toast.addEventListener("animationend", () => toast.remove(), { once: true });
    }, 3000);
}

function updateSignInUI() {
    const user = store.get(STORAGE.user, null);
    const label = user ? `Hi, ${user.name}` : "Sign In";
    dom.signInLabel.textContent = label;
    $$(".signin-mobile-label").forEach((el) => { el.textContent = user ? "Sign Out" : "Sign In"; });
    dom.signInBtn.setAttribute("aria-label", user ? `Signed in as ${user.name}. Sign out` : "Sign in");
}

function handleSignInClick(trigger) {
    const user = store.get(STORAGE.user, null);
    if (user) {
        store.remove(STORAGE.user);
        updateSignInUI();
        showToast("You have been signed out", "info");
        return;
    }
    clearFormErrors(dom.signInForm);
    dom.signInForm.reset();
    openModal(dom.signInModal, { returnFocus: trigger });
}

function initSignIn() {
    updateSignInUI();
    dom.signInBtn.addEventListener("click", () => handleSignInClick(dom.signInBtn));

    dom.signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = $("#siEmail");
        const password = $("#siPassword");
        const emailErr = validators.bkEmail(email.value.trim());
        const passErr = password.value.length >= 6 ? "" : "Password must be at least 6 characters.";
        setFieldError(email, emailErr);
        setFieldError(password, passErr);
        if (emailErr || passErr) { (emailErr ? email : password).focus(); return; }

        const local = email.value.trim().split("@")[0].replace(/[^a-zA-Z]/g, "") || "Driver";
        const name = local.charAt(0).toUpperCase() + local.slice(1, 12).toLowerCase();
        store.set(STORAGE.user, { email: email.value.trim(), name });
        updateSignInUI();
        closeModal(dom.signInModal);
        showToast(`Welcome back, ${name}`);
    });
}

const FALLBACK_IMG = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#151B23"/><text x="200" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" font-style="italic" fill="#E5B94C">DriveX</text></svg>'
)}`;

function initImageFallback() {
    document.addEventListener("error", (e) => {
        const img = e.target;
        if (img.tagName !== "IMG" || img.dataset.fallback) return;
        img.dataset.fallback = "1";
        img.classList.add("img-fallback");
        img.src = FALLBACK_IMG;
    }, true);
}

/** Single delegated click handler for dynamic actions across the page and modals. */
function initActions() {
    document.addEventListener("click", (e) => {
        const el = e.target.closest("[data-action]");
        if (el) {
            const { action, id } = el.dataset;
            switch (action) {
                case "details": openDetails(id, el); break;
                case "rent": openBooking(id, el); break;
                case "fav": toggleFavorite(id); break;
                case "explore":
                    state.location = el.dataset.city;
                    syncFilterUI();
                    renderCars();
                    $("#cars").scrollIntoView({ behavior: "smooth" });
                    showToast(`Showing cars in ${el.dataset.city}`, "info");
                    break;
                case "print": printBooking(); break;
                case "home":
                    closeModal(dom.bookingModal, { restoreFocus: false });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    break;
                case "browse":
                    closeModal(dom.myBookingModal, { restoreFocus: false });
                    $("#cars").scrollIntoView({ behavior: "smooth" });
                    break;
                case "cancel-booking": cancelBooking(el); break;
            }
            return;
        }

        const info = e.target.closest("[data-info]");
        if (info) {
            const page = infoPages[info.dataset.info];
            dom.infoTitle.textContent = page.title;
            dom.infoBody.innerHTML = page.body;
            openModal(dom.infoModal, { returnFocus: info });
            return;
        }

        if (e.target.closest("[data-open-booking-view]")) {
            closeMenu({ restoreFocus: false });
            renderMyBooking();
            openModal(dom.myBookingModal, { returnFocus: dom.menuToggle });
            return;
        }

        if (e.target.closest("[data-open-signin]")) {
            closeMenu({ restoreFocus: false });
            handleSignInClick(dom.menuToggle);
        }
    });

    dom.myBookingBtn.addEventListener("click", () => {
        renderMyBooking();
        openModal(dom.myBookingModal, { returnFocus: dom.myBookingBtn });
    });

    dom.backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        $(".logo").focus({ preventScroll: true });
    });

}

/* ---------- 19. Init ---------- */
function init() {
    $("#year").textContent = new Date().getFullYear();
    initImageFallback();
    initTheme();
    initNavigation();
    initModals();
    initSearch();
    initFilters();
    initSorting();
    initBooking();
    initSignIn();
    initActions();
    initFAQ();
    renderLocations();
    syncFilterUI();
    renderCars();
    updateBookingIndicator();
    initCounters();
    initReveal();
}

document.addEventListener("DOMContentLoaded", init);
