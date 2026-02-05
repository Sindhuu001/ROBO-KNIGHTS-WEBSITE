/**
 * Shared constants and data for team culture components
 */

export interface Principle {
  index: number;
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PRINCIPLES: Principle[] = [
  {
    index: 1,
    title: "Gracious Professionalism",
    description:
      "We compete with integrity and respect.||Building strong relationships with teams and mentors through positive conduct.",
    icon: "/images/gracious-professionalism.png",
  },
  {
    index: 2,
    title: "Student Leadership & Mentorship",
    description:
      "Students lead and mentor.||We cultivate leadership by giving students ownership of design, build, and strategy.",
    icon: "/images/student-leadership.png",
  },
  {
    index: 3,
    title: "Innovation Through Engineering",
    description:
      "We design with purpose.||Rapid prototyping, measured testing, and iterative improvements drive our progress.",
    icon: "/images/innovation-engineering.png",
  },
  {
    index: 4,
    title: "Collaboration & Inclusion",
    description:
      "Diverse perspectives power better designs.||We ensure every voice contributes-from CAD to competition strategy.",
    icon: "/images/collaboration-inclusion.png",
  },
  {
    index: 5,
    title: "Outreach & Community Impact",
    description:
      "We inspire future engineers.||Workshops and community programs extend our impact beyond the field.",
    icon: "/images/outreach-community.png",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Brainstorm",
    description: "Collaborate and generate ideas",
  },
  {
    step: 2,
    title: "Prototype",
    description: "Build and test concepts",
  },
  {
    step: 3,
    title: "Test",
    description: "Validate performance data",
  },
  {
    step: 4,
    title: "Iterate",
    description: "Refine and improve design",
  },
  {
    step: 5,
    title: "Compete",
    description: "Execute at the highest level",
  },
];
