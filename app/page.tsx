"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "barslhn";

const TEXTS = {
  tr: {
    nav_about: "Hakkımda",
    nav_skills: "Yetenekler",
    nav_projects: "Projeler",
    nav_education: "Eğitim",
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
    card_working_desc: "Spring Boot + MySQL | Öğrenci Yönetim Sistemi.",
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
    edu1: "Bilgisayar Programcılığı – Kapadokya Üniversitesi",
    edu1_year: "2025",
    edu2: "Teknik Kimya Laboratuvarı – Kadırga MTAL",
    edu2_year: "2020",
    certificates: [
      "Java 101 – Turkcell Geleceği Yazanlar (2025)",
      "Java 201 – Turkcell Geleceği Yazanlar (2025)",
      "Python Programlama 101 – Turkcell Geleceği Yazanlar (2025)",
      "Python Programlama 201 – Turkcell Geleceği Yazanlar (2025)",
      "CSS Eğitimi – BTK Akademi (2025)",
      "Microsoft Excel Temel Eğitimi – BTK Akademi (2025)",
      "Algoritma ve Veri Yapılarına Giriş – BTK Akademi (2024)",
      "Bilgi Güvenliğine Giriş – Cisco Networking Academy (2024)",
      "NDG Linux Essentials – Cisco Networking Academy (2023)",
      "NDG Linux Unhatched – Cisco Networking Academy (2023)",
    ],
    exp1_title: "Stajyer – Transay Taşımacılık ve Personel Hizmetleri",
    exp1_date: "2025-08 – 2025-09",
    exp1_desc: "Java, Python ve veri tabanı çalışmaları.",
    exp2_title: "Resepsiyon Görevlisi – Sultanahmet Center View",
    exp2_date: "2023-11 – 2025-01",
    exp3_title: "Organizatör – Kaçkar Turizm",
    exp3_date: "2022-11 – 2023-10",
    exp4_title: "Laboratuvar Teknisyeni – Funda Laboratuvarı",
    exp4_date: "2018-06 – 2019-10",
    footer: "© " + new Date().getFullYear() + " Barış İlhan",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
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
    card_working_desc: "Student Management System with Spring Boot & MySQL.",
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
    project2_desc: "Office tool for uploading data, filtering by time range and exporting Excel reports.",
    github_latest: "Latest projects from GitHub",
    github_none: "No GitHub repositories found.",
    education_title: "Education",
    experience_title: "Experience",
    certificates_title: "Certificates",
    edu1: "Computer Programming – Cappadocia University",
    edu1_year: "2025",
    edu2: "Technical Chemistry Laboratory – Kadırga Vocational and Technical Anatolian High School",
    edu2_year: "2020",
    certificates: [
      "Java 101 – Turkcell Geleceği Yazanlar (2025)",
      "Java 201 – Turkcell Geleceği Yazanlar (2025)",
      "Python Programming 101 – Turkcell Geleceği Yazanlar (2025)",
      "Python Programming 201 – Turkcell Geleceği Yazanlar (2025)",
      "CSS Training – BTK Academy (2025)",
      "Microsoft Excel Basics – BTK Academy (2025)",
      "Algorithms & Data Structures – BTK Academy (2024)",
      "Introduction to Cybersecurity – Cisco Networking Academy (2024)",
      "NDG Linux Essentials – Cisco (2023)",
      "NDG Linux Unhatched – Cisco (2023)",
    ],
    exp1_title: "Intern – Transay Transport & Personnel Services",
    exp1_date: "2025-08 – 2025-09",
    exp1_desc: "Worked on Java/Python tasks and basic database operations.",
    exp2_title: "Receptionist – Sultanahmet Center View",
    exp2_date: "2023-11 – 2025-01",
    exp3_title: "Organizer – Kaçkar Tourism",
    exp3_date: "2022-11 – 2023-10",
    exp4_title: "Lab Technician – Funda Laboratory",
    exp4_date: "2018-06 – 2019-10",
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
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const savedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;

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
    <main className={isDark ? "min-h-screen bg-slate-950 text-slate-100" : "min-h-screen bg-white text-slate-900"}>
      {/* NAVBAR */}
      <nav
        className={
          isDark
            ? "sticky top-0 z-30 bg-slate-950/70 backdrop-blur border-b border-slate-800"
            : "sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200"
        }
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold">Barış İlhan</p>
            <p className={isDark ? "text-xs text-slate-400" : "text-xs text-slate-500"}>{t.hero_role}</p>
          </div>

          {/* mobil website de görünsün */}
          <div
            className={
              isDark
                ? "flex gap-5 text-sm text-slate-200 overflow-x-auto md:overflow-visible"
                : "flex gap-5 text-sm text-slate-700 overflow-x-auto md:overflow-visible"
            }
          >
            <a href="#about" className="hover:text-sky-400 whitespace-nowrap">
              {t.nav_about}
            </a>
            <a href="#skills" className="hover:text-sky-400 whitespace-nowrap">
              {t.nav_skills}
            </a>
            <a href="#projects" className="hover:text-sky-400 whitespace-nowrap">
              {t.nav_projects}
            </a>
            <a href="#education" className="hover:text-sky-400 whitespace-nowrap">
              {t.nav_education}
            </a>
          </div>

          <div className="flex items-center gap-2">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t.hero_title}</h1>
          <p className={isDark ? "text-lg text-slate-300 mb-4" : "text-lg text-slate-700 mb-4"}>{t.hero_role}</p>
          <p className={isDark ? "text-slate-400 max-w-2xl mb-6" : "text-slate-600 max-w-2xl mb-6"}>
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
              <p className={isDark ? "text-sm mb-2" : "text-sm mb-2 text-slate-900"}>{t.contact_title}</p>
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
            <Image src="/baris.jpg" alt="Barış İlhan" fill className="object-cover" sizes="112px" />
          </div>
          <div className="text-center">
            <p className={isDark ? "font-semibold" : "font-semibold text-slate-900"}>Barış İlhan</p>
            <p className={isDark ? "text-xs text-slate-400" : "text-xs text-slate-500"}>Backend / Spring Boot</p>
          </div>
          <div className="w-full">
            <p className="text-sm mb-1 font-semibold">{t.card_working}</p>
            <p className={isDark ? "text-slate-400 text-sm" : "text-slate-600 text-sm"}>
              {t.card_working_desc}
            </p>
          </div>
          <a
            href={lang === "tr" ? "/cv/baris-ilhan-cv-tr.pdf" : "/cv/baris-ilhan-cv-en.pdf"}
            download
            className="w-full text-center bg-sky-500 text-slate-950 py-2 rounded-md text-sm font-semibold"
          >
            {t.card_cv}
          </a>
        </div>
      </header>

      {/* HAKKIMDA */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-3">{t.about_title}</h2>
        <p className={isDark ? "text-slate-300 leading-relaxed" : "text-slate-700 leading-relaxed"}>
          {t.about_text}
        </p>
      </section>

      {/* YETENEKLER */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
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
            <p className={isDark ? "text-slate-400 text-sm" : "text-slate-700 text-sm"}>
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
            <p className={isDark ? "text-slate-400 text-sm" : "text-slate-700 text-sm"}>
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
            <p className={isDark ? "text-slate-400 text-sm" : "text-slate-700 text-sm"}>
              {t.skills_tools_desc}
            </p>
          </div>
        </div>
      </section>

      {/* PROJELER */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
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
            <p className={isDark ? "text-slate-400 text-sm mb-2" : "text-slate-700 text-sm mb-2"}>
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
            <p className={isDark ? "text-slate-400 text-sm mb-2" : "text-slate-700 text-sm mb-2"}>
              {t.project2_desc}
            </p>
            <p className="text-xs text-slate-500">
              Python · {lang === "tr" ? "veri işleme" : "data processing"}
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3">{t.github_latest}</h3>
        {repos.length === 0 ? (
          <p className={isDark ? "text-slate-400" : "text-slate-600"}>{t.github_none}</p>
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
                <p className={isDark ? "text-slate-400 text-sm mb-2" : "text-slate-700 text-sm mb-2"}>
                  {(repo as any).description || (lang === "tr" ? "Açıklama yok." : "No description.")}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  {lang === "tr" ? "Güncelleme: " : "Updated: "}
                  {new Date((repo as any).updated_at).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US")}
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
      <section id="education" className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.education_title}</h2>
          <ul className={isDark ? "space-y-3 text-slate-200" : "space-y-3 text-slate-700"}>
            <li>
              <p className="font-semibold">{t.edu1}</p>
              <p className="text-sm text-slate-500">{t.edu1_year}</p>
            </li>
            <li>
              <p className="font-semibold">{t.edu2}</p>
              <p className="text-sm text-slate-500">{t.edu2_year}</p>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">{t.certificates_title}</h3>
          <ul className={isDark ? "space-y-2 text-slate-300 text-sm" : "space-y-2 text-slate-700 text-sm"}>
            {t.certificates.map((cert: string, idx: number) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">{t.experience_title}</h2>
          <ul className={isDark ? "space-y-4 text-slate-200" : "space-y-4 text-slate-700"}>
            <li>
              <p className="font-semibold">{t.exp1_title}</p>
              {/* telefon araması gibi tıklanmasın */}
              <p className="text-sm text-slate-500 pointer-events-none select-text">{t.exp1_date}</p>
              <p className="text-sm">{t.exp1_desc}</p>
            </li>
            <li>
              <p className="font-semibold">{t.exp2_title}</p>
              <p className="text-sm text-slate-500 pointer-events-none select-text">{t.exp2_date}</p>
            </li>
            <li>
              <p className="font-semibold">{t.exp3_title}</p>
              <p className="text-sm text-slate-500 pointer-events-none select-text">{t.exp3_date}</p>
            </li>
            <li>
              <p className="font-semibold">{t.exp4_title}</p>
              <p className="text-sm text-slate-500 pointer-events-none select-text">{t.exp4_date}</p>
            </li>
          </ul>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-slate-500">{t.footer}</footer>
    </main>
  );
}
