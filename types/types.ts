import { Session } from 'next-auth';

export type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export interface NavItemProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

export type ImageProps = {
  src: any;
  alt: string;
  align?: 'left' | 'right';
};

export interface ToStudyValue {
  value: string;
  pomodoros: number;
}
