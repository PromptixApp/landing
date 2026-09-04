import type { Translation } from './en';

export const ru: Translation = {
  meta: {
    title: "Promptix — превращай промпты в приложения",
    description:
      "Запусти промпт как приложение из Dock. Или выдели текст и вызови AI хоткеем в любом окне.",
  },

  nav: {
    promptAsApp: "Как приложение",
    promptApps: "Prompt Apps",
    pricing: "Тарифы",
    faq: "Вопросы",
    terms: "Условия использования",
    privacy: "Конфиденциальность",
    demo: "Демо",
  },

  header: {
    title: "Превращай промпты в приложения",
    titleLine2: "Из Dock и Spotlight —",
    subtitle: "или хоткеем в любом окне.",
    downloadButton: "Скачать для macOS",
    downloadHint: "Бесплатно · Pro на 7 дней",
    demoAria: "Демо Promptix",
    demoClose: "Закрыть",
    compatibility: "Работает с",
    compatibilityNote: "и\u00A0любым API в\u00A0формате OpenAI",
  },

  heroScene: {
    appName: "Почта",
    clock: "Ср 11:46",
    toLabel: "Кому",
    toValue: "Команда",
    subjectLabel: "Тема",
    subjectValue: "Полёт на Марс",
    before:
      "Привет команда, мы достиг важный успех в полёте на Марс. Тесты был положительные.",
    after:
      "Привет, команда, мы достигли важного успеха в полёте на Марс. Тесты были положительными.",
    model: "Модель по умолчанию",
    select: "Выбрать ↵",
    esc: "Esc ✕",
    run: "↵",
    hint: "↑↓ навигация • Enter запуск • Esc закрыть",
    appField: "Текст",
    appRun: "Запустить",
    appPin: "Поверх окон",
    prompts: [
      "Перевести",
      "Переписать",
      "Улучшить",
      "Исправить ошибки",
      "Кратко",
    ],
    destinations: ["Окно", "Заменить", "Уведомление"],
  },

  useCases: {
    title: "Или в любом приложении",
    subtitle: "выдели текст, нажми хоткей —\u00A0готово.",
    placeholder: "Написать сообщение...",
    hotkeyHint: "Нажми хоткей",
    list: [
      {
        title: "Исправить ошибки",
        description: "и опечатки, не\u00A0выходя из\u00A0окна.",
        scene: {
          before: "Прив, как дила",
          after: "Привет, как дела?",
        },
      },
      {
        title: "Перевести",
        description: "выделенный текст на другой язык.",
        scene: {
          before: "Hi, how are you?",
          after: "Привет, как дела?",
        },
      },
      {
        title: "Написать текст",
        description: "для письма, поста или заметки из короткого запроса.",
        scene: {
          before: "напиши пост про GPT-5",
          after: "Вышел GPT-5. Больше контекста, ответы точнее — чат тот же.",
        },
      },
    ],
  },

  feature: {
    eyebrow: "Промпты",
    title: "Автоматизируй",
    titleLine2: "свои рутинные задачи",
    form: {
      title: "Опиши задачу",
      subtitle: "Скажи, что нужно сделать. Promptix напишет промпт.",
      sample: "Переведи выделенный текст на английский, сохрани тон",
      generate: "Создать",
      cancel: "Отмена",
      previewItems: [
        "Перевести",
        "Переписать",
        "Улучшить",
        "Исправить ошибки",
        "Кратко",
      ],
    },
    items: [
      {
        name: "Опиши задачу",
        description: "и Promptix напишет промпт.",
      },
      {
        name: "Назначь хоткей",
        description: "и запускай из любого\u00A0окна.",
      },
      {
        name: "5+ готовых промптов",
        description:
          "перевести, переписать, улучшить, исправить, кратко.",
      },
      {
        name: "Голосом",
        description: "скажи, выбери, запусти.",
      },
    ],
  },

  apiBalance: {
    eyebrow: "Дополнительно",
    title: "Следи за балансом",
    description: "своих AI-провайдеров.",
    menu: {
      openActions: "Открыть действия",
      settings: "Настройки",
      latestResponse: "Последний ответ",
      checkUpdates: "Проверить обновления",
      quit: "Выйти из Promptix",
      spent: "потрачено",
    },
  },

  promptAsApp: {
    title: "Промпт как приложение,",
    description: "открой, заполни, запусти.",
    downloadButton: "Скачать для macOS",
    catalogLink: "Каталог приложений",
    items: [
      {
        title: "В Spotlight и Dock",
        description: "рядом с остальными приложениями.",
        soon: false,
      },
      {
        title: "Свои поля",
        description: "заполни под задачу и запусти.",
        soon: false,
      },
      {
        title: "Своё имя и иконка",
        description: "как у любого приложения в Dock.",
        soon: false,
      },
    ],
  },

  cta: {
    title: "Начни бесплатно. Pro — 7\u00A0дней.",
    downloadButton: "Скачать для macOS",
  },

  plans: {
    title: "Тарифы",
    subtitle: "бесплатно, чтобы начать. Pro — если нужно больше.",
    monthly: "Помесячно",
    yearly: "За год",
    saveBadge: "−26%",
    popular: "Чаще выбирают",
    trial: "7 дней бесплатно",
    finePrint:
      "Лимиты запросов — только на моделях Promptix. Со своим API-ключом запросы и модели не ограничены на любом тарифе. Сколько можно Prompt-as-App — зависит от\u00A0тарифа.",
    packages: [
      {
        name: "Бесплатно",
        price: "0₽",
        period: "/месяц",
        yearlyPrice: "0₽",
        yearlyPeriod: "/месяц",
        description: "Чтобы попробовать",
        features: [
          "15 запросов Promptix в\u00A0день",
          "До 10\u00A0000 символов на\u00A0запрос",
          "1 Prompt-as-App",
          "Базовые модели Promptix",
          "Свои API-ключи — без лимита на запросы и\u00A0модели",
        ],
        buttonTitle: "Скачать для macOS",
      },
      {
        name: "Pro",
        price: "999₽",
        period: "/месяц",
        yearlyPrice: "8\u00A0900₽",
        yearlyPeriod: "/год",
        description: "Если пользуешься каждый день",
        features: [
          "100 запросов Promptix в\u00A0день",
          "Без лимита символов (остаётся лимит модели)",
          "Сколько угодно Prompt-as-App",
          "Все модели Promptix — OpenAI, Grok и\u00A0другие",
          "Свои API-ключи — без лимита на запросы и\u00A0модели",
        ],
        buttonTitle: "Скачать для macOS",
      },
    ],
  },

  faq: {
    title: "Вопросы",
    items: [
      {
        question: "Что такое Promptix?",
        answer:
          "Приложение для macOS: AI прямо в том окне, где ты сейчас. Хоткей на выделенном тексте — или сохрани промпт как отдельное приложение. Встроенные: перевести, переписать, улучшить, исправить ошибки, кратко. Плюс свои промпты.",
      },
      {
        question: "Как это работает?",
        answer:
          "Выдели текст, нажми хоткей, выбери действие. Или открой Prompt as App из «Программ», Spotlight или Dock. Можно брать модели Promptix или свой API-ключ. Уходит только тот текст, который ты сам выделил.",
      },
      {
        question: "Это безопасно?",
        answer: "Отправляем только тот текст, который ты выбрал. Больше ничего.",
      },
      {
        question: "Можно свои API-ключи разных сервисов?",
        answer:
          "Да. OpenAI, Anthropic, Google, Mistral, DeepSeek, Cohere или любой API в формате OpenAI, включая локальные модели. Со своим ключом лимиты Promptix не действуют — расход идёт у твоего провайдера.",
      },
      {
        question: "Можно свои промпты?",
        answer:
          "Да. Сохрани промпт и запускай хоткеем — или сделай из него Prompt as App.",
      },
      {
        question: "Что такое Prompt as App?",
        answer:
          "Промпт превращается в обычный .app в «Программах». Имя, иконка, открывается как любое приложение. На бесплатном тарифе — одно. На Pro — сколько угодно.",
      },
      {
        question: "Что, если кончатся запросы на бесплатном тарифе?",
        answer:
          "Запросы Promptix на бесплатном тарифе обновляются каждый день (15 в день). На Pro — 100 в день, все модели и сколько угодно Prompt-as-App. Со своим API-ключом эти лимиты не действуют. Лишние Prompt-as-App на бесплатном тарифе остаются установленными, но не откроются, пока не перейдёшь на Pro или не удалишь их.",
      },
      {
        question: "Свой API-ключ снимает лимит на Prompt-as-App?",
        answer:
          "Нет. Ключ снимает лимиты на запросы и модели. Сколько можно Prompt-as-App — по тарифу: 1 на бесплатном, без ограничений на Pro.",
      },
      {
        question: "Есть пробный период?",
        answer:
          "Да. У Pro — 7 дней. Отмени до конца пробного периода и останешься на бесплатном тарифе.",
      },
      {
        question: "Чем помесячный Pro отличается от годового?",
        answer:
          "Pro стоит 999₽ в месяц или 8 900₽ в год (−26%). Возможности те же.",
      },
    ],
  },

  footer: {
    copyright: "Все права защищены, 2026 ©",
    legal: "ИП Худышкина О.А. ИНН 450125033950",
    personalDataPolicy: "Политика обработки персональных данных",
    termsOfService: "Условия использования",
    privacy: "Конфиденциальность",
    promptAsApp: "Как приложение",
    promptApps: "Prompt Apps",
    pricing: "Тарифы",
    faq: "Вопросы",
  },

  language: {
    switch: "Сменить язык",
    current: "RU",
    russian: "Русский",
    english: "English",
  },

  cookieConsent: {
    message: "Мы используем cookies.",
    accept: "Ок",
  },

  terms: {
    title: "Условия использования",
    metaTitle: "Promptix – Условия использования",
    metaDescription:
      "Условия использования Promptix: лицензия, правила и ответственность.",
    backToHome: "На главную",
    lastUpdated: "Обновлено: август 2026",
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
    title: "Конфиденциальность",
    metaTitle: "Promptix – Конфиденциальность",
    metaDescription:
      "Какие данные собирает Promptix и как обрабатываются запросы.",
    backToHome: "На главную",
    lastUpdated: "Обновлено: август 2026",
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
          "Оператор может обрабатывать: данные учётной записи (адрес электронной почты, имя); пользовательский контент, передаваемый для обработки ИИ (выделенный, введённый или вставленный текст, в том числе в окнах Prompt-as-App); платёжные метаданные, получаемые от платёжных провайдеров (Stripe и, где доступно, локальные платёжные сервисы); технические данные (тип устройства, версия ОС, язык интерфейса, усечённый IP-адрес, статистика использования и журналы ошибок).",
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
          "Персональные данные могут передаваться: провайдерам ИИ (например, OpenAI) для обработки пользовательского контента; Stripe и, где доступно, локальным платёжным сервисам — для обработки платежей; провайдерам аналитики с фокусом на приватность (например, Plausible); OAuth-провайдерам (Google, Apple, GitHub и др.) — для аутентификации. Данные могут передаваться за пределы Российской Федерации, если это необходимо для предоставления Сервисов, при соблюдении применимых требований к защите данных.",
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
    title: "Как пользоваться",
    metaTitle: "Promptix – Демо",
    metaDescription:
      "Демо Promptix: установи на macOS, выдай доступ и переводи или пиши текст по хоткею.",
    backToHome: "На главную",
    intro: "Перед началом:",
    setup: {
      installed: {
        title: "1 — Установлено",
        description: "Promptix установлен",
      },
      running: {
        title: "2 — Запущен",
        description: "Promptix работает в фоне",
      },
      permissions: {
        title: "3 — Доступ",
        description: "Универсальный доступ для Promptix включён",
      },
    },
    useCasesTitle: "Попробуй",
    translation: {
      title: "Перевод",
      instruction: "Выдели текст, нажми ⌘ + ^ и выбери «Перевести»:",
      sample: "안녕하세요, 어떻게 지내세요?",
    },
    generate: {
      title: "Написать текст",
      instruction:
        "Напиши что-нибудь вроде «Текст про ИИ», выдели, нажми ⌘ + ^ и выбери «Text as Prompt»:",
      placeholder: "Текст про ИИ",
    },
  },

  pricingPage: {
    metaTitle: "Promptix – Тарифы",
    metaDescription:
      "Тарифы Promptix: бесплатно 15 запросов в день и 1 Prompt-as-App или Pro за 999₽/мес или 8 900₽/год. 7 дней бесплатно.",
  },
};
