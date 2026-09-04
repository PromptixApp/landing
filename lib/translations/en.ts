export const en = {
  meta: {
    title: "Promptix — Turn prompts into apps",
    description:
      "Run a prompt as its own app from the Dock. Or select text and invoke AI with a shortcut in any window.",
  },

  nav: {
    promptAsApp: "Prompt as App",
    promptApps: "Prompt Apps",
    pricing: "Pricing",
    faq: "FAQ",
    terms: "Terms of service",
    privacy: "Privacy",
    demo: "Demo",
  },

  header: {
    title: "Turn prompts into apps",
    titleLine2: "From the Dock and Spotlight —",
    subtitle: "or with a shortcut in any app.",
    downloadButton: "Download for macOS",
    downloadHint: "Free to start · 7-day Pro trial",
    demoAria: "Promptix demo",
    demoClose: "Close",
    compatibility: "Works with",
    compatibilityNote: "and any OpenAI-compatible API",
  },

  heroScene: {
    appName: "Mail",
    clock: "Wed 11:46",
    toLabel: "To",
    toValue: "Team",
    subjectLabel: "Subject",
    subjectValue: "Mars flight",
    before:
      "Hello team, we has achieved important success in the Mars flight. Tests was very positive.",
    after:
      "Hello team, we have achieved important success in the Mars flight. Tests were very positive.",
    model: "Default model",
    select: "Select ↵",
    esc: "Esc ✕",
    run: "↵",
    hint: "↑↓ navigate • Enter run • Esc close",
    appField: "Text",
    appRun: "Run",
    appPin: "Pin on top",
    prompts: [
      "Translate",
      "Rewrite",
      "Improve text",
      "Fix grammar",
      "Summarize",
    ],
    destinations: ["Popover", "Rewrite", "Notification"],
  },

  useCases: {
    title: "Or in any app",
    subtitle: "select text, press a shortcut,\u00A0done.",
    placeholder: "Write a message...",
    hotkeyHint: "Press shortcut",
    list: [
      {
        title: "Fix grammar",
        description: "typos and grammar, without leaving the\u00A0window.",
        scene: {
          before: "Hi, ho a y",
          after: "Hi, how are you?",
        },
      },
      {
        title: "Translate",
        description: "the selection to any language.",
        scene: {
          before: "Hi, how are you?",
          after: "Salut, comment vas-tu ?",
        },
      },
      {
        title: "Write text",
        description: "for an email, a post, or a note from a short\u00A0prompt.",
        scene: {
          before: "write a post about GPT-5",
          after:
            "GPT-5 is out. More context, better answers — still just a chat.",
        },
      },
    ],
  },

  feature: {
    eyebrow: "Prompts",
    title: "Automate",
    titleLine2: "your routine tasks",
    form: {
      title: "Describe the task",
      subtitle: "Say what you need. Promptix writes the prompt.",
      sample: "Translate selected text to English and keep the tone",
      generate: "Generate",
      cancel: "Cancel",
      previewItems: [
        "Translate",
        "Rewrite",
        "Improve text",
        "Fix grammar",
        "Summarize",
      ],
    },
    items: [
      {
        name: "Describe the task",
        description: "and Promptix writes the\u00A0prompt.",
      },
      {
        name: "Assign a shortcut",
        description: "and run it from any\u00A0app.",
      },
      {
        name: "5 built-in prompts",
        description:
          "Translate, Rewrite, Improve text, Fix grammar, Summarize.",
      },
      {
        name: "By voice",
        description: "speak, pick a prompt, run.",
      },
    ],
  },

  apiBalance: {
    eyebrow: "Extra",
    title: "Watch the balance",
    description: "of your AI providers.",
    menu: {
      openActions: "Open actions",
      settings: "Settings",
      latestResponse: "Latest response",
      checkUpdates: "Check updates",
      quit: "Quit Promptix",
      spent: "spent",
    },
  },

  promptAsApp: {
    title: "Prompt as App,",
    description: "open, fill\u00A0in, run.",
    downloadButton: "Download for macOS",
    catalogLink: "Browse Apps catalog",
    items: [
      {
        title: "In Spotlight and the Dock",
        description: "next to your other apps.",
        soon: false,
      },
      {
        title: "Your own fields",
        description: "fill them in and run.",
        soon: false,
      },
      {
        title: "Your name and icon",
        description: "like any app on the Dock.",
        soon: false,
      },
    ],
  },

  cta: {
    title: "Start free. Try Pro for 7\u00A0days.",
    downloadButton: "Download for macOS",
  },

  plans: {
    title: "Pricing",
    subtitle: "free to start. Pro when you need more.",
    monthly: "Monthly",
    yearly: "Yearly",
    saveBadge: "Save 26%",
    popular: "Most popular",
    trial: "7-day free trial",
    finePrint:
      "Request limits apply only to Promptix models. With your own API key, requests and models are unlimited on both plans. How many Prompt-as-Apps you get still depends on the\u00A0plan.",
    packages: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        yearlyPrice: "$0",
        yearlyPeriod: "/month",
        description: "To try Promptix",
        features: [
          "15 Promptix requests a\u00A0day",
          "Up to 10,000 characters per\u00A0request",
          "1 Prompt-as-App",
          "Basic Promptix models",
          "Your own API keys — no request or model\u00A0cap",
        ],
        buttonTitle: "Download for macOS",
      },
      {
        name: "Pro",
        price: "$9.99",
        period: "/month",
        yearlyPrice: "$89",
        yearlyPeriod: "/year",
        description: "If you use AI every\u00A0day",
        features: [
          "100 Promptix requests a\u00A0day",
          "No character cap (the model’s limit still applies)",
          "Unlimited Prompt-as-Apps",
          "All Promptix models — OpenAI, Grok, and\u00A0more",
          "Your own API keys — no request or model\u00A0cap",
        ],
        buttonTitle: "Download for macOS",
      },
    ],
  },

  faq: {
    title: "FAQ",
    items: [
      {
        question: "What is Promptix?",
        answer:
          "A macOS app that runs AI in the app you’re in. Hotkey on selected text, or save a prompt as its own app. Built-in: Translate, Rewrite, Improve text, Fix grammar, Summarize — plus your own prompts.",
      },
      {
        question: "How does Promptix work?",
        answer:
          "Select text in any app, press a hotkey, pick an action. Or open a Prompt as App from Applications, Spotlight, or the Dock. Use Promptix models or your own API key. Only the text you select is sent.",
      },
      {
        question: "Is Promptix secure?",
        answer: "We send only the text you choose to process. Nothing else.",
      },
      {
        question: "Can I use my own API keys from different AI services?",
        answer:
          "Yes. OpenAI, Anthropic, Google, Mistral, DeepSeek, Cohere, or any OpenAI-compatible API — including local models. With your own key, Promptix request limits don’t apply. Usage goes to your provider.",
      },
      {
        question: "Can I create custom prompts?",
        answer:
          "Yes. Save your own prompts and run them with a hotkey, or turn any of them into a Prompt as App.",
      },
      {
        question: "What is Prompt as App?",
        answer:
          "It turns a prompt into a real .app in Applications. Name it, pick an icon, open it like any Mac app. Free includes 1. Pro is unlimited.",
      },
      {
        question: "What happens if I exceed request limits on the free plan?",
        answer:
          "Promptix requests on Free reset every day (15 per day). Pro gets 100 a day, all models, and unlimited Prompt-as-Apps. Or add your own API key and skip those limits. Extra Prompt-as-Apps stay installed on Free, but they won’t open until you upgrade or delete them.",
      },
      {
        question: "Does my API key remove the Prompt-as-App limit?",
        answer:
          "No. Your key removes request and model limits. Prompt-as-App count still follows the plan: 1 on Free, unlimited on Pro.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes. Pro has a 7-day trial. Cancel before it ends and you stay on Free.",
      },
      {
        question: "What’s the difference between monthly and yearly Pro?",
        answer:
          "Pro is $9.99 a month or $89 a year (26% off). Same features.",
      },
    ],
  },

  footer: {
    copyright: "All rights reserved, 2026 ©",
    legal: "IP Khudyshkina O.A. INN 450125033950",
    personalDataPolicy: "Политика обработки персональных данных",
    termsOfService: "Terms of service",
    privacy: "Privacy",
    promptAsApp: "Prompt as App",
    promptApps: "Prompt Apps",
    pricing: "Pricing",
    faq: "FAQ",
  },

  language: {
    switch: "Switch language",
    current: "EN",
    russian: "Русский",
    english: "English",
  },

  cookieConsent: {
    message: "We use cookies.",
    accept: "Ok",
  },

  terms: {
    title: "Terms of Service",
    metaTitle: "Promptix – Terms of service",
    metaDescription:
      "Terms of Service for Promptix — the macOS app that runs AI on selected text via a hotkey. License, usage rules, and liability.",
    backToHome: "Back to Home",
    lastUpdated: "Last updated: August 2026",
    content: {
      intro:
        "Promptix is a software service that allows users to select text and invoke predefined prompts via keyboard shortcuts on desktop and mobile devices. You can also save a prompt as a standalone Mac application (“Prompt as App”) and run it independently from Applications, Spotlight, Launchpad, or the Dock. These Terms of Service (“Terms”) govern your access to and use of Promptix and any related software or documentation. By using Promptix, you acknowledge that you have read and understood these Terms and agree to be bound by them.",
      sections: [
        {
          title: "1. Introduction",
          content:
            "Promptix is a software service that allows users to select text and invoke predefined prompts via keyboard shortcuts on desktop and mobile devices. You can also save a prompt as a standalone Mac application (“Prompt as App”) and run it independently from Applications, Spotlight, Launchpad, or the Dock. These Terms of Service (“Terms”) govern your access to and use of Promptix and any related software or documentation. By using Promptix, you acknowledge that you have read and understood these Terms and agree to be bound by them.",
        },
        {
          title: "2. Acceptance of Terms",
          content:
            "By installing, accessing or using Promptix in any way, you accept and agree to comply with these Terms. If you do not agree with any part of these Terms, you must immediately discontinue use of Promptix. You represent and warrant that you are of the age of majority in your jurisdiction and have the legal capacity to enter into these Terms. Promptix is provided by an individual developer, not a corporate entity, and references to “we,” “us,” or “our” in these Terms refer to the developer of Promptix.",
        },
        {
          title: "3. Description of the Service",
          content:
            "Promptix provides functionality to interact with selected text through user-configured prompts and hotkeys. You can also save a prompt as a standalone Mac application (“Prompt as App”) and run it independently from Applications, Spotlight, Launchpad, or the Dock. It is designed to run on various operating systems and devices, and it may integrate with third-party APIs (for example, AI or web services) to perform certain functions or retrieve content. The developer does not control third-party services or APIs; therefore, any data transmitted or received via those services is subject to the terms, availability, and privacy policies of the respective third parties. We do not guarantee the accuracy, completeness, or availability of any third-party content. The features and interface of Promptix may change over time and can be updated at the developer’s discretion.",
        },
        {
          title: "4. License to Use",
          content:
            "Subject to your compliance with these Terms, Promptix grants you a limited, non-exclusive, non-transferable, revocable license to install and use the software on devices that you own or control. This license is for your personal or internal use only and does not permit distribution, rental, sublicensing or resale of the Service. You may not alter, adapt, translate or create derivative works based on Promptix, or otherwise remove any proprietary notices or restrictions. All rights not expressly granted are reserved by the developer.",
        },
        {
          title: "5. Intellectual Property",
          content:
            "All intellectual property rights in Promptix and its content (including software, code, graphics, user interfaces, and documentation) are owned by us or our licensors. No rights to the Service or its contents are transferred to you except for the limited license expressly granted above. You agree not to copy, modify, distribute, publicly display, or create derivative works of any part of Promptix or its content without our prior written consent. “Promptix” and related logos are trademarks of the developer, and no license to use them is granted under these Terms.",
        },
        {
          title: "6. User Restrictions and Responsibilities",
          content:
            "You agree to use Promptix only for lawful purposes and in compliance with these Terms. In particular, you must not: engage in any unlawful activity; attempt to reverse engineer or tamper with the Service; upload or distribute malware; interfere with the integrity or performance of Promptix; use Promptix to scrape data or create a competing product; or export/use the Service in violation of export control laws. You are responsible for all activity on your devices and accounts that use Promptix. You agree to indemnify and hold us harmless from any claims arising out of your misuse of the Service or your violation of these Terms.",
        },
        {
          title: "7. Limitation of Liability and Disclaimers",
          content:
            "Promptix is provided “AS IS” and “AS AVAILABLE”, without any warranties of any kind, whether express or implied. We expressly disclaim all warranties, including any implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from course of dealing or usage. To the fullest extent permitted by law, neither the developer nor anyone else involved in creating or delivering Promptix shall be liable for any damages of any kind arising out of or related to these Terms or your use of the Service.",
        },
        {
          title: "8. Termination",
          content:
            "We reserve the right to suspend or terminate your access to Promptix at any time, with or without notice, if you breach these Terms or use the Service in an unlawful manner. Upon termination of the license, you must cease all use of the Service and delete all copies of the software from your devices.",
        },
        {
          title: "9. Changes to the Terms",
          content:
            "We may modify or update these Terms at any time by posting the revised version in the Service or on our website. The date of the last revision will be indicated at the top of these Terms. Your continued use of Promptix following any changes constitutes acceptance of the new Terms.",
        },
        {
          title: "10. Governing Law",
          content:
            "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the developer is located, without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms or your use of Promptix shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.",
        },
        {
          title: "11. Contact Information",
          content:
            "If you have any questions or concerns about these Terms, or need to contact the developer, you may reach out via the contact information provided in the Promptix app or on the official website. E-mail: admin@promptix.app",
        },
      ],
    },
  },

  privacy: {
    title: "Privacy",
    metaTitle: "Promptix – Privacy",
    metaDescription:
      "Privacy Policy for Promptix: what data we collect, how AI requests are handled, API keys, and your rights.",
    backToHome: "Back to Home",
    lastUpdated: "Last updated: August 2026",
    intro:
      "Promptix (“we”, “our”, “us”) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Promptix application (“App”) and related services.",
    sections: [
      {
        title: "1. Information We Collect",
        content:
          "User-Provided Information: User Content (text you select, type, or paste for processing, including in Prompt-as-App windows); Account Information (email address and name — we do not collect your password or authentication tokens from providers); Payment Information (processed by Stripe and, where available, local payment providers; we receive limited transaction metadata). Automatically Collected Information: device type, OS version, interface language; usage statistics and error logs; truncated IP address for security and rate-limiting.",
      },
      {
        title: "3. How We Use Information",
        content:
          "Provide, operate, and maintain the App; process and return prompt results; diagnose and fix errors; improve functionality and analyze usage trends; manage user accounts and authentication; process payments and manage subscriptions.",
      },
      {
        title: "4. Legal Bases (GDPR)",
        content:
          "Performance of a contract: providing and maintaining the App. Legitimate interests: maintaining service security and improving user experience. Consent: optional features or communications, if implemented.",
      },
      {
        title: "5. Data Retention",
        content:
          "User Content: not stored unless optional history or logging features are explicitly enabled. Logs & analytics: retained for up to 12 months unless required longer for debugging or compliance. Account Information: retained while your account remains active, and deleted upon request or account closure.",
      },
      {
        title: "6. Sharing & Disclosure",
        content:
          "We share data only with: third-party AI providers (e.g., OpenAI) to process User Content; Stripe and, where available, local payment providers for secure payment processing; privacy-focused analytics providers (e.g., Plausible) for aggregated metrics; OAuth providers (Google, Apple, GitHub, etc.) for authentication. All third parties are required to adhere to applicable data protection laws (e.g., GDPR).",
      },
      {
        title: "7. International Transfers",
        content:
          "Data may be transferred and processed outside the EEA. Where applicable, we rely on Standard Contractual Clauses or equivalent safeguards to ensure lawful data transfers.",
      },
      {
        title: "8. Your Rights",
        content:
          "Depending on your jurisdiction, you may have rights including access, correction, deletion, or export of your personal data. Contact us at admin@promptix.app to exercise your rights.",
      },
      {
        title: "9. Security",
        content:
          "We implement industry-standard security measures to protect your information, including encrypted connections and secure data handling practices.",
      },
      {
        title: "10. Children",
        content:
          "Promptix is not intended for individuals under the age of 18. We do not knowingly collect personal data from children.",
      },
      {
        title: "11. Changes to This Policy",
        content:
          "We may update this Privacy Policy from time to time. If changes are material, we will notify you via the App or our website. E-mail: admin@promptix.app",
      },
    ],
  },

  personalData: {
    title: "Personal Data Processing Policy",
    metaTitle: "Promptix – Personal Data Processing Policy",
    metaDescription:
      "How Promptix processes personal data under Russian Federal Law 152-FZ: operator details, categories, purposes, and user rights.",
    lastUpdated: "Last updated: August 2026",
    intro:
      "This Personal Data Processing Policy (the “Policy”) defines the procedure for processing and protecting personal data of users of the Promptix application and website promptix.app. The Policy is prepared in accordance with Federal Law No. 152-FZ “On Personal Data”.",
    sections: [
      {
        title: "1. Operator",
        content:
          "The personal data operator is Individual Entrepreneur Olga Aleksandrovna Khudyshkina, INN 450125033950 (the “Operator”). Contact e-mail: admin@promptix.app.",
      },
      {
        title: "2. Scope",
        content:
          "This Policy applies to all personal data that the Operator may obtain from individuals when they use the Promptix application, the website promptix.app, and related services (together, the “Services”).",
      },
      {
        title: "3. Categories of personal data",
        content:
          "The Operator may process: account data (e-mail address, name); user content submitted for AI processing (text you select, type, or paste, including in Prompt-as-App windows); payment metadata received from payment providers (Stripe and, where available, local payment providers); technical data (device type, OS version, interface language, truncated IP address, usage statistics, and error logs).",
      },
      {
        title: "4. Purposes of processing",
        content:
          "Personal data is processed to: provide and maintain the Services; process user requests and return prompt results; authenticate users and manage accounts; process payments and subscriptions; ensure security and prevent abuse; diagnose errors; and improve the Services.",
      },
      {
        title: "5. Legal grounds",
        content:
          "Processing is based on: the user’s consent; performance of a contract with the user; and the Operator’s legitimate interests in securing and improving the Services, where such interests do not override the user’s rights and freedoms.",
      },
      {
        title: "6. Processing and storage",
        content:
          "Personal data is processed using automated and non-automated means. User content is not stored unless optional history or logging features are explicitly enabled. Logs and analytics are retained for up to 12 months unless a longer period is required for security or legal compliance. Account data is retained while the account is active and deleted upon request or account closure.",
      },
      {
        title: "7. Third parties and transfers",
        content:
          "Personal data may be disclosed to: AI providers (e.g., OpenAI) to process user content; Stripe and, where available, local payment providers for payment processing; privacy-focused analytics providers (e.g., Plausible); and OAuth providers (Google, Apple, GitHub, etc.) for authentication. Data may be transferred outside the Russian Federation where necessary to provide the Services, subject to applicable safeguards.",
      },
      {
        title: "8. Data subject rights",
        content:
          "You may request access to, correction, or deletion of your personal data, withdraw consent, and receive information about processing. To exercise your rights, contact admin@promptix.app. The Operator will respond within the time limits set by applicable law.",
      },
      {
        title: "9. Security measures",
        content:
          "The Operator applies organizational and technical measures to protect personal data, including encrypted connections and secure data handling practices, aimed at preventing unauthorized access, alteration, disclosure, or destruction of personal data.",
      },
      {
        title: "10. Children’s data",
        content:
          "Promptix is not intended for individuals under 18. The Operator does not knowingly collect personal data from children.",
      },
      {
        title: "11. Policy updates",
        content:
          "The Operator may update this Policy from time to time. The current version is published on this page. Material changes may be communicated via the application or website. E-mail: admin@promptix.app.",
      },
    ],
  },

  demo: {
    title: "How to use it",
    metaTitle: "Promptix – Demo",
    metaDescription:
      "Promptix demo: install on macOS, grant Accessibility, then translate or write text with a hotkey.",
    backToHome: "Back to Home",
    intro: "Before you start:",
    setup: {
      installed: {
        title: "1 — Installed",
        description: "Promptix is installed",
      },
      running: {
        title: "2 — Running",
        description: "Promptix is running in the background",
      },
      permissions: {
        title: "3 — Permissions",
        description: "Accessibility is on for Promptix",
      },
    },
    useCasesTitle: "Try it",
    translation: {
      title: "Translate",
      instruction: "Select the text, press ⌘ + ^, and pick Translate:",
      sample: "안녕하세요, 어떻게 지내세요?",
    },
    generate: {
      title: "Write text",
      instruction:
        "Type something like “Write about AI”, select it, press ⌘ + ^, then pick “Text as Prompt”:",
      placeholder: "Write about AI",
    },
  },

  pricingPage: {
    metaTitle: "Promptix – Pricing",
    metaDescription:
      "Promptix pricing: Free with 15 requests/day and 1 Prompt-as-App, or Pro at $9.99/mo or $89/year. 7-day free trial.",
  },
};

export type Translation = typeof en;
