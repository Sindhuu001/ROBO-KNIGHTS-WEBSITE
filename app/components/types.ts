/**
 * Shared type definitions for robotics website components
 */

export interface PrincipleCardProps {
  index: number;
  title: string;
  description: string;
  icon?: string; // image path relative to /public/images/
  featured?: boolean;
}

export interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon?: string; // image path relative to /public/images/
}

export interface StatsItem {
  label: string;
  value: string;
}

export interface TeamCultureProps {
  imageUrl?: string;
  culture_title?: string;
  culture_description?: string;
}
