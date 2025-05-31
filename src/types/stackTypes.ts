export interface UsedStack {
  isUsed: boolean;
  id: number;
}

export interface StackUsages {
  [key: string]: UsedStack;
}

export type Portfolio = {
  project: {
    title: string;
    name: string;
    description: string;
    background: string;
    logo: string;
    logoSmall: string;
    logoMedium: string;
    logoLarge: string;
    thumbnail: string;
    thumbnailSmall: string;
    thumbnailMedium: string;
    thumbnailLarge: string;
    "mini-duration": string;
    duration: string;
    team: [string, number][];
    collaboration_tools: string[];
    usage_tools: string[];
    award: string;
    github: string;
    presentation: string;
    imgSrc: { src: string; type: "video" | "img" }[];
  };
  responsibilities: {
    role: string;
    tasks: {
      [key: string]: string[];
    };
  };
  technologies: {
    [key: string]: string[];
  };
  troubleshooting: {
    problem: string;
    solution: string;
  }[];
  retrospective: string[];
};

export type ProjectsType = {
  [key: string]: Portfolio;
};
