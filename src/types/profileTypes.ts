export interface ProfileImage {
  id: number;
  src: string;
  alt: string;
}

export interface InnerProfile {
  title: string;
  introduction: string;
  description: string;
  detail: string;
}

export interface ContactItem {
  type: string;
  label: string;
  value: string;
  link: string;
}

export interface EducationItem {
  school: string;
  major: string;
  period: string;
}

export interface AwardItem {
  title: string;
  where: string;
  date: string;
}

export interface StackItem {
  name: string;
  icon: string;
  scale: string;
  level?: number;
}

export interface Stacks {
  Languages: StackItem[];
  Libraries: StackItem[];
  Tools: StackItem[];
}

export interface Interviews {
  question: string;
  answer: string;
}

export interface ProfileInfoData {
  innerProfile: InnerProfile;
  contacts: ContactItem[];
  educations: EducationItem[];
  awards: AwardItem[];
  stacks: Stacks;
  interviews: Interviews[];
}
