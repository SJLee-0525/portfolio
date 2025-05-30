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
      value: "010-1234-5678",
      link: "tel:010-1234-5678",
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
      answer:
        "사용자와 직접 소통하며 더 나은 사용자 경험을 만들고 싶어서 프론트엔드 개발을 시작했습니다.\n" +
        "어린 시절부터 웹 디자인과 사용자 인터페이스에 관심이 많았기 때문에, 프론트엔드 개발을 한다면 제가 생각하는 좋은 인터페이스를 직접 구현할 수 있을 것이라고 생각했기 때문입니다.",
    },
    {
      question: "프론트엔드 개발자로서 가장 중요하다고 생각하는 것은 무엇인가요?",
      answer:
        "프론트엔드 개발자는 사용자와 가장 가까운 접점에서 일하기 때문에, 사용자의 입장에서 생각하는 역지사지의 자세가 가장 중요하다고 생각합니다. \n" +
        "또한 다른 개발 분야와의 협업이 많기 때문에 원활한 소통 능력과 알아보기 쉬운 클린 코드 작성 능력도 중요하다고 생각합니다. \n" +
        "마지막으로 프론트엔드 기술이 빠르게 변화하는 만큼, 트렌드에 발맞추기 위해 지속적으로 학습하고 성장하려는 자세가 필요하다고 생각합니다.",
    },
    {
      question: "프론트엔드 개발자로서 자신만의 강점은 무엇인가요?",
      answer:
        "문제 해결에 대한 끈기와 사용자 중심의 사고가 제 가장 큰 강점입니다.\n" +
        "피아노 전공을 하며 설득력 있는 음악을 만들기 위해 스스로 끊임없이 고민해왔고, 이 과정에서 자연스럽게 포기하지 않는 끈기를 길렀습니다. 이는 개발 중 문제에 직면했을 때도 해결할 때까지 포기하지 않는 능력으로 이어졌습니다.\n" +
        "또한 객관적으로 자신을 돌아보고 듣는 청중의 입장에서 생각해온 습관이 사용자의 관점에서 생각하는 경험으로 발전했습니다.\n" +
        "이외에도 다양한 예술 분야 전공자들과의 협업 경험을 통해 서로 다른 어려움을 공감하고 존중하는 태도를 배웠으며, 이는 협업이 많은 프론트엔드 개발에서 큰 장점이라고 생각합니다.",
    },
  ],
};
