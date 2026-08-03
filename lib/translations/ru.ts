import type { Translation } from './en';

export const ru: Translation = {
  meta: {
    title: "Promptix — AI в любом приложении по хоткею",
    description:
      "Один быстрый способ редактировать, переписывать и переводить текст и немного больше. Прямо там, где ты работаешь.",
  },

  nav: {
    pricing: "Тарифы",
    faq: "FAQ",
    terms: "Условия использования",
    privacy: "Конфиденциальность",
    demo: "Демо",
  },

  header: {
    title: "Хватит переключаться",
    titleLine2: "между приложениями и\u00A0AI",
    subtitle:
      "Один быстрый способ редактировать, переписывать и\u00A0переводить текст и\u00A0немного больше. Прямо там, где\u00A0ты работаешь.",
    downloadButton: "Скачать для MacOS",
    downloadHint: "начни бесплатно · карта не\u00A0нужна",
    compatibility: "Поддерживаем популярные AI-сервисы",
    compatibilityNote: "и\u00A0другие, совместимые с\u00A0OpenAI SDK",
  },

  useCases: {
    title: "Кейсы",
    subtitle:
      "Автоматизируйте рутинные задачи и\u00A0освободите время для\u00A0более важных дел. Используйте продукт в\u00A0любых приложениях.",
    list: [
      {
        title: "Исправить ошибки",
        description:
          "Автоматически исправляйте грамматику и\u00A0орфографию, не\u00A0прерывая при\u00A0этом работу.",
        videoSrc: "/media/promptix-fix.mp4",
      },
      {
        title: "Перевести",
        description:
          "Мгновенно переведите выделенный текст на\u00A0любой язык с\u00A0помощью одного сочетания клавиш.",
        videoSrc: "/media/promptix-translate.mp4",
      },
      {
        title: "Создать текст",
        description:
          "Создавайте электронные письма, сообщения и\u00A0заметки за\u00A0считанные секунды.",
        videoSrc: "/media/promptix-gen-text.mp4",
      },
    ],
  },

  feature: {
    eyebrow: "Feature",
    title: "Создавайте собственные промпты для\u00A0задач",
    titleLine2: "и\u00A0используйте их в\u00A0любое\u00A0время",
    videoSrc: "/media/promptix-new.mp4",
    items: [
      {
        name: "API Key",
        description:
          "Используйте собственные ключи API без ограничений по\u00A0количеству запросов",
      },
      {
        name: "5+ встроенных промптов",
        description:
          "Перевод, рерайт, улучшение текста, исправление грамматики, подведение итогов",
      },
      {
        name: "Совместим с OpenAI SDK",
        description:
          "Используйте любой LLM, поддерживающий формат API\u00A0OpenAI.",
      },
    ],
  },

  promptAsApp: {
    badge: "Alpha version",
    title: "Prompt as App",
    description:
      "Позволяет превратить обычный промпт в\u00A0полноценное приложение. Вы создаёте логику работы с\u00A0помощью промпта, сохраняете её как\u00A0приложение и\u00A0запускаете отдельно — без\u00A0необходимости каждый раз настраивать или\u00A0переписывать запрос.",
    downloadButton: "Скачать для MacOS",
    videoSrc: "/media/0814-1.mp4",
    items: [
      {
        title: "Приложение в Launchpad",
        description:
          "Созданное приложение отображается в\u00A0Launchpad и\u00A0доступно для\u00A0быстрого запуска в\u00A0любой момент.",
        soon: false,
      },
      {
        title: "Своя иконка для приложения",
        description:
          "Назначьте собственную иконку, чтобы приложение было легко узнаваемым и\u00A0выглядело как\u00A0полноценный продукт.",
        soon: false,
      },
      {
        title: "Генерация форм для Prompt",
        description:
          "Промпт автоматически превращается в\u00A0удобную форму ввода, упрощая взаимодействие и\u00A0исключая ошибки.",
        soon: true,
      },
    ],
  },

  cta: {
    title: "Увеличьте свою продуктивность\u00A0бесплатно!",
    downloadButton: "Скачать для MacOS",
  },

  plans: {
    title: "Цены",
    subtitle: "Начни бесплатно, разблокируй профессионально",
    popular: "Самые популярные",
    packages: [
      {
        name: "Бесплатно",
        price: "0₽",
        period: "/месяц",
        description: "Идеально, чтобы попробовать Promptix",
        features: [
          "50 запросов в\u00A0день",
          "10\u00A0000 символов на\u00A0запрос",
          "Используйте API-ключ для\u00A0любых моделей без ограничений",
        ],
        buttonTitle: "Скачать для MacOS",
      },
      {
        name: "Pro",
        price: "350₽",
        period: "/месяц",
        description: "Для повседневной работы с\u00A0ИИ",
        features: [
          "500 запросов в\u00A0день",
          "Без ограничений на\u00A0количество символов (ограничено моделью)",
          "Больше AI-моделей — популярные модели от\u00A0OpenAI и\u00A0Grok",
        ],
        buttonTitle: "Скачать для MacOS",
      },
    ],
  },

  faq: {
    title: "Вопросы и ответы",
    items: [
      {
        question: "What is Promptix?",
        answer:
          "Promptix is a tool that allows you to run AI in any app using a hotkey, helping with tasks like instant translation, text polishing, grammar fixes, summarization, and custom prompt creation. It supports macOS and integrates with various AI services.",
      },
      {
        question: "How does Promptix work?",
        answer:
          "Select text in any app, press a hotkey, and choose an action like Translate, Rewrite, Improve text, Fix grammar, or Summarize. It sends only the selected data to your chosen AI service via your API key, processing everything directly without storing data externally.",
      },
      {
        question: "Is Promptix secure?",
        answer:
          "Yes, Promptix is secure. It transmits only the selected data you choose to process, and you have full control over what is sent.",
      },
      {
        question: "Can I use my own API keys from different AI services?",
        answer:
          "Yes, you can add your own API keys from services like OpenAI, Anthropic, Google, Mistral AI, DeepSeek, Cohere, or any LLM in OpenAI API format (including local LLMs). This makes usage unlimited and free, as requests go directly to the service without any costs from Promptix.",
      },
      {
        question: "Can I create custom prompts?",
        answer:
          "Yes, you can create and save custom prompts for specific tasks, which can be triggered via hotkey just like the built-in ones (Translate, Rewrite, etc.)",
      },
      {
        question: "What happens if I exceed request limits on the free plan?",
        answer:
          "If you hit the daily limit without your own API key, you'll need to wait until the next day or upgrade to Pro. Adding your own API key removes all limits, making it free and unlimited.",
      },
    ],
  },

  footer: {
    copyright: "Все права защищены, 2025 ©",
    legal: "IP Khudyshkina O.A. INN 450125033950",
    personalDataPolicy: "Политика обработки персональных данных",
    termsOfService: "Условия использования",
    privacy: "Конфиденциальность",
    pricing: "Тарифы",
    faq: "FAQ",
  },

  language: {
    switch: "Сменить язык",
    current: "RU",
    russian: "Pусский",
    english: "English",
  },

  cookieConsent: {
    message: "Мы используем cookies, чтобы улучшить ваш опыт.",
    accept: "Ок",
  },

  terms: {
    title: "Terms of Service",
    metaTitle: "Promptix – Условия использования",
    metaDescription:
      "Условия использования Promptix — macOS-приложения для AI по хоткею: лицензия, правила и ответственность.",
    backToHome: "На главную",
    lastUpdated: "Last updated: Oct, 2025",
    content: {
      intro:
        "Promptix is a software service that allows users to select text and invoke predefined prompts via keyboard shortcuts on desktop and mobile devices. These Terms of Service (“Terms”) govern your access to and use of Promptix and any related software or documentation. By using Promptix, you acknowledge that you have read and understood these Terms and agree to be bound by them.",
      sections: [
        {
          title: "1. Introduction",
          content:
            "Promptix is a software service that allows users to select text and invoke predefined prompts via keyboard shortcuts on desktop and mobile devices. These Terms of Service (“Terms”) govern your access to and use of Promptix and any related software or documentation. By using Promptix, you acknowledge that you have read and understood these Terms and agree to be bound by them.",
        },
        {
          title: "2. Acceptance of Terms",
          content:
            "By installing, accessing or using Promptix in any way, you accept and agree to comply with these Terms. If you do not agree with any part of these Terms, you must immediately discontinue use of Promptix. You represent and warrant that you are of the age of majority in your jurisdiction and have the legal capacity to enter into these Terms. Promptix is provided by an individual developer, not a corporate entity, and references to “we,” “us,” or “our” in these Terms refer to the developer of Promptix.",
        },
        {
          title: "3. Description of the Service",
          content:
            "Promptix provides functionality to interact with selected text through user-configured prompts and hotkeys. It is designed to run on various operating systems and devices, and it may integrate with third-party APIs (for example, AI or web services) to perform certain functions or retrieve content. The developer does not control third-party services or APIs; therefore, any data transmitted or received via those services is subject to the terms, availability, and privacy policies of the respective third parties. We do not guarantee the accuracy, completeness, or availability of any third-party content. The features and interface of Promptix may change over time and can be updated at the developer’s discretion.",
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
    metaTitle: "Promptix – Конфиденциальность",
    metaDescription:
      "Политика конфиденциальности Promptix: какие данные собираем, как обрабатываются AI-запросы, API-ключи и ваши права.",
    backToHome: "На главную",
    lastUpdated: "Last updated: Oct, 2025",
    intro:
      "Promptix (“we”, “our”, “us”) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Promptix application (“App”) and related services.",
    sections: [
      {
        title: "1. Information We Collect",
        content:
          "User-Provided Information: User Content (text you select and submit for processing); Account Information (email address and name — we do not collect your password or authentication tokens from providers); Payment Information (processed by Paddle; we receive limited transaction metadata). Automatically Collected Information: device type, OS version, interface language; usage statistics and error logs; truncated IP address for security and rate-limiting.",
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
          "We share data only with: third-party AI providers (e.g., OpenAI) to process User Content; Paddle for secure payment processing; privacy-focused analytics providers (e.g., Plausible) for aggregated metrics; OAuth providers (Google, Apple, GitHub, etc.) for authentication. All third parties are required to adhere to applicable data protection laws (e.g., GDPR).",
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
    title: "Политика обработки персональных данных",
    metaTitle: "Promptix – Политика обработки персональных данных",
    metaDescription:
      "Как Promptix обрабатывает персональные данные по 152-ФЗ: оператор, категории данных, цели обработки и права пользователей.",
    lastUpdated: "Дата обновления: август 2026",
    intro:
      "Настоящая Политика обработки персональных данных (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей приложения Promptix и сайта promptix.app. Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».",
    sections: [
      {
        title: "1. Оператор",
        content:
          "Оператором персональных данных является индивидуальный предприниматель Худышкина Ольга Александровна, ИНН 450125033950 (далее — «Оператор»). Контактный e-mail: admin@promptix.app.",
      },
      {
        title: "2. Область применения",
        content:
          "Политика распространяется на все персональные данные, которые Оператор может получить от физических лиц при использовании приложения Promptix, сайта promptix.app и связанных сервисов (далее — «Сервисы»).",
      },
      {
        title: "3. Категории персональных данных",
        content:
          "Оператор может обрабатывать: данные учётной записи (адрес электронной почты, имя); пользовательский контент, передаваемый для обработки ИИ (выделенный текст); платёжные метаданные, получаемые от платёжного провайдера (Paddle); технические данные (тип устройства, версия ОС, язык интерфейса, усечённый IP-адрес, статистика использования и журналы ошибок).",
      },
      {
        title: "4. Цели обработки",
        content:
          "Персональные данные обрабатываются в целях: предоставления и поддержки Сервисов; обработки запросов пользователя и возврата результатов промптов; аутентификации пользователей и управления аккаунтами; обработки платежей и подписок; обеспечения безопасности и предотвращения злоупотреблений; диагностики ошибок; улучшения Сервисов.",
      },
      {
        title: "5. Правовые основания",
        content:
          "Обработка осуществляется на основании: согласия субъекта персональных данных; исполнения договора с пользователем; законных интересов Оператора по обеспечению безопасности и улучшению Сервисов, если такие интересы не нарушают права и свободы субъекта персональных данных.",
      },
      {
        title: "6. Порядок обработки и сроки хранения",
        content:
          "Персональные данные обрабатываются с использованием средств автоматизации и без них. Пользовательский контент не хранится, если явно не включены опциональные функции истории или логирования. Журналы и аналитика хранятся до 12 месяцев, если более длительный срок не требуется для безопасности или исполнения требований закона. Данные аккаунта хранятся, пока аккаунт активен, и удаляются по запросу или при закрытии аккаунта.",
      },
      {
        title: "7. Передача третьим лицам и трансграничная передача",
        content:
          "Персональные данные могут передаваться: провайдерам ИИ (например, OpenAI) для обработки пользовательского контента; Paddle — для обработки платежей; провайдерам аналитики с фокусом на приватность (например, Plausible); OAuth-провайдерам (Google, Apple, GitHub и др.) — для аутентификации. Данные могут передаваться за пределы Российской Федерации, если это необходимо для предоставления Сервисов, при соблюдении применимых требований к защите данных.",
      },
      {
        title: "8. Права субъекта персональных данных",
        content:
          "Вы вправе запросить доступ к своим персональным данным, их уточнение или удаление, отозвать согласие, а также получить сведения об обработке. Для реализации прав направьте запрос на admin@promptix.app. Оператор ответит в сроки, установленные законодательством.",
      },
      {
        title: "9. Меры защиты",
        content:
          "Оператор применяет организационные и технические меры защиты персональных данных, включая шифрование соединений и безопасные практики обработки данных, направленные на предотвращение неправомерного доступа, изменения, раскрытия или уничтожения персональных данных.",
      },
      {
        title: "10. Данные несовершеннолетних",
        content:
          "Promptix не предназначен для лиц младше 18 лет. Оператор сознательно не собирает персональные данные детей.",
      },
      {
        title: "11. Изменение Политики",
        content:
          "Оператор может обновлять настоящую Политику. Актуальная версия публикуется на этой странице. О существенных изменениях может быть сообщено через приложение или сайт. E-mail: admin@promptix.app.",
      },
    ],
  },

  demo: {
    title: "Как использовать?",
    metaTitle: "Promptix – Демо",
    metaDescription:
      "Демо Promptix: установите на macOS, выдайте разрешения и переводите или генерируйте текст по хоткею.",
    backToHome: "На главную",
    intro:
      "Убедитесь, что все требования выполнены до начала использования Promptix",
    setup: {
      installed: {
        title: "1 — Установлено",
        description: "Убедитесь, что Promptix установлен",
      },
      running: {
        title: "2 — Запущен",
        description: "Promptix работает в фоновом режиме",
      },
      permissions: {
        title: "3 — Разрешения получены",
        description: "Разрешения доступности включены для Promptix",
      },
    },
    useCasesTitle: "Примеры использования",
    translation: {
      title: "Перевод",
      instruction:
        "Выделите текст, нажмите ⌘ + ^ и выберите команду Translate:",
      sample: "안녕하세요, 어떻게 지내세요?",
    },
    generate: {
      title: "Создайте текст",
      instruction:
        "Введите текст, например «Напишите текст об искусственном интеллекте», выделите его и нажмите ⌘ + ^, чтобы выбрать опцию «Text as Prompt»:",
      placeholder: "Напишите текст об искусственном интеллекте",
    },
  },

  pricingPage: {
    metaTitle: "Promptix – Тарифы",
    metaDescription:
      "Тарифы Promptix: бесплатно 50 запросов в день или Pro за 350₽/мес. Свой API-ключ — без лимитов.",
  },
};
