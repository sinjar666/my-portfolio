export type NavItem = {
  label: string;
  href: string;
};

export type NavigationContent = {
  logoText: string;
  themeToggleAriaLabel: string;
  menuToggleAriaLabel: string;
  items: NavItem[];
};

export type TextSegment = {
  text: string;
  emphasis?: boolean;
};

export type HeroContent = {
  name: string;
  profileImageAlt: string;
  role: string;
  summary: string;
  introCard: {
    segments: TextSegment[];
  };
  cta: {
    primary: {
      label: string;
      href: string;
    };
    resume: {
      label: string;
    };
  };
  socialLinks: Array<{
    icon: "github" | "linkedin" | "mail";
    href: string;
    ariaLabel: string;
  }>;
  scrollIndicator: {
    mobileLabel: string;
  };
};

export type AboutContent = {
  heading: string;
  paragraphs: string[];
};

export type AboutDetailsContent = {
  leadershipPhilosophy: {
    heading: string;
    items: Array<{
      emoji: string;
      text: string;
    }>;
  };
  highlights: Array<{
    icon: "target" | "users" | "zap";
    title: string;
    description: string;
  }>;
  areasOfInterest: {
    heading: string;
    items: string[];
  };
};

export type AdditionalHighlightsContent = {
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type ExperienceContent = {
  heading: string;
  entries: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
  }>;
};

export type ProjectsContent = {
  heading: string;
  items: Array<{
    icon: "brain" | "code" | "zap" | "cloud" | "settings" | "rocket";
    title: string;
    description: string;
    tags: string[];
    gradient: string;
  }>;
  publication: {
    heading: string;
    title: string;
    authorsAndDate: string;
    link: {
      label: string;
      href: string;
    };
  };
};

export type SkillsContent = {
  heading: string;
  categories: Array<{
    icon:
      | "users"
      | "brain"
      | "cloud"
      | "code"
      | "layout"
      | "database"
      | "globe"
      | "cpu";
    title: string;
    skills: string[];
    color: string;
  }>;
};

export type ContactContent = {
  heading: string;
  intro: string;
  contactInformationHeading: string;
  contactInfo: Array<{
    icon: "mail" | "mapPin";
    label: string;
    value: string;
    href: string | null;
  }>;
  socialSectionHeading: string;
  socialLinks: Array<{
    icon: "linkedin" | "github";
    label: string;
    href: string;
    color: string;
  }>;
  form: {
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
  cta: {
    heading: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

export type FooterContent = {
  copyright: string;
};
