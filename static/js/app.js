(() => {
  const STORAGE_LANG = "wsh_lang";
  const STORAGE_THEME = "wsh_theme";

  const i18n = {
    uz: {
      nav_home: "Bosh sahifa",
      nav_blog: "Blog",
      nav_about: "Men haqimda",
      nav_skills: "Ko‘nikmalar",
      nav_services: "Xizmatlar",
      nav_pricing: "Narxlar",
      nav_portfolio: "Portfolio",
      nav_testimonials: "Fikrlar",
      nav_contact: "Bog‘lanish",
      nav_projects: "Loyihalar",

      about_title: "Men haqimda",
      about_subtitle:
        "Men bizneslar uchun yuqori konversiyali saytlar va Telegram botlar orqali avtomatlashtirish tizimlarini ishlab chiqaman.",
      about_p1t: "Yondashuv",
      about_p1d: "Avval tahlil, keyin yechim: maqsad, auditoriya va jarayonlar asosida.",
      about_p2t: "Natija",
      about_p2d: "Tezlik, UX va avtomatlashtirish orqali vaqt tejash va daromad o‘sishi.",
      about_p3t: "Ishonch",
      about_p3d: "Toza kod, yaxshi arxitektura, va admin orqali oson boshqaruv.",
      about_card_badge: "Nima olasiz?",
      about_card_title: "Professional personal brand + lead tizimi",
      about_card_1: "Mobilga mos va tez",
      about_card_2: "Aniq servislar va narx diapazoni",
      about_card_3: "Portfolio, blog va testimonial",
      about_card_cta: "Bog‘lanish",

      skills_title: "Ko‘nikmalar",
      skills_subtitle: "Texnologiyalar bo‘yicha real tajriba va daraja.",
      skills_empty: "Hozircha ko‘nikmalar yo‘q. Admin paneldan qo‘shishingiz mumkin.",

      projects_title: "Portfolio",
      projects_subtitle: "Tanlangan loyihalar: natija va qiymatga yo‘naltirilgan.",
      projects_empty: "Hozircha loyihalar yo‘q. Admin paneldan qo‘shishingiz mumkin.",
      project_open: "Ko‘rish",

      exp_title: "Tajriba / Ta’lim",
      exp_subtitle: "Ish tajribasi va o‘qish yo‘nalishlari.",
      exp_empty: "Hozircha tajriba yozuvlari yo‘q. Admin paneldan qo‘shishingiz mumkin.",
      exp_present: "Hozir",

      blog_preview_title: "Blog",
      blog_preview_subtitle: "Qisqa maqolalar: UX, avtomatlashtirish va biznes uchun foydali g‘oyalar.",
      blog_all: "Barcha postlar",
      blog_title: "Blog",
      blog_subtitle: "Tajriba, amaliy maslahatlar va loyihalardan xulosalar.",
      blog_read: "O‘qish",
      blog_empty: "Hozircha post yo‘q. Admin paneldan qo‘shishingiz mumkin.",
      blog_back: "← Blogga qaytish",

      hero_badge: "Website + Telegram bot orqali o‘sish",
      hero_title: "Biznesingiz uchun sayt va bot orqali yangi mijozlar oqimini yarating",
      hero_subtitle: "Siz ishlamasangiz ham, tizim siz uchun ishlaydi",
      hero_btn_free: "Bepul konsultatsiya",
      hero_btn_contact: "Bog‘lanish",
      trust_1: "Avtomatik ishlaydi",
      trust_2: "Professional ko‘rinish",
      trust_3: "Daromadni oshiradi",
      hero_card_title: "Biznes uchun tizim",
      hero_card_value: "Sayt + Bot + Avtomatlashtirish",
      hero_card_b1: "Mijozlar oqimi",
      hero_card_b2: "Savol-javob avtomatlashtirish",
      hero_card_b3: "Buyurtmalarni tezlashtirish",
      mini_1t: "Sayt",
      mini_1d: "Ishonch + brend",
      mini_2t: "Bot",
      mini_2d: "24/7 javob",
      mini_3t: "Automation",
      mini_3d: "Tezkor jarayon",
      mini_4t: "Optimization",
      mini_4d: "Yuqori konversiya",

      services_title: "Xizmatlar",
      services_subtitle: "Biz sizga mijozlarni jalb qiladigan va vaqtni tejaydigan tizimlar quramiz.",
      srv_1t: "Website Development",
      srv_1d: "Yuqori ishonch beradigan, tez va mobilga mos sayt.",
      srv_1b: "Ko‘proq lead, ko‘proq savdo",
      srv_2t: "Telegram Bot Development",
      srv_2d: "Savollarga avtomatik javob, buyurtma, katalog, to‘lov.",
      srv_2b: "24/7 mijozlar bilan ishlaydi",
      srv_3t: "Business Automation",
      srv_3d: "Jarayonlarni soddalashtirish: CRM, topshiriqlar, hisobot.",
      srv_3b: "Vaqt va pul tejaladi",
      srv_4t: "Digital Optimization",
      srv_4d: "Konversiya, tezlik, UX, analitika va takomillashtirish.",
      srv_4b: "Natijaga yo‘naltirilgan",

      benefits_title: "Nega aynan avtomatlashtirish?",
      benefits_subtitle: "Sayt — ishonch va brend. Bot — tezlik va 24/7 xizmat. Birgalikda esa daromad o‘sadi.",
      benefit_1: "24/7 ishlaydi",
      benefit_2: "Mijozlarni avtomatik jalb qiladi",
      benefit_3: "Ishni yengillashtiradi",
      benefit_4: "Daromadni oshiradi",
      benefits_panel_title: "Natija fokus",
      benefits_p1: "Ishonch",
      benefits_p2: "Tezlik",
      benefits_p3: "Konversiya",
      benefits_note: "Ko‘rsatkichlar loyiha va soha bo‘yicha farqlanishi mumkin.",

      pricing_title: "Narxlar",
      pricing_subtitle: "Tez start yoki to‘liq avtomatlashtirish — biznesingizga mos paket tanlang.",
      price_start: "500 000 so‘m dan boshlab",
      price_business: "2 000 000 – 5 000 000 so‘m",
      price_premium: "5 000 000 – 10 000 000 so‘m",
      price_s1: "Landing page",
      price_s2: "Mobilga mos",
      price_s3: "Tez yuklanish",
      price_b1: "Website + Telegram bot",
      price_b2: "Buyurtma/lead yig‘ish",
      price_b3: "Admin boshqaruvi",
      price_p1: "CRM + bot + analytics",
      price_p2: "Full automation system",
      price_p3: "Kengaytirish va integratsiya",
      price_cta: "Bog‘lanish",
      pricing_note: "Narx loyiha murakkabligiga qarab belgilanadi",

      portfolio_title: "Portfolio",
      portfolio_subtitle: "Real loyihalardagi “Before → After” natijalar.",
      portfolio_before: "Before",
      portfolio_after: "After",
      portfolio_empty: "Hozircha portfolio yo‘q. Admin paneldan qo‘shishingiz mumkin.",

      process_title: "Jarayon",
      process_subtitle: "Qisqa, aniq, natijaga yo‘naltirilgan workflow.",
      process_1: "Aloqa",
      process_2: "Tahlil",
      process_3: "Ishlab chiqish",
      process_4: "Ishga tushirish",

      testimonials_title: "Mijozlar fikri",
      testimonials_subtitle: "Tilga mos 2–3 ta fikr avtomatik ko‘rsatiladi.",
      testimonials_empty: "Hozircha fikrlar yo‘q. Admin paneldan qo‘shishingiz mumkin.",

      contact_title: "Bog‘lanish",
      contact_subtitle: "Konsultatsiya uchun qulay usulni tanlang. Forma yo‘q — faqat to‘g‘ridan-to‘g‘ri aloqa.",
      contact_phone: "Telefon",
      contact_call: "Qo‘ng‘iroq qilish",
      contact_tg: "Telegram ochish",
      contact_email: "Email yozish",

      final_title: "Bugun boshlang — ertaga natija oling",
      final_btn_contact: "Bog‘lanish",
      final_btn_tg: "Telegram orqali yozish",
    },
    ru: {
      nav_home: "Главная",
      nav_blog: "Блог",
      nav_about: "Обо мне",
      nav_skills: "Навыки",
      nav_services: "Услуги",
      nav_pricing: "Цены",
      nav_portfolio: "Портфолио",
      nav_testimonials: "Отзывы",
      nav_contact: "Контакты",
      nav_projects: "Проекты",

      about_title: "Обо мне",
      about_subtitle:
        "Я разрабатываю сайты с высокой конверсией и системы автоматизации через Telegram-ботов для бизнеса.",
      about_p1t: "Подход",
      about_p1d: "Сначала анализ, затем решение: цели, аудитория и процессы.",
      about_p2t: "Результат",
      about_p2d: "Скорость, UX и автоматизация — экономия времени и рост дохода.",
      about_p3t: "Доверие",
      about_p3d: "Чистый код, хорошая архитектура и удобное управление через админку.",
      about_card_badge: "Что вы получите?",
      about_card_title: "Профессиональный бренд + система лидов",
      about_card_1: "Адаптивно и быстро",
      about_card_2: "Понятные услуги и диапазон цен",
      about_card_3: "Портфолио, блог и отзывы",
      about_card_cta: "Связаться",

      skills_title: "Навыки",
      skills_subtitle: "Реальный опыт и уровень по технологиям.",
      skills_empty: "Навыков пока нет. Добавьте через админку.",

      projects_title: "Портфолио",
      projects_subtitle: "Избранные проекты, ориентированные на результат.",
      projects_empty: "Проектов пока нет. Добавьте через админку.",
      project_open: "Открыть",

      exp_title: "Опыт / Образование",
      exp_subtitle: "Опыт работы и обучение.",
      exp_empty: "Записей пока нет. Добавьте через админку.",
      exp_present: "Сейчас",

      blog_preview_title: "Блог",
      blog_preview_subtitle: "Короткие статьи: UX, автоматизация и полезные идеи.",
      blog_all: "Все посты",
      blog_title: "Блог",
      blog_subtitle: "Опыт, практические советы и выводы из проектов.",
      blog_read: "Читать",
      blog_empty: "Постов пока нет. Добавьте через админку.",
      blog_back: "← Назад к блогу",

      hero_badge: "Рост через сайт + Telegram-бот",
      hero_title: "Создайте поток новых клиентов через сайт и бота для вашего бизнеса",
      hero_subtitle: "Даже когда вы не работаете — система работает за вас",
      hero_btn_free: "Бесплатная консультация",
      hero_btn_contact: "Связаться",
      trust_1: "Работает автоматически",
      trust_2: "Профессиональный образ",
      trust_3: "Увеличивает доход",
      hero_card_title: "Система для бизнеса",
      hero_card_value: "Сайт + Бот + Автоматизация",
      hero_card_b1: "Поток клиентов",
      hero_card_b2: "Авто-ответы и сценарии",
      hero_card_b3: "Быстрее обработка заявок",
      mini_1t: "Сайт",
      mini_1d: "Доверие + бренд",
      mini_2t: "Бот",
      mini_2d: "Ответ 24/7",
      mini_3t: "Automation",
      mini_3d: "Быстрее процессы",
      mini_4t: "Optimization",
      mini_4d: "Выше конверсия",

      services_title: "Услуги",
      services_subtitle: "Мы строим системы, которые привлекают клиентов и экономят время.",
      srv_1t: "Разработка сайтов",
      srv_1d: "Быстрый, адаптивный сайт, который повышает доверие.",
      srv_1b: "Больше лидов, больше продаж",
      srv_2t: "Telegram-боты",
      srv_2d: "Авто-ответы, заявки, каталог, платежи.",
      srv_2b: "Работает с клиентами 24/7",
      srv_3t: "Автоматизация бизнеса",
      srv_3d: "CRM, задачи, отчёты и оптимизация процессов.",
      srv_3b: "Экономит время и деньги",
      srv_4t: "Digital-оптимизация",
      srv_4d: "Конверсия, скорость, UX, аналитика и улучшения.",
      srv_4b: "Ориентация на результат",

      benefits_title: "Зачем автоматизация?",
      benefits_subtitle: "Сайт — доверие и бренд. Бот — скорость и сервис 24/7. Вместе это рост дохода.",
      benefit_1: "Работает 24/7",
      benefit_2: "Автоматически привлекает клиентов",
      benefit_3: "Упрощает работу",
      benefit_4: "Увеличивает доход",
      benefits_panel_title: "Фокус на результат",
      benefits_p1: "Доверие",
      benefits_p2: "Скорость",
      benefits_p3: "Конверсия",
      benefits_note: "Показатели зависят от проекта и ниши.",

      pricing_title: "Цены",
      pricing_subtitle: "Быстрый старт или полная автоматизация — выберите пакет под ваш бизнес.",
      price_start: "от 500 000 сум",
      price_business: "2 000 000 – 5 000 000 сум",
      price_premium: "5 000 000 – 10 000 000 сум",
      price_s1: "Landing page",
      price_s2: "Адаптивный дизайн",
      price_s3: "Быстрая загрузка",
      price_b1: "Сайт + Telegram-бот",
      price_b2: "Сбор заявок/лидов",
      price_b3: "Управление через админку",
      price_p1: "CRM + бот + аналитика",
      price_p2: "Полная автоматизация",
      price_p3: "Интеграции и масштабирование",
      price_cta: "Связаться",
      pricing_note: "Цена зависит от сложности проекта",

      portfolio_title: "Портфолио",
      portfolio_subtitle: "Реальные “Before → After” результаты проектов.",
      portfolio_before: "До",
      portfolio_after: "После",
      portfolio_empty: "Портфолио пока нет. Добавьте через админку.",

      process_title: "Процесс",
      process_subtitle: "Короткий и прозрачный workflow, нацеленный на результат.",
      process_1: "Связь",
      process_2: "Анализ",
      process_3: "Разработка",
      process_4: "Запуск",

      testimonials_title: "Отзывы клиентов",
      testimonials_subtitle: "Автоматически показываем 2–3 отзыва на выбранном языке.",
      testimonials_empty: "Отзывов пока нет. Добавьте через админку.",

      contact_title: "Контакты",
      contact_subtitle: "Выберите удобный способ. Формы нет — только прямой контакт.",
      contact_phone: "Телефон",
      contact_call: "Позвонить",
      contact_tg: "Открыть Telegram",
      contact_email: "Написать email",

      final_title: "Начните сегодня — получите результат завтра",
      final_btn_contact: "Связаться",
      final_btn_tg: "Написать в Telegram",
    },
    en: {
      nav_home: "Home",
      nav_blog: "Blog",
      nav_about: "About",
      nav_skills: "Skills",
      nav_services: "Services",
      nav_pricing: "Pricing",
      nav_portfolio: "Portfolio",
      nav_testimonials: "Testimonials",
      nav_contact: "Contact",
      nav_projects: "Projects",

      about_title: "About me",
      about_subtitle:
        "I build high-converting websites and automation systems powered by Telegram bots for business owners.",
      about_p1t: "Approach",
      about_p1d: "First analysis, then solution: goals, audience, and workflows.",
      about_p2t: "Outcome",
      about_p2d: "Speed, UX, and automation to save time and increase revenue.",
      about_p3t: "Trust",
      about_p3d: "Clean code, solid architecture, and easy admin management.",
      about_card_badge: "What you get",
      about_card_title: "Professional brand + lead system",
      about_card_1: "Mobile-first and fast",
      about_card_2: "Clear services and pricing range",
      about_card_3: "Portfolio, blog, and testimonials",
      about_card_cta: "Contact",

      skills_title: "Skills",
      skills_subtitle: "Real experience and level by technology.",
      skills_empty: "No skills yet. Add them via the admin panel.",

      projects_title: "Portfolio",
      projects_subtitle: "Selected projects focused on results and value.",
      projects_empty: "No projects yet. Add them via the admin panel.",
      project_open: "Open",

      exp_title: "Experience / Education",
      exp_subtitle: "Work experience and education highlights.",
      exp_empty: "No entries yet. Add them via the admin panel.",
      exp_present: "Present",

      blog_preview_title: "Blog",
      blog_preview_subtitle: "Short reads: UX, automation, and business ideas.",
      blog_all: "All posts",
      blog_title: "Blog",
      blog_subtitle: "Experience, practical tips, and project takeaways.",
      blog_read: "Read",
      blog_empty: "No posts yet. Add them via the admin panel.",
      blog_back: "← Back to blog",

      hero_badge: "Grow with a website + Telegram bot",
      hero_title: "Create a new client flow with a website and bot for your business",
      hero_subtitle: "Even when you’re not working — the system works for you",
      hero_btn_free: "Free consultation",
      hero_btn_contact: "Contact",
      trust_1: "Runs automatically",
      trust_2: "Professional presence",
      trust_3: "Increases revenue",
      hero_card_title: "Business system",
      hero_card_value: "Website + Bot + Automation",
      hero_card_b1: "Client acquisition",
      hero_card_b2: "Automated Q&A",
      hero_card_b3: "Faster order handling",
      mini_1t: "Website",
      mini_1d: "Trust + brand",
      mini_2t: "Bot",
      mini_2d: "24/7 replies",
      mini_3t: "Automation",
      mini_3d: "Faster workflows",
      mini_4t: "Optimization",
      mini_4d: "Higher conversion",

      services_title: "Services",
      services_subtitle: "We build systems that attract clients and save time.",
      srv_1t: "Website Development",
      srv_1d: "Fast, responsive website that boosts trust.",
      srv_1b: "More leads, more sales",
      srv_2t: "Telegram Bot Development",
      srv_2d: "Auto replies, orders, catalog, payments.",
      srv_2b: "Works with clients 24/7",
      srv_3t: "Business Automation",
      srv_3d: "CRM, tasks, reporting, streamlined processes.",
      srv_3b: "Saves time and money",
      srv_4t: "Digital Optimization",
      srv_4d: "Conversion, speed, UX, analytics and improvements.",
      srv_4b: "Results-driven",

      benefits_title: "Why automation?",
      benefits_subtitle: "Website builds trust. Bot delivers speed and 24/7 service. Together, they grow revenue.",
      benefit_1: "Works 24/7",
      benefit_2: "Automatically attracts clients",
      benefit_3: "Simplifies operations",
      benefit_4: "Increases revenue",
      benefits_panel_title: "Outcome focus",
      benefits_p1: "Trust",
      benefits_p2: "Speed",
      benefits_p3: "Conversion",
      benefits_note: "Metrics depend on your niche and project scope.",

      pricing_title: "Pricing",
      pricing_subtitle: "Quick start or full automation — choose a package that fits your business.",
      price_start: "Starting from 500,000 UZS",
      price_business: "2,000,000 – 5,000,000 UZS",
      price_premium: "5,000,000 – 10,000,000 UZS",
      price_s1: "Landing page",
      price_s2: "Mobile responsive",
      price_s3: "Fast loading",
      price_b1: "Website + Telegram bot",
      price_b2: "Lead / order capture",
      price_b3: "Admin-managed",
      price_p1: "CRM + bot + analytics",
      price_p2: "Full automation system",
      price_p3: "Integrations and scaling",
      price_cta: "Contact",
      pricing_note: "Pricing depends on the project complexity",

      portfolio_title: "Portfolio",
      portfolio_subtitle: "Real “Before → After” results from projects.",
      portfolio_before: "Before",
      portfolio_after: "After",
      portfolio_empty: "No portfolio yet. Add items via the admin panel.",

      process_title: "Process",
      process_subtitle: "Clear, fast, results-oriented workflow.",
      process_1: "Contact",
      process_2: "Analysis",
      process_3: "Development",
      process_4: "Launch",

      testimonials_title: "Testimonials",
      testimonials_subtitle: "We automatically show 2–3 testimonials for the selected language.",
      testimonials_empty: "No testimonials yet. Add them via the admin panel.",

      contact_title: "Contact",
      contact_subtitle: "Choose your preferred channel. No forms — direct contact only.",
      contact_phone: "Phone",
      contact_call: "Call",
      contact_tg: "Open Telegram",
      contact_email: "Email",

      final_title: "Start today — get results tomorrow",
      final_btn_contact: "Contact",
      final_btn_tg: "Message on Telegram",
    },
  };

  function setLang(lang) {
    const dict = i18n[lang] || i18n.uz;
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_LANG, lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.classList.toggle("chip--active", btn.getAttribute("data-lang") === lang);
    });

    filterTestimonials(lang);
  }

  function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem(STORAGE_THEME, theme);
    const icon = document.querySelector("#themeToggle .icon");
    if (icon) icon.textContent = isDark ? "☾" : "☀";
  }

  function filterTestimonials(lang) {
    const grid = document.getElementById("testimonialGrid");
    if (!grid) return;
    const all = Array.from(grid.querySelectorAll(".quote"));

    const matches = all.filter((el) => el.getAttribute("data-lang") === lang);
    const picked = (matches.length ? matches : all).slice(0, 3);

    all.forEach((el) => (el.hidden = true));
    picked.forEach((el) => (el.hidden = false));
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  function initSkillBars() {
    const levels = {
      beginner: 38,
      intermediate: 68,
      advanced: 92,
    };
    document.querySelectorAll(".skill").forEach((el) => {
      const lvl = (el.getAttribute("data-level") || "").toLowerCase();
      const pct = levels[lvl] ?? 60;
      const fill = el.querySelector(".skill__fill");
      if (fill) fill.style.width = `${pct}%`;
    });
  }

  function init() {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    const savedLang = localStorage.getItem(STORAGE_LANG) || "uz";
    const savedTheme = localStorage.getItem(STORAGE_THEME);

    if (savedTheme) setTheme(savedTheme);
    else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });

    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "light";
        setTheme(cur === "dark" ? "light" : "dark");
      });
    }

    initReveal();
    initSkillBars();
    setLang(savedLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

