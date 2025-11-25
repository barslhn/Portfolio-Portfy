"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "barslhn";

// İndirme ikonu için ufak bir bileşen (SVG)
const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);

const TEXTS = {
  tr: {
    nav_about: "Hakkımda",
    nav_skills: "Yetenekler",
    nav_projects: "Projeler",
    nav_education: "Eğitim",
    nav_references: "Referanslar",
    location: "İstanbul · Fatih",
    hero_title: "Barış İLHAN",
    hero_role: "Junior Yazılım Geliştirici · Java & Spring Boot",
    hero_desc:
      "Java, Spring Boot, Python ve SQL ile backend uygulamaları geliştiriyorum. GitHub’daki public projelerimi aşağıda güncel olarak görebilirsiniz.",
    contact_btn: "Bana Ulaş",
    github_btn: "GitHub",
    linkedin_btn: "LinkedIn",
    contact_title: "İletişim",
    contact_mail: "E-posta",
    contact_phone: "Telefon",
    card_working: "Aktif çalışılan proje:",
    card_working_desc:
      "Spring Boot + React + TypeScript + Supabase | ERP (Kurumsal Kaynak Planlaması) Sistemi geliştirilmesi.",
    card_cv: "CV indir",
    about_title: "Hakkımda",
    about_text:
      "Bilgisayar Programcılığı mezunu bir yazılım geliştiriciyim. Java ve Spring Boot teknolojileriyle backend uygulamalar geliştiriyor, veri tabanı tasarımı ve API entegrasyonu konularında kendimi geliştirmeye devam ediyorum. Eğitimim, staj deneyimim ve kişisel projelerim sayesinde hem bireysel hem ekip çalışmasına uyumlu bir şekilde yazılım geliştirme süreçlerinde aktif rol aldım. Python ile veri işleme ve derin öğrenme tabanlı projelerde de pratik deneyim edindim. Amacım, ölçeklenebilir ve sürdürülebilir yazılım çözümleri üretmek.",
    skills_title: "Yetenekler",
    skills_backend: "Backend",
    skills_python: "Python",
    skills_tools: "Araçlar",
    skills_backend_desc: "Java, Spring Boot, REST, MySQL, SQL",
    skills_python_desc: "Python, veri işleme, yüz tanıma",
    skills_tools_desc: "Git, VS Code, Eclipse, Office",
    projects_title: "Projeler",
    projects_link: "GitHub’ıma erişebilirsiniz →",
    project1_title: "Sürücü Tanıma Otomasyonu",
    project1_desc: "Python ve derin öğrenme tabanlı sürücü/yüz tanıma sistemi.",
    project2_title: "Excel Dönüştürücü ve Alarm Raporlama",
    project2_desc: "Veri yükleme, filtreleme ve Excel çıktısı üreten araç.",
    github_latest: "GitHub’dan Son Projeler",
    github_none: "Şu anda gösterilecek GitHub projesi yok.",
    education_title: "Eğitim",
    experience_title: "Deneyim",
    certificates_title: "Sertifikalar",
    references_title: "Referanslar",
    edu1: "Bilgisayar Programcılığı – Kapadokya Üniversitesi",
    edu1_year: "2025",
    edu2: "Teknik Kimya Laboratuvarı – Kadırga MTAL",
    edu2_year: "2020",
    // GÜNCELLENDİ: Sertifikalar artık obje listesi
    certificates: [
      { name: "Java 101 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/java-101-turkcell.pdf" },
      { name: "Java 201 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/java-201-turkcell.pdf" },
      { name: "Python Programlama 101 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/python-101-turkcell.pdf" },
      { name: "Python Programlama 201 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/python-201-turkcell.pdf" },
      { name: "CSS Eğitimi – BTK Akademi (2025)", file: "/certificates/css-egitim-btk.pdf" },
      { name: "Microsoft Excel Temel Eğitimi – BTK Akademi (2025)", file: "/certificates/excel-temel-btk.pdf" },
      { name: "Algoritma ve Veri Yapılarına Giriş – BTK Akademi (2024)", file: "/certificates/algoritma-veri-btk.pdf" },
      { name: "Bilgi Güvenliğine Giriş – Cisco Networking Academy (2024)", file: "/certificates/bilgi-guvenligi-cisco.pdf" },
      { name: "NDG Linux Essentials – Cisco Networking Academy (2023)", file: "/certificates/linux-essentials-cisco.pdf" },
      { name: "NDG Linux Unhatched – Cisco Networking Academy (2023)", file: "/certificates/linux-unhatched-cisco.pdf" },
    ],
    exp1_title: "Stajyer – Transay Taşımacılık ve Personel Hizmetleri",
    exp1_date: "Ağustos 2025 – Eylül 2025",
    exp2_title: "Resepsiyon Görevlisi – Sultanahmet Center View",
    exp2_date: "Kasım 2023 – Ocak 2025",
    exp3_title: "Organizatör – Kaçkar Turizm",
    exp3_date: "Kasım 2022 – Ekim 2023",
    exp4_title: "Laboratuvar Teknisyeni – Funda Laboratuvarı",
    exp4_date: "Haziran 2018 – Ekim 2019",
    references: [
      {
        name: "Ahmet Murat KIRAN",
        title: "Bilgi Teknolojileri Operasyon Koordinatörü",
        company: "Amerikan Hastanesi",
        phone: "+90 533 522 87 88",
        email: "ahmetkiran@hotmail.com",
      },
      {
        name: "Orhan TURUN",
        title: "Bilgi Teknolojileri Teknik Şefi",
        company: "Küçükçekmece Belediyesi",
        phone: "+90 532 635 34 45",
        email: "orhan.turun@kucukcekmece.bel.tr",
      },
    ],
    footer: "© " + new Date().getFullYear() + " Barış İlhan",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_references: "References",
    location: "Istanbul · Fatih",
    hero_title: "Barış ILHAN",
    hero_role: "Junior Software Developer · Java & Spring Boot",
    hero_desc:
      "I build backend applications with Java, Spring Boot, Python and SQL. You can see my latest public work from GitHub below.",
    contact_btn: "Contact",
    github_btn: "GitHub",
    linkedin_btn: "LinkedIn",
    contact_title: "Contact",
    contact_mail: "Send e-mail",
    contact_phone: "Call",
    card_working: "Currently working on:",
    card_working_desc:
      "Spring Boot + React + TypeScript + Supabase | Developing an ERP (Enterprise Resource Planning) System.",
    card_cv: "Download CV",
    about_title: "About",
    about_text:
      "I am a software developer with a degree in Computer Programming. I focus on developing backend applications using Java and Spring Boot while continuously improving my skills in database design and API integration. Through my education, internship, and personal projects, I have gained experience working both independently and as part of a team in various software development processes. I also have hands-on experience in Python-based data processing and deep learning projects. My goal is to develop scalable and sustainable software solutions that create real value.",
    skills_title: "Skills",
    skills_backend: "Backend",
    skills_python: "Python",
    skills_tools: "Tools",
    skills_backend_desc: "Java, Spring Boot, REST, MySQL, SQL",
    skills_python_desc: "Python, data processing, face recognition",
    skills_tools_desc: "Git, VS Code, Eclipse, Office",
    projects_title: "Projects",
    projects_link: "View all on GitHub →",
    project1_title: "Driver Recognition System",
    project1_desc: "Python and deep-learning based driver/face recognition project.",
    project2_title: "Excel Converter & Alarm Reporting Tool",
    project2_desc:
      "Office tool for uploading data, filtering by time range and exporting Excel reports.",
    github_latest: "Latest projects from GitHub",
    github_none: "No GitHub repositories found.",
    education_title: "Education",
    experience_title: "Experience",
    certificates_title: "Certificates",
    references_title: "References",
    edu1: "Computer Programming – Cappadocia University",
    edu1_year: "2025",
    edu2:
      "Technical Chemistry Laboratory – Kadırga Vocational and Technical Anatolian High School",
    edu2_year: "2020",
    // UPDATED: Certificates structure with files
    certificates: [
      { name: "Java 101 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/java-101-turkcell.pdf" },
      { name: "Java 201 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/java-201-turkcell.pdf" },
      { name: "Python Programming 101 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/python-101-turkcell.pdf" },
      { name: "Python Programming 201 – Turkcell Geleceği Yazanlar (2025)", file: "/certificates/python-201-turkcell.pdf" },
      { name: "CSS Training – BTK Academy (2025)", file: "/certificates/css-egitim-btk.pdf" },
      { name: "Microsoft Excel Basics – BTK Academy (2025)", file: "/certificates/excel-temel-btk.pdf" },
      { name: "Algorithms & Data Structures – BTK Academy (2024)", file: "/certificates/algoritma-veri-btk.pdf" },
      { name: "Introduction to Cybersecurity – Cisco Networking Academy (2024)", file: "/certificates/bilgi-guvenligi-cisco.pdf" },
      { name: "NDG Linux Essentials – Cisco (2023)", file: "/certificates/linux-essentials-cisco.pdf" },
      { name: "NDG Linux Unhatched – Cisco (2023)", file: "/certificates/linux-unhatched-cisco.pdf" },
    ],
    exp1_title: "Intern – Transay Transport & Personnel Services",
    exp1_date: "August 2025 – September 2025",
    exp2_title: "Receptionist – Sultanahmet Center View",
    exp2_date: "November 2023 – January 2025",
    exp3_title: "Organizer – Kaçkar Tourism",
    exp3_date: "November 2022 – October 2023",
    exp4_title: "Lab Technician – Funda Laboratory",
    exp4_date: "June 2018 – October 2019",
    references: [
      {
        name: "Ahmet Murat KIRAN",
        title: "IT Operations Coordinator",
        company: "Amerikan Hospital",
        phone: "+90 533 522 87 88",
        email: "ahmetkiran@hotmail.com",
      },
      {
        name: "Orhan TURUN",
        title: "IT Technical Chief",
        company: "Küçükçekmece Municipality",
        phone: "+90 532 635 34 45",
        email: "orhan.turun@kucukcekmece.bel.tr",
      },
    ],
    footer: "© " + new Date().getFullYear() + " Barış Ilhan",
  },
};

async function getRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`,
    { next: { revalidate: 60 } } as any
  );
  if (!res.ok) return [];
  return res.json();
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [contactOpen, setContactOpen] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const savedLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;

    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedLang === "tr" || savedLang === "en") setLang(savedLang);

    getRepos().then((data) => setRepos(Array.isArray(data) ? data : []));
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
  };

  const toggleLang = () => {
    const next = lang === "tr" ? "en" : "tr";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  const isDark = theme === "dark";
  const t = TEXTS[lang];

  return (
    <main
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-white text-slate-900"
      }
    >
      {/* NAVBAR */}
      <nav
        className={
          isDark
            ? "sticky top-0 z-30 bg-slate-950/70 backdrop-blur border-b border-slate-800"
            : "sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200"
        }
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* üst satır: isim + mobil butonlar */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold">Barış İlhan</p>
              <p
                className={
                  isDark ? "text-xs text-slate-400" : "text-xs text-slate-500"
                }
              >
                {t.hero_role}
              </p>
            </div>
            {/* mobil butonlar */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleLang}
                className={
                  isDark
                    ? "px-3 py-1 text-xs border border-slate-600 rounded-md"
                    : "px-3 py-1 text-xs border border-slate-300 rounded-md"
                }
              >
                {lang === "tr" ? "EN" : "TR"}
              </button>
              <button
                onClick={toggleTheme}
                className={
                  isDark
                    ? "h-9 w-9 rounded-full border border-slate-600 flex items-center justify-center"
                    : "h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center"
                }
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>
          </div>

          {/* menü - mobilde de tam genişlik */}
          <div
            className={
              isDark
                ? "flex flex-wrap gap-3 text-sm text-slate-200"
                : "flex flex-wrap gap-3 text-sm text-slate-700"
            }
          >
            <a href="#about" className="hover:text-sky-400">
              {t.nav_about}
            </a>
            <a href="#skills" className="hover:text-sky-400">
              {t.nav_skills}
            </a>
            <a href="#projects" className="hover:text-sky-400">
              {t.nav_projects}
            </a>
            <a href="#education" className="hover:text-sky-400">
              {t.nav_education}
            </a>
            <a href="#references" className="hover:text-sky-400">
              {t.nav_references}
            </a>
          </div>

          {/* masaüstü butonları */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={
                isDark
                  ? "px-3 py-1 text-xs border border-slate-600 rounded-md"
                  : "px-3 py-1 text-xs border border-slate-300 rounded-md"
              }
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>
            <button
              onClick={toggleTheme}
              className={
                isDark
                  ? "h-9 w-9 rounded-full border border-slate-600 flex items-center justify-center"
                  : "h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center"
              }
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="flex-1">
          <p
            className={
              isDark
                ? "inline-block px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm mb-4"
                : "inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm mb-4"
            }
          >
            {t.location}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {t.hero_title}
          </h1>
          <p
            className={
              isDark
                ? "text-lg text-slate-300 mb-4"
                : "text-lg text-slate-700 mb-4"
            }
          >
            {t.hero_role}
          </p>
          <p
            className={
              isDark
                ? "text-slate-400 max-w-2xl mb-6"
                : "text-slate-600 max-w-2xl mb-6"
            }
          >
            {t.hero_desc}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setContactOpen((p) => !p)}
              className="bg-sky-500 text-slate-950 px-5 py-2 rounded-md font-semibold"
            >
              {t.contact_btn}
            </button>
            <a
              href="https://github.com/barslhn"
              target="_blank"
              className={
                isDark
                  ? "border border-slate-600 px-5 py-2 rounded-md font-semibold text-slate-100"
                  : "border border-slate-300 px-5 py-2 rounded-md font-semibold text-slate-900"
              }
            >
              {t.github_btn}
            </a>
            <a
              href="https://www.linkedin.com/in/baris-ilhan"
              target="_blank"
              className={
                isDark
                  ? "px-5 py-2 rounded-md font-semibold bg-slate-900/40 border border-slate-700"
                  : "px-5 py-2 rounded-md font-semibold bg-slate-200 border border-slate-200 text-slate-900"
              }
            >
              {t.linkedin_btn}
            </a>
          </div>
          {contactOpen && (
            <div
              className={
                isDark
                  ? "mt-4 bg-slate-900/70 border border-slate-700 rounded-lg p-4 w-full md:w-80"
                  : "mt-4 bg-slate-100 border border-slate-200 rounded-lg p-4 w-full md:w-80"
              }
            >
              <p className={isDark ? "text-sm mb-2" : "text-sm mb-2 text-slate-900"}>
                {t.contact_title}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:barslhn@gmail.com"
                  className="bg-sky-500/90 text-slate-950 px-3 py-2 rounded-md text-sm font-semibold"
                >
                  {t.contact_mail}
                </a>
                <a
                  href="tel:+905315622362"
                  className={
                    isDark
                      ? "bg-slate-800 text-slate-100 px-3 py-2 rounded-md text-sm font-semibold"
                      : "bg-slate-200 text-slate-900 px-3 py-2 rounded-md text-sm font-semibold"
                  }
                >
                  {t.contact_phone}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Sağ kart */}
        <div
          className={
            isDark
              ? "w-full md:w-72 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 text-sm flex flex-col items-center gap-4"
              : "w-full md:w-72 bg-white border border-slate-200 rounded-2xl p-5 text-sm flex flex-col items-center gap-4"
          }
        >
          <div className="h-28 w-28 rounded-full overflow-hidden bg-slate-200 relative">
            <Image
              src="/baris.jpg"
              alt="Barış İlhan"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div className="text-center">
            <p className={isDark ? "font-semibold" : "font-semibold text-slate-900"}>
              Barış İlhan
            </p>
            <p
              className={
                isDark ? "text-xs text-slate-400" : "text-xs text-slate-500"
              }
            >
              {t.hero_role}
            </p>
          </div>
          <div className="w-full">
            <p className="text-sm mb-1 font-semibold">{t.card_working}</p>
            <p
              className={
                isDark ? "text-slate-400 text-sm" : "text-slate-600 text-sm"
              }
            >
              {t.card_working_desc}
            </p>
          </div>
          <a
            href={
              lang === "tr"
                ? "/cv/baris-ilhan-cv-tr.pdf"
                : "/cv/baris-ilhan-cv-en.pdf"
            }
            download
            className="w-full text-center bg-sky-500 text-slate-950 py-2 rounded-md text-sm font-semibold"
          >
            {t.card_cv}
          </a>
        </div>
      </header>

      {/* HAKKIMDA */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-3">{t.about_title}</h2>
        <p
          className={
            isDark
              ? "text-slate-300 leading-relaxed"
              : "text-slate-700 leading-relaxed"
          }
        >
          {t.about_text}
        </p>
      </section>

      {/* YETENEKLER */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4">{t.skills_title}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div
            className={
              isDark
                ? "bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                : "bg-white border border-slate-200 rounded-lg p-4"
            }
          >
            <h3 className="font-semibold mb-2">{t.skills_backend}</h3>
            <p
              className={
                isDark ? "text-slate-400 text-sm" : "text-slate-700 text-sm"
              }
            >
              {t.skills_backend_desc}
            </p>
          </div>
          <div
            className={
              isDark
                ? "bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                : "bg-white border border-slate-200 rounded-lg p-4"
            }
          >
            <h3 className="font-semibold mb-2">{t.skills_python}</h3>
            <p
              className={
                isDark ? "text-slate-400 text-sm" : "text-slate-700 text-sm"
              }
            >
              {t.skills_python_desc}
            </p>
          </div>
          <div
            className={
              isDark
                ? "bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                : "bg-white border border-slate-200 rounded-lg p-4"
            }
          >
            <h3 className="font-semibold mb-2">{t.skills_tools}</h3>
            <p
              className={
                isDark ? "text-slate-400 text-sm" : "text-slate-700 text-sm"
              }
            >
              {t.skills_tools_desc}
            </p>
          </div>
        </div>
      </section>

      {/* PROJELER */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8 scroll-mt-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">{t.projects_title}</h2>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            className="text-sky-400 text-sm"
          >
            {t.projects_link}
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div
            className={
              isDark
                ? "bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                : "bg-white border border-slate-200 rounded-lg p-4"
            }
          >
            <h3 className="font-semibold mb-1">{t.project1_title}</h3>
            <p
              className={
                isDark
                  ? "text-slate-400 text-sm mb-2"
                  : "text-slate-700 text-sm mb-2"
              }
            >
              {t.project1_desc}
            </p>
            <p className="text-xs text-slate-500">Python · FaceNet · MTCNN</p>
          </div>
          <div
            className={
              isDark
                ? "bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                : "bg-white border border-slate-200 rounded-lg p-4"
            }
          >
            <h3 className="font-semibold mb-1">{t.project2_title}</h3>
            <p
              className={
                isDark
                  ? "text-slate-400 text-sm mb-2"
                  : "text-slate-700 text-sm mb-2"
              }
            >
              {t.project2_desc}
            </p>
            <p className="text-xs text-slate-500">
              Python · {lang === "tr" ? "veri işleme" : "data processing"}
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3">{t.github_latest}</h3>
        {repos.length === 0 ? (
          <p className={isDark ? "text-slate-400" : "text-slate-600"}>
            {t.github_none}
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {repos.slice(0, 6).map((repo) => (
              <div
                key={(repo as any).id}
                className={
                  isDark
                    ? "bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                    : "bg-white border border-slate-200 rounded-lg p-4"
                }
              >
                <h4 className="font-semibold">{(repo as any).name}</h4>
                <p
                  className={
                    isDark
                      ? "text-slate-400 text-sm mb-2"
                      : "text-slate-700 text-sm mb-2"
                  }
                >
                  {(repo as any).description ||
                    (lang === "tr" ? "Açıklama yok." : "No description.")}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  {lang === "tr" ? "Güncelleme: " : "Updated: "}
                  {new Date((repo as any).updated_at).toLocaleDateString(
                    lang === "tr" ? "tr-TR" : "en-US"
                  )}
                </p>
                <a
                  href={(repo as any).html_url}
                  target="_blank"
                  className="text-sm bg-sky-500 text-slate-950 px-3 py-1 rounded-md inline-block"
                >
                  {lang === "tr" ? "GitHub’da Aç" : "Open on GitHub"}
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* EĞİTİM & DENEYİM */}
      <section
        id="education"
        className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 scroll-mt-24"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.education_title}</h2>
          <ul
            className={
              isDark ? "space-y-3 text-slate-200" : "space-y-3 text-slate-700"
            }
          >
            <li>
              <p className="font-semibold">{t.edu1}</p>
              <p className="text-sm text-slate-500">{t.edu1_year}</p>
            </li>
            <li>
              <p className="font-semibold">{t.edu2}</p>
              <p className="text-sm text-slate-500">{t.edu2_year}</p>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">
            {t.certificates_title}
          </h3>
          {/* GÜNCELLENEN SERTİFİKA LİSTESİ */}
          <ul
            className={
              isDark
                ? "space-y-2 text-slate-300 text-sm"
                : "space-y-2 text-slate-700 text-sm"
            }
          >
            {t.certificates.map((cert: any, idx: number) => (
              <li key={idx} className="flex items-center justify-between group">
                <span>{cert.name}</span>
                <a
                  href={cert.file}
                  download
                  className={
                    isDark
                      ? "ml-2 p-1 text-slate-400 hover:text-sky-400 transition-colors"
                      : "ml-2 p-1 text-slate-500 hover:text-sky-600 transition-colors"
                  }
                  title={lang === "tr" ? "İndir" : "Download"}
                >
                  <DownloadIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.experience_title}</h2>
          <ul
            className={
              isDark ? "space-y-4 text-slate-200" : "space-y-4 text-slate-700"
            }
          >
            <li>
              <p className="font-semibold">{t.exp1_title}</p>
              <p className="text-sm text-slate-500 pointer-events-none select-text">
                {t.exp1_date}
              </p>
            </li>
            <li>
              <p className="font-semibold">{t.exp2_title}</p>
              <p className="text-sm text-slate-500 pointer-events-none select-text">
                {t.exp2_date}
              </p>
            </li>
            <li>
              <p className="font-semibold">{t.exp3_title}</p>
              <p className="text-sm text-slate-500 pointer-events-none select-text">
                {t.exp3_date}
              </p>
            </li>
            <li>
              <p className="font-semibold">{t.exp4_title}</p>
              <p className="text-sm text-slate-500 pointer-events-none select-text">
                {t.exp4_date}
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* REFERANSLAR */}
      <section id="references" className="max-w-6xl mx-auto px-4 py-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4">{t.references_title}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {t.references.map((ref, idx) => (
            <div
              key={idx}
              className={
                isDark
                  ? "bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                  : "bg-white border border-slate-200 rounded-lg p-4"
              }
            >
              <h3 className="font-semibold text-lg mb-1">{ref.name}</h3>
              <p
                className={
                  isDark
                    ? "text-sky-400 text-sm mb-1"
                    : "text-sky-700 text-sm mb-1"
                }
              >
                {ref.title}
              </p>
              <p
                className={
                  isDark
                    ? "text-slate-300 text-sm mb-3"
                    : "text-slate-700 text-sm mb-3"
                }
              >
                {ref.company}
              </p>
              <div className="flex flex-col gap-1 text-sm">
                <a
                  href={`tel:${ref.phone.replace(/\s/g, "")}`}
                  className={
                    isDark
                      ? "text-slate-400 hover:text-sky-400"
                      : "text-slate-600 hover:text-sky-700"
                  }
                >
                  📞 {ref.phone}
                </a>
                <a
                  href={`mailto:${ref.email}`}
                  className={
                    isDark
                      ? "text-slate-400 hover:text-sky-400"
                      : "text-slate-600 hover:text-sky-700"
                  }
                >
                  📧 {ref.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-slate-500">
        {t.footer}
      </footer>
    </main>
  );
}