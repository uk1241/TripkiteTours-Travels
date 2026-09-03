(function(){
  "use strict";

  var WHATSAPP_NUMBER = "917902226701"; // Tripkite: 7902226701 (India)

  function waLink(message){
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function refreshWhatsappLinks(){
    document.querySelectorAll(".whatsapp-link").forEach(function(el){
      var msg = el.getAttribute("data-wa-msg") || "Hi Tripkite, I'd like to know more about your travel packages.";
      el.setAttribute("href", waLink(msg));
      if(!el.hasAttribute("target")) el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---------------- HEADER SCROLL ---------------- */
  var header = document.getElementById("site-header");
  function onScroll(){
    if(window.scrollY > 30){ header.classList.add("scrolled"); }
    else { header.classList.remove("scrolled"); }
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  /* ---------------- MOBILE MENU ---------------- */
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobile-menu");
  var mobileBackdrop = document.getElementById("mobile-menu-backdrop");

  function closeMenu(){
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
    mobileBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
  function toggleMenu(){
    var isOpen = mobileMenu.classList.contains("open");
    if(isOpen){ closeMenu(); }
    else{
      hamburger.classList.add("active");
      hamburger.setAttribute("aria-expanded", "true");
      mobileMenu.classList.add("open");
      mobileBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }
  hamburger.addEventListener("click", toggleMenu);
  mobileBackdrop.addEventListener("click", closeMenu);
  mobileMenu.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", closeMenu);
  });

  /* ---------------- DESTINATION TOGGLE ---------------- */
  var toggleBtns = document.querySelectorAll(".dest-toggle-btn");
  var domesticGrid = document.getElementById("domestic-grid");
  var internationalGrid = document.getElementById("international-grid");

  toggleBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
      toggleBtns.forEach(function(b){
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      var target = btn.getAttribute("data-target");
      if(target === "domestic"){
        domesticGrid.hidden = false;
        internationalGrid.hidden = true;
      } else {
        domesticGrid.hidden = true;
        internationalGrid.hidden = false;
      }
      revealVisible();
    });
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  var revealEls = document.querySelectorAll(".reveal-up");
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.12, rootMargin:"0px 0px -40px 0px" });

  revealEls.forEach(function(el){ io.observe(el); });

  function revealVisible(){
    document.querySelectorAll(".reveal-up:not(.in-view)").forEach(function(el){
      var rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight && rect.bottom > 0){
        el.classList.add("in-view");
      }
    });
  }

  /* ---------------- PACKAGE DATA ---------------- */
  var PACKAGES = {
    "kerala-4d3n": {
      title: "Kerala — 4 Days 3 Nights",
      duration: "4 Days / 3 Nights",
      price: "INR 14,499 per person",
      image: "https://loremflickr.com/1000/600/munnar,teagarden",
      itinerary: [
        "Arrival at Kochi, drive to Munnar. Check-in and evening at leisure.",
        "Munnar sightseeing — tea gardens, Eravikulam National Park, Mattupetty Dam.",
        "Check-out from Munnar, drive to Alleppey. Board houseboat, overnight backwater cruise.",
        "Breakfast on houseboat, disembark and transfer to Kochi for departure."
      ],
      highlights: ["2 Nights in Munnar","1 Night Alleppey Houseboat","Tea garden & Eravikulam visit","Backwater cruise with meals onboard"],
      inclusions: ["Accommodation as per itinerary","Daily breakfast","All meals during houseboat stay","Private vehicle for transfers & sightseeing","All applicable taxes"],
      exclusions: ["Airfare / train fare","Lunch & dinner (except houseboat)","Entry tickets & activities","Personal expenses & tips"],
      hotels: "Comfortable 3-star hotels/resorts in Munnar and a premium Alleppey houseboat with attached bathroom.",
      transport: "Private AC vehicle for all transfers and sightseeing throughout the package.",
      note: "Itinerary can be customized. Prices may vary based on season and hotel category."
    },
    "kerala-5d4n": {
      title: "Kerala — 5 Days 4 Nights",
      duration: "5 Days / 4 Nights",
      price: "INR 16,999 per person",
      image: "https://loremflickr.com/1000/600/alleppey,houseboat,backwaters",
      itinerary: [
        "Arrival at Kochi, drive to Munnar. Check-in and evening at leisure.",
        "Munnar sightseeing — tea gardens, Eravikulam National Park, Mattupetty Dam.",
        "Drive to Thekkady. Visit spice plantations, optional Periyar boating.",
        "Drive to Alleppey, board houseboat for an overnight backwater cruise.",
        "Breakfast on houseboat, disembark and transfer to Kochi for departure."
      ],
      highlights: ["2 Nights Munnar","1 Night Thekkady","1 Night Alleppey Houseboat","Spice plantation visit & backwater cruise"],
      inclusions: ["Accommodation as per itinerary","Daily breakfast","All meals during houseboat stay","Private vehicle for transfers & sightseeing","All applicable taxes"],
      exclusions: ["Airfare / train fare","Lunch & dinner (except houseboat)","Entry tickets & activities","Personal expenses & tips"],
      hotels: "Comfortable 3-star hotels/resorts in Munnar & Thekkady and a premium Alleppey houseboat with attached bathroom.",
      transport: "Private AC vehicle for all transfers and sightseeing throughout the package.",
      note: "Itinerary can be customized. Prices may vary based on season and hotel category."
    },
    "bali-4d3n": {
      title: "Bali — 4 Days 3 Nights",
      duration: "4 Days / 3 Nights",
      price: "INR 19,999 per person",
      image: "https://loremflickr.com/1000/600/bali,temple,tropical",
      itinerary: [
        "Arrival in Bali, transfer to hotel. Evening at leisure.",
        "Uluwatu Temple, Tanah Lot Temple & Kecak fire dance.",
        "Ulun Danu Beratan Temple, Handara Gate, Tegenungan Waterfall, Kintamani Volcano.",
        "Tegalalang Rice Terraces, Ubud Market, free time for shopping before departure."
      ],
      highlights: ["Uluwatu & Tanah Lot Temples","Ulun Danu Beratan Temple","Handara Gate","Tegenungan Waterfall","Kintamani Volcano","Tegalalang Rice Terraces & Ubud Market"],
      inclusions: ["Accommodation as per itinerary","Daily breakfast","Private air-conditioned vehicle","Sightseeing as per itinerary","All applicable taxes"],
      exclusions: ["International airfare","Visa fees (if applicable)","Lunch & dinner","Entry tickets & activities not mentioned","Personal expenses & tips"],
      hotels: "Well-rated 3–4 star hotels centrally located in Bali.",
      transport: "Private air-conditioned vehicle with English-speaking driver for all transfers and tours.",
      note: "Itinerary can be customized. Prices may vary based on season and hotel category."
    },
    "lakshadweep-4d3n": {
      title: "Lakshadweep — 4 Days 3 Nights",
      duration: "4 Days / 3 Nights",
      price: "INR 20,999",
      image: "https://loremflickr.com/1000/600/lakshadweep,island,lagoon",
      itinerary: [
        "Depart for Agatti Island, transfer to beachside homestay, evening at leisure.",
        "Agatti Island exploration, beach activities and local sightseeing.",
        "Glass boat ride to Kalpitty Island, snorkelling and kayaking session.",
        "Leisure morning at the beach, transfer for departure."
      ],
      highlights: ["Beachside Homestay","Agatti Island","Glass Boat Ride to Kalpitty Island","Snorkelling & Kayaking"],
      inclusions: ["Beachside homestay accommodation","Daily breakfast","Glass boat ride to Kalpitty Island","Snorkelling & kayaking session","Permit assistance"],
      exclusions: ["Airfare / ship fare to Agatti","Lunch & dinner","Entry permits (if additional)","Personal expenses & tips"],
      hotels: "Comfortable beachside homestay on Agatti Island.",
      transport: "Local transfers and boat rides included as per itinerary.",
      note: "Lakshadweep requires a valid entry permit — Tripkite assists with the complete permit process. Prices may vary by season."
    },
    "phuket-krabi-5d4n": {
      title: "Phuket & Krabi — 5 Days 4 Nights",
      duration: "5 Days / 4 Nights",
      price: "INR 36,999 per person",
      image: "https://loremflickr.com/1000/600/phuket,krabi,islands",
      itinerary: [
        "Arrival in Phuket, transfer to hotel. Evening at leisure.",
        "Phuket City Tour — Big Buddha, Old Town, viewpoints.",
        "Phi Phi Island full-day tour by speedboat.",
        "Transfer to Krabi. Krabi City Tour and local sightseeing.",
        "4 Islands Tour in Krabi, transfer for departure."
      ],
      highlights: ["2 Nights Phuket","2 Nights Krabi","Phuket City Tour","Phi Phi Island Tour","Krabi City Tour","4 Islands Tour"],
      inclusions: ["Accommodation as per itinerary","Daily breakfast","Phi Phi Island & 4 Islands boat tours","Private transfers","All applicable taxes"],
      exclusions: ["International airfare","Visa fees (if applicable)","Lunch & dinner","Entry tickets & activities not mentioned","Personal expenses & tips"],
      hotels: "Well-rated 3–4 star hotels in Phuket and Krabi.",
      transport: "Private transfers between cities plus shared/private boat tours as per itinerary.",
      note: "Itinerary can be customized. Prices may vary based on season and hotel category."
    }
  };

  /* ---------------- PACKAGE MODAL ---------------- */
  var modalBackdrop = document.getElementById("package-modal-backdrop");
  var modalClose = document.getElementById("modal-close");

  function fillList(id, items){
    var ul = document.getElementById(id);
    ul.innerHTML = "";
    items.forEach(function(txt){
      var li = document.createElement("li");
      li.textContent = txt;
      ul.appendChild(li);
    });
  }

  function openPackageModal(key){
    var pkg = PACKAGES[key];
    if(!pkg) return;

    document.getElementById("modal-img").style.backgroundImage = "url('" + pkg.image + "')";
    document.getElementById("modal-title").textContent = pkg.title;
    document.getElementById("modal-duration").textContent = pkg.duration;
    document.getElementById("modal-price").textContent = pkg.price;
    fillList("modal-itinerary", pkg.itinerary);
    fillList("modal-highlights", pkg.highlights);
    fillList("modal-inclusions", pkg.inclusions);
    fillList("modal-exclusions", pkg.exclusions);
    document.getElementById("modal-hotels").textContent = pkg.hotels;
    document.getElementById("modal-transport").textContent = pkg.transport;
    document.getElementById("modal-note").textContent = pkg.note;

    var msg = "Hi Tripkite, I'm interested in the " + pkg.title + " package (" + pkg.price + "). Please share more details.";
    document.getElementById("modal-get-package").setAttribute("data-wa-msg", msg);
    document.getElementById("modal-whatsapp").setAttribute("data-wa-msg", msg);
    refreshWhatsappLinks();

    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closePackageModal(){
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".view-package-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      openPackageModal(btn.getAttribute("data-package"));
    });
  });
  modalClose.addEventListener("click", closePackageModal);
  modalBackdrop.addEventListener("click", function(e){
    if(e.target === modalBackdrop) closePackageModal();
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") closePackageModal();
  });

  /* ---------------- ENQUIRY FORM ---------------- */
  var form = document.getElementById("enquiry-form");
  var successBox = document.getElementById("enquiry-success");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    var name = document.getElementById("f-name").value.trim();
    var phone = document.getElementById("f-phone").value.trim();
    var email = document.getElementById("f-email").value.trim();
    var destination = document.getElementById("f-destination").value.trim();
    var travelers = document.getElementById("f-travelers").value.trim();
    var date = document.getElementById("f-date").value;
    var message = document.getElementById("f-message").value.trim();

    var lines = [
      "Hi Tripkite, I'd like to plan a trip.",
      "Name: " + name,
      "Phone: " + phone,
      "Email: " + email,
      "Destination: " + destination,
      "Travelers: " + travelers
    ];
    if(date) lines.push("Travel Date: " + date);
    if(message) lines.push("Message: " + message);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");

    form.hidden = true;
    successBox.hidden = false;
  });

  /* ---------------- INIT ---------------- */
  refreshWhatsappLinks();
  revealVisible();

})();
