import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUp,
  Shield,
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  Share2,
  Cookie,
  Smartphone,
  Globe,
  Server,
  FileText,
  FolderLock,
  KeyRound,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Trash2,
  Printer,
  ExternalLink,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import sisLogo from "@/assets/sis-logo.png";

const LAST_UPDATED = "23 September 2026";
const SUPPORT_EMAIL = "smart.wealth.support@gmail.com";
const WEBSITE_EMAIL = "smartinvest.solutions.supoort@gmail.com";
const GRIEVANCE_OFFICER = "Soumyajit Datta";
const CONTACT_PHONE = "+91 96411 66805";
const CONTACT_ADDRESS = "Pakhanna Bus Stand, Bankura, West Bengal - 722208, India";
const APP_PACKAGE = "com.ulmind.smartwealth";

const sections = [
  { id: "introduction", title: "Introduction", icon: FileText },
  { id: "scope", title: "What This Policy Covers", icon: Layers },
  { id: "information-we-collect", title: "Information We Collect", icon: Database },
  { id: "evault", title: "Documents & the E-Vault", icon: FolderLock },
  { id: "how-we-use", title: "How We Use Your Information", icon: UserCheck },
  { id: "legal-basis", title: "Legal Basis & Consent", icon: ShieldCheck },
  { id: "permissions", title: "App Permissions & Device Access", icon: Smartphone },
  { id: "cookies", title: "Cookies & On-Device Storage", icon: Cookie },
  { id: "third-parties", title: "Third-Party Services", icon: Share2 },
  { id: "data-sharing", title: "How We Share Information", icon: Share2 },
  { id: "data-security", title: "Data Security", icon: Lock },
  { id: "storage-location", title: "Where Your Data Is Stored", icon: Server },
  { id: "data-retention", title: "Data Retention", icon: RefreshCw },
  { id: "your-rights", title: "Your Rights & Choices", icon: KeyRound },
  { id: "data-deletion", title: "Account & Data Deletion", icon: Trash2 },
  { id: "children", title: "Children's Privacy", icon: Baby },
  { id: "changes", title: "Changes to This Policy", icon: RefreshCw },
  { id: "contact", title: "Contact & Grievance Officer", icon: Mail },
];

const highlights = [
  {
    icon: Shield,
    title: "We never sell your data",
    text: "Your personal, family and financial details are never sold, rented or shared with advertisers or data brokers.",
  },
  {
    icon: Lock,
    title: "No ads, no tracking SDKs",
    text: "There are no advertising networks, marketing pixels or third-party analytics trackers in our app or website.",
  },
  {
    icon: Trash2,
    title: "Delete everything, any time",
    text: "One tap in the app permanently erases your account, your records and every document you uploaded.",
  },
];

const products = [
  {
    icon: Globe,
    label: "Website",
    name: "smartinvestsolutions.in",
    detail:
      "Our public website — service information, financial calculators, enquiry and quote forms.",
  },
  {
    icon: Smartphone,
    label: "Mobile App",
    name: "SmartWealth",
    detail: `Android & iOS app (${APP_PACKAGE}) where clients track family policies, deposits, documents and support requests.`,
  },
];

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Respect the theme the visitor picked on the main site
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm sm:text-base">Back to Home</span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={sisLogo}
              alt="Smart Invest Solutions"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl opacity-60"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-5">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Your privacy matters to us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-6">
              A single policy covering the Smart Invest Solutions website and the{" "}
              <strong className="text-foreground font-semibold">SmartWealth</strong> mobile app. It
              explains what we collect, why we collect it, how we protect it, and the control you
              have over it.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="px-3 py-1.5 rounded-lg bg-card border border-border text-foreground/70">
                Last updated: <span className="text-foreground font-medium">{LAST_UPDATED}</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-card border border-border text-foreground/70">
                Version: <span className="text-foreground font-medium">1.0</span>
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.print()}
                className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 print:hidden"
              >
                <Printer className="w-4 h-4" />
                Print / Save as PDF
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10 sm:mt-12">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-card/80 backdrop-blur border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5 text-sm sm:text-base">{title}</h3>
                <p className="text-foreground/65 text-xs sm:text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-12">
          {/* Table of contents */}
          <aside className="hidden lg:block print:hidden">
            <nav className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-3 px-3">
                On this page
              </p>
              <ul className="space-y-0.5 max-h-[calc(100vh-9rem)] overflow-y-auto pr-1">
                {sections.map(({ id, title, icon: Icon }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground/65 hover:text-foreground hover:bg-secondary/60"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="leading-snug">{title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Policy body */}
          <main className="max-w-3xl space-y-10 sm:space-y-12">
            <Section id="introduction" icon={FileText} title="Introduction">
              <p>
                Smart Invest Solutions ("Smart Invest Solutions", "we", "us" or "our") is a financial
                advisory and distribution firm based in Bankura, West Bengal, India. We help families
                plan and manage their insurance, investments, deposits, retirement and tax needs.
              </p>
              <p>
                We take the privacy of the people we advise seriously. The information you give us —
                your family details, your policies and your documents — is the basis of the advice we
                provide, and we treat it as confidential. This policy explains, in plain language,
                exactly what we hold and what you can do about it.
              </p>
              <p>
                We handle personal data in line with applicable Indian law, including the Information
                Technology Act, 2000 and the Reasonable Security Practices Rules, 2011, and the
                Digital Personal Data Protection Act, 2023.
              </p>
              <p>
                By using our website or the SmartWealth app, you agree to the practices described
                here. If you do not agree, please do not use them.
              </p>
            </Section>

            <Section id="scope" icon={Layers} title="What This Policy Covers">
              <p>
                This single policy applies to both of the platforms we operate. Where a rule applies
                to only one of them, we say so clearly.
              </p>
              <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
                {products.map(({ icon: Icon, label, name, detail }) => (
                  <div key={name} className="p-5 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-[11px] uppercase tracking-wide text-foreground/50 font-medium">
                        {label}
                      </span>
                    </div>
                    <p className="font-semibold text-foreground text-sm mb-1.5 break-words">{name}</p>
                    <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
              <p>
                The SmartWealth app is published for Smart Invest Solutions and is the portal our
                clients use to keep their family's financial records in one place. This page is the
                official privacy policy URL listed for the app on the Google Play Store and, where
                applicable, the Apple App Store.
              </p>
            </Section>

            <Section id="information-we-collect" icon={Database} title="Information We Collect">
              <p>
                We collect only what is needed to run the Services and to advise you properly. We
                never ask for more than that.
              </p>

              <h3>A. Through our website</h3>
              <ul>
                <li>
                  <strong>Enquiry and quote forms</strong> — your name, email address, mobile number,
                  preferred callback time and the message or financial goal you describe.
                </li>
                <li>
                  <strong>Policy service requests</strong> — your policy number and date of birth,
                  used to verify the policy and process the service you asked for.
                </li>
                <li>
                  <strong>Feedback</strong> — your name, contact details, rating and comments.
                </li>
                <li>
                  <strong>Technical data</strong> — IP address, browser and device type, pages
                  visited and timestamps, recorded in standard server logs for security and
                  troubleshooting.
                </li>
              </ul>

              <h3>B. In the SmartWealth app</h3>
              <ul>
                <li>
                  <strong>Account details</strong> — your name, email address, mobile number and
                  password. Passwords are stored only as a one-way encrypted hash, never in readable
                  form.
                </li>
                <li>
                  <strong>Email verification and password reset codes</strong> — a six-digit OTP sent
                  to your email, stored temporarily until it is used or expires.
                </li>
                <li>
                  <strong>Access request details</strong> — the name, email, phone number, optional
                  notes and Agency or referral code you submit when requesting access, so our team can
                  review and approve your account.
                </li>
                <li>
                  <strong>Family member records</strong> — for each family member you add: name,
                  relationship to the head of family, date of birth, phone number, and optionally
                  email address and blood group.
                </li>
                <li>
                  <strong>Life insurance records</strong> — company, policy number, plan name, life
                  insured, nominee name, sum assured, term, premium paying term, date of commencement,
                  maturity date, installment premium, next due date and payment mode.
                </li>
                <li>
                  <strong>Health insurance records</strong> — insurer, policy details, covered
                  members, sum insured and premium schedule.
                </li>
                <li>
                  <strong>Motor / general insurance records</strong> — vehicle number, policy number,
                  insurer, expiry date and advisor contact.
                </li>
                <li>
                  <strong>Fixed deposit and postal records</strong> — deposit number and name, bank or
                  institution, principal and maturity amount, term, opening and maturity date,
                  nominee, second holder and branch address.
                </li>
                <li>
                  <strong>E-Vault documents</strong> — the files you choose to upload, with their
                  name, category, type and size. See the next section.
                </li>
                <li>
                  <strong>Support tickets</strong> — the subject, description and correspondence of
                  any request you raise with our team.
                </li>
                <li>
                  <strong>Diagnostic data</strong> — app version, device model and operating system
                  version, and crash reports made available to us in aggregate by the app stores.
                </li>
              </ul>

              <h3>C. What we never collect</h3>
              <ul>
                <li>
                  We never ask for your net-banking credentials, card numbers, CVV, UPI PIN or any
                  OTP sent by your bank or insurer.
                </li>
                <li>
                  The app does not access your location, contacts, SMS messages, call logs, photo
                  gallery, microphone or camera.
                </li>
                <li>
                  We run no advertising networks, marketing pixels or third-party behavioural
                  analytics in the app or on the website.
                </li>
                <li>
                  Our financial calculators run on your device or return only the computed figures —
                  the amounts you try out are not saved to your profile.
                </li>
              </ul>
            </Section>

            <Section id="evault" icon={FolderLock} title="Documents & the E-Vault">
              <p>
                The E-Vault lets you keep important documents — such as an Aadhaar card, PAN card,
                bank passbook or policy paper — alongside the records they belong to, so nothing is
                lost when you need it. Because these are sensitive documents, we apply specific
                rules to them:
              </p>
              <ul>
                <li>
                  <strong>You choose what goes in.</strong> Nothing is uploaded automatically. The app
                  opens your device's own file picker, and only the file you select is read.
                </li>
                <li>
                  <strong>Stored with a specialist provider.</strong> Files are uploaded over an
                  encrypted connection to our storage provider (Cloudinary) and are referenced by a
                  private link tied to your account.
                </li>
                <li>
                  <strong>Access is limited.</strong> Your documents are visible to you, and to the
                  authorised Smart Invest Solutions staff who service your portfolio. They are not
                  visible to other clients.
                </li>
                <li>
                  <strong>You can remove them at any time.</strong> Deleting a document removes it
                  from both our database and the storage provider. Deleting your account removes every
                  document you ever uploaded.
                </li>
                <li>
                  <strong>We do not read them for any other purpose.</strong> Your documents are never
                  mined for marketing, profiling or sale, and are never shared with anyone outside the
                  purposes described in this policy.
                </li>
              </ul>
              <p>
                Please upload only documents that are genuinely required for your financial records,
                and avoid uploading anything that belongs to someone who has not asked you to store
                it on their behalf.
              </p>
            </Section>

            <Section id="how-we-use" icon={UserCheck} title="How We Use Your Information">
              <p>We use the information described above only for these purposes:</p>
              <ul>
                <li>To create, verify and secure your SmartWealth account</li>
                <li>To display your family's portfolio, upcoming premiums and maturity dates</li>
                <li>To store and retrieve the documents you place in the E-Vault</li>
                <li>To generate the portfolio reports and statements you ask for</li>
                <li>To respond to your enquiries, quotes and support tickets</li>
                <li>To remind you about premium due dates, renewals and maturities</li>
                <li>To process service requests on your existing policies and deposits</li>
                <li>To provide the advisory and distribution services you engage us for</li>
                <li>To improve the app and website, fix bugs and keep the service reliable</li>
                <li>To detect and prevent fraud, unauthorised access and abuse</li>
                <li>To meet legal, regulatory, tax and audit obligations</li>
              </ul>
              <p>
                We do not sell, rent or trade your personal information, and we do not use it for
                automated decision-making that produces legal effects for you.
              </p>
            </Section>

            <Section id="legal-basis" icon={ShieldCheck} title="Legal Basis & Consent">
              <p>
                We process your personal data on the basis of the consent you give when you create an
                account, enter a record or submit a form, and for the legitimate purposes of
                delivering the services you have asked for and complying with the legal obligations
                that apply to financial intermediaries in India.
              </p>
              <p>
                Your consent is specific, informed and freely given. You may withdraw it at any time
                by deleting your account in the app, or by writing to us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline break-all">
                  {SUPPORT_EMAIL}
                </a>
                . Withdrawal does not affect processing already carried out, and we may still retain
                records the law requires us to keep.
              </p>
              <p>
                When you add a family member, you confirm that you are entitled to share their
                details with us and that you have their consent (or, for a minor, that you are the
                parent or legal guardian).
              </p>
            </Section>

            <Section id="permissions" icon={Smartphone} title="App Permissions & Device Access">
              <p>
                SmartWealth is deliberately built to request as little device access as possible.
                Here is the complete list:
              </p>
              <ul>
                <li>
                  <strong>Internet / network access</strong> — required, so the app can sign you in
                  and load your portfolio.
                </li>
                <li>
                  <strong>File selection</strong> — when you upload a document, the app opens your
                  device's system file picker. Only the file you pick is read; the app has no
                  browse-anything access to your storage, and broad storage permissions are explicitly
                  disabled in the app's manifest.
                </li>
                <li>
                  <strong>Audio settings</strong> — used only to play the short confirmation chime
                  after a successful action. The app does not request microphone access and cannot
                  record audio.
                </li>
                <li>
                  <strong>Share sheet and clipboard</strong> — used only when you tap Share or Copy,
                  for example to share your referral code or a generated report.
                </li>
              </ul>
              <p>
                <strong>The app does not request or use:</strong> location, contacts, SMS, call logs,
                camera, microphone, photo gallery, calendar, or any background data collection when
                the app is closed. The app does not currently send push notifications; reminders
                appear inside the app and, where relevant, by email.
              </p>
            </Section>

            <Section id="cookies" icon={Cookie} title="Cookies & On-Device Storage">
              <p>
                We use no advertising cookies, remarketing pixels or cross-site trackers. The only
                client-side storage we rely on is strictly functional.
              </p>
              <h3>Website</h3>
              <ul>
                <li>
                  <code>theme</code> — remembers whether you prefer the light or dark appearance.
                </li>
                <li>
                  <code>lead_captured</code> — stops the welcome form reappearing once you have
                  submitted or dismissed it.
                </li>
                <li>
                  <code>calculator-tour-completed</code> — remembers that you have finished the
                  calculator walkthrough.
                </li>
              </ul>
              <h3>Mobile app</h3>
              <ul>
                <li>
                  Your session — a signed login token and your basic profile — is stored in the app's
                  private storage area so you do not have to sign in every time. It is removed when
                  you sign out or uninstall the app.
                </li>
              </ul>
              <p>
                Embedded third-party content on the website, such as a Google Map, may set its own
                cookies governed by that provider's policy.
              </p>
            </Section>

            <Section id="third-parties" icon={Share2} title="Third-Party Services">
              <p>
                We rely on a small number of established providers to run the Services. Each processes
                data only for the function described, under its own security and privacy commitments:
              </p>
              <ul>
                <li>
                  <strong>MongoDB Atlas</strong> — the managed database that stores your account and
                  portfolio records.
                </li>
                <li>
                  <strong>Cloudinary</strong> — secure file storage for E-Vault documents and product
                  brochures.
                </li>
                <li>
                  <strong>Resend</strong> — delivers transactional email such as verification codes,
                  password resets and account notifications. It is not used for bulk marketing.
                </li>
                <li>
                  <strong>Application hosting providers</strong> — run our backend API and website and
                  keep standard server and security logs.
                </li>
                <li>
                  <strong>Expo (EAS)</strong> — the build and release toolchain used to publish the
                  mobile app.
                </li>
                <li>
                  <strong>Google Play Store and Apple App Store</strong> — distribute the app and give
                  us aggregated, anonymised install and crash statistics.
                </li>
                <li>
                  <strong>Web3Forms</strong> — securely delivers website form submissions to our
                  official inbox.
                </li>
                <li>
                  <strong>WhatsApp (Meta)</strong> — if you message us through the WhatsApp button,
                  that conversation is governed by WhatsApp's own privacy policy.
                </li>
                <li>
                  <strong>Google Maps</strong> — displays our office location on the website.
                </li>
                <li>
                  <strong>ULMiND</strong> — our technology partner, which builds and maintains the
                  website and the app and may access our systems for support and maintenance under
                  confidentiality obligations.
                </li>
              </ul>
              <p>
                When you actually invest or take a policy through us, your application is submitted to
                the relevant insurer, asset management company, registrar or financial institution,
                each of which handles your data under its own regulated privacy policy.
              </p>
            </Section>

            <Section id="data-sharing" icon={Share2} title="How We Share Information">
              <p>
                We share your personal information only in the following circumstances, and never for
                anyone else's marketing:
              </p>
              <ul>
                <li>
                  <strong>With our advisory team</strong> — authorised Smart Invest Solutions staff
                  and the advisor assigned to your account can view the records needed to service your
                  portfolio. Access is role-based, logged, and limited to what the role requires.
                </li>
                <li>
                  <strong>With your product providers</strong> — the insurer, AMC, bank, registrar or
                  post office required to process the product or service you asked for.
                </li>
                <li>
                  <strong>With our service providers</strong> — the infrastructure partners listed
                  above, strictly to operate the Services.
                </li>
                <li>
                  <strong>For legal reasons</strong> — where disclosure is required by law, by a
                  court, or by a regulatory or law-enforcement authority, or to establish, exercise or
                  defend legal claims.
                </li>
                <li>
                  <strong>In a business transfer</strong> — if our business is merged or restructured,
                  data may transfer to the successor entity under the same commitments, and you will
                  be informed.
                </li>
              </ul>
              <p>
                Other clients of Smart Invest Solutions can never see your records. Your data is not
                pooled into any shared or public directory.
              </p>
            </Section>

            <Section id="data-security" icon={Lock} title="Data Security">
              <p>
                We apply reasonable technical and organisational safeguards, proportionate to the
                sensitivity of the data we hold:
              </p>
              <ul>
                <li>All traffic between your device and our servers is encrypted with HTTPS/TLS.</li>
                <li>
                  Passwords and admin PINs are stored only as salted one-way hashes — nobody at Smart
                  Invest Solutions can read them.
                </li>
                <li>
                  Signing in issues a time-limited access token, and repeated failed login attempts
                  temporarily lock the account to defeat brute-force attacks.
                </li>
                <li>
                  Email addresses are verified with a one-time code before an account becomes active,
                  and agency accounts are reviewed and approved by our team.
                </li>
                <li>
                  Staff access is role-based, with administrative accounts separately credentialled
                  and time-limited.
                </li>
                <li>
                  Documents are stored with a specialist provider and referenced through private
                  links tied to your account.
                </li>
              </ul>
              <p>
                No method of transmission or storage is completely secure, so we cannot guarantee
                absolute security. If a breach affecting your personal data occurs, we will notify you
                and the relevant authority as required by law.
              </p>
              <p>
                Please help keep your account safe: use a strong, unique password, never share your
                password or OTP with anyone — including anyone claiming to be from Smart Invest
                Solutions — and verify any payment instruction on our official phone number before
                acting on it.
              </p>
            </Section>

            <Section id="storage-location" icon={Server} title="Where Your Data Is Stored">
              <p>
                Our database, file storage and application servers are operated by cloud providers
                whose data centres may be located in India or in other countries. This means your
                information may be stored or processed outside India.
              </p>
              <p>
                Wherever it is held, your data remains subject to this policy and to the contractual
                security obligations we place on our providers, and any transfer is made only to the
                extent permitted by Indian law.
              </p>
            </Section>

            <Section id="data-retention" icon={RefreshCw} title="Data Retention">
              <p>We keep personal information only as long as it serves the purpose it was collected for:</p>
              <ul>
                <li>
                  <strong>Your account and portfolio records</strong> — for as long as your account is
                  active. They are deleted when you delete your account.
                </li>
                <li>
                  <strong>Website enquiries that do not become clients</strong> — generally up to 24
                  months.
                </li>
                <li>
                  <strong>Verification and password-reset codes</strong> — minutes only; they expire
                  automatically and are then unusable.
                </li>
                <li>
                  <strong>Client transaction records</strong> — retained for the period prescribed by
                  financial, tax and regulatory record-keeping rules in India, even after an account
                  is closed.
                </li>
                <li>
                  <strong>Technical and security logs</strong> — a short period, usually not more than
                  12 months.
                </li>
              </ul>
              <p>
                When data is no longer required and no legal obligation applies, we delete it or
                irreversibly anonymise it.
              </p>
            </Section>

            <Section id="your-rights" icon={KeyRound} title="Your Rights & Choices">
              <p>Subject to applicable law, you have the right to:</p>
              <ul>
                <li><strong>Access</strong> the personal data we hold about you</li>
                <li><strong>Correct</strong> anything inaccurate, outdated or incomplete — most records can be edited directly in the app</li>
                <li><strong>Erase</strong> your records and your account entirely</li>
                <li><strong>Withdraw consent</strong> to further processing or communication</li>
                <li><strong>Opt out</strong> of promotional calls, emails and messages</li>
                <li><strong>Nominate</strong> another person to exercise your rights in the event of death or incapacity</li>
                <li><strong>Complain</strong> to us, and thereafter to the appropriate authority, about how your data has been handled</li>
              </ul>
              <p>
                To exercise any of these rights, use the controls in the app or email us from your
                registered address. We verify every request to protect your account, and respond
                within 30 days.
              </p>
            </Section>

            <Section id="data-deletion" icon={Trash2} title="Account & Data Deletion">
              <p>
                You can delete your SmartWealth account and all of its data yourself, at any time,
                without contacting us.
              </p>
              <h3>Deleting from inside the app</h3>
              <ol>
                <li>Open SmartWealth and go to the <strong>Profile</strong> tab.</li>
                <li>Scroll to <strong>Delete Account</strong> and confirm.</li>
              </ol>
              <p>
                This permanently removes your profile, family members, life, health and motor
                insurance records, fixed deposits, support tickets, onboarding records, and every
                E-Vault document — including the underlying files held with our storage provider. The
                action cannot be undone, and we send a confirmation email once it is complete.
              </p>
              <h3>Deleting by email</h3>
              <ol>
                <li>
                  Email{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Data%20Deletion%20Request`}
                    className="text-primary hover:underline break-all"
                  >
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  with the subject <strong>"Data Deletion Request"</strong>.
                </li>
                <li>
                  Include the name, registered email address and phone number on the account, so we
                  can verify and locate it.
                </li>
                <li>
                  We acknowledge within 7 working days and complete verified deletions within 30 days.
                </li>
              </ol>
              <p>
                Where a financial regulator, insurer or tax authority requires us to preserve certain
                transaction records, we retain only that minimum data, tell you what has been retained
                and why, and delete the rest. Uninstalling the app alone does not delete your account
                — use one of the two routes above.
              </p>
            </Section>

            <Section id="children" icon={Baby} title="Children's Privacy">
              <p>
                SmartWealth accounts and our services are intended for individuals aged 18 and above.
                We do not knowingly create accounts for children or collect their data directly.
              </p>
              <p>
                A minor's details may appear as a family member or as the life insured on a policy —
                in that case the information is entered by the parent or legal guardian who holds the
                account and is responsible for that consent. If you believe a child has created an
                account or shared information with us directly, contact us and we will delete it
                promptly.
              </p>
            </Section>

            <Section id="changes" icon={RefreshCw} title="Changes to This Policy">
              <p>
                We may update this Privacy Policy to reflect changes in our practices, our technology
                or the law. The revised version is posted on this page with a new "Last updated" date,
                and significant changes are highlighted in the app or on our website. Continuing to
                use the Services after an update means you accept the revised policy.
              </p>
              <p className="text-sm text-foreground/60">
                This page is the official privacy policy URL submitted with the SmartWealth app store
                listings and applies to all released versions of the app.
              </p>
            </Section>

            <Section id="contact" icon={Mail} title="Contact & Grievance Officer">
              <p>
                If you have any question, concern or complaint about this policy or about how your
                data is handled, please reach out. In line with the Information Technology Act, 2000
                and the Digital Personal Data Protection Act, 2023, we have appointed a Grievance
                Officer who will acknowledge your complaint and respond within 30 days.
              </p>
              <div className="not-prose flex items-start gap-3 p-5 rounded-xl bg-primary/5 border border-primary/20 my-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-primary/80 font-medium mb-1">
                    Grievance Officer
                  </p>
                  <p className="text-base font-semibold text-foreground">{GRIEVANCE_OFFICER}</p>
                  <p className="text-sm text-foreground/65 mb-2">Smart Invest Solutions &middot; SmartWealth</p>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Grievance%20-%20Privacy`}
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="not-prose grid sm:grid-cols-2 gap-4 mt-6">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-foreground/50 mb-0.5">
                      Privacy & app support
                    </p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                      {SUPPORT_EMAIL}
                    </p>
                  </div>
                </a>
                <a
                  href="https://wa.me/919641166805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-foreground/50 mb-0.5">Phone</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {CONTACT_PHONE}
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${WEBSITE_EMAIL}`}
                  className="sm:col-span-2 flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-foreground/50 mb-0.5">
                      General enquiries
                    </p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                      {WEBSITE_EMAIL}
                    </p>
                  </div>
                </a>
                <div className="sm:col-span-2 flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/50 mb-0.5">
                      Registered Office
                    </p>
                    <p className="text-sm text-foreground">Smart Invest Solutions</p>
                    <p className="text-sm text-foreground/70">{CONTACT_ADDRESS}</p>
                    <p className="text-xs text-foreground/55 mt-2">
                      Data controller for the Smart Invest Solutions website and the SmartWealth app
                      ({APP_PACKAGE}).
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Footer note */}
            <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-foreground/55">
                © {new Date().getFullYear()} Smart Invest Solutions. Investments are subject to market
                risks. Please read all scheme related documents carefully before investing.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline whitespace-nowrap print:hidden"
              >
                Back to website
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Back to top */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center print:hidden"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

type SectionProps = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
};

const Section = ({ id, title, icon: Icon, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <div
      className="prose prose-sm sm:prose-base max-w-none
        text-foreground/75
        prose-headings:text-foreground prose-headings:font-semibold
        prose-h3:text-base prose-h3:sm:text-lg prose-h3:mt-6 prose-h3:mb-2
        prose-p:leading-relaxed prose-p:text-foreground/75
        prose-strong:text-foreground
        prose-li:text-foreground/75 prose-li:marker:text-primary
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5
        prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
    >
      {children}
    </div>
  </section>
);

export default Privacy;
