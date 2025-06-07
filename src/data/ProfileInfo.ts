import { ProfileInfoData } from "@/types/profileTypes";

import bootstrapIcon from "@assets/stacks/Bootstrap.svg";
import cssIcon from "@assets/stacks/CSS.svg";
import figmaIcon from "@assets/stacks/Figma.svg";
import gitIcon from "@assets/stacks/Git.svg";
import htmlIcon from "@assets/stacks/HTML.svg";
import javascriptIcon from "@assets/stacks/JavaScript.svg";
import jiraIcon from "@assets/stacks/Jira.svg";
import MswIcon from "@assets/stacks/Msw.svg";
import NotionIcon from "@assets/stacks/Notion.svg";
import pythonIcon from "@assets/stacks/Python-Light.svg";
import ReactQueryIcon from "@assets/stacks/React-query.svg";
import ReactRouterIcon from "@assets/stacks/React-router.svg";
import reactIcon from "@assets/stacks/React-Light.svg";
import reduxIcon from "@assets/stacks/Redux.svg";
import tailwindCssIcon from "@assets/stacks/TailwindCSS-Light.svg";
import typescriptIcon from "@assets/stacks/TypeScript.svg";
import viteIcon from "@assets/stacks/Vite-Light.svg";
import vueIcon from "@assets/stacks/VueJS-Light.svg";
import zustandIcon from "@assets/stacks/Zustand.svg";

export const LAST_UPDATE_DATE: string = "Jun 7, 2025";

export const PROFILE_INFO: ProfileInfoData = {
  innerProfile: {
    title: "프론트엔드 개발자 이성준입니다",
    introduction: "건반에서 키보드로, 손끝으로 경험을 빚어내는",
    description:
      "연세대학교 피아노과를 졸업하고, 삼성 청년 SW 아카데미에서 프론트엔드 개발을 배우고 있습니다. " +
      "프론트엔드 개발에 대한 열정과 호기심이 가득하며, 새로운 기술을 배우고 적용하는 것을 즐깁니다.",
    detail: "저는 프론트엔드 개발자로서 사용자 경험을 최우선으로 생각하며, ",
  },
  contacts: [
    {
      type: "TEL",
      label: "TEL",
      value: "010-4950-9213",
      link: "tel:010-4950-9213",
    },
    {
      type: "Email",
      label: "Email",
      value: "sungjoon525@naver.com",
      link: "mailto:sungjoon25@yonsei.ac.kr",
    },
    {
      type: "Github",
      label: "Github",
      value: "github.com/SJLee-0525",
      link: "https://github.com/SJLee-0525",
    },
    {
      type: "Notion",
      label: "Notion",
      value: "sungjoon25.notion.site",
      link: "https://www.notion.so/30b6e8951fbe4d608c0167503eb07155",
    },
  ],
  educations: [
    {
      school: "삼성 청년 SW 아카데미",
      major: "12기 교육 수료",
      period: "2024.07. - 2025.06.",
    },
    {
      school: "연세대학교",
      major: "피아노과 졸업",
      period: "2017.03. - 2023.08.",
    },
    {
      school: "서울예술고등학교",
      major: "피아노과 졸업",
      period: "2013.03. - 2016.02.",
    },
    {
      school: "예원학교",
      major: "피아노과 졸업",
      period: "2010.03. - 2013.02.",
    },
  ],
  awards: [
    {
      title: "삼성전자 DA사업부 연계 프로젝트 우수상",
      where: "삼성전자",
      date: "2025.04.11.",
    },
    {
      title: "공통 프로젝트 우수상",
      where: "삼성전자",
      date: "2025.02.21.",
    },
    {
      title: "1학기 프로젝트 최우수상",
      where: "삼성전자",
      date: "2024.11.29.",
    },
    {
      title: "1학기 성적우수상",
      where: "삼성전자",
      date: "2024.11.29.",
    },
  ],
  stacks: {
    Languages: [
      { name: "Javascript", icon: javascriptIcon, scale: "100%", level: 3 },
      { name: "Typescript", icon: typescriptIcon, scale: "100%", level: 3 },
      { name: "HTML", icon: htmlIcon, scale: "100%", level: 3 },
      { name: "CSS", icon: cssIcon, scale: "100%", level: 2 },
      { name: "Python", icon: pythonIcon, scale: "100%", level: 3 },
    ],
    Libraries: [
      { name: "React", icon: reactIcon, scale: "100%", level: 3 },
      { name: "Zustand", icon: zustandIcon, scale: "90%", level: 2 },
      { name: "Redux", icon: reduxIcon, scale: "100%", level: 1 },
      { name: "Tailwind CSS", icon: tailwindCssIcon, scale: "100%", level: 3 },
      { name: "MSW", icon: MswIcon, scale: "70%" },
      { name: "React Query", icon: ReactQueryIcon, scale: "80%" },
      { name: "React Router", icon: ReactRouterIcon, scale: "70%" },
      { name: "Vue", icon: vueIcon, scale: "100%", level: 2 },
      { name: "Bootstrap", icon: bootstrapIcon, scale: "100%" },
      { name: "Vite", icon: viteIcon, scale: "100%" },
    ],
    Tools: [
      { name: "Git", icon: gitIcon, scale: "100%", level: 2 },
      { name: "Jira", icon: jiraIcon, scale: "80%", level: 2 },
      { name: "Notion", icon: NotionIcon, scale: "70%", level: 2 },
      { name: "Figma", icon: figmaIcon, scale: "100%", level: 3 },
    ],
  },
  interviews: [
    {
      question: "프론트엔드 개발을 시작하게 된 계기는 무엇인가요?",
      answer: [
        "사용자와 직접 소통하며 더 나은 사용자 경험을 만들고 싶어서 프론트엔드 개발을 시작했습니다.",
        "어린 시절부터 웹 디자인과 사용자 인터페이스에 관심이 많았기 때문에, 프론트엔드 개발을 한다면 제가 생각하는 좋은 인터페이스를 직접 구현할 수 있을 것이라고 생각했기 때문입니다.",
      ],
    },
    {
      question: "프론트엔드 개발자로서 자신만의 강점은 무엇인가요?",
      answer: [
        "제 강점은 문제 해결에 대한 끈기, 사용자 중심의 사고, 그리고 협업 능력입니다.",
        // "프론트엔드 개발자는 사용자와 가장 가까운 접점에서 일하기 때문에, 사용자의 입장에서 생각하는 역지사지의 자세와 다른 개발 분야와의 협업이 많기 때문에 원활한 소통 능력이 중요하다 생각합니다.\n\n" +
        "음악을 전공하며 아무리 노력해도 실력이 늘지 않아 답답함을 느낀 적이 많았습니다. 스스로의 한계를 의심하게 되는 순간도 있었지만, 그때마다 포기하지 않고 이겨냄으로써 끝까지 물고 늘어지는 태도를 익힐 수 있었습니다. 이 경험은 개발 중 문제에 직면했을 때도 해결할 때까지 포기하지 않는 능력으로 이어졌습니다.",
        "또한 음악을 만들며 청중의 입장에서 어떻게 들릴지 스스로 끊임없이 고민했던 경험은, 사용자의 관점에서 서비스의 흐름과 불편함을 미리 고려하는 사고로 자연스럽게 연결되었습니다.",
        "이외에도 다양한 예술 분야 전공자들과의 협업 경험을 통해 서로의 관점을 존중하며 소통하는 태도를 배웠고, 이는 협업이 중요한 프론트엔드 개발에서 저의 큰 자산이 되고 있습니다.",
      ],
    },
  ],
};
