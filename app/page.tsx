"use client";

import Image from "next/image";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import {
  CERTIFICATES,
  EDUCATION,
  EXPERIENCES,
  GITHUB_USERNAME,
  NAV_IDS,
  PROFILE,
  REFERENCES,
  SKILL_GROUPS,
  TEXT,
  pick,
  type Locale,
  type Repo,
  type Theme,
} from "./portfolio-content";
import {
  ArrowUpRightIcon,
  Badge,
  BulletList,
  Card,
  CardHeader,
  DownloadIcon,
  Eyebrow,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  PageShell,
  PhoneIcon,
  PrimaryButton,
  SectionHeader,
  SectionShell,
  SecondaryButton,
  StarIcon,
  SunIcon,
  cn,
} from "./portfolio-ui";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const datasetTheme = document.documentElement.dataset.theme;

  if (datasetTheme === "light" || datasetTheme === "dark") {
    return datasetTheme;
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "tr";
  }

  return window.localStorage.getItem("lang") === "en" ? "en" : "tr";
}

async function fetchRepos(signal: AbortSignal) {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`, {
    signal,
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error("GitHub request failed");
  }

  return (await response.json()) as Repo[];
}

function shouldShowLiveDemo(repo: Repo) {
  if (!repo.homepage) {
    return false;
  }

  const normalizedName = repo.name.toLowerCase();

  if (normalizedName === "portfolio-portfy" || normalizedName.includes("portfolio")) {
    return false;
  }

  if (typeof window !== "undefined") {
    try {
      const currentHost = window.location.hostname.replace(/^www\./, "");
      const homepageHost = new URL(repo.homepage).hostname.replace(/^www\./, "");

      if (currentHost === homepageHost) {
        return false;
      }
    } catch {
      return true;
    }
  }

  return true;
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [lang, setLang] = useState<Locale>(() => getInitialLocale());
  const [repos, setRepos] = useState<Repo[]>([]);
  const [repoStatus, setRepoStatus] = useState<"loading" | "ready" | "error">("loading");
  const [activeSection, setActiveSection] = useState<string>("about");
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);
  const [heroGreetingIndex, setHeroGreetingIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    contact: "",
    reason: "",
  });
  const [themeReady, setThemeReady] = useState(false);
  const [infoCardLabel, setInfoCardLabel] = useState("Bilgi Kartı");
  const highlightTimeoutRef = useRef<number | null>(null);
  const previousActiveSectionRef = useRef<string>("about");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setThemeReady(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const controller = new AbortController();

    const loadRepos = async () => {
      try {
        setRepoStatus("loading");
        const data = await fetchRepos(controller.signal);
        setRepos(data.filter((repo) => !repo.fork && !repo.archived).slice(0, 4));
        setRepoStatus("ready");
      } catch {
        if (!controller.signal.aborted) {
          setRepoStatus("error");
          setRepos([]);
        }
      }
    };

    void loadRepos();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const sectionIds = [...NAV_IDS];

    const updateActiveSection = () => {
      const viewportProbe = Math.min(window.innerHeight * 0.42, 320);
      let currentSection = sectionIds[0];
      const visibleSections: Array<(typeof NAV_IDS)[number]> = [];

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= viewportProbe && rect.bottom >= viewportProbe) {
          currentSection = id;
        }

        if (rect.bottom > 120 && rect.top < window.innerHeight - 48) {
          visibleSections.push(id);
        }
      }

      const lastVisibleSection = visibleSections[visibleSections.length - 1];
      const nearPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;

      if (lastVisibleSection === "references" || lastVisibleSection === "contact") {
        currentSection = lastVisibleSection;
      }

      if (nearPageBottom && visibleSections.length > 0) {
        currentSection = visibleSections[visibleSections.length - 1];
      }

      setActiveSection((previous) => (previous === currentSection ? previous : currentSection));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  const t = TEXT[lang];
  const currentYear = new Date().getFullYear();
  const currentCvFile = lang === "tr" ? PROFILE.cv.tr : PROFILE.cv.en;
  const heroGreetings = lang === "tr" ? ["Merhaba...", "Hos geldin...", "Portfoyume goz at..."] : ["Hello...", "Welcome...", "Take a look around..."];
  const infoCardPhrase = lang === "tr" ? "Bilgi Kartı" : "Info Card";
  const repoDateFormatter = new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const isContactFormReady = Object.values(contactForm).every((value) => value.trim().length > 0);

  const triggerSectionHighlight = (id: string) => {
    setHighlightedSection(id);

    if (highlightTimeoutRef.current) {
      window.clearTimeout(highlightTimeoutRef.current);
    }

    highlightTimeoutRef.current = window.setTimeout(() => {
      setHighlightedSection((current) => (current === id ? null : current));
    }, 1800);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroGreetingIndex((current) => (current + 1) % heroGreetings.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [heroGreetings.length, lang]);

  useEffect(() => {
    let currentIndex = infoCardPhrase.length;
    let deleting = true;
    const initialTimeout = window.setTimeout(() => {
      setInfoCardLabel(infoCardPhrase);
    }, 0);

    const interval = window.setInterval(() => {
      if (deleting) {
        currentIndex = Math.max(0, currentIndex - 1);
        setInfoCardLabel(infoCardPhrase.slice(0, currentIndex));

        if (currentIndex === 0) {
          deleting = false;
        }
      } else {
        currentIndex = Math.min(infoCardPhrase.length, currentIndex + 1);
        setInfoCardLabel(infoCardPhrase.slice(0, currentIndex));

        if (currentIndex === infoCardPhrase.length) {
          deleting = true;
        }
      }
    }, 150);

    return () => {
      window.clearTimeout(initialTimeout);
      window.clearInterval(interval);
    };
  }, [infoCardPhrase]);

  useEffect(() => {
    if (previousActiveSectionRef.current !== activeSection) {
      previousActiveSectionRef.current = activeSection;
      const timeout = window.setTimeout(() => {
        triggerSectionHighlight(activeSection);
      }, 0);

      return () => window.clearTimeout(timeout);
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - 92;
    setActiveSection(id);
    triggerSectionHighlight(id);

    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const sectionHighlightClass = (id: string) => (highlightedSection === id ? "section-shell--focused" : undefined);
  const infoCardLabelParts = infoCardLabel.split(" ");
  const infoCardLabelTop = infoCardLabelParts[0] ?? "";
  const infoCardLabelBottom = infoCardLabelParts.slice(1).join(" ");
  const updateContactField =
    (field: keyof typeof contactForm) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setContactForm((current) => ({ ...current, [field]: value }));
    };

  const buildContactMessage = () => {
    const intro = lang === "tr" ? "Portfoy iletişim formundan yeni mesaj:" : "New message from the portfolio contact form:";
    const labels =
      lang === "tr"
        ? {
            name: "Ad Soyad",
            contact: "Iletisim",
            reason: "Iletisim Sebebi",
          }
        : {
            name: "Full Name",
            contact: "Contact",
            reason: "Reason",
          };

    return [
      intro,
      "",
      `${labels.name}: ${contactForm.name}`,
      `${labels.contact}: ${contactForm.contact}`,
      `${labels.reason}: ${contactForm.reason}`,
    ].join("\n");
  };

  const openMailDraft = () => {
    if (!isContactFormReady) {
      return;
    }

    const subject = encodeURIComponent(lang === "tr" ? "Portfoy Uzerinden Iletisim" : "Portfolio Contact Request");
    const body = encodeURIComponent(buildContactMessage());
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const openWhatsAppDraft = () => {
    if (!isContactFormReady) {
      return;
    }

    const message = encodeURIComponent(buildContactMessage());
    const phone = PROFILE.phoneHref.replace(/\D/g, "");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <PageShell className="space-y-5 sm:space-y-6 lg:space-y-7">
      <SectionShell as="header" id="about" tone="hero" className={cn("gap-6", sectionHighlightClass("about"))}>
        <div className="flex justify-end">
          <div className="flex items-center gap-2 self-start">
            <button
              type="button"
              onClick={() => setLang((current) => (current === "tr" ? "en" : "tr"))}
              className="ui-button ui-button--secondary ui-button--inline"
              aria-label={lang === "tr" ? "Switch to English" : "Switch to Turkish"}
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="ui-button ui-button--secondary ui-button--inline theme-toggle"
              aria-label={lang === "tr" ? "Temayi degistir" : "Toggle theme"}
            >
              <span className="theme-toggle__icon">{themeReady ? theme === "dark" ? <SunIcon /> : <MoonIcon /> : <MoonIcon />}</span>
              <span suppressHydrationWarning>{themeReady ? theme === "dark" ? "Light" : "Dark" : "Theme"}</span>
            </button>
          </div>
        </div>

        <div className="hero-layout">
          <section className="hero-copy">
            <p key={`${lang}-${heroGreetingIndex}`} className="hero-greeting">
              {heroGreetings[heroGreetingIndex]}
            </p>
            <h1 className="hero-heading-strong">Software Developer · Full Stack</h1>
            <p className="hero-summary">{t.heroSummary}</p>

            <div className="hero-actions">
              <PrimaryButton href={PROFILE.github} target="_blank" rel="noreferrer" icon={<GithubIcon />}>
                {t.primaryCta}
              </PrimaryButton>
              <SecondaryButton href={PROFILE.linkedin} target="_blank" rel="noreferrer" icon={<LinkedinIcon />}>
                {t.secondaryCta}
              </SecondaryButton>
              <SecondaryButton href={currentCvFile} download icon={<DownloadIcon />}>
                {t.cvCta}
              </SecondaryButton>
            </div>
          </section>

          <Card as="aside" className="hero-info-card">
            <div className="hero-info-card__head">
              <div className="hero-card-kicker hero-card-kicker--stack">
                <span>
                  {infoCardLabelTop}
                  {!infoCardLabelBottom ? <span className="hero-card-kicker__cursor" aria-hidden="true" /> : null}
                </span>
                {infoCardLabelBottom ? (
                  <span>
                    {infoCardLabelBottom}
                    <span className="hero-card-kicker__cursor" aria-hidden="true" />
                  </span>
                ) : null}
              </div>
              <div className="hero-portrait hero-portrait--compact">
                <Image src="/baris.jpg" alt={PROFILE.name} fill className="object-cover" sizes="(max-width: 1024px) 144px, 168px" />
              </div>
            </div>

            <div className="hero-info-list">
              <div className="hero-info-item hero-info-item--intro">
                <p className="hero-info-card__name">{PROFILE.name}</p>
              </div>

              <div className="hero-info-item">
                <p className="hero-info-item__label">{t.educationTitle}</p>
                <div className="hero-info-item__stack">
                  {EDUCATION.map((item) => (
                    <div key={`${item.school.tr}-${item.date}`} className="hero-education-item">
                      <p className="hero-education-item__title">{pick(item.title, lang)}</p>
                      <p className="hero-education-item__meta">
                        {pick(item.school, lang)} · {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-info-item">
                <p className="hero-info-item__label">{t.languageTitle}</p>
                <p className="hero-info-item__value">
                  {t.languageName} · {t.languageLevel}
                </p>
              </div>

              <div className="hero-info-item">
                <p className="hero-info-item__label">{lang === "tr" ? "Konum" : "Location"}</p>
                <p className="hero-info-item__value">{pick(PROFILE.location, lang)}</p>
              </div>
            </div>
          </Card>
        </div>
      </SectionShell>

      <div className="sticky-nav-shell">
        <nav className="sticky-nav">
          {NAV_IDS.map((id, index) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className={cn(
                "top-nav__link",
                activeSection === id && "top-nav__link--active",
                highlightedSection === id && "top-nav__link--flash",
              )}
            >
              {t.nav[index]}
            </button>
          ))}
        </nav>
      </div>

      <SectionShell id="experience" tone="emphasis" className={sectionHighlightClass("experience")}>
        <Eyebrow>{t.experienceTitle}</Eyebrow>

        <div className="space-y-4">
          <Card tone="accent" className="p-6 sm:p-8">
            <CardHeader
              eyebrow={EXPERIENCES[0].period}
              title={pick(EXPERIENCES[0].role, lang)}
              subtitle={pick(EXPERIENCES[0].company, lang)}
              titleClassName="text-3xl sm:text-4xl"
            />
            <BulletList items={EXPERIENCES[0].bullets[lang]} split />
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            {EXPERIENCES.slice(1).map((job) => (
              <Card key={`${job.company.tr}-${job.period}`} className="h-full">
                <CardHeader
                  eyebrow={job.period}
                  title={pick(job.role, lang)}
                  subtitle={pick(job.company, lang)}
                  titleClassName="text-2xl"
                />
                <BulletList items={job.bullets[lang].slice(0, 2)} />
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="skills" className={sectionHighlightClass("skills")}>
        <Eyebrow>{t.skillsTitle}</Eyebrow>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <article key={group.title.tr} className="skill-group">
              <h3 className="skill-group__title">{pick(group.title, lang)}</h3>
              <p className="skill-group__items">{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="certificates" tone="subtle" className={sectionHighlightClass("certificates")}>
        <Eyebrow>{t.certificatesTitle}</Eyebrow>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {CERTIFICATES.map((certificate) => (
            <Card key={`${certificate.title.tr}-${certificate.date}`} className="h-full">
              <CardHeader
                eyebrow={certificate.date}
                title={pick(certificate.title, lang)}
                subtitle={pick(certificate.issuer, lang)}
                action={
                  <SecondaryButton
                    href={certificate.file}
                    download
                    icon={<DownloadIcon />}
                    className="ui-button--inline px-3 py-3"
                  >
                    {t.certificateAction}
                  </SecondaryButton>
                }
                titleClassName="text-lg"
              />
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="projects" className={sectionHighlightClass("projects")}>
        <SectionHeader
          eyebrow={t.projectsTitle}
          action={
            <SecondaryButton
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              icon={<ArrowUpRightIcon />}
              className="ui-button--inline"
            >
              {t.projectsAll}
            </SecondaryButton>
          }
        />

        <div>
          {repoStatus === "loading" && (
            <Card>
              <p className="card-copy">{t.projectsLoading}</p>
            </Card>
          )}

          {repoStatus === "error" && (
            <Card>
              <p className="card-copy">{t.projectsError}</p>
            </Card>
          )}

          {repoStatus === "ready" && repos.length === 0 && (
            <Card>
              <p className="card-copy">{t.projectsEmpty}</p>
            </Card>
          )}

          {repoStatus === "ready" && repos.length > 0 && (
            <div className="grid gap-4 lg:grid-cols-2">
              {repos.map((repo, index) => {
                const showLiveDemo = shouldShowLiveDemo(repo);

                return (
                  <Card key={repo.id} tone={index === 0 ? "accent" : "default"} variant="product" className="project-card">
                    <div className="project-card__meta">
                      <Badge>{repo.language ?? "Code"}</Badge>
                      <span className="project-card__stat">
                        <StarIcon />
                        {repo.stargazers_count}
                      </span>
                    </div>

                    <CardHeader title={repo.name} titleClassName="text-[1.6rem]" />
                    <p className="card-copy">{repo.description || t.noDescription}</p>

                    <div className="project-card__footer">
                      <p className="section-kicker">
                        {t.projectsUpdated} {repoDateFormatter.format(new Date(repo.updated_at))}
                      </p>

                      <div className="project-card__actions">
                        <PrimaryButton href={repo.html_url} target="_blank" rel="noreferrer" icon={<ArrowUpRightIcon />}>
                          {t.projectsOpen}
                        </PrimaryButton>
                        {showLiveDemo ? (
                          <SecondaryButton href={repo.homepage ?? ""} target="_blank" rel="noreferrer" icon={<ArrowUpRightIcon />}>
                            {t.projectsLive}
                          </SecondaryButton>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </SectionShell>

      <SectionShell id="references" tone="subtle" className={sectionHighlightClass("references")}>
        <Eyebrow>{t.referencesTitle}</Eyebrow>
        <div className="reference-list">
          {REFERENCES.map((reference) => (
            <div key={reference.email} className="reference-item">
              <p className="reference-item__name">{reference.name}</p>
              <div className="reference-item__meta">
                <span>{pick(reference.title, lang)}</span>
                <span>{pick(reference.company, lang)}</span>
              </div>
              <div className="reference-item__actions">
                <SecondaryButton
                  href={`tel:${reference.phone.replace(/\s+/g, "")}`}
                  icon={<PhoneIcon />}
                  className="ui-button--inline reference-action"
                >
                  {lang === "tr" ? "Ara" : "Call"}
                </SecondaryButton>
                <SecondaryButton
                  href={`mailto:${reference.email}`}
                  icon={<MailIcon />}
                  className="ui-button--inline reference-action"
                >
                  {lang === "tr" ? "E-posta" : "E-mail"}
                </SecondaryButton>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="contact" tone="subtle" className={sectionHighlightClass("contact")}>
        <Eyebrow>{t.contactTitle}</Eyebrow>
        <div className="contact-layout">
          <div className="contact-action-stack">
            <SecondaryButton href={`mailto:${PROFILE.email}`} icon={<MailIcon />} className="contact-action-button">
              {lang === "tr" ? "E-posta Gonder" : "Send E-mail"}
            </SecondaryButton>
            <SecondaryButton href={PROFILE.phoneHref} icon={<PhoneIcon />} className="contact-action-button">
              {lang === "tr" ? "Telefon Et" : "Call"}
            </SecondaryButton>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label className="contact-field">
              <span className="contact-field__label">{lang === "tr" ? "Adiniz Soyadiniz" : "Full Name"}</span>
              <input
                className="contact-field__control"
                value={contactForm.name}
                onChange={updateContactField("name")}
                placeholder={lang === "tr" ? "Isminizi girin" : "Enter your name"}
              />
            </label>

            <label className="contact-field">
              <span className="contact-field__label">{lang === "tr" ? "Iletisiminiz" : "Your Contact"}</span>
              <input
                className="contact-field__control"
                value={contactForm.contact}
                onChange={updateContactField("contact")}
                placeholder={lang === "tr" ? "E-posta veya telefon" : "E-mail or phone number"}
              />
            </label>

            <label className="contact-field">
              <span className="contact-field__label">{lang === "tr" ? "Iletisim Sebebiniz" : "Reason for Contact"}</span>
              <textarea
                className="contact-field__control contact-field__control--textarea"
                value={contactForm.reason}
                onChange={updateContactField("reason")}
                placeholder={lang === "tr" ? "Kisa mesajinizi yazin" : "Write a short message"}
              />
            </label>

            <div className="contact-form__actions">
              <button type="button" className="ui-button ui-button--primary" onClick={openMailDraft} disabled={!isContactFormReady}>
                {lang === "tr" ? "Mail ile Gonder" : "Send by Mail"}
              </button>
              <button type="button" className="ui-button ui-button--secondary" onClick={openWhatsAppDraft} disabled={!isContactFormReady}>
                {lang === "tr" ? "WhatsApp ile Gonder" : "Send by WhatsApp"}
              </button>
            </div>
          </form>
        </div>
      </SectionShell>

      <footer className="footer-shell">
        <p className="footer-shell__name">
          <span>(c)</span> {currentYear} {PROFILE.name}
        </p>
        <p className="footer-shell__role">Software Developer · Full Stack</p>
      </footer>
    </PageShell>
  );
}
