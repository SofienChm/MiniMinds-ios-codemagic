import {
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/about/about.ts
function About_div_54_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feature_r1.highlight, " ");
  }
}
function About_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "div", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 47);
    \u0275\u0275element(5, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, About_div_54_span_11_Template, 3, 1, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1.number);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bi " + feature_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r1.highlight);
  }
}
function About_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const benefit_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bi " + benefit_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r2.description);
  }
}
var About = class _About {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  staticUrl = ApiConfig.STATIC_URL;
  features = [
    {
      number: 1,
      title: "QR Code Check-In & Check-Out",
      description: "The moment a child arrives, parents can scan a QR code for instant check-in. MiniMinds automatically logs the time, location, and updates attendance records in real-time. No more paper sign-in sheets or manual entry.",
      icon: "bi-qr-code-scan",
      highlight: "Save 30+ minutes daily"
    },
    {
      number: 2,
      title: "Automatic Daily Activity Reports",
      description: "Teachers can log activities, meals, naps, and milestones throughout the day with just a few taps. At the end of the day, parents automatically receive a comprehensive summary of their child's activities.",
      icon: "bi-journal-text",
      highlight: "One-tap logging"
    },
    {
      number: 3,
      title: "Real-Time Push Notifications",
      description: "Keep parents informed instantly with real-time push notifications. Whether it's an activity update, photo share, or important announcement, parents receive alerts the moment something happens.",
      icon: "bi-bell",
      highlight: "Instant updates"
    },
    {
      number: 4,
      title: "Photo & Video Sharing",
      description: "Capture precious moments throughout the day and share them directly with parents. Photos are automatically organized in each child's gallery, creating a beautiful timeline of memories.",
      icon: "bi-camera",
      highlight: "Unlimited sharing"
    },
    {
      number: 5,
      title: "Automated Menu Management",
      description: "Upload your weekly or monthly menus once, and MiniMinds automatically populates meal information into daily reports. Parents can even make food selections for their children in advance.",
      icon: "bi-egg-fried",
      highlight: "Set it & forget it"
    },
    {
      number: 6,
      title: "Direct Parent-Teacher Messaging",
      description: "Secure, in-app messaging keeps communication streamlined and professional. Read receipts ensure messages are seen, and conversation history is always accessible.",
      icon: "bi-chat-heart",
      highlight: "No more lost emails"
    },
    {
      number: 7,
      title: "Online Payment Processing",
      description: "Accept tuition and fee payments directly through the app with secure Stripe integration. Automatic payment reminders and receipts reduce administrative workload.",
      icon: "bi-credit-card",
      highlight: "Get paid faster"
    },
    {
      number: 8,
      title: "Smart Attendance Tracking",
      description: "Track attendance patterns, generate reports, and maintain accurate child-to-staff ratios automatically. Geolocation verification ensures check-ins happen at the right location.",
      icon: "bi-clipboard-check",
      highlight: "Always compliant"
    },
    {
      number: 9,
      title: "Event Management & Calendar",
      description: "Create and manage events, track participant registrations, and send automatic reminders. Parents can RSVP directly through the app, and everyone stays on the same page.",
      icon: "bi-calendar-event",
      highlight: "Simplified planning"
    },
    {
      number: 10,
      title: "Multi-Tenant Platform",
      description: "Perfect for daycare networks and franchises. Manage multiple locations from a single dashboard while keeping data separate and secure for each center.",
      icon: "bi-buildings",
      highlight: "Scale with ease"
    }
  ];
  benefits = [
    { icon: "bi-clock", title: "Save 10+ Hours Weekly", description: "Automate repetitive tasks and focus on what matters most" },
    { icon: "bi-heart", title: "Happier Parents", description: "Real-time updates build trust and strengthen relationships" },
    { icon: "bi-shield-check", title: "Stay Compliant", description: "Accurate records and reporting for licensing requirements" },
    { icon: "bi-graph-up", title: "Grow Your Business", description: "Streamlined operations make it easy to scale" }
  ];
  static \u0275fac = function About_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About, selectors: [["app-about"]], decls: 86, vars: 3, consts: [[1, "about-page"], [1, "about-nav"], [1, "nav-container"], ["routerLink", "/", 1, "logo"], ["src", "/assets/images/icon.png", "alt", "MiniMinds Logo", 1, "logo-img"], [1, "logo-text"], [1, "nav-links"], ["routerLink", "/"], ["routerLink", "/request-demo", 1, "btn-demo"], [1, "hero-section"], [1, "hero-container"], [1, "hero-badge"], [1, "hero-subtitle"], [1, "hero-stats"], [1, "stat"], [1, "stat-number"], [1, "stat-label"], [1, "intro-section"], [1, "intro-container"], [1, "intro-content"], [1, "intro-image"], ["src", "/assets/mockup.png", "alt", "MiniMinds App", 1, "app-preview"], [1, "features-section"], [1, "features-container"], ["class", "feature-card", 4, "ngFor", "ngForOf"], [1, "benefits-section"], [1, "benefits-container"], [1, "benefits-grid"], ["class", "benefit-card", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-container"], [1, "cta-buttons"], ["routerLink", "/request-demo", 1, "btn-primary"], [1, "bi", "bi-arrow-right"], ["routerLink", "/", 1, "btn-secondary"], [1, "about-footer"], [1, "footer-container"], [1, "footer-brand"], ["src", "/assets/images/icon.png", "alt", "MiniMinds Logo", 1, "footer-logo"], [1, "footer-brand-name"], [1, "footer-links"], ["routerLink", "/privacy-policy"], ["routerLink", "/terms-of-service"], [1, "footer-copyright"], [1, "feature-card"], [1, "feature-header"], [1, "feature-number"], [1, "feature-icon"], [1, "feature-content"], ["class", "feature-highlight", 4, "ngIf"], [1, "feature-highlight"], [1, "bi", "bi-lightning-charge-fill"], [1, "benefit-card"], [1, "benefit-icon"]], template: function About_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "MiniMinds");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 8);
      \u0275\u0275text(11, "Request a Demo");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "section", 9)(13, "div", 10)(14, "span", 11);
      \u0275\u0275text(15, "Time-Saving Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h1");
      \u0275\u0275text(17, "10 Ways MiniMinds Saves You Time Every Day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 12);
      \u0275\u0275text(19, " Discover how our powerful daycare management platform helps educators spend less time on paperwork and more time nurturing children's growth. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "span", 15);
      \u0275\u0275text(23, "10+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 16);
      \u0275\u0275text(25, "Hours Saved Weekly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "span", 15);
      \u0275\u0275text(28, "100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 16);
      \u0275\u0275text(30, "Digital Records");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 14)(32, "span", 15);
      \u0275\u0275text(33, "Real-Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 16);
      \u0275\u0275text(35, "Parent Updates");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "section", 17)(37, "div", 18)(38, "div", 19)(39, "h2");
      \u0275\u0275text(40, "Streamline Your Daycare Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, " Running a daycare is rewarding, but the administrative workload can be overwhelming. Paper sign-in sheets, handwritten daily reports, tracking payments, and keeping parents informed \u2014 it all adds up. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, " MiniMinds was built to change that. Our all-in-one platform automates the tedious tasks so you can focus on what you do best: caring for children and supporting their development. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p");
      \u0275\u0275text(46, " Here are ");
      \u0275\u0275elementStart(47, "strong");
      \u0275\u0275text(48, "10 time-saving features");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " that make MiniMinds the smart choice for modern daycare centers. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 20);
      \u0275\u0275element(51, "img", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "section", 22)(53, "div", 23);
      \u0275\u0275template(54, About_div_54_Template, 12, 6, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "section", 25)(56, "div", 26)(57, "h2");
      \u0275\u0275text(58, "Why Daycares Love MiniMinds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 27);
      \u0275\u0275template(60, About_div_60_Template, 7, 4, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "section", 29)(62, "div", 30)(63, "h2");
      \u0275\u0275text(64, "Ready to Save Time & Delight Parents?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p");
      \u0275\u0275text(66, "Join hundreds of daycares already using MiniMinds to streamline their operations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 31)(68, "a", 32);
      \u0275\u0275text(69, " Request a Demo ");
      \u0275\u0275element(70, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "a", 34);
      \u0275\u0275text(72, " Learn More ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "footer", 35)(74, "div", 36)(75, "div", 37);
      \u0275\u0275element(76, "img", 38);
      \u0275\u0275elementStart(77, "span", 39);
      \u0275\u0275text(78, "MiniMinds");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 40)(80, "a", 41);
      \u0275\u0275text(81, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "a", 42);
      \u0275\u0275text(83, "Terms of Service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 43);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(54);
      \u0275\u0275property("ngForOf", ctx.features);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.benefits);
      \u0275\u0275advance(25);
      \u0275\u0275textInterpolate1(" \xA9 ", ctx.currentYear, " MiniMinds. All rights reserved. ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.about-page[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    "Poppins",\n    sans-serif;\n  background: #ffffff;\n}\n.about-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 16px 0;\n}\n.about-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.about-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n}\n.about-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n}\n.about-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #202c4b;\n  font-family: "Poppins", sans-serif;\n}\n.about-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.about-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #202c4b;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.3s;\n}\n.about-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7dd3c0;\n}\n.about-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .btn-demo[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n  border-radius: 10px;\n}\n.about-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .btn-demo[_ngcontent-%COMP%]:hover {\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(125, 185, 255, 0.4);\n}\n.hero-section[_ngcontent-%COMP%] {\n  padding: 140px 24px 80px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n  text-align: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  color: #5bc0a3;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 800;\n  color: #202c4b;\n  line-height: 1.2;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #6a7287;\n  line-height: 1.7;\n  margin-bottom: 48px;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 48px;\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #202c4b;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 640px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6a7287;\n}\n.intro-section[_ngcontent-%COMP%] {\n  padding: 80px 24px;\n}\n.intro-section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .intro-section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.intro-section[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .intro-section[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.intro-section[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #6a7287;\n  line-height: 1.8;\n  margin-bottom: 20px;\n}\n.intro-section[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #202c4b;\n}\n.intro-section[_ngcontent-%COMP%]   .intro-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 968px) {\n  .intro-section[_ngcontent-%COMP%]   .intro-image[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n.intro-section[_ngcontent-%COMP%]   .intro-image[_ngcontent-%COMP%]   .app-preview[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 500px;\n  object-fit: contain;\n  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));\n}\n.features-section[_ngcontent-%COMP%] {\n  padding: 80px 24px;\n  background: #f8fafc;\n}\n.features-section[_ngcontent-%COMP%]   .features-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  display: flex;\n  gap: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 640px) {\n  .feature-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.feature-card[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-width: 80px;\n}\n@media (max-width: 640px) {\n  .feature-card[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n.feature-card[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%]   .feature-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.1) 0%,\n      rgba(125, 185, 255, 0.1) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #7dd3c0;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 12px;\n  font-family: "Poppins", sans-serif;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6a7287;\n  line-height: 1.7;\n  margin-bottom: 16px;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-highlight[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #5bc0a3;\n}\n.feature-card[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-highlight[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.benefits-section[_ngcontent-%COMP%] {\n  padding: 80px 24px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  text-align: center;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 48px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .benefits-section[_ngcontent-%COMP%]   .benefits-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 968px) {\n  .benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9edf4;\n  border-radius: 16px;\n  padding: 28px 20px;\n  transition: all 0.3s ease;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]:hover {\n  border-color: #7dd3c0;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(125, 211, 192, 0.15);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: white;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 8px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6a7287;\n  line-height: 1.6;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 80px 24px;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border-radius: 32px;\n  padding: 60px 40px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 32px;\n  position: relative;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  position: relative;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #202c4b;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.about-footer[_ngcontent-%COMP%] {\n  background: #202c4b;\n  padding: 40px 24px;\n}\n.about-footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .about-footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.about-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.about-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n}\n.about-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "Poppins", sans-serif;\n}\n.about-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.about-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: 14px;\n  transition: color 0.3s ease;\n}\n.about-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.about-footer[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=about.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="about-page">\r
  <!-- Navigation -->\r
  <nav class="about-nav">\r
    <div class="nav-container">\r
      <a routerLink="/" class="logo">\r
        <img src="/assets/images/icon.png" alt="MiniMinds Logo" class="logo-img">\r
        <span class="logo-text">MiniMinds</span>\r
      </a>\r
      <div class="nav-links">\r
        <a routerLink="/">Home</a>\r
        <a routerLink="/request-demo" class="btn-demo">Request a Demo</a>\r
      </div>\r
    </div>\r
  </nav>\r
\r
  <!-- Hero Section -->\r
  <section class="hero-section">\r
    <div class="hero-container">\r
      <span class="hero-badge">Time-Saving Features</span>\r
      <h1>10 Ways MiniMinds Saves You Time Every Day</h1>\r
      <p class="hero-subtitle">\r
        Discover how our powerful daycare management platform helps educators spend less time on paperwork\r
        and more time nurturing children's growth.\r
      </p>\r
      <div class="hero-stats">\r
        <div class="stat">\r
          <span class="stat-number">10+</span>\r
          <span class="stat-label">Hours Saved Weekly</span>\r
        </div>\r
        <div class="stat">\r
          <span class="stat-number">100%</span>\r
          <span class="stat-label">Digital Records</span>\r
        </div>\r
        <div class="stat">\r
          <span class="stat-number">Real-Time</span>\r
          <span class="stat-label">Parent Updates</span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Introduction -->\r
  <section class="intro-section">\r
    <div class="intro-container">\r
      <div class="intro-content">\r
        <h2>Streamline Your Daycare Operations</h2>\r
        <p>\r
          Running a daycare is rewarding, but the administrative workload can be overwhelming.\r
          Paper sign-in sheets, handwritten daily reports, tracking payments, and keeping parents\r
          informed \u2014 it all adds up.\r
        </p>\r
        <p>\r
          MiniMinds was built to change that. Our all-in-one platform automates the tedious tasks\r
          so you can focus on what you do best: caring for children and supporting their development.\r
        </p>\r
        <p>\r
          Here are <strong>10 time-saving features</strong> that make MiniMinds the smart choice\r
          for modern daycare centers.\r
        </p>\r
      </div>\r
      <div class="intro-image">\r
        <img src="/assets/mockup.png" alt="MiniMinds App" class="app-preview">\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Features Section -->\r
  <section class="features-section">\r
    <div class="features-container">\r
      <div class="feature-card" *ngFor="let feature of features">\r
        <div class="feature-header">\r
          <div class="feature-number">{{ feature.number }}</div>\r
          <div class="feature-icon">\r
            <i [class]="'bi ' + feature.icon"></i>\r
          </div>\r
        </div>\r
        <div class="feature-content">\r
          <h3>{{ feature.title }}</h3>\r
          <p>{{ feature.description }}</p>\r
          <span class="feature-highlight" *ngIf="feature.highlight">\r
            <i class="bi bi-lightning-charge-fill"></i>\r
            {{ feature.highlight }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Benefits Section -->\r
  <section class="benefits-section">\r
    <div class="benefits-container">\r
      <h2>Why Daycares Love MiniMinds</h2>\r
      <div class="benefits-grid">\r
        <div class="benefit-card" *ngFor="let benefit of benefits">\r
          <div class="benefit-icon">\r
            <i [class]="'bi ' + benefit.icon"></i>\r
          </div>\r
          <h3>{{ benefit.title }}</h3>\r
          <p>{{ benefit.description }}</p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Section -->\r
  <section class="cta-section">\r
    <div class="cta-container">\r
      <h2>Ready to Save Time & Delight Parents?</h2>\r
      <p>Join hundreds of daycares already using MiniMinds to streamline their operations.</p>\r
      <div class="cta-buttons">\r
        <a routerLink="/request-demo" class="btn-primary">\r
          Request a Demo\r
          <i class="bi bi-arrow-right"></i>\r
        </a>\r
        <a routerLink="/" class="btn-secondary">\r
          Learn More\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Footer -->\r
  <footer class="about-footer">\r
    <div class="footer-container">\r
      <div class="footer-brand">\r
        <img src="/assets/images/icon.png" alt="MiniMinds Logo" class="footer-logo">\r
        <span class="footer-brand-name">MiniMinds</span>\r
      </div>\r
      <div class="footer-links">\r
        <a routerLink="/privacy-policy">Privacy Policy</a>\r
        <a routerLink="/terms-of-service">Terms of Service</a>\r
      </div>\r
      <div class="footer-copyright">\r
        &copy; {{ currentYear }} MiniMinds. All rights reserved.\r
      </div>\r
    </div>\r
  </footer>\r
</div>\r
`, styles: ['/* src/app/features/about/about.scss */\n.about-page {\n  font-family:\n    "Inter",\n    "Poppins",\n    sans-serif;\n  background: #ffffff;\n}\n.about-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 16px 0;\n}\n.about-nav .nav-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.about-nav .logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n}\n.about-nav .logo .logo-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n}\n.about-nav .logo .logo-text {\n  font-size: 24px;\n  font-weight: 700;\n  color: #202c4b;\n  font-family: "Poppins", sans-serif;\n}\n.about-nav .nav-links {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.about-nav .nav-links a {\n  color: #202c4b;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.3s;\n}\n.about-nav .nav-links a:hover {\n  color: #7dd3c0;\n}\n.about-nav .nav-links .btn-demo {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n  border-radius: 10px;\n}\n.about-nav .nav-links .btn-demo:hover {\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(125, 185, 255, 0.4);\n}\n.hero-section {\n  padding: 140px 24px 80px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n  text-align: center;\n}\n.hero-section .hero-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-section .hero-badge {\n  display: inline-block;\n  padding: 8px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  color: #5bc0a3;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.hero-section h1 {\n  font-size: 48px;\n  font-weight: 800;\n  color: #202c4b;\n  line-height: 1.2;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .hero-section h1 {\n    font-size: 32px;\n  }\n}\n.hero-section .hero-subtitle {\n  font-size: 20px;\n  color: #6a7287;\n  line-height: 1.7;\n  margin-bottom: 48px;\n}\n@media (max-width: 768px) {\n  .hero-section .hero-subtitle {\n    font-size: 16px;\n  }\n}\n.hero-section .hero-stats {\n  display: flex;\n  justify-content: center;\n  gap: 48px;\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .hero-section .hero-stats {\n    gap: 24px;\n  }\n}\n.hero-section .hero-stats .stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero-section .hero-stats .stat .stat-number {\n  font-size: 32px;\n  font-weight: 800;\n  color: #202c4b;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 640px) {\n  .hero-section .hero-stats .stat .stat-number {\n    font-size: 24px;\n  }\n}\n.hero-section .hero-stats .stat .stat-label {\n  font-size: 14px;\n  color: #6a7287;\n}\n.intro-section {\n  padding: 80px 24px;\n}\n.intro-section .intro-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .intro-section .intro-container {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.intro-section .intro-content h2 {\n  font-size: 36px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .intro-section .intro-content h2 {\n    font-size: 28px;\n  }\n}\n.intro-section .intro-content p {\n  font-size: 17px;\n  color: #6a7287;\n  line-height: 1.8;\n  margin-bottom: 20px;\n}\n.intro-section .intro-content p strong {\n  color: #202c4b;\n}\n.intro-section .intro-image {\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 968px) {\n  .intro-section .intro-image {\n    order: -1;\n  }\n}\n.intro-section .intro-image .app-preview {\n  max-width: 100%;\n  max-height: 500px;\n  object-fit: contain;\n  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));\n}\n.features-section {\n  padding: 80px 24px;\n  background: #f8fafc;\n}\n.features-section .features-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.feature-card {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  display: flex;\n  gap: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.feature-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 640px) {\n  .feature-card {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.feature-card .feature-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-width: 80px;\n}\n@media (max-width: 640px) {\n  .feature-card .feature-header {\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n.feature-card .feature-header .feature-number {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n}\n.feature-card .feature-header .feature-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.1) 0%,\n      rgba(125, 185, 255, 0.1) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.feature-card .feature-header .feature-icon i {\n  font-size: 26px;\n  color: #7dd3c0;\n}\n.feature-card .feature-content {\n  flex: 1;\n}\n.feature-card .feature-content h3 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 12px;\n  font-family: "Poppins", sans-serif;\n}\n.feature-card .feature-content p {\n  font-size: 16px;\n  color: #6a7287;\n  line-height: 1.7;\n  margin-bottom: 16px;\n}\n.feature-card .feature-content .feature-highlight {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #5bc0a3;\n}\n.feature-card .feature-content .feature-highlight i {\n  color: #f59e0b;\n}\n.benefits-section {\n  padding: 80px 24px;\n}\n.benefits-section .benefits-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  text-align: center;\n}\n.benefits-section .benefits-container h2 {\n  font-size: 36px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 48px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .benefits-section .benefits-container h2 {\n    font-size: 28px;\n  }\n}\n.benefits-section .benefits-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 968px) {\n  .benefits-section .benefits-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .benefits-section .benefits-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.benefits-section .benefit-card {\n  background: white;\n  border: 1px solid #e9edf4;\n  border-radius: 16px;\n  padding: 28px 20px;\n  transition: all 0.3s ease;\n}\n.benefits-section .benefit-card:hover {\n  border-color: #7dd3c0;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(125, 211, 192, 0.15);\n}\n.benefits-section .benefit-card .benefit-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.benefits-section .benefit-card .benefit-icon i {\n  font-size: 26px;\n  color: white;\n}\n.benefits-section .benefit-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #202c4b;\n  margin-bottom: 8px;\n}\n.benefits-section .benefit-card p {\n  font-size: 14px;\n  color: #6a7287;\n  line-height: 1.6;\n}\n.cta-section {\n  padding: 80px 24px;\n}\n.cta-section .cta-container {\n  max-width: 800px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border-radius: 32px;\n  padding: 60px 40px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section .cta-container::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n}\n.cta-section .cta-container h2 {\n  font-size: 32px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .cta-section .cta-container h2 {\n    font-size: 24px;\n  }\n}\n.cta-section .cta-container p {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 32px;\n  position: relative;\n}\n.cta-section .cta-container .cta-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  position: relative;\n}\n.cta-section .cta-container .cta-buttons a {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.cta-section .cta-container .cta-buttons .btn-primary {\n  background: white;\n  color: #202c4b;\n}\n.cta-section .cta-container .cta-buttons .btn-primary:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.cta-section .cta-container .cta-buttons .btn-secondary {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n}\n.cta-section .cta-container .cta-buttons .btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.about-footer {\n  background: #202c4b;\n  padding: 40px 24px;\n}\n.about-footer .footer-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .about-footer .footer-container {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.about-footer .footer-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.about-footer .footer-brand .footer-logo {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n}\n.about-footer .footer-brand .footer-brand-name {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "Poppins", sans-serif;\n}\n.about-footer .footer-links {\n  display: flex;\n  gap: 24px;\n}\n.about-footer .footer-links a {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: 14px;\n  transition: color 0.3s ease;\n}\n.about-footer .footer-links a:hover {\n  color: white;\n}\n.about-footer .footer-copyright {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=about.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About, { className: "About", filePath: "src/app/features/about/about.ts", lineNumber: 21 });
})();
export {
  About
};
//# sourceMappingURL=chunk-7JLM72WQ.js.map
