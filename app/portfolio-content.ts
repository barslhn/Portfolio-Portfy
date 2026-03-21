export type Theme = "dark" | "light";
export type Locale = "tr" | "en";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

export type LocalizedText = Record<Locale, string>;

export type ExperienceItem = {
  period: string;
  role: LocalizedText;
  company: LocalizedText;
  bullets: Record<Locale, string[]>;
  tags: string[];
};

export type EducationItem = {
  date: string;
  title: LocalizedText;
  school: LocalizedText;
};

export type SkillGroup = {
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
};

export type CertificateItem = {
  date: string;
  title: LocalizedText;
  issuer: LocalizedText;
  file: string;
};

export type ReferenceItem = {
  name: string;
  title: LocalizedText;
  company: LocalizedText;
  phone: string;
  email: string;
};

export type ContactItem = {
  label: LocalizedText;
  value: string;
  href: string;
};

export const PROFILE = {
  name: "Barış İlhan",
  email: "barslhn@gmail.com",
  phoneDisplay: "+90 531 562 2362",
  phoneHref: "tel:+905315622362",
  location: {
    tr: "Fatih, İstanbul",
    en: "Fatih, Istanbul",
  },
  linkedin: "https://www.linkedin.com/in/baris-ilhan",
  github: "https://github.com/barslhn",
  cv: {
    tr: "/cv/baris-ilhan-cv-tr.pdf",
    en: "/cv/baris-ilhan-cv-en.pdf",
  },
} as const;

export const GITHUB_USERNAME = "barslhn";

export const TEXT = {
  tr: {
    nav: ["Hakkımda", "Deneyim", "Yetenekler", "Sertifikalar", "Projeler", "Referanslar", "İletişim"],
    heroEyebrow: "Backend ve full-stack üretim odağında büyüyen geliştirici",
    heroRole: "Junior Yazılım Geliştirici",
    heroSummary:
      "Bilgisayar Programcılığı mezunu olarak modern web uygulamaları ve backend servisleri geliştiriyorum. Next.js, NestJS, Spring Boot, TypeScript, PostgreSQL, Redis ve Docker ile REST API, authentication, veri doğrulama, state yönetimi ve deployment akışlarında pratik deneyim kazandım.",
    heroStatus: "Junior roller ve teknik iş birlikleri için hazır",
    heroCurrentTitle: "Güncel odak",
    heroCurrentText:
      "Neon Apps Academy sürecinde görev bazlı ve proje odaklı ilerleyerek arayüz geliştirme, yetkilendirme, veri bütünlüğü, Docker ve CI/CD süreçlerinde düzenli üretim yapıyorum.",
    primaryCta: "GitHub",
    secondaryCta: "LinkedIn",
    cvCta: "CV İndir",
    heroSignals: [
      {
        title: "Full-stack üretim",
        text: "Next.js, React, NestJS ve Spring Boot ile uçtan uca ürün geliştirme pratiği.",
      },
      {
        title: "Veri ve servis tasarımı",
        text: "PostgreSQL, Redis, Drizzle ORM, JWT ve validation katmanlarıyla güvenilir servis yapıları.",
      },
      {
        title: "Teslimat akışı",
        text: "Docker, CI/CD ve deployment süreçlerini uygulamaya dökme deneyimi.",
      },
    ],
    aboutTitle: "Profil Özeti",
    aboutText:
      "Eğitimim, staj deneyimlerim, akademi sürecim ve kişisel projelerim boyunca analitik düşünme, problem çözme ve iletişim becerilerimi yazılım geliştirme pratiğiyle birleştirdim. Hedefim; sürdürülebilir, okunabilir ve gerçek ihtiyaçlara karşılık veren ürünler geliştiren ekiplerde uzun vadeli değer üretmek.",
    educationTitle: "Eğitim",
    languageTitle: "Yabancı Dil",
    languageName: "İngilizce",
    languageLevel: "B1 - B2",
    experienceTitle: "Deneyim",
    experienceText:
      "En güncel teknik deneyimimi öne çıkaran, diğer rollerin ise daha kısa ve düzenli kartlar halinde aktığı daha dengeli bir akış kuruldu.",
    skillsTitle: "Teknik Yetkinlikler",
    skillsText:
      "Teknolojileri kullanım alanlarına göre ayırarak daha hızlı taranabilir ve işe alım odaklı bir yapı oluşturuldu.",
    certificatesTitle: "Kurs ve Sertifikalar",
    certificatesText:
      "Yeni eklenen Docker Temelleri dahil tüm sertifikalar tek bir tutarlı kart sistemi içinde listeleniyor.",
    certificateAction: "İndir",
    projectsTitle: "GitHub’daki Son Çalışmalar",
    projectsText:
      "Aşağıda GitHub hesabımdan en son güncellenen herkese açık repolar yer alıyor.",
    projectsAll: "Tüm Repolar",
    projectsOpen: "GitHub’da Aç",
    projectsLive: "Canlı Demo",
    projectsUpdated: "Güncellendi",
    projectsLoading: "GitHub verileri yükleniyor...",
    projectsError: "GitHub verileri şu anda alınamadı.",
    projectsEmpty: "Şu anda gösterilecek repo bulunamadı.",
    noDescription: "Bu repo için açıklama eklenmemiş.",
    referencesTitle: "Referanslar",
    referencesText: "Profesyonel referans bilgileri daha sade ve okunabilir biçimde korunuyor.",
    contactTitle: "İletişim",
    contactText: "Doğrudan iletişim için yalnızca gerekli bilgiler bırakıldı.",
    footer: "Barış İlhan",
  },
  en: {
    nav: ["About", "Experience", "Skills", "Certificates", "Projects", "References", "Contact"],
    heroEyebrow: "A developer growing through backend and full-stack delivery",
    heroRole: "Junior Software Developer",
    heroSummary:
      "As a Computer Programming graduate, I build modern web applications and backend services. I have hands-on experience with Next.js, NestJS, Spring Boot, TypeScript, PostgreSQL, Redis and Docker across REST APIs, authentication, validation, state management and deployment workflows.",
    heroStatus: "Ready for junior roles and technical collaborations",
    heroCurrentTitle: "Current focus",
    heroCurrentText:
      "At Neon Apps Academy I work in a task-based, project-driven structure around UI delivery, authorization, data integrity, Docker and CI/CD workflows.",
    primaryCta: "GitHub",
    secondaryCta: "LinkedIn",
    cvCta: "Download CV",
    heroSignals: [
      {
        title: "Full-stack delivery",
        text: "End-to-end product building with Next.js, React, NestJS and Spring Boot.",
      },
      {
        title: "Data and services",
        text: "Reliable service structures with PostgreSQL, Redis, Drizzle ORM, JWT and validation layers.",
      },
      {
        title: "Delivery workflow",
        text: "Hands-on experience with Docker, CI/CD and deployment processes.",
      },
    ],
    aboutTitle: "Profile Summary",
    aboutText:
      "Through education, internships, academy work and personal projects, I have combined analytical thinking, problem solving and communication skills with software delivery. My goal is to create long-term value in teams that build sustainable, readable and useful products.",
    educationTitle: "Education",
    languageTitle: "Language",
    languageName: "English",
    languageLevel: "B1 - B2",
    experienceTitle: "Experience",
    experienceText:
      "The layout now highlights my latest technical experience while the remaining roles flow as more compact cards in a cleaner sequence.",
    skillsTitle: "Technical Skills",
    skillsText:
      "Technologies are grouped by context so recruiters can understand faster where and how I use each tool.",
    certificatesTitle: "Courses and Certificates",
    certificatesText:
      "All certificates, including the newly added Docker Fundamentals, now live inside one consistent card system.",
    certificateAction: "Download",
    projectsTitle: "Latest Work on GitHub",
    projectsText:
      "Below are the latest public repositories from my GitHub account.",
    projectsAll: "All Repositories",
    projectsOpen: "Open on GitHub",
    projectsLive: "Live Demo",
    projectsUpdated: "Updated",
    projectsLoading: "Loading GitHub data...",
    projectsError: "GitHub data is not available right now.",
    projectsEmpty: "There are no repositories to show right now.",
    noDescription: "No description has been added for this repository.",
    referencesTitle: "References",
    referencesText: "Professional reference information is preserved in a cleaner, easier-to-read layout.",
    contactTitle: "Contact",
    contactText: "Only the direct contact information that matters is kept here.",
    footer: "Barış İlhan",
  },
} as const;

export const NAV_IDS = ["about", "experience", "skills", "certificates", "projects", "references", "contact"] as const;

export const HERO_SIGNAL_CARDS = [
  {
    title: { tr: "Full-stack üretim", en: "Full-stack delivery" },
    text: {
      tr: "Next.js, React, NestJS ve Spring Boot ile uçtan uca ürün geliştirme pratiği.",
      en: "End-to-end product building with Next.js, React, NestJS and Spring Boot.",
    },
  },
  {
    title: { tr: "Veri ve servis tasarımı", en: "Data and services" },
    text: {
      tr: "PostgreSQL, Redis, Drizzle ORM, JWT ve validation katmanlarıyla güvenilir servis yapıları.",
      en: "Reliable service structures with PostgreSQL, Redis, Drizzle ORM, JWT and validation layers.",
    },
  },
  {
    title: { tr: "Teslimat akışı", en: "Delivery workflow" },
    text: {
      tr: "Docker, CI/CD ve deployment süreçlerini uygulamaya dökme deneyimi.",
      en: "Hands-on experience with Docker, CI/CD and deployment processes.",
    },
  },
] as const;

export const EDUCATION: EducationItem[] = [
  {
    date: "10/2025",
    title: { tr: "Bilgisayar Programcılığı", en: "Computer Programming" },
    school: { tr: "Kapadokya Üniversitesi", en: "Cappadocia University" },
  },
  {
    date: "09/2020",
    title: { tr: "Teknik Kimya Laboratuvarı", en: "Technical Chemistry Laboratory" },
    school: { tr: "Kadırga Mesleki ve Teknik Anadolu Lisesi", en: "Kadırga Vocational and Technical Anatolian High School" },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "11/2025 - 04/2026",
    role: { tr: "Full Stack Developer", en: "Full Stack Developer" },
    company: { tr: "Neon Apps Academy", en: "Neon Apps Academy" },
    bullets: {
      tr: [
        "Frontend ve backend tarafında görev bazlı çalışmalar yürüterek modern web uygulamaları geliştirdim.",
        "Next.js, React, TypeScript, Tailwind CSS, Zustand, Zod ve React Hook Form ile kullanıcı odaklı arayüzler geliştirdim.",
        "NestJS, PostgreSQL, Drizzle ORM, JWT ve Redis ile REST API, authentication, validation ve error handling alanlarında deneyim kazandım.",
        "Rol bazlı yetkilendirme, gerçek zamanlı iletişim, Docker, CI/CD, deployment ve temel yazılım mimarisi üzerine çalıştım.",
      ],
      en: [
        "Worked on task-based frontend and backend assignments while building modern web applications.",
        "Built user-focused interfaces with Next.js, React, TypeScript, Tailwind CSS, Zustand, Zod and React Hook Form.",
        "Gained hands-on experience in REST APIs, authentication, validation and error handling with NestJS, PostgreSQL, Drizzle ORM, JWT and Redis.",
        "Worked on role-based authorization, real-time communication, Docker, CI/CD, deployment and core software architecture principles.",
      ],
    },
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    period: "08/2025 - 09/2025",
    role: { tr: "Stajyer", en: "Intern" },
    company: {
      tr: "Transay Taşımacılık ve Personel Hizmetleri Ticaret A.Ş.",
      en: "Transay Transport and Personnel Services Inc.",
    },
    bullets: {
      tr: [
        "Yazılım ekibine destek vererek küçük çaplı projelerde görev aldım.",
        "Java ve Python ile temel backend uygulamaları geliştirerek kodlama pratiğimi güçlendirdim.",
        "Algoritma, veri yapıları ve SQL sorguları üzerine uygulamalar yaptım.",
      ],
      en: [
        "Supported the software team in small-scale projects.",
        "Strengthened coding practice by building introductory backend applications with Java and Python.",
        "Worked on algorithms, data structures and SQL query practice.",
      ],
    },
    tags: ["Java", "Python", "SQL"],
  },
  {
    period: "11/2023 - 01/2025",
    role: { tr: "Resepsiyon Görevlisi", en: "Reception Officer" },
    company: { tr: "Sultanahmet Center View Apart Hotel", en: "Sultanahmet Center View Apart Hotel" },
    bullets: {
      tr: ["Yoğun operasyon akışında müşteri iletişimi, yönlendirme ve hızlı çözüm üretme sorumluluğunu üstlendim."],
      en: ["Handled customer communication, direction and quick problem solving within a busy operational flow."],
    },
    tags: ["İletişim", "Operations"],
  },
  {
    period: "11/2022 - 10/2023",
    role: { tr: "Organizatör", en: "Organizer" },
    company: { tr: "Kaçkar Turizm", en: "Kaçkar Tourism" },
    bullets: {
      tr: ["Ulaşım, konaklama ve paket tur süreçlerini koordine ederek planlama becerilerimi geliştirdim."],
      en: ["Coordinated transportation, accommodation and package tour processes while improving planning skills."],
    },
    tags: ["Planlama", "Coordination"],
  },
  {
    period: "06/2018 - 10/2019",
    role: { tr: "Laboratuvar Teknisyeni", en: "Laboratory Technician" },
    company: { tr: "Funda Laboratuvarı", en: "Funda Laboratory" },
    bullets: {
      tr: ["Test, analiz ve raporlama süreçlerinde dikkat, doğruluk ve düzen odaklı çalıştım."],
      en: ["Worked with a strong focus on accuracy, discipline and reporting throughout testing and analysis tasks."],
    },
    tags: ["Raporlama", "Discipline"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: { tr: "Programlama Dilleri", en: "Programming Languages" },
    description: { tr: "Uygulama geliştirme temelim", en: "Foundation of my application work" },
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: { tr: "Frontend Geliştirme", en: "Frontend Development" },
    description: { tr: "Modern kullanıcı arayüzleri", en: "Modern user interfaces" },
    items: ["Next.js", "React", "Tailwind CSS", "Zustand", "React Hook Form", "Zod", "shadcn/ui"],
  },
  {
    title: { tr: "Backend ve API", en: "Backend and API" },
    description: { tr: "Servis tasarımı ve güvenlik", en: "Service design and security" },
    items: ["NestJS", "Spring Boot", "REST API", "JWT Authentication", "Role-Based Authorization", "Validation", "Error Handling", "Swagger / OpenAPI", "WebSocket"],
  },
  {
    title: { tr: "Veri Katmanı", en: "Data Layer" },
    description: { tr: "Doğruluk ve performans odağı", en: "Correctness and performance" },
    items: ["PostgreSQL", "MySQL", "Redis", "Drizzle ORM", "Data Structures", "Algorithms"],
  },
  {
    title: { tr: "DevOps ve Araçlar", en: "DevOps and Tools" },
    description: { tr: "Teslimat süreçleri", en: "Delivery workflows" },
    items: ["Docker", "CI/CD", "Git", "GitHub", "VS Code", "Eclipse IDE", "Swagger"],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  { date: "03/2026", title: { tr: "Docker Temelleri", en: "Docker Fundamentals" }, issuer: { tr: "BTK Akademi", en: "BTK Academy" }, file: "/certificates/docker_temelleri.pdf" },
  { date: "11/2025", title: { tr: "API ve API Testi", en: "API and API Testing" }, issuer: { tr: "BTK Akademi", en: "BTK Academy" }, file: "/certificates/api-test-btk.pdf" },
  { date: "11/2025", title: { tr: "SQL ile Veritabanı Sorgulama 101", en: "SQL Database Querying 101" }, issuer: { tr: "Turkcell Geleceği Yazanlar", en: "Turkcell Future Writers" }, file: "/certificates/sql-101-turkcell.pdf" },
  { date: "11/2025", title: { tr: "Python Programlama 201", en: "Python Programming 201" }, issuer: { tr: "Turkcell Geleceği Yazanlar", en: "Turkcell Future Writers" }, file: "/certificates/python-201-turkcell.pdf" },
  { date: "11/2025", title: { tr: "Python Programlama 101", en: "Python Programming 101" }, issuer: { tr: "Turkcell Geleceği Yazanlar", en: "Turkcell Future Writers" }, file: "/certificates/python-101-turkcell.pdf" },
  { date: "11/2025", title: { tr: "Java 201 Eğitim Sertifikası", en: "Java 201 Certificate" }, issuer: { tr: "Turkcell Geleceği Yazanlar", en: "Turkcell Future Writers" }, file: "/certificates/java-201-turkcell.pdf" },
  { date: "08/2025", title: { tr: "Java 101 Eğitim Sertifikası", en: "Java 101 Certificate" }, issuer: { tr: "Turkcell Geleceği Yazanlar", en: "Turkcell Future Writers" }, file: "/certificates/java-101-turkcell.pdf" },
  { date: "07/2025", title: { tr: "CSS Eğitimi", en: "CSS Training" }, issuer: { tr: "BTK Akademi", en: "BTK Academy" }, file: "/certificates/css-egitim-btk.pdf" },
  { date: "07/2025", title: { tr: "Microsoft Excel Temel Eğitim Sertifikası", en: "Microsoft Excel Fundamentals" }, issuer: { tr: "BTK Akademi", en: "BTK Academy" }, file: "/certificates/excel-temel-btk.pdf" },
  { date: "11/2024", title: { tr: "Bilgi Güvenliğine Giriş", en: "Introduction to Cybersecurity" }, issuer: { tr: "Cisco Networking Academy", en: "Cisco Networking Academy" }, file: "/certificates/bilgi-guvenligi-cisco.pdf" },
  { date: "05/2024", title: { tr: "Algoritma Programlama ve Veri Yapılarına Giriş", en: "Introduction to Algorithms and Data Structures" }, issuer: { tr: "BTK Akademi", en: "BTK Academy" }, file: "/certificates/algoritma-veri-btk.pdf" },
  { date: "11/2023", title: { tr: "NDG Linux Essentials", en: "NDG Linux Essentials" }, issuer: { tr: "Cisco Networking Academy", en: "Cisco Networking Academy" }, file: "/certificates/linux-essentials-cisco.pdf" },
  { date: "11/2023", title: { tr: "NDG Linux Unhatched", en: "NDG Linux Unhatched" }, issuer: { tr: "Cisco Networking Academy", en: "Cisco Networking Academy" }, file: "/certificates/linux-unhatched-cisco.pdf" },
];

export const REFERENCES: ReferenceItem[] = [
  {
    name: "Ahmet Murat KIRAN",
    title: { tr: "Ünvan: Bilgi Teknolojileri Operasyon Koordinatörü", en: "Title: Information Technologies Operations Coordinator" },
    company: { tr: "Şirket: Amerikan Hastanesi", en: "Company: Amerikan Hospital" },
    phone: "+90 533 522 87 88",
    email: "ahmetkiran@hotmail.com",
  },
  {
    name: "Orhan TURUN",
    title: { tr: "Ünvan: Bilgi Teknolojileri Teknik Şefi", en: "Title: Information Technologies Technical Chief" },
    company: { tr: "Şirket: Küçükçekmece Belediyesi", en: "Company: Küçükçekmece Municipality" },
    phone: "+90 532 635 34 45",
    email: "orhan.turun@kucukcekmece.bel.tr",
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { label: { tr: "E-posta", en: "E-mail" }, value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: { tr: "Telefon", en: "Phone" }, value: PROFILE.phoneDisplay, href: PROFILE.phoneHref },
];

export function pick(text: LocalizedText, locale: Locale) {
  return text[locale];
}
