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

export const LAST_UPDATE_DATE: string = "Jun 10, 2025";

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
      value: "sungjoon111@gmail.com",
      link: "mailto:sungjoon111@gmail.com",
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
    languages: [
      {
        name: "Javascript",
        icon: javascriptIcon,
        scale: "100%",
        level: 3,
        description: [
          "웹 프론트엔드 개발 전반에서 JavaScript를 활용해 다양한 클라이언트 측 동작과 데이터 처리 로직을 구현해 왔습니다.\n이 과정에서 이벤트 흐름 제어, DOM 조작, 비동기 처리 및 API 통신, 디바운싱을 통한 성능 최적화 등 프론트엔드 동작 흐름 전반을 다루는 핵심 기능들을 경험했습니다.",
          "또한 JavaScript를 활용한 알고리즘 문제 해결을 통해 언어의 동작 원리에 대한 이해를 확장하고, Heap, Deque과 같은 자료구조를 직접 구현하며 로직 설계와 문제 해결 역량을 함께 키워왔습니다. 이러한 경험은 실제 프로젝트에서 복잡한 상태 변화나 데이터 흐름을 다룰 때, 보다 유연하고 안정적인 로직을 구성하는 데 기반이 되었습니다.",
        ],
      },
      {
        name: "Typescript",
        icon: typescriptIcon,
        scale: "100%",
        level: 3,
        description: [
          "JavaScript 기반 개발을 안정적이고 명확하게 만들기 위해 대부분의 프로젝트에서 TypeScript를 적극 활용해 왔습니다.",
          "Props 및 State 인터페이스 정의, 유틸리티 타입 활용, API 응답 타입 구조화 등에서 TypeScript의 정적 타입 시스템을 적극적으로 적용하여, 코드의 예측 가능성과 디버깅 효율을 높였습니다. 또한 typeof, 조건문 등을 활용한 타입 내로잉을 통해 런타임 조건에 따라 정확한 타입 추론을 유도하며, 복잡한 구조에서도 안정적으로 동작하는 타입 기반 로직을 구성해 왔습니다.",
        ],
      },
      {
        name: "HTML",
        icon: htmlIcon,
        scale: "100%",
        level: 2,
        description: [
          "HTML을 활용하여 웹 페이지의 구조와 콘텐츠를 정의하고, 시맨틱 마크업을 통해 접근성과 SEO를 고려한 웹 페이지를 구현해 왔습니다.",
        ],
      },
      {
        name: "CSS",
        icon: cssIcon,
        scale: "100%",
        level: 2,
        description: [
          "CSS를 활용해 웹 페이지의 레이아웃과 스타일링을 구현해 왔습니다.",
          "media query를 이용한 반응형 디자인, keyframes를 활용한 애니메이션, Flexbox와 Grid를 이용한 레이아웃 구성 등 다양한 CSS 기법을 적용해 사용자 친화적인 UI를 구현했습니다.",
        ],
      },
      { name: "Python", icon: pythonIcon, scale: "100%", level: 3 },
    ],
    libraries: [
      {
        name: "React",
        icon: reactIcon,
        scale: "100%",
        level: 3,
        description: [
          "다수의 프로젝트에서 React 기반으로 SPA를 설계·구현하며, 사용자 중심의 UI/UX를 구축해 왔습니다. 이 과정에서 재사용 가능한 컴포넌트 설계를 중심으로, 유지보수성과 확장성을 고려한 UI 구조를 구축하는 데 주도적으로 참여했습니다.",
          "Zustand를 활용한 상태 관리, React Router 기반의 라우팅, GSAP·Recharts·React Force Graph 등의 시각화 라이브러리 통합 등 다양한 외부 도구와의 유기적인 연동 경험도 갖추고 있습니다.\n또한 React.lazy와 Suspense를 활용한 코드 분할, ErrorBoundary 기반의 예외 처리, createPortal을 이용한 모달 구조 구성, React.memo와 useCallback을 적용한 렌더링 최적화 등 성능 개선과 사용자 경험 향상을 위한 고급 React 기법들을 실전 프로젝트에 적극 적용해 왔습니다.",
        ],
      },
      {
        name: "Zustand",
        icon: zustandIcon,
        scale: "90%",
        level: 2,
        description: [
          "프로젝트에서 전역 상태 관리가 필요한 상황에서 Zustand를 활용해 간결하고 직관적인 상태 관리 구조를 구성해 왔습니다.",
          "컴포넌트 간 공유 상태, 모달 제어, 사용자 프로필 관리 등 다양한 요구사항에 맞춰 스토어를 설계하고, 상태 분리와 선택적 구독을 통해 필요한 데이터만 효율적으로 관리할 수 있는 구조를 구현했습니다.",
        ],
      },
      {
        name: "Tailwind CSS",
        icon: tailwindCssIcon,
        scale: "100%",
        level: 3,
        description: [
          "UI 구현의 일관성과 생산성을 높이기 위해 여러 프로젝트에서 Tailwind CSS를 적극 활용해 왔습니다.",
          "이를 통해 반응형 레이아웃, 인터랙션 스타일, 웹페이지 테마 등의 다양한 UI 요소를 빠르게 적용했으며, 반복되는 스타일이나 조건부 클래스 적용이 필요한 경우에는 clsx 라이브러리를 활용해 가독성과 유지보수성을 높이는 방식으로 스타일을 구성한 경험이 있습니다.",
        ],
      },
      {
        name: "MSW",
        icon: MswIcon,
        scale: "70%",
        description: [
          "프론트엔드 개발 시 API 서버와의 의존도를 줄이고, 개발 속도와 테스트 안정성을 높이기 위해 MSW(Mock Service Worker)를 활용해 왔습니다.",
          "실제 네트워크 요청을 가로채 가짜 응답을 반환함으로써, 백엔드 개발과 병행해 프론트엔드 기능을 독립적으로 개발·디버깅할 수 있는 환경을 구성했습니다. 이를 통해 API 응답의 다양한 경우의 수를 시뮬레이션하고, 로딩·에러 상태 등 UI 흐름을 테스트하며, 실질적인 개발 생산성을 높일 수 있었습니다.",
        ],
      },
      {
        name: "React Query",
        icon: ReactQueryIcon,
        scale: "80%",
        description: [
          "TanStack Query를 활용하여 데이터 캐싱, 비동기 요청 처리, 로딩/에러 상태 관리 등의 전반적인 데이터 흐름을 효율적으로 구성해 왔습니다.",
          "invalidateQueries를 통한 캐시 무효화, enabled 조건부 호출, onSuccess 콜백 처리 등을 통해 쿼리 생명주기를 명확하게 제어하며, 복잡한 비동기 흐름도 안정적으로 구현했습니다. 또한, 스크롤 기반의 데이터 페이징 구현을 위해 useInfiniteQuery를 활용한 경험이 있으며, 무한 스크롤 방식의 데이터 로딩을 자연스럽게 연결하고 페이지네이션 상태와 캐시를 효과적으로 제어하는 구조를 구성해 본 바 있습니다.",
        ],
      },
      {
        name: "React Router",
        icon: ReactRouterIcon,
        scale: "70%",
        description: [
          "React Router를 활용하여 SPA 내에서의 페이지 전환과 URL 관리, 동적 라우팅 등을 구현해 왔습니다.",
          "useParams, useLocation, useNavigate 등의 훅을 활용해 URL 파라미터와 쿼리 스트링을 효과적으로 처리하며, 사용자 경험을 고려한 네비게이션 흐름을 설계했습니다.",
        ],
      },
      {
        name: "Vue",
        icon: vueIcon,
        scale: "100%",
        level: 2,
        description: [
          "초기, Vue.js 기반으로 SPA를 구현하며 컴포넌트 기반 개발과 양방향 바인딩 구조에 대한 이해를 쌓았습니다.",
          "Vue Router와 Pinia를 이용해 라우팅 및 전역 상태 관리를 구성했으며, 페이지 단위 UI 설계, 폼 입력 처리, 외부 API 연동 등 실질적인 프론트엔드 기능 구현을 Vue 생태계 내에서 경험했습니다.",
          "이러한 경험은 이후 React로 넘어가면서도 컴포넌트 분리 기준, 상태 흐름 설계, 데이터의 연결 방식에 대한 감각을 발전시키는 밑거름이 되었습니다.",
        ],
      },
      {
        name: "Bootstrap",
        icon: bootstrapIcon,
        scale: "100%",
        description: [
          "Bootstrap을 활용하여 빠른 반응형 웹 디자인과 UI 컴포넌트 구현을 경험했습니다.",
          "제공되는 다양한 UI 컴포넌트를 활용해 빠르게 프로토타입을 제작하고, 사용자 친화적인 인터페이스를 구축했습니다.",
        ],
      },
      {
        name: "Redux",
        icon: reduxIcon,
        scale: "100%",
        level: 2,
        description: [
          "Redux를 활용한 상태 관리 경험이 있으며, 복잡한 상태 흐름을 예측 가능하게 구성하는 데 도움을 주었습니다.",
        ],
      },
      // {
      //   name: "GSAP",
      //   icon: "gsap",
      //   scale: "100%",
      //   level: 1,
      //   description: [
      //     "CSS keyframes만으로는 구현이 어려운 세밀한 제어가 필요한 경우 GSAP을 선택적으로 적용하며, 동적인 표현력과 완성도를 모두 갖춘 UI 구현에 집중해 왔습니다.",
      //     "이를 활용해 스크롤 기반 애니메이션과 요소 전환 효과를 구현하며, 사용자의 시선 흐름과 상호작용 몰입도를 높이는 방향으로 사용자 경험을 개선해 왔습니다.",
      //     "Timeline과 ScrollTrigger 기능을 활용해 단계별 UI 애니메이션 흐름을 설계하고, 페이지 로딩, 컴포넌트 등장/전환, 인터랙션 피드백 등에서 시각적 몰입도와 사용자 인지 흐름을 높이는 애니메이션 경험을 설계했습니다.",
      //   ],
      // },
      {
        name: "Vite",
        icon: viteIcon,
        scale: "100%",
        description: ["Vite를 활용하여 빠른 개발 환경을 구축하여, 개발 생산성을 높였습니다."],
      },
    ],
    tools: [
      {
        name: "Git",
        icon: gitIcon,
        scale: "100%",
        level: 2,
        description: [
          "버전 관리 시스템인 Git을 활용하여 코드 변경 이력을 체계적으로 관리하고, 협업 시 발생할 수 있는 충돌을 효과적으로 해결해 왔습니다.",
          "Git Flow와 같은 브랜치 전략을 적용하여 기능 개발, 버그 수정, 배포 등의 작업을 명확하게 구분하고, 팀원 간의 원활한 협업을 도모했습니다. 이 과정에서 cherry-pick, rebase 등을 통해서 merge conflict를 해결한 경험이 있으며, pull request를 통한 코드 리뷰와 피드백 과정을 통해 코드 품질을 높이는 데 기여했습니다.",
        ],
      },
      {
        name: "Jira",
        icon: jiraIcon,
        scale: "80%",
        level: 2,
        description: [
          "프로젝트 관리 도구인 Jira를 활용하여 스프린트 계획, 이슈 트래킹, 팀원 간의 협업을 효과적으로 관리해 왔습니다.",
          "Jira와 Gitlab을 연동하여 개발 프로세스를 최적화하고, 이슈 관리와 코드 리뷰를 통합하는 경험을 쌓았습니다.",
        ],
      },
      {
        name: "Notion",
        icon: NotionIcon,
        scale: "70%",
        level: 2,
        description: [
          "팀 내 문서화 및 지식 공유를 위해 Notion을 활용하여 프로젝트 문서, 회의록, 기술 스택 등을 체계적으로 관리해 왔습니다.",
        ],
      },
      {
        name: "Figma",
        icon: figmaIcon,
        scale: "100%",
        level: 3,
        description: [
          "Figma를 단순한 시각적 디자인 도구가 아닌, 프론트엔드 개발과 유기적으로 연결되는 설계 도구로 활용해 왔습니다.",
          "실제 프로젝트에서는 레이아웃 구성 시 Flexbox 구조를 고려한 컴포넌트 기반 설계를 지향했으며, 프레임과 오토 레이아웃 기능을 적극 활용해 개발 단계에서 바로 적용 가능한 구조를 설계했습니다. 또한, 재사용 가능한 UI 컴포넌트를 라이브러리 형태로 구성함으로써 디자인 일관성을 유지하고, 설계 속도를 높일 수 있었습니다.",
        ],
      },
    ],
  },
  interviews: [
    {
      question: "프론트엔드 개발을 시작하게 된 계기는 무엇인가요?",
      answer: [
        "사용자와 직접 소통하며 더 나은 사용자 경험을 만들고 싶어서 프론트엔드 개발을 시작했습니다.",
        "어릴 때부터 웹 디자인과 사용자 인터페이스에 관심이 많았기 때문에, 단순히 보기만 하는 것을 넘어서 직접 만들어보고 싶다는 생각이 컸습니다. 이러한 관심이 자연스럽게 프론트엔드 개발로 이어졌고, 제가 머릿속으로 그렸던 인터페이스를 실제로 구현할 수 있다는 점에서 큰 매력을 느꼈습니다.",
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
