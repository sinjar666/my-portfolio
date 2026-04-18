import navigationData from "./navigation.json";
import heroData from "./hero.json";
import aboutData from "./about.json";
import aboutDetailsData from "./about-details.json";
import additionalHighlightsData from "./additional-highlights.json";
import experienceData from "./experience.json";
import projectsData from "./projects.json";
import skillsData from "./skills.json";
import contactData from "./contact.json";
import footerData from "./footer.json";

import type {
  NavigationContent,
  HeroContent,
  AboutContent,
  AboutDetailsContent,
  AdditionalHighlightsContent,
  ExperienceContent,
  ProjectsContent,
  SkillsContent,
  ContactContent,
  FooterContent,
} from "./types";

export const navigationContent: NavigationContent = navigationData;
export const heroContent: HeroContent = heroData;
export const aboutContent: AboutContent = aboutData;
export const aboutDetailsContent: AboutDetailsContent = aboutDetailsData;
export const additionalHighlightsContent: AdditionalHighlightsContent = additionalHighlightsData;
export const experienceContent: ExperienceContent = experienceData;
export const projectsContent: ProjectsContent = projectsData;
export const skillsContent: SkillsContent = skillsData;
export const contactContent: ContactContent = contactData;
export const footerContent: FooterContent = footerData;
