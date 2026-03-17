import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

type ShellTag = "div" | "section" | "article" | "header" | "aside";

type ShellProps = {
  as?: ShellTag;
  children: ReactNode;
  className?: string;
  id?: string;
};

type CardTone = "default" | "accent" | "secondary";
type CardVariant = "default" | "product";
type SectionTone = "default" | "hero" | "subtle" | "emphasis";

type SectionShellProps = ShellProps & {
  tone?: SectionTone;
};

type CardProps = ShellProps & {
  tone?: CardTone;
  variant?: CardVariant;
};

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  icon?: ReactNode;
  children: ReactNode;
};

type InfoRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
};

type ActionTileProps = ComponentPropsWithoutRef<"a"> & {
  icon: ReactNode;
  label: string;
  value: string;
};

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  descriptionClassName?: string;
};

type CardHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

type TagListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
};

type BulletListProps = {
  items: string[];
  className?: string;
  split?: boolean;
};

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("page-shell", className)}>{children}</div>;
}

export function SectionShell({
  as: Tag = "section",
  children,
  className,
  id,
  tone = "default",
}: SectionShellProps) {
  const toneClass =
    tone === "hero"
      ? "section-shell--hero"
      : tone === "subtle"
        ? "section-shell--subtle"
        : tone === "emphasis"
          ? "section-shell--emphasis"
          : undefined;

  return (
    <Tag id={id} className={cn("section-shell", toneClass, className)}>
      {children}
    </Tag>
  );
}

export function Card({
  as: Tag = "article",
  children,
  className,
  tone = "default",
  variant = "default",
  id,
}: CardProps) {
  const toneClass =
    tone === "accent"
      ? "ui-card--accent"
      : tone === "secondary"
        ? "ui-card--secondary"
        : undefined;
  const variantClass = variant === "product" ? "ui-card--product" : undefined;

  return (
    <Tag id={id} className={cn("ui-card", toneClass, variantClass, className)}>
      {children}
    </Tag>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("section-kicker", className)}>{children}</p>;
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("ui-badge", className)}>{children}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("section-header", action ? "section-header--split" : undefined, className)}>
      <div className="section-header__copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        {title ? <h2 className="section-title">{title}</h2> : null}
        {description ? <p className={cn("section-body", descriptionClassName)}>{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function CardHeader({
  eyebrow,
  title,
  subtitle,
  action,
  className,
  titleClassName,
  subtitleClassName,
}: CardHeaderProps) {
  return (
    <div className={cn("card-header", className)}>
      <div className="card-header__copy">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h3 className={cn("card-title", titleClassName)}>{title}</h3>
        {subtitle ? <p className={cn("card-subtitle", subtitleClassName)}>{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function TagList({ items, className, itemClassName }: TagListProps) {
  return (
    <div className={cn("badge-group", className)}>
      {items.map((item) => (
        <Badge key={item} className={itemClassName}>
          {item}
        </Badge>
      ))}
    </div>
  );
}

export function BulletList({ items, className, split }: BulletListProps) {
  return (
    <ul className={cn("card-list", split && "card-list--split", className)}>
      {items.map((item) => (
        <li key={item} className="card-list__item">
          <span className="card-list__dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PrimaryButton({
  icon,
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn("ui-button ui-button--primary", className)} {...props}>
      {icon}
      <span>{children}</span>
    </a>
  );
}

export function SecondaryButton({
  icon,
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn("ui-button ui-button--secondary", className)} {...props}>
      {icon}
      <span>{children}</span>
    </a>
  );
}

export function InfoRow({ icon, label, value, href }: InfoRowProps) {
  return (
    <a href={href} className="info-row">
      <span className="info-row__meta">
        <span className="info-row__icon">{icon}</span>
        <span className="info-row__label">{label}</span>
      </span>
      <span className="info-row__value">{value}</span>
    </a>
  );
}

export function ActionTile({
  icon,
  label,
  value,
  className,
  ...props
}: ActionTileProps) {
  return (
    <a className={cn("action-tile", className)} {...props}>
      <span className="action-tile__icon">{icon}</span>
      <span className="action-tile__copy">
        <span className="action-tile__label">{label}</span>
        <span className="action-tile__value">{value}</span>
      </span>
    </a>
  );
}

export function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h9v9" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m7 11 5 5 5-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 20h14" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 12 13l9-5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6h15A1.5 1.5 0 0 1 21 7.5v9A1.5 1.5 0 0 1 19.5 18h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6Z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5c0 7.18 5.82 13 13 13h1.5a1 1 0 0 0 1-1v-2.59a1 1 0 0 0-.75-.97l-2.83-.7a1 1 0 0 0-.95.27l-.62.66a1 1 0 0 1-1.08.25 10.48 10.48 0 0 1-4.24-4.24 1 1 0 0 1 .25-1.08l.66-.62a1 1 0 0 0 .27-.95l-.7-2.83A1 1 0 0 0 8.09 4H5.5a1 1 0 0 0-1 1v.5Z" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.21.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.5 2.3 1.07 2.86.82.09-.64.35-1.07.63-1.31-2.22-.25-4.55-1.1-4.55-4.9 0-1.08.39-1.96 1.02-2.65-.1-.26-.44-1.28.1-2.67 0 0 .84-.27 2.75 1.01A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.28 2.74-1.01 2.74-1.01.55 1.39.21 2.41.1 2.67.64.69 1.02 1.57 1.02 2.65 0 3.81-2.33 4.65-4.56 4.89.36.31.68.92.68 1.86v2.78c0 .27.18.59.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="m12 3.6 2.6 5.27 5.82.85-4.21 4.1.99 5.78L12 16.85 6.8 19.6l1-5.78-4.22-4.1 5.83-.85L12 3.6Z" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.24-3.54C7.17 3.94 6.4 3.2 5.27 3.2S3.4 3.94 3.4 4.96c0 1 .74 1.77 1.84 1.77h.02c1.14 0 1.92-.77 1.92-1.77ZM20.6 13.1c0-3.2-1.7-4.68-3.97-4.68-1.83 0-2.65 1-3.1 1.71V8.5H10.2c.04 1.08 0 11.5 0 11.5h3.33v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H20.6v-6.9Z" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.1A8.99 8.99 0 0 1 10.9 3a9 9 0 1 0 10.1 10.1Z" />
    </svg>
  );
}
