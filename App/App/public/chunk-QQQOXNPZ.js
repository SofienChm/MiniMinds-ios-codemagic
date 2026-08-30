import {
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule
} from "./chunk-HDGNZI2G.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/legal/terms-of-service/terms-of-service.ts
var TermsOfService = class _TermsOfService {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function TermsOfService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermsOfService)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermsOfService, selectors: [["app-terms-of-service"]], decls: 506, vars: 1, consts: [[1, "legal-page"], [1, "header"], ["routerLink", "/", 1, "back-link"], [1, "bi", "bi-arrow-left"], [1, "container"], [1, "last-updated"], [1, "highlight-box"], [1, "toc"], ["href", "#definitions"], ["href", "#eligibility"], ["href", "#accounts"], ["href", "#services"], ["href", "#acceptable-use"], ["href", "#content"], ["href", "#payments"], ["href", "#intellectual-property"], ["href", "#privacy"], ["href", "#termination"], ["href", "#disclaimers"], ["href", "#liability"], ["href", "#indemnification"], ["href", "#changes"], ["href", "#governing-law"], ["href", "#contact"], ["id", "definitions", 1, "card"], ["id", "eligibility", 1, "card"], ["id", "accounts", 1, "card"], ["id", "services", 1, "card"], ["id", "acceptable-use", 1, "card"], [1, "important-box"], ["id", "content", 1, "card"], ["id", "payments", 1, "card"], ["id", "intellectual-property", 1, "card"], ["id", "privacy", 1, "card"], ["routerLink", "/privacy-policy"], ["id", "termination", 1, "card"], ["id", "disclaimers", 1, "card"], [1, "warning-box"], ["id", "liability", 1, "card"], ["id", "indemnification", 1, "card"], ["id", "changes", 1, "card"], ["id", "governing-law", 1, "card"], ["id", "contact", 1, "card"], ["href", "https://app-miniminds.com"], [1, "footer"], ["routerLink", "/"]], template: function TermsOfService_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " Back to Home ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "MiniMinds - Daycare Management Platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "p", 5);
      \u0275\u0275text(11, "Last Updated: January 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "strong");
      \u0275\u0275text(14, "Agreement to Terms:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " By accessing or using MiniMinds, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "h3");
      \u0275\u0275text(18, "Table of Contents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul")(20, "li")(21, "a", 8);
      \u0275\u0275text(22, "1. Definitions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 9);
      \u0275\u0275text(25, "2. Eligibility");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 10);
      \u0275\u0275text(28, "3. User Accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 11);
      \u0275\u0275text(31, "4. Description of Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 12);
      \u0275\u0275text(34, "5. Acceptable Use");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "a", 13);
      \u0275\u0275text(37, "6. User Content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 14);
      \u0275\u0275text(40, "7. Payments and Fees");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 15);
      \u0275\u0275text(43, "8. Intellectual Property");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 16);
      \u0275\u0275text(46, "9. Privacy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 17);
      \u0275\u0275text(49, "10. Termination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 18);
      \u0275\u0275text(52, "11. Disclaimers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 19);
      \u0275\u0275text(55, "12. Limitation of Liability");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 20);
      \u0275\u0275text(58, "13. Indemnification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 21);
      \u0275\u0275text(61, "14. Changes to Terms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 22);
      \u0275\u0275text(64, "15. Governing Law");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 23);
      \u0275\u0275text(67, "16. Contact Information");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 24)(69, "h2");
      \u0275\u0275text(70, "1. Definitions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "ul")(72, "li")(73, "strong");
      \u0275\u0275text(74, '"Service"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, " refers to the MiniMinds mobile application and web platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "li")(77, "strong");
      \u0275\u0275text(78, '"User," "You," "Your"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(79, " refers to the individual accessing or using the Service.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "li")(81, "strong");
      \u0275\u0275text(82, '"We," "Us," "Our"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " refers to MiniMinds and its operators.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "li")(85, "strong");
      \u0275\u0275text(86, '"Account"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " refers to the unique account created for You to access our Service.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "li")(89, "strong");
      \u0275\u0275text(90, '"Content"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, " refers to text, images, photos, videos, or other materials uploaded to the Service.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "li")(93, "strong");
      \u0275\u0275text(94, '"Daycare Center"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " refers to the childcare facility using MiniMinds to manage operations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "li")(97, "strong");
      \u0275\u0275text(98, '"Parent"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, " refers to a parent or legal guardian of a child enrolled in a Daycare Center.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "li")(101, "strong");
      \u0275\u0275text(102, '"Teacher/Educator"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(103, " refers to staff members of a Daycare Center.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "li")(105, "strong");
      \u0275\u0275text(106, '"Administrator"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(107, " refers to the manager or owner of a Daycare Center account.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 25)(109, "h2");
      \u0275\u0275text(110, "2. Eligibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "h3");
      \u0275\u0275text(112, "2.1 Age Requirements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p");
      \u0275\u0275text(114, "You must be at least 18 years old to create an account and use our Service. By creating an account, you represent and warrant that you are at least 18 years of age.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "h3");
      \u0275\u0275text(116, "2.2 Authority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p");
      \u0275\u0275text(118, "If you are using the Service on behalf of a Daycare Center or organization, you represent that you have the authority to bind that organization to these Terms.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "h3");
      \u0275\u0275text(120, "2.3 Parental Responsibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "p");
      \u0275\u0275text(122, "Parents using the Service to access information about their children must be the legal parent or guardian of the child. You agree to provide accurate information about your relationship to any children associated with your account.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 26)(124, "h2");
      \u0275\u0275text(125, "3. User Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "h3");
      \u0275\u0275text(127, "3.1 Account Creation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p");
      \u0275\u0275text(129, "To use certain features of the Service, you must create an account. You agree to:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "ul")(131, "li");
      \u0275\u0275text(132, "Provide accurate, current, and complete information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "li");
      \u0275\u0275text(134, "Maintain and update your information to keep it accurate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "li");
      \u0275\u0275text(136, "Maintain the security of your password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "li");
      \u0275\u0275text(138, "Not share your account credentials with others");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "li");
      \u0275\u0275text(140, "Notify us immediately of any unauthorized use");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "h3");
      \u0275\u0275text(142, "3.2 Account Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p");
      \u0275\u0275text(144, "Our Service offers different account types with varying permissions:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "ul")(146, "li")(147, "strong");
      \u0275\u0275text(148, "Administrator:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, " Full access to manage the Daycare Center, users, and settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "li")(151, "strong");
      \u0275\u0275text(152, "Teacher/Educator:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(153, " Access to manage children, activities, and attendance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "li")(155, "strong");
      \u0275\u0275text(156, "Parent:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(157, " Access to view their children's information and communicate with the Daycare");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "h3");
      \u0275\u0275text(159, "3.3 Account Responsibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p");
      \u0275\u0275text(161, "You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to protect your account credentials.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "h3");
      \u0275\u0275text(163, "3.4 Account Termination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p");
      \u0275\u0275text(165, "You may delete your account at any time through the Settings menu or by contacting us. Upon deletion, all your personal data will be permanently removed in accordance with our Privacy Policy.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 27)(167, "h2");
      \u0275\u0275text(168, "4. Description of Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "p");
      \u0275\u0275text(170, "MiniMinds provides a daycare management platform that includes:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "ul")(172, "li")(173, "strong");
      \u0275\u0275text(174, "Attendance Management:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(175, " Check-in/check-out tracking with QR codes and geolocation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "li")(177, "strong");
      \u0275\u0275text(178, "Daily Activities:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(179, " Recording and sharing children's daily activities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "li")(181, "strong");
      \u0275\u0275text(182, "Photo Gallery:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(183, " Secure photo sharing of daycare activities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "li")(185, "strong");
      \u0275\u0275text(186, "Messaging:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(187, " Communication between parents and teachers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "li")(189, "strong");
      \u0275\u0275text(190, "Fee Management:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, " Tracking and processing of daycare fees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "li")(193, "strong");
      \u0275\u0275text(194, "Event Management:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(195, " Creating and managing daycare events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "li")(197, "strong");
      \u0275\u0275text(198, "Notifications:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(199, " Real-time updates about children's activities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "li")(201, "strong");
      \u0275\u0275text(202, "Reports:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, " Generating activity and attendance reports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "h3");
      \u0275\u0275text(205, "4.1 Service Availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "p");
      \u0275\u0275text(207, "We strive to maintain Service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "h3");
      \u0275\u0275text(209, "4.2 Service Modifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p");
      \u0275\u0275text(211, "We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice when possible for significant changes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 28)(213, "h2");
      \u0275\u0275text(214, "5. Acceptable Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "h3");
      \u0275\u0275text(216, "5.1 Permitted Uses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p");
      \u0275\u0275text(218, "You may use the Service only for lawful purposes related to daycare management and parent-teacher communication.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "h3");
      \u0275\u0275text(220, "5.2 Prohibited Activities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "p");
      \u0275\u0275text(222, "You agree NOT to:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "ul")(224, "li");
      \u0275\u0275text(225, "Use the Service for any illegal purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "li");
      \u0275\u0275text(227, "Upload content that is harmful, threatening, abusive, or offensive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "li");
      \u0275\u0275text(229, "Impersonate another person or misrepresent your identity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "li");
      \u0275\u0275text(231, "Upload viruses, malware, or other harmful code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "li");
      \u0275\u0275text(233, "Attempt to gain unauthorized access to other accounts or systems");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "li");
      \u0275\u0275text(235, "Interfere with or disrupt the Service or servers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "li");
      \u0275\u0275text(237, "Collect user information without consent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "li");
      \u0275\u0275text(239, "Use automated systems (bots, scrapers) without permission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "li");
      \u0275\u0275text(241, "Share login credentials or allow others to access your account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "li");
      \u0275\u0275text(243, "Upload inappropriate content involving children");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "li");
      \u0275\u0275text(245, "Use the Service to harass, bully, or harm others");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "li");
      \u0275\u0275text(247, "Violate any applicable laws or regulations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 29)(249, "strong");
      \u0275\u0275text(250, "Zero Tolerance Policy:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(251, " Any content depicting child abuse, exploitation, or other illegal activities will result in immediate account termination and reporting to appropriate authorities. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 30)(253, "h2");
      \u0275\u0275text(254, "6. User Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "h3");
      \u0275\u0275text(256, "6.1 Ownership");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "p");
      \u0275\u0275text(258, "You retain ownership of all Content you upload to the Service. By uploading Content, you grant us a limited license to store, display, and process that Content solely for the purpose of providing the Service.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "h3");
      \u0275\u0275text(260, "6.2 Content Responsibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "p");
      \u0275\u0275text(262, "You are solely responsible for all Content you upload. You represent and warrant that:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "ul")(264, "li");
      \u0275\u0275text(265, "You have the right to upload and share the Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "li");
      \u0275\u0275text(267, "The Content does not violate any third-party rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "li");
      \u0275\u0275text(269, "The Content complies with all applicable laws");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "li");
      \u0275\u0275text(271, "You have obtained necessary consents for any photos of children");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "h3");
      \u0275\u0275text(273, "6.3 Content Removal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "p");
      \u0275\u0275text(275, "We reserve the right to remove any Content that violates these Terms or is otherwise objectionable, without prior notice.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "h3");
      \u0275\u0275text(277, "6.4 Photos of Children");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "p");
      \u0275\u0275text(279, "Photos of children uploaded to the Service are:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "ul")(281, "li");
      \u0275\u0275text(282, "Stored securely and not publicly accessible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "li");
      \u0275\u0275text(284, "Only visible to authorized users (parents, teachers, administrators)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "li");
      \u0275\u0275text(286, "Never used for marketing or advertising purposes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "li");
      \u0275\u0275text(288, "Deleted upon account termination or request");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 31)(290, "h2");
      \u0275\u0275text(291, "7. Payments and Fees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "h3");
      \u0275\u0275text(293, "7.1 Daycare Fee Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "p");
      \u0275\u0275text(295, "Parents may use the Service to pay daycare fees. All payments are processed through Stripe, a third-party payment processor. By making a payment, you agree to Stripe's terms of service.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "h3");
      \u0275\u0275text(297, "7.2 Payment Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "p");
      \u0275\u0275text(299, "We do not store your credit card information. All payment data is securely handled by Stripe in accordance with PCI-DSS standards.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "h3");
      \u0275\u0275text(301, "7.3 Refunds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "p");
      \u0275\u0275text(303, "Refund policies for daycare fees are determined by each individual Daycare Center. Please contact your Daycare Center directly regarding refund requests.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "h3");
      \u0275\u0275text(305, "7.4 Payment Disputes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "p");
      \u0275\u0275text(307, "If you have a dispute regarding a payment, please first contact the Daycare Center. For issues with payment processing, you may contact Stripe directly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "div", 32)(309, "h2");
      \u0275\u0275text(310, "8. Intellectual Property");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "h3");
      \u0275\u0275text(312, "8.1 Our Intellectual Property");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "p");
      \u0275\u0275text(314, "The Service, including its original content (excluding User Content), features, and functionality, is owned by MiniMinds and protected by copyright, trademark, and other intellectual property laws.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "h3");
      \u0275\u0275text(316, "8.2 License to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p");
      \u0275\u0275text(318, "We grant you a limited, non-exclusive, non-transferable license to access and use the Service for its intended purpose. This license does not include:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "ul")(320, "li");
      \u0275\u0275text(321, "Modifying or copying the Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "li");
      \u0275\u0275text(323, "Using the Service for commercial purposes outside its intended use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "li");
      \u0275\u0275text(325, "Attempting to reverse engineer or extract source code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "li");
      \u0275\u0275text(327, "Removing any copyright or proprietary notices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "h3");
      \u0275\u0275text(329, "8.3 Trademarks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "p");
      \u0275\u0275text(331, '"MiniMinds" and associated logos are trademarks of MiniMinds. You may not use these marks without our prior written permission.');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 33)(333, "h2");
      \u0275\u0275text(334, "9. Privacy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "p");
      \u0275\u0275text(336, "Your privacy is important to us. Our collection and use of personal information is governed by our ");
      \u0275\u0275elementStart(337, "a", 34);
      \u0275\u0275text(338, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(339, ", which is incorporated into these Terms by reference.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "p");
      \u0275\u0275text(341, "Key privacy commitments:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "ul")(343, "li");
      \u0275\u0275text(344, "We comply with COPPA for children's data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "li");
      \u0275\u0275text(346, "We do not sell personal information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "li");
      \u0275\u0275text(348, "We use industry-standard security measures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "li");
      \u0275\u0275text(350, "You can request deletion of your data at any time");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(351, "div", 35)(352, "h2");
      \u0275\u0275text(353, "10. Termination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "h3");
      \u0275\u0275text(355, "10.1 Termination by You");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "p");
      \u0275\u0275text(357, "You may terminate your account at any time by using the delete account feature in Settings or by contacting us.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "h3");
      \u0275\u0275text(359, "10.2 Termination by Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "p");
      \u0275\u0275text(361, "We may suspend or terminate your account immediately, without prior notice, if:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "ul")(363, "li");
      \u0275\u0275text(364, "You violate these Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "li");
      \u0275\u0275text(366, "You engage in fraudulent or illegal activity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "li");
      \u0275\u0275text(368, "Your use poses a security risk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "li");
      \u0275\u0275text(370, "Required by law or legal process");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "h3");
      \u0275\u0275text(372, "10.3 Effect of Termination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "p");
      \u0275\u0275text(374, "Upon termination:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "ul")(376, "li");
      \u0275\u0275text(377, "Your right to access the Service ceases immediately");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "li");
      \u0275\u0275text(379, "Your data will be deleted in accordance with our Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "li");
      \u0275\u0275text(381, "Provisions that should survive termination will remain in effect");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(382, "div", 36)(383, "h2");
      \u0275\u0275text(384, "11. Disclaimers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div", 37)(386, "p")(387, "strong");
      \u0275\u0275text(388, 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.');
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(389, "p");
      \u0275\u0275text(390, "We disclaim all warranties, including but not limited to:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "ul")(392, "li");
      \u0275\u0275text(393, "Merchantability and fitness for a particular purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "li");
      \u0275\u0275text(395, "Uninterrupted or error-free operation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "li");
      \u0275\u0275text(397, "Accuracy or completeness of information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "li");
      \u0275\u0275text(399, "Security of data transmission");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "p");
      \u0275\u0275text(401, "We do not warrant that:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "ul")(403, "li");
      \u0275\u0275text(404, "The Service will meet your specific requirements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "li");
      \u0275\u0275text(406, "The Service will be available at all times");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "li");
      \u0275\u0275text(408, "Results obtained from the Service will be accurate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "li");
      \u0275\u0275text(410, "Any errors will be corrected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(411, "div", 38)(412, "h2");
      \u0275\u0275text(413, "12. Limitation of Liability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "div", 37)(415, "p")(416, "strong");
      \u0275\u0275text(417, "TO THE MAXIMUM EXTENT PERMITTED BY LAW, MINIMINDS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(418, "p");
      \u0275\u0275text(419, "This includes, but is not limited to, damages for:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "ul")(421, "li");
      \u0275\u0275text(422, "Loss of profits, data, or goodwill");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "li");
      \u0275\u0275text(424, "Service interruption or computer damage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "li");
      \u0275\u0275text(426, "Cost of substitute services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "li");
      \u0275\u0275text(428, "Personal injury or property damage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(429, "p");
      \u0275\u0275text(430, "In no event shall our total liability exceed the amount you paid to us in the twelve (12) months preceding the claim, or $100, whichever is greater.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "p");
      \u0275\u0275text(432, "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(433, "div", 39)(434, "h2");
      \u0275\u0275text(435, "13. Indemnification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "p");
      \u0275\u0275text(437, "You agree to defend, indemnify, and hold harmless MiniMinds and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "ul")(439, "li");
      \u0275\u0275text(440, "Your use of the Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "li");
      \u0275\u0275text(442, "Your violation of these Terms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "li");
      \u0275\u0275text(444, "Your violation of any third-party rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "li");
      \u0275\u0275text(446, "Content you upload to the Service");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(447, "div", 40)(448, "h2");
      \u0275\u0275text(449, "14. Changes to Terms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "p");
      \u0275\u0275text(451, "We reserve the right to modify these Terms at any time. When we make changes:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "ul")(453, "li");
      \u0275\u0275text(454, 'We will update the "Last Updated" date');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "li");
      \u0275\u0275text(456, "We will notify users through the app for material changes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "li");
      \u0275\u0275text(458, "Continued use after changes constitutes acceptance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(459, "p");
      \u0275\u0275text(460, "If you do not agree to the modified Terms, you should discontinue use of the Service.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(461, "div", 41)(462, "h2");
      \u0275\u0275text(463, "15. Governing Law");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "h3");
      \u0275\u0275text(465, "15.1 Applicable Law");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "p");
      \u0275\u0275text(467, "These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "h3");
      \u0275\u0275text(469, "15.2 Dispute Resolution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "p");
      \u0275\u0275text(471, "Any disputes arising from these Terms or your use of the Service shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes may be resolved through binding arbitration or in courts of competent jurisdiction.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "h3");
      \u0275\u0275text(473, "15.3 Severability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "p");
      \u0275\u0275text(475, "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "h3");
      \u0275\u0275text(477, "15.4 Waiver");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "p");
      \u0275\u0275text(479, "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(480, "div", 42)(481, "h2");
      \u0275\u0275text(482, "16. Contact Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "p");
      \u0275\u0275text(484, "If you have any questions about these Terms of Service, please contact us:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "ul")(486, "li")(487, "strong");
      \u0275\u0275text(488, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(489, " support@miniminds.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "li")(491, "strong");
      \u0275\u0275text(492, "Website:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "a", 43);
      \u0275\u0275text(494, "https://app-miniminds.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(495, "p");
      \u0275\u0275text(496, "For urgent matters regarding child safety or abuse, please contact local authorities immediately.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(497, "div", 44)(498, "p");
      \u0275\u0275text(499);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "p")(501, "a", 34);
      \u0275\u0275text(502, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(503, " | ");
      \u0275\u0275elementStart(504, "a", 45);
      \u0275\u0275text(505, "Home");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(499);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " MiniMinds. All rights reserved.");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.legal-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8f9fa;\n}\n.header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n  position: relative;\n}\n.header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  opacity: 0.9;\n  transition: opacity 0.2s;\n}\n.header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 10px;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.9;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 40px;\n  margin-bottom: 30px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 24px;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #f0f0f0;\n}\nh3[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 18px;\n  margin: 25px 0 15px 0;\n}\np[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #555;\n  line-height: 1.7;\n}\nul[_ngcontent-%COMP%], \nol[_ngcontent-%COMP%] {\n  margin: 15px 0 15px 25px;\n  color: #555;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  line-height: 1.6;\n}\na[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.highlight-box[_ngcontent-%COMP%] {\n  background: #e7f1ff;\n  border-left: 4px solid #667eea;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 0 8px 8px 0;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border-left: 4px solid #ffc107;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 0 8px 8px 0;\n}\n.important-box[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  border-left: 4px solid #dc3545;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 0 8px 8px 0;\n}\n.toc[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 25px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.toc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.toc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.toc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.last-updated[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  font-size: 14px;\n  margin-bottom: 30px;\n}\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #666;\n  font-size: 14px;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n@media (max-width: 600px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 80px 20px 40px;\n  }\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n    top: 15px;\n    left: 15px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n}\n/*# sourceMappingURL=terms-of-service.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermsOfService, [{
    type: Component,
    args: [{ selector: "app-terms-of-service", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="legal-page">\r
  <div class="header">\r
    <a routerLink="/" class="back-link">\r
      <i class="bi bi-arrow-left"></i>\r
      Back to Home\r
    </a>\r
    <h1>Terms of Service</h1>\r
    <p>MiniMinds - Daycare Management Platform</p>\r
  </div>\r
\r
  <div class="container">\r
    <p class="last-updated">Last Updated: January 2025</p>\r
\r
    <div class="highlight-box">\r
      <strong>Agreement to Terms:</strong> By accessing or using MiniMinds, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service.\r
    </div>\r
\r
    <div class="toc">\r
      <h3>Table of Contents</h3>\r
      <ul>\r
        <li><a href="#definitions">1. Definitions</a></li>\r
        <li><a href="#eligibility">2. Eligibility</a></li>\r
        <li><a href="#accounts">3. User Accounts</a></li>\r
        <li><a href="#services">4. Description of Services</a></li>\r
        <li><a href="#acceptable-use">5. Acceptable Use</a></li>\r
        <li><a href="#content">6. User Content</a></li>\r
        <li><a href="#payments">7. Payments and Fees</a></li>\r
        <li><a href="#intellectual-property">8. Intellectual Property</a></li>\r
        <li><a href="#privacy">9. Privacy</a></li>\r
        <li><a href="#termination">10. Termination</a></li>\r
        <li><a href="#disclaimers">11. Disclaimers</a></li>\r
        <li><a href="#liability">12. Limitation of Liability</a></li>\r
        <li><a href="#indemnification">13. Indemnification</a></li>\r
        <li><a href="#changes">14. Changes to Terms</a></li>\r
        <li><a href="#governing-law">15. Governing Law</a></li>\r
        <li><a href="#contact">16. Contact Information</a></li>\r
      </ul>\r
    </div>\r
\r
    <div class="card" id="definitions">\r
      <h2>1. Definitions</h2>\r
      <ul>\r
        <li><strong>"Service"</strong> refers to the MiniMinds mobile application and web platform.</li>\r
        <li><strong>"User," "You," "Your"</strong> refers to the individual accessing or using the Service.</li>\r
        <li><strong>"We," "Us," "Our"</strong> refers to MiniMinds and its operators.</li>\r
        <li><strong>"Account"</strong> refers to the unique account created for You to access our Service.</li>\r
        <li><strong>"Content"</strong> refers to text, images, photos, videos, or other materials uploaded to the Service.</li>\r
        <li><strong>"Daycare Center"</strong> refers to the childcare facility using MiniMinds to manage operations.</li>\r
        <li><strong>"Parent"</strong> refers to a parent or legal guardian of a child enrolled in a Daycare Center.</li>\r
        <li><strong>"Teacher/Educator"</strong> refers to staff members of a Daycare Center.</li>\r
        <li><strong>"Administrator"</strong> refers to the manager or owner of a Daycare Center account.</li>\r
      </ul>\r
    </div>\r
\r
    <div class="card" id="eligibility">\r
      <h2>2. Eligibility</h2>\r
      <h3>2.1 Age Requirements</h3>\r
      <p>You must be at least 18 years old to create an account and use our Service. By creating an account, you represent and warrant that you are at least 18 years of age.</p>\r
\r
      <h3>2.2 Authority</h3>\r
      <p>If you are using the Service on behalf of a Daycare Center or organization, you represent that you have the authority to bind that organization to these Terms.</p>\r
\r
      <h3>2.3 Parental Responsibility</h3>\r
      <p>Parents using the Service to access information about their children must be the legal parent or guardian of the child. You agree to provide accurate information about your relationship to any children associated with your account.</p>\r
    </div>\r
\r
    <div class="card" id="accounts">\r
      <h2>3. User Accounts</h2>\r
      <h3>3.1 Account Creation</h3>\r
      <p>To use certain features of the Service, you must create an account. You agree to:</p>\r
      <ul>\r
        <li>Provide accurate, current, and complete information</li>\r
        <li>Maintain and update your information to keep it accurate</li>\r
        <li>Maintain the security of your password</li>\r
        <li>Not share your account credentials with others</li>\r
        <li>Notify us immediately of any unauthorized use</li>\r
      </ul>\r
\r
      <h3>3.2 Account Types</h3>\r
      <p>Our Service offers different account types with varying permissions:</p>\r
      <ul>\r
        <li><strong>Administrator:</strong> Full access to manage the Daycare Center, users, and settings</li>\r
        <li><strong>Teacher/Educator:</strong> Access to manage children, activities, and attendance</li>\r
        <li><strong>Parent:</strong> Access to view their children's information and communicate with the Daycare</li>\r
      </ul>\r
\r
      <h3>3.3 Account Responsibility</h3>\r
      <p>You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to protect your account credentials.</p>\r
\r
      <h3>3.4 Account Termination</h3>\r
      <p>You may delete your account at any time through the Settings menu or by contacting us. Upon deletion, all your personal data will be permanently removed in accordance with our Privacy Policy.</p>\r
    </div>\r
\r
    <div class="card" id="services">\r
      <h2>4. Description of Services</h2>\r
      <p>MiniMinds provides a daycare management platform that includes:</p>\r
      <ul>\r
        <li><strong>Attendance Management:</strong> Check-in/check-out tracking with QR codes and geolocation</li>\r
        <li><strong>Daily Activities:</strong> Recording and sharing children's daily activities</li>\r
        <li><strong>Photo Gallery:</strong> Secure photo sharing of daycare activities</li>\r
        <li><strong>Messaging:</strong> Communication between parents and teachers</li>\r
        <li><strong>Fee Management:</strong> Tracking and processing of daycare fees</li>\r
        <li><strong>Event Management:</strong> Creating and managing daycare events</li>\r
        <li><strong>Notifications:</strong> Real-time updates about children's activities</li>\r
        <li><strong>Reports:</strong> Generating activity and attendance reports</li>\r
      </ul>\r
\r
      <h3>4.1 Service Availability</h3>\r
      <p>We strive to maintain Service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.</p>\r
\r
      <h3>4.2 Service Modifications</h3>\r
      <p>We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice when possible for significant changes.</p>\r
    </div>\r
\r
    <div class="card" id="acceptable-use">\r
      <h2>5. Acceptable Use</h2>\r
      <h3>5.1 Permitted Uses</h3>\r
      <p>You may use the Service only for lawful purposes related to daycare management and parent-teacher communication.</p>\r
\r
      <h3>5.2 Prohibited Activities</h3>\r
      <p>You agree NOT to:</p>\r
      <ul>\r
        <li>Use the Service for any illegal purpose</li>\r
        <li>Upload content that is harmful, threatening, abusive, or offensive</li>\r
        <li>Impersonate another person or misrepresent your identity</li>\r
        <li>Upload viruses, malware, or other harmful code</li>\r
        <li>Attempt to gain unauthorized access to other accounts or systems</li>\r
        <li>Interfere with or disrupt the Service or servers</li>\r
        <li>Collect user information without consent</li>\r
        <li>Use automated systems (bots, scrapers) without permission</li>\r
        <li>Share login credentials or allow others to access your account</li>\r
        <li>Upload inappropriate content involving children</li>\r
        <li>Use the Service to harass, bully, or harm others</li>\r
        <li>Violate any applicable laws or regulations</li>\r
      </ul>\r
\r
      <div class="important-box">\r
        <strong>Zero Tolerance Policy:</strong> Any content depicting child abuse, exploitation, or other illegal activities will result in immediate account termination and reporting to appropriate authorities.\r
      </div>\r
    </div>\r
\r
    <div class="card" id="content">\r
      <h2>6. User Content</h2>\r
      <h3>6.1 Ownership</h3>\r
      <p>You retain ownership of all Content you upload to the Service. By uploading Content, you grant us a limited license to store, display, and process that Content solely for the purpose of providing the Service.</p>\r
\r
      <h3>6.2 Content Responsibility</h3>\r
      <p>You are solely responsible for all Content you upload. You represent and warrant that:</p>\r
      <ul>\r
        <li>You have the right to upload and share the Content</li>\r
        <li>The Content does not violate any third-party rights</li>\r
        <li>The Content complies with all applicable laws</li>\r
        <li>You have obtained necessary consents for any photos of children</li>\r
      </ul>\r
\r
      <h3>6.3 Content Removal</h3>\r
      <p>We reserve the right to remove any Content that violates these Terms or is otherwise objectionable, without prior notice.</p>\r
\r
      <h3>6.4 Photos of Children</h3>\r
      <p>Photos of children uploaded to the Service are:</p>\r
      <ul>\r
        <li>Stored securely and not publicly accessible</li>\r
        <li>Only visible to authorized users (parents, teachers, administrators)</li>\r
        <li>Never used for marketing or advertising purposes</li>\r
        <li>Deleted upon account termination or request</li>\r
      </ul>\r
    </div>\r
\r
    <div class="card" id="payments">\r
      <h2>7. Payments and Fees</h2>\r
      <h3>7.1 Daycare Fee Payments</h3>\r
      <p>Parents may use the Service to pay daycare fees. All payments are processed through Stripe, a third-party payment processor. By making a payment, you agree to Stripe's terms of service.</p>\r
\r
      <h3>7.2 Payment Information</h3>\r
      <p>We do not store your credit card information. All payment data is securely handled by Stripe in accordance with PCI-DSS standards.</p>\r
\r
      <h3>7.3 Refunds</h3>\r
      <p>Refund policies for daycare fees are determined by each individual Daycare Center. Please contact your Daycare Center directly regarding refund requests.</p>\r
\r
      <h3>7.4 Payment Disputes</h3>\r
      <p>If you have a dispute regarding a payment, please first contact the Daycare Center. For issues with payment processing, you may contact Stripe directly.</p>\r
    </div>\r
\r
    <div class="card" id="intellectual-property">\r
      <h2>8. Intellectual Property</h2>\r
      <h3>8.1 Our Intellectual Property</h3>\r
      <p>The Service, including its original content (excluding User Content), features, and functionality, is owned by MiniMinds and protected by copyright, trademark, and other intellectual property laws.</p>\r
\r
      <h3>8.2 License to Use</h3>\r
      <p>We grant you a limited, non-exclusive, non-transferable license to access and use the Service for its intended purpose. This license does not include:</p>\r
      <ul>\r
        <li>Modifying or copying the Service</li>\r
        <li>Using the Service for commercial purposes outside its intended use</li>\r
        <li>Attempting to reverse engineer or extract source code</li>\r
        <li>Removing any copyright or proprietary notices</li>\r
      </ul>\r
\r
      <h3>8.3 Trademarks</h3>\r
      <p>"MiniMinds" and associated logos are trademarks of MiniMinds. You may not use these marks without our prior written permission.</p>\r
    </div>\r
\r
    <div class="card" id="privacy">\r
      <h2>9. Privacy</h2>\r
      <p>Your privacy is important to us. Our collection and use of personal information is governed by our <a routerLink="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>\r
      <p>Key privacy commitments:</p>\r
      <ul>\r
        <li>We comply with COPPA for children's data</li>\r
        <li>We do not sell personal information</li>\r
        <li>We use industry-standard security measures</li>\r
        <li>You can request deletion of your data at any time</li>\r
      </ul>\r
    </div>\r
\r
    <div class="card" id="termination">\r
      <h2>10. Termination</h2>\r
      <h3>10.1 Termination by You</h3>\r
      <p>You may terminate your account at any time by using the delete account feature in Settings or by contacting us.</p>\r
\r
      <h3>10.2 Termination by Us</h3>\r
      <p>We may suspend or terminate your account immediately, without prior notice, if:</p>\r
      <ul>\r
        <li>You violate these Terms of Service</li>\r
        <li>You engage in fraudulent or illegal activity</li>\r
        <li>Your use poses a security risk</li>\r
        <li>Required by law or legal process</li>\r
      </ul>\r
\r
      <h3>10.3 Effect of Termination</h3>\r
      <p>Upon termination:</p>\r
      <ul>\r
        <li>Your right to access the Service ceases immediately</li>\r
        <li>Your data will be deleted in accordance with our Privacy Policy</li>\r
        <li>Provisions that should survive termination will remain in effect</li>\r
      </ul>\r
    </div>\r
\r
    <div class="card" id="disclaimers">\r
      <h2>11. Disclaimers</h2>\r
      <div class="warning-box">\r
        <p><strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong></p>\r
      </div>\r
      <p>We disclaim all warranties, including but not limited to:</p>\r
      <ul>\r
        <li>Merchantability and fitness for a particular purpose</li>\r
        <li>Uninterrupted or error-free operation</li>\r
        <li>Accuracy or completeness of information</li>\r
        <li>Security of data transmission</li>\r
      </ul>\r
      <p>We do not warrant that:</p>\r
      <ul>\r
        <li>The Service will meet your specific requirements</li>\r
        <li>The Service will be available at all times</li>\r
        <li>Results obtained from the Service will be accurate</li>\r
        <li>Any errors will be corrected</li>\r
      </ul>\r
    </div>\r
\r
    <div class="card" id="liability">\r
      <h2>12. Limitation of Liability</h2>\r
      <div class="warning-box">\r
        <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MINIMINDS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</strong></p>\r
      </div>\r
      <p>This includes, but is not limited to, damages for:</p>\r
      <ul>\r
        <li>Loss of profits, data, or goodwill</li>\r
        <li>Service interruption or computer damage</li>\r
        <li>Cost of substitute services</li>\r
        <li>Personal injury or property damage</li>\r
      </ul>\r
      <p>In no event shall our total liability exceed the amount you paid to us in the twelve (12) months preceding the claim, or $100, whichever is greater.</p>\r
      <p>Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.</p>\r
    </div>\r
\r
    <div class="card" id="indemnification">\r
      <h2>13. Indemnification</h2>\r
      <p>You agree to defend, indemnify, and hold harmless MiniMinds and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:</p>\r
      <ul>\r
        <li>Your use of the Service</li>\r
        <li>Your violation of these Terms</li>\r
        <li>Your violation of any third-party rights</li>\r
        <li>Content you upload to the Service</li>\r
      </ul>\r
    </div>\r
\r
    <div class="card" id="changes">\r
      <h2>14. Changes to Terms</h2>\r
      <p>We reserve the right to modify these Terms at any time. When we make changes:</p>\r
      <ul>\r
        <li>We will update the "Last Updated" date</li>\r
        <li>We will notify users through the app for material changes</li>\r
        <li>Continued use after changes constitutes acceptance</li>\r
      </ul>\r
      <p>If you do not agree to the modified Terms, you should discontinue use of the Service.</p>\r
    </div>\r
\r
    <div class="card" id="governing-law">\r
      <h2>15. Governing Law</h2>\r
      <h3>15.1 Applicable Law</h3>\r
      <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>\r
\r
      <h3>15.2 Dispute Resolution</h3>\r
      <p>Any disputes arising from these Terms or your use of the Service shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes may be resolved through binding arbitration or in courts of competent jurisdiction.</p>\r
\r
      <h3>15.3 Severability</h3>\r
      <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>\r
\r
      <h3>15.4 Waiver</h3>\r
      <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>\r
    </div>\r
\r
    <div class="card" id="contact">\r
      <h2>16. Contact Information</h2>\r
      <p>If you have any questions about these Terms of Service, please contact us:</p>\r
      <ul>\r
        <li><strong>Email:</strong> support&#64;miniminds.com</li>\r
        <li><strong>Website:</strong> <a href="https://app-miniminds.com">https://app-miniminds.com</a></li>\r
      </ul>\r
      <p>For urgent matters regarding child safety or abuse, please contact local authorities immediately.</p>\r
    </div>\r
\r
    <div class="footer">\r
      <p>&copy; {{ currentYear }} MiniMinds. All rights reserved.</p>\r
      <p>\r
        <a routerLink="/privacy-policy">Privacy Policy</a> |\r
        <a routerLink="/">Home</a>\r
      </p>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/legal/terms-of-service/terms-of-service.scss */\n.legal-page {\n  min-height: 100vh;\n  background: #f8f9fa;\n}\n.header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n  position: relative;\n}\n.header .back-link {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  opacity: 0.9;\n  transition: opacity 0.2s;\n}\n.header .back-link:hover {\n  opacity: 1;\n}\n.header .back-link i {\n  font-size: 18px;\n}\n.header h1 {\n  font-size: 36px;\n  margin-bottom: 10px;\n}\n.header p {\n  font-size: 16px;\n  opacity: 0.9;\n}\n.container {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n.card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 40px;\n  margin-bottom: 30px;\n}\nh2 {\n  color: #667eea;\n  font-size: 24px;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #f0f0f0;\n}\nh3 {\n  color: #444;\n  font-size: 18px;\n  margin: 25px 0 15px 0;\n}\np {\n  margin-bottom: 15px;\n  color: #555;\n  line-height: 1.7;\n}\nul,\nol {\n  margin: 15px 0 15px 25px;\n  color: #555;\n}\nli {\n  margin-bottom: 10px;\n  line-height: 1.6;\n}\na {\n  color: #667eea;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n.highlight-box {\n  background: #e7f1ff;\n  border-left: 4px solid #667eea;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 0 8px 8px 0;\n}\n.warning-box {\n  background: #fff3cd;\n  border-left: 4px solid #ffc107;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 0 8px 8px 0;\n}\n.important-box {\n  background: #f8d7da;\n  border-left: 4px solid #dc3545;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 0 8px 8px 0;\n}\n.toc {\n  background: #f8f9fa;\n  padding: 25px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.toc h3 {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.toc ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.toc li {\n  margin-bottom: 8px;\n}\n.last-updated {\n  text-align: center;\n  color: #888;\n  font-size: 14px;\n  margin-bottom: 30px;\n}\n.footer {\n  text-align: center;\n  padding: 30px;\n  color: #666;\n  font-size: 14px;\n}\n.footer p {\n  margin-bottom: 10px;\n}\n@media (max-width: 600px) {\n  .header {\n    padding: 80px 20px 40px;\n  }\n  .header h1 {\n    font-size: 28px;\n  }\n  .header .back-link {\n    top: 15px;\n    left: 15px;\n  }\n  .card {\n    padding: 25px;\n  }\n  .container {\n    padding: 20px 15px;\n  }\n}\n/*# sourceMappingURL=terms-of-service.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermsOfService, { className: "TermsOfService", filePath: "src/app/features/legal/terms-of-service/terms-of-service.ts", lineNumber: 12 });
})();
export {
  TermsOfService
};
//# sourceMappingURL=chunk-QQQOXNPZ.js.map
