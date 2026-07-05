import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const PLATFORM_ICONS = {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
};

const PLATFORM_ORDER = ["Facebook", "Instagram", "Twitter", "Linkedin", "Github"];

export default function TeamMemberCard({ name, initials, role, bio, socials }) {
  return (
    <div className="card flex flex-col h-full">
      <div className="flex flex-col items-center text-center gap-3">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-lg font-bold select-none"
          aria-hidden="true"
        >
          {initials}
        </span>
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <p className="text-sm font-medium text-ink-secondary">{role}</p>
        <p className="text-sm text-ink-muted italic leading-relaxed">&ldquo;{bio}&rdquo;</p>
      </div>

      <div className="flex-1" />

      <div className="flex items-center justify-center gap-3 pt-4 mt-auto">
        {PLATFORM_ORDER.map((platform) => {
          const url = socials[platform];
          if (!url) return null;

          const Icon = PLATFORM_ICONS[platform];

          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted hover:text-ink hover:bg-surface-soft transition-colors duration-150"
              aria-label={platform}
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
