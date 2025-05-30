import { ProjectsType } from "@/types/stackTypes";

import aidapLogo from "@assets/portfolio/aidap/logo.png";
import aidapThumbnail from "@assets/portfolio/aidap/thumbnail.png";
import aidapHomeImg from "@assets/portfolio/aidap/home.png";
import aidapLoginImg from "@assets/portfolio/aidap/login.png";
import aidapSignupImg from "@assets/portfolio/aidap/signup.png";
import aidapProfileImg from "@assets/portfolio/aidap/profile.png";
import aidapNewsImg from "@assets/portfolio/aidap/news.png";
import aidapDepositList from "@assets/portfolio/aidap/deposit-list.png";
import aidapDepositCal from "@assets/portfolio/aidap/deposit-cal.png";
import aidapMortgageList from "@assets/portfolio/aidap/mortgage-list.png";
import aidapMortgageCal from "@assets/portfolio/aidap/mortgage-cal.png";
import aidapProductDetailImg from "@assets/portfolio/aidap/product-detail.png";
import aidapAiChatImg from "@assets/portfolio/aidap/ai-chat.png";
import aidapCommunityImg from "@assets/portfolio/aidap/community-search.png";
import aidapCommunityDetailImg from "@assets/portfolio/aidap/community-like.png";

import heroLogo from "@assets/portfolio/hero/logo.png";
import heroThumbnail from "@assets/portfolio/hero/thumbnail.png";
import heroHomeImg from "@assets/portfolio/hero/home.png";
import heroMobileHomeImg from "@assets/portfolio/hero/home-mb.png";
import heroNormalNotiImg from "@assets/portfolio/hero/normal-noti.png";
import heroNotiImg from "@assets/portfolio/hero/noti.png";
import heroNotiPeriodImg from "@assets/portfolio/hero/noti-period.png";
import heroCalendarImg from "@assets/portfolio/hero/calendar.png";
import heroMessageImg from "@assets/portfolio/hero/message.png";
import heroHealthImg from "@assets/portfolio/hero/health.png";
import heroEmotionalReportImg from "@assets/portfolio/hero/emotion-report.png";
import heroMentalReportImg from "@assets/portfolio/hero/mental-report.png";
import heroFamilyInfoImg from "@assets/portfolio/hero/family-info.png";
import heroMemberInfoImg from "@assets/portfolio/hero/sub-info.png";

import recipediaLogo from "@assets/portfolio/recipedia/logo.png";
import recipediaThumbnail from "@assets/portfolio/recipedia/thumbnail.png";

import mailAtLogo from "@assets/portfolio/mailAt/logo.png";

import portfolioThumbnail from "@assets/portfolio/portfolio/thumbnail.png";

export const PROJECTS: ProjectsType = {
  aidap: {
    project: {
      title: "아이답 (AIDAP)",
      name: "SSAFY 12기 관통 프로젝트 (금융)",
      description: "AI를 활용한 금융 상품 로보 어드바이저 서비스",
      background:
        "바쁜 일상 속에서 은행을 방문하거나 금융 상품을 직접 비교하기 어려운 현대인을 위해, 다양한 금융 상품을 한눈에 비교·분석하고 생성형 AI를 통해 맞춤형 추천까지 제공받을 수 있는 금융 로보 어드바이저 서비스를 기획하게 되었습니다.",
      logo: aidapLogo,
      thumbnail: aidapThumbnail,
      "mini-duration": "2024. 11 ~ 2024. 11.",
      duration: "2024. 11. 18. ~ 2024. 11. 26.",
      team: [
        ["Frontend", 1],
        ["Backend", 1],
      ],
      collaboration_tools: ["GitLab", "Mattermost"],
      usage_tools: ["JavaScript", "HTML5", "CSS", "Node.js", "Vue.js", "Vite", "Pinia", "Bootstrap", "Axios API"],
      award: "SSAFY 12기 1학기 관통 프로젝트 최우수상(1위) 수상",
      github: "https://github.com/SJLee-0525/learning/tree/master/pjt/pjt-10/10-pjt",
      presentation: "https://drive.google.com/file/d/12qKaQ9ADbctfpzCX13H0FyvF4I6pOuox/view?usp=drive_link",
      imgSrc: [
        { src: "https://www.youtube.com/embed/gtoMOWh9y9M?si=L93WYOyjigbxeyK3", type: "video" },
        { src: aidapHomeImg, type: "img" },
        { src: aidapLoginImg, type: "img" },
        { src: aidapSignupImg, type: "img" },
        { src: aidapProfileImg, type: "img" },
        { src: aidapNewsImg, type: "img" },
        { src: aidapDepositList, type: "img" },
        { src: aidapDepositCal, type: "img" },
        { src: aidapMortgageList, type: "img" },
        { src: aidapMortgageCal, type: "img" },
        { src: aidapProductDetailImg, type: "img" },
        { src: aidapAiChatImg, type: "img" },
        { src: aidapCommunityImg, type: "img" },
        { src: aidapCommunityDetailImg, type: "img" },
      ],
    },
    responsibilities: {
      role: "Frontend",
      tasks: {
        "AI 챗봇 기능 구현": ["AI 챗봇 기능 구현", "AI 챗봇 UI/UX 설계 및 구현", "AI 챗봇 API 연동 및 데이터 처리"],
        "금융 상품 추천 기능 구현": [
          "금융 상품 추천 기능 구현",
          "금융 상품 추천 UI/UX 설계 및 구현",
          "금융 상품 추천 API 연동 및 데이터 처리",
          "금융 상품 추천 결과 페이지 구현",
          "금융 상품에 따른 이자 계산기 기능 구현",
        ],
        "커뮤니티 기능 구현": [
          "커뮤니티 UI/UX 설계 및 구현",
          "커뮤니티 API 연동 및 데이터 처리",
          "게시판 카테고리 구성 및 게시글 작성 기능 구현",
          "게시글 검색 및 필터링 기능 구현",
          "게시글 좋아요 및 댓글 기능 구현",
        ],
        "소셜 로그인 기능 구현": [
          "카카오 계정을 이용한 회원 가입 및 로그인 기능 구현",
          "소셜 로그인 UI/UX 설계 및 구현",
        ],
      },
    },
    technologies: {
      "Program Language": ["JavaScript", "HTML5", "CSS"],
      "Language Engine": ["Node.js"],
      "Web SPA Library": ["Vue.js"],
      "Bundling Tool": ["Vite"],
      "State Management": ["Pinia"],
      etc: ["Bootstrap"],
    },
    troubleshooting: [
      {
        problem: "카카오 아이디로 회원 가입 시 금융 상품 추천에 필요한 정보가 누락되는 문제 발생",
        solution: "카카오 아이디로 회원 가입 시 회원 정보 입력 폼으로 리다이렉트하여 필요한 정보를 입력받도록 수정",
      },
      {
        problem: "AI 챗봇 응답 속도가 느려 사용자 경험 저하",
        solution: "AI 모델 최적화 및 캐싱 전략을 도입하여 응답 속도 개선",
      },
    ],
    retrospective: [],
  },
  hero: {
    project: {
      title: "영웅이",
      name: "SSAFY 12기 공통 프로젝트 (AIoT)",
      description: "AI 실버케어 로봇 플랫폼 서비스",
      background:
        "고령화 사회에 접어들면서 혼자 거주하는 노인의 수가 지속적으로 증가하고 있습니다. \n 독거 노인들은 외부와의 접촉이 줄어들면서 정서적 고립과 건강 관리의 어려움을 겪고 있으며, 이는 심리적·신체적 문제로 이어질 수 있습니다. \n 이러한 문제를 해결하기 위해 AI와 IoT 기술을 결합한 실버케어 로봇 플랫폼 서비스를 기획하게 되었습니다.",
      logo: heroLogo,
      thumbnail: heroThumbnail,
      "mini-duration": "2025. 01 ~ 2025. 02.",
      duration: "2025. 01. 06. ~ 2025. 02. 21.",
      team: [
        ["Frontend", 2],
        ["Backend", 2],
        ["Embedded", 2],
      ],
      collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
      usage_tools: [
        "JavaScript",
        "HTML5",
        "CSS",
        "Node.js",
        "React.js",
        "Vite",
        "React Context API",
        "GSAP",
        "Recharts.js",
        "Date-fns",
        "QRCode.react",
        "React Router",
        "ESLint",
        "Prettier",
        "Fetch API",
      ],
      award: "SSAFY 12기 공통 프로젝트 최우수상(1위) 수상",
      github: "https://github.com/SJLee-0525/SSAFY_PJT_1",
      presentation: "https://youtu.be/XyJwLGpxMto",
      imgSrc: [
        { src: "https://www.youtube.com/embed/LQlEIiO-5KE?si=yiSNqXRtNwi9Rvbj", type: "video" },
        { src: heroHomeImg, type: "img" },
        { src: heroMobileHomeImg, type: "img" },
        { src: heroNormalNotiImg, type: "img" },
        { src: heroNotiImg, type: "img" },
        { src: heroNotiPeriodImg, type: "img" },
        { src: heroCalendarImg, type: "img" },
        { src: heroMessageImg, type: "img" },
        { src: heroHealthImg, type: "img" },
        { src: heroEmotionalReportImg, type: "img" },
        { src: heroMentalReportImg, type: "img" },
        { src: heroFamilyInfoImg, type: "img" },
        { src: heroMemberInfoImg, type: "img" },
      ],
    },
    responsibilities: {
      role: "Frontend",
      tasks: {
        "보호자 페이지 개발": [
          "보호자 페이지 메인 화면 제작",
          "보호자 페이지 알림 기능 구현",
          "보호자 페이지 캘린더 기능 구현",
          "보호자 페이지 메시지 기능 구현",
          "보호자 페이지 건강 정보 조회 기능 구현",
          "보호자 페이지 감정 리포트 조회 기능 구현",
          "보호자 페이지 정신 리포트 조회 기능 구현",
          "보호자 페이지 가족 정보 조회 기능 구현",
          "보호자 페이지 가족 정보 수정 기능 구현",
          "QR 코드 생성 및 접근 경로에 따른 코드 분기 처리",
        ],
        "모달 기반의 UI/UX 설계": [
          "재사용 가능한 모달 컴포넌트 설계 및 구현",
          "페이지 이동을 최소화함으로써 앱과 유사한 사용자 경험 제공",
        ],
        "사용자 경험 향상을 위한 애니메이션 효과 구현": [
          "CSS keyframes를 활용한 애니메이션 효과 구현",
          "GSAP 라이브러리를 활용한 고급 애니메이션 효과 구현",
        ],
      },
    },
    technologies: {
      "Program Language": ["JavaScript", "HTML5", "CSS"],
      "Language Engine": ["Node.js"],
      "Web SPA Library": ["React.js"],
      "Bundling Tool": ["Vite"],
      "State Management": ["React Context API"],
      "Code Analysis Tool": ["ESLint", "Prettier"],
      etc: ["Recharts", "date-fns", "GSAP"],
    },
    troubleshooting: [
      {
        problem:
          "측면 네비게이션 바를 fixed 속성으로 설정했을 때, z-index가 적용되지 않아 알림 경고와 같은 애니메이션 효과가 겹칠 때 네비게이션 바 위로 돌출되는 문제 발생",
        solution:
          "createPortal을 사용하여 네비게이션 바를 root가 아닌 별도의 DOM 트리로 분리함으로써 z-index 문제 해결",
      },
      {
        problem: "예상보다 관리해야 할 상태가 많아져 상태 관리가 복잡해지는 문제 발생 및 의존성 문제 발생",
        solution: "React Context API를 사용하여 API 호출 부분만 관리하는 store를 구현하여 상태 관리 단순화",
      },
      {
        problem:
          "QR 코드를 이용해 가족 정보를 연동할 시, QR 코드로 이용해 접속하는 기기가 로그인 되어있지 않을 경우 권한이 없는 사용자로 인식되어 접근이 불가능한 문제 발생",
        solution:
          "QR 코드를 이용해 접속 시, QR 코드를 이용해 접속하는 지 여부를 판단하여 필요시 로그인 페이지로 리다이렉트",
      },
    ],
    retrospective: [],
  },
  recipedia: {
    project: {
      title: "레시피디아",
      name: "삼성전자 DA사업부-SSAFY 연계 프로젝트",
      description: "생성형 AI 기반 레시피 추천 서비스",
      background:
        "삼성전자의 패밀리허브 냉장고는, 큰 디스플레이를 활용한 레시피 추천 기능을 제공하고 있습니다.\n하지만, 기존 레시피 추천 서비스는 DB에 저장된 레시피를 기반으로 추천하기 때문에, 레시피의 종류가 한정적이며 개인의 취향을 반영하지 못하는 문제가 많았습니다.\n이러한 문제를 해결하기 위해, 고내의 재료 정보와 사용자가 입력한 재료를 기반으로 생성형 AI가 레시피를 추천하는 서비스를 기획하게 되었습니다.",
      logo: recipediaLogo,
      thumbnail: recipediaThumbnail,
      "mini-duration": "2025. 02 ~ 2025. 04.",
      duration: "2025. 02. 24. ~ 2025. 04. 11.",
      team: [
        ["Frontend", 2],
        ["Backend", 2],
        ["AI", 2],
      ],
      collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
      usage_tools: [
        "TypeScript",
        "HTML5",
        "CSS",
        "Node.js",
        "React.js",
        "Vite",
        "Zustand",
        "React Query",
        "MSW",
        "React Router",
        "ESLint",
        "Prettier",
        "React Error Boundary",
        "Tailwind CSS",
        "MSW",
        "Axios API",
      ],
      award: "삼성전자 DA사업부 연계 프로젝트 우수상(2위) 수상",
      github: "https://github.com/SJLee-0525/SSAFY_PJT_2",
      presentation: "https://youtu.be/rGmyZMXYjTM",
      imgSrc: [],
    },
    responsibilities: {
      role: "Frontend",
      tasks: {
        "재료 관리 페이지 제작": [
          "고내 식재료 목록 페이지 제작,",
          "식재료 상세 정보 모달 구현",
          "식재료 입출고 기능 구현",
          "식재료 검색 시 자동 완성 및 추천 기능 구현",
          "React Query를 사용한 데이터 캐싱 및 적절한 API 호출",
          "디바운스 훅을 사용해 자동 완성 및 추천 기능 시 API 호출 최적화",
          "화면 드래그 시 실시간으로 페이지 렌더링함으로써 사용자 경험 향상",
        ],
        "사용자 설정 페이지 제작": [
          "프로필 변경 페이지 제작",
          "프로필 별 식단 설정 기능 구현",
          "사용자 정보 추가 및 삭제 기능 구현",
        ],
        "MSW를 활용한 Mock API 서버 구축": [
          "개발 환경에서 API 서버를 Mocking하여 프론트엔드 개발",
          "MSW를 사용해 API 요청을 가로채고 Mock 데이터로 응답",
          "API 요청 및 응답을 시뮬레이션하여 프론트엔드 개발과 API 서버 개발을 독립적으로 진행",
        ],
      },
    },
    technologies: {
      "Program Language": ["TypeScript", "HTML5", "Tailwind CSS"],
      "Language Engine": ["Node.js"],
      "Web SPA Library": ["React.js"],
      "Bundling Tool": ["Vite"],
      "State Management": ["Zustand"],
      "Code Analysis Tool": ["ESLint", "Prettier"],
      "API 통신": ["Axios", "React Query"],
      "비동기 처리 및 오류 복구": ["React Query", "React Error Boundary"],
      "환경 구성": [".env"],
      "기타 도구": ["MSW(Mock Service Worker)"],
    },
    troubleshooting: [
      {
        problem:
          "최초 접속 시 로컬 스토리지에서 토큰을 불러오는 과정이, 페이지 렌더링보다 늦게 이루어져 첫 렌더링 시 에러 페이지로 이동되는 문제 발생",
        solution:
          "App 컴포넌트에서 토큰 여부에 따른 조건부 렌더링을 적용하고, 토큰이 없을 경우 로딩 상태를 유지하여 페이지 렌더링 지연",
      },
      {
        problem:
          "React Query를 이용한 데이터 캐싱 때문에, 재료를 추가하거나 삭제한 후에도 이전 데이터가 남아있는 문제 발생",
        solution:
          "재료 추가 및 삭제 후, React Query의 invalidateQueries 메서드를 사용하여 해당 쿼리를 무효화하고 새 데이터를 가져오도록 수정",
      },
    ],
    retrospective: [],
  },
  mailAt: {
    project: {
      title: "메일앳 (Mail@)",
      name: "SSAFY 12기 2학기 자율 프로젝트",
      description: "AI 기반의 이메일 관리 서비스",
      background:
        "Outlook과 같은 이메일 서비스는 많은 기능을 제공하지만, 사용하기에 복잡하며 사내 정책에 따라 사용이 제한되는 경우가 많습니다.\n이러한 문제를 해결하기 위해, 로컬 LLM 모델을 탑재한 그래프 기반의 관계형 메일 관리 서비스를 기획하게 되었습니다.",
      logo: mailAtLogo,
      thumbnail: mailAtLogo,
      "mini-duration": "2025. 04 ~ 2025. 05.",
      duration: "2025. 04. 14. ~ 2025. 05. 22.",
      team: [
        ["Frontend", 1],
        ["Backend", 2],
        ["AI", 3],
      ],
      collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
      usage_tools: [
        "TypeScript",
        "HTML5",
        "CSS",
        "Node.js",
        "Electron",
        "React.js",
        "Vite",
        "Zustand",
        "React Query",
        "Axios API",
        "IPC",
        "React Quill",
        "MSW",
        "React Router",
        "ESLint",
        "Prettier",
        "React Force Graph",
      ],
      award: "",
      github: "",
      presentation: "",
      imgSrc: [],
    },
    responsibilities: {
      role: "Frontend",
      tasks: {
        "메일 관리 페이지 제작": [
          "메일 목록 페이지 제작",
          "메일 상세 정보 페이지 제작",
          "메일 검색 기능 구현",
          "메일 분류 및 필터링 기능 구현",
        ],
        "메일 작성 페이지 제작": [
          "메일 작성 페이지 제작",
          "메일 수신자, 참조인 및 제목 입력 기능 구현",
          "메일 본문 작성 기능 구현",
          "본문 작성 시 AI 기반의 맞춤법 교정 및 추천 기능 구현",
          "본문 작성 시 다양한 글꼴 및 스타일 적용 기능 구현",
          "답장 및 전달 시 원본 메일 내용 자동 삽입 기능 구현",
        ],
        "그래프 기반의 관계 페이지 구현": [
          "사용자와 메일 간의 관계를 시각화한 그래프 페이지 제작",
          "로컬에서 실행되는 AI 모델을 활용한 메일 분류 및 그래프화",
          "그래프 구성 요소 및 스타일링 구현",
          "그래프 이동, 병합, 삭제 등의 상호작용 기능 구현",
        ],
      },
    },
    technologies: {
      "Program Language": ["TypeScript", "HTML5", "Tailwind CSS"],
      "Language Engine": ["Node.js"],
      "Web SPA Library": ["Electron", "React.js"],
      "Bundling Tool": ["Vite"],
      "State Management": ["Zustand"],
      "Code Analysis Tool": ["ESLint", "Prettier"],
      "API 통신": ["Axios", "IPC", "React Query"],
      "비동기 처리 및 오류 복구": ["React Query"],
      "환경 구성": [".env"],
      "기타 도구": ["MSW(Mock Service Worker)", "React Force Graph", "React Quill"],
    },

    troubleshooting: [
      {
        problem: "alert, confirm과 같은 브라우저 기본 팝업 사용 시, 이후 Electron이 입력을 받지 못하는 문제 발생",
        solution: "커스텀 모달 컴포넌트를 구현하여 브라우저 기본 팝업 대신 사용",
      },
      {
        problem:
          "html 형식으로 작성된 메일 본문을 렌더링 시, 어플 내 전체 스타일에 영향을 주어 프로그램의 레이아웃 깨짐 현상 발생",
        solution: "본문을 렌더링 시, 스타일을 제거하고 링크를 새 창에서 열리도록 설정하는 함수를 구현하여 적용",
      },
      {
        problem: "React Force Graph를 사용하여 그래프를 렌더링할 때, 노드 간의 관계가 복잡해지면서 성능 저하 발생",
        solution: "그래프 렌더링 최적화를 위해 React.memo와 useCallback을 적극적으로 활용",
      },
    ],
    retrospective: [],
  },
  portfolio: {
    project: {
      title: "개인 포트폴리오",
      name: "개인 프로젝트",
      description: "개인 포트폴리오 웹사이트",
      background:
        "개발자로서의 성장과 경험을 정리하고, 나의 기술 스택과 프로젝트를 소개하기 위해 개인 포트폴리오 웹사이트를 제작하게 되었습니다.",
      logo: "",
      thumbnail: portfolioThumbnail,
      "mini-duration": "2025. 05 ~ 현재",
      duration: "2025. 05. 23. ~ 현재",
      team: [["Frontend", 1]],
      collaboration_tools: ["GitHub", "GitLab"],
      usage_tools: [
        "TypeScript",
        "HTML5",
        "CSS",
        "React.js",
        "Vite",
        "Zustand",
        "React Router",
        "ESLint",
        "Prettier",
        "GSAP",
        "clsx",
      ],
      award: "",
      github: "https://github.com/SJLee-0525/portfolio",
      presentation: "",
      imgSrc: [],
    },
    responsibilities: {
      role: "Frontend",
      tasks: {
        "포트폴리오 메인 페이지 제작": [
          "나의 기술 스택과 프로젝트를 소개하는 메인 페이지 제작",
          "애니메이션 효과와 반응형 디자인 적용",
        ],
        "프로젝트 상세 페이지 제작": [
          "모달 기반의 페이지로 각 프로젝트를 소개하는 페이지 제작",
          "프로젝트 이미지 및 동영상 삽입",
          "프로젝트의 개요 및 기술 스택 소개",
          "프로젝트의 문제 해결 과정 및 결과 공유",
        ],
        "기술 스택 소개 페이지 제작": [
          "사용한 기술 스택을 소개하는 페이지 제작",
          "각 기술 스택에 대한 설명 및 사용 예시 제공",
        ],
        "연락처 페이지 제작": [
          "나와 연락할 수 있는 방법을 제공하는 페이지 제작",
          "소셜 미디어 링크 및 이메일 주소 제공",
        ],
      },
    },
    technologies: {
      "Program Language": ["TypeScript", "HTML5", "TailwindCSS"],
      "Language Engine": ["Node.js"],
      "Web SPA Library": ["React.js"],
      "Bundling Tool": ["Vite"],
      "State Management": ["Zustand"],
      "Code Analysis Tool": ["ESLint", "Prettier"],
      etc: ["clsx", "GSAP"],
    },
    troubleshooting: [],
    retrospective: [],
  },
  // aidap1: {
  //   project: {
  //     title: "아이답 (AIDAP)",
  //     name: "SSAFY 12기 관통 프로젝트 (금융)",
  //     description: "생성형 AI와 금융 데이터를 활용한 금융 상품 로보 어드바이저 서비스",
  //     logo: aidapLogo,
  //     "mini-duration": "2024. 11 ~ 2024. 11.",
  //     duration: "2024. 11. 18. ~ 2024. 11. 26.",
  //     team: [
  //       ["Frontend", 1],
  //       ["Backend", 1],
  //     ],
  //     collaboration_tools: ["GitLab", "Mattermost"],
  //     usage_tools: ["JavaScript", "HTML5", "CSS", "Node.js", "Vue.js", "Vite", "Pinia", "Bootstrap", "Axios API"],
  //     award: "SSAFY 12기 1학기 관통 프로젝트 최우수상(1위) 수상",
  //     videoUrl: "https://www.youtube.com/embed/gtoMOWh9y9M?si=L93WYOyjigbxeyK3",
  //     imgSrc: [
  //       aidapHomeImg,
  //       aidapLoginImg,
  //       aidapSignupImg,
  //       aidapProfileImg,
  //       aidapNewsImg,
  //       aidapDepositList,
  //       aidapDepositCal,
  //       aidapMortgageList,
  //       aidapMortgageCal,
  //       aidapProductDetailImg,
  //       aidapAiChatImg,
  //       aidapCommunityImg,
  //       aidapCommunityDetailImg,
  //     ],
  //   },
  //   responsibilities: {
  //     role: "Frontend",
  //     tasks: {
  //       "AI 챗봇 기능 구현": ["AI 챗봇 기능 구현", "AI 챗봇 UI/UX 설계 및 구현", "AI 챗봇 API 연동 및 데이터 처리"],
  //       "금융 상품 추천 기능 구현": [
  //         "금융 상품 추천 기능 구현",
  //         "금융 상품 추천 UI/UX 설계 및 구현",
  //         "금융 상품 추천 API 연동 및 데이터 처리",
  //         "금융 상품 추천 결과 페이지 구현",
  //         "금융 상품에 따른 이자 계산기 기능 구현",
  //       ],
  //       "커뮤니티 기능 구현": [
  //         "커뮤니티 UI/UX 설계 및 구현",
  //         "커뮤니티 API 연동 및 데이터 처리",
  //         "게시판 카테고리 구성 및 게시글 작성 기능 구현",
  //         "게시글 검색 및 필터링 기능 구현",
  //         "게시글 좋아요 및 댓글 기능 구현",
  //       ],
  //       "소셜 로그인 기능 구현": [
  //         "카카오 계정을 이용한 회원 가입 및 로그인 기능 구현",
  //         "소셜 로그인 UI/UX 설계 및 구현",
  //       ],
  //     },
  //   },
  //   technologies: {
  //     "Program Language": ["JavaScript", "HTML5", "CSS"],
  //     "Language Engine": ["Node.js"],
  //     "Web SPA Library": ["Vue.js"],
  //     "Bundling Tool": ["Vite"],
  //     "State Management": ["Pinia"],
  //     etc: ["Bootstrap"],
  //   },
  //   retrospective: {
  //     positives: [],
  //     negatives: [],
  //   },
  // },
  // her1o: {
  //   project: {
  //     title: "영웅이",
  //     name: "SSAFY 12기 공통 프로젝트 (AIoT)",
  //     description: "AI 실버케어 로봇 플랫폼 서비스",
  //     logo: heroLogo,
  //     "mini-duration": "2025. 01 ~ 2025. 02.",
  //     duration: "2025. 01. 06. ~ 2025. 02. 21.",
  //     team: [
  //       ["Frontend", 2],
  //       ["Backend", 2],
  //       ["Embedded", 2],
  //     ],
  //     collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
  //     usage_tools: [
  //       "JavaScript",
  //       "HTML5",
  //       "CSS",
  //       "Node.js",
  //       "React.js",
  //       "Vite",
  //       "React Context API",
  //       "GSAP",
  //       "Recharts.js",
  //       "Date-fns",
  //       "QRCode.react",
  //       "React Router",
  //       "ESLint",
  //       "Prettier",
  //       "Fetch API",
  //     ],
  //     award: "SSAFY 12기 공통 프로젝트 최우수상(1위) 수상",
  //     videoUrl: "https://www.youtube.com/embed/LQlEIiO-5KE?si=yiSNqXRtNwi9Rvbj",
  //     imgSrc: [
  //       heroHomeImg,
  //       heroMobileHomeImg,
  //       heroNormalNotiImg,
  //       heroNotiImg,
  //       heroNotiPeriodImg,
  //       heroCalendarImg,
  //       heroMessageImg,
  //       heroHealthImg,
  //       heroEmotionalReportImg,
  //       heroMentalReportImg,
  //       heroFamilyInfoImg,
  //       heroMemberInfoImg,
  //     ],
  //   },
  //   responsibilities: {
  //     role: "Frontend",
  //     tasks: {
  //       "보호자 페이지 개발": [
  //         "보호자 페이지 메인 화면 제작",
  //         "보호자 페이지 알림 기능 구현",
  //         "보호자 페이지 캘린더 기능 구현",
  //         "보호자 페이지 메시지 기능 구현",
  //         "보호자 페이지 건강 정보 조회 기능 구현",
  //         "보호자 페이지 감정 리포트 조회 기능 구현",
  //         "보호자 페이지 정신 리포트 조회 기능 구현",
  //         "보호자 페이지 가족 정보 조회 기능 구현",
  //         "보호자 페이지 가족 정보 수정 기능 구현",
  //         "QR 코드 생성 및 접근 경로에 따른 코드 분기 처리",
  //       ],
  //       "모달 기반의 UI/UX 설계": [
  //         "재사용 가능한 모달 컴포넌트 설계 및 구현",
  //         "페이지 이동을 최소화함으로써 앱과 유사한 사용자 경험 제공",
  //       ],
  //       "사용자 경험 향상을 위한 애니메이션 효과 구현": [
  //         "CSS keyframes를 활용한 애니메이션 효과 구현",
  //         "GSAP 라이브러리를 활용한 고급 애니메이션 효과 구현",
  //       ],
  //     },
  //   },
  //   technologies: {
  //     "Program Language": ["JavaScript", "HTML5", "CSS"],
  //     "Language Engine": ["Node.js"],
  //     "Web SPA Library": ["React.js"],
  //     "Bundling Tool": ["Vite"],
  //     "State Management": ["React Context API"],
  //     "Code Analysis Tool": ["ESLint", "Prettier"],
  //     etc: ["Recharts", "date-fns", "GSAP"],
  //   },
  //   retrospective: {
  //     positives: [],
  //     negatives: [],
  //   },
  // },
  // recip1edia: {
  //   project: {
  //     title: "레시피디아",
  //     name: "삼성전자 DA사업부-SSAFY 연계 프로젝트",
  //     description: "생성형 AI 기반 레시피 추천 서비스",
  //     logo: recipediaLogo,
  //     "mini-duration": "2025. 02 ~ 2025. 04.",
  //     duration: "2025. 02. 24. ~ 2025. 04. 11.",
  //     team: [
  //       ["Frontend", 2],
  //       ["Backend", 2],
  //       ["AI", 2],
  //     ],
  //     collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
  //     usage_tools: [
  //       "TypeScript",
  //       "HTML5",
  //       "CSS",
  //       "Node.js",
  //       "React.js",
  //       "Vite",
  //       "Zustand",
  //       "React Query",
  //       "MSW",
  //       "React Router",
  //       "ESLint",
  //       "Prettier",
  //       "React Error Boundary",
  //       "Tailwind CSS",
  //       "MSW",
  //       "Axios API",
  //     ],
  //     award: "삼성전자 DA사업부 연계 프로젝트 우수상(2위) 수상",
  //     videoUrl: "https://www.youtube.com/embed/0g3r7vXk8nE?si=6x5q9JmQe0aWcGzR",
  //     imgSrc: [],
  //   },
  //   responsibilities: {
  //     role: "Frontend",
  //     tasks: {
  //       "재료 관리 페이지 제작": [
  //         "고내 식재료 목록 페이지 제작,",
  //         "식재료 상세 정보 모달 구현",
  //         "식재료 입출고 기능 구현",
  //         "식재료 검색 시 자동 완성 및 추천 기능 구현",
  //         "React Query를 사용한 데이터 캐싱 및 적절한 API 호출",
  //         "디바운스 훅을 사용해 자동 완성 및 추천 기능 시 API 호출 최적화",
  //         "화면 드래그 시 실시간으로 페이지 렌더링함으로써 사용자 경험 향상",
  //       ],
  //       "사용자 설정 페이지 제작": [
  //         "프로필 변경 페이지 제작",
  //         "프로필 별 식단 설정 기능 구현",
  //         "사용자 정보 추가 및 삭제 기능 구현",
  //       ],
  //       "MSW를 활용한 Mock API 서버 구축": [
  //         "개발 환경에서 API 서버를 Mocking하여 프론트엔드 개발",
  //         "MSW를 사용해 API 요청을 가로채고 Mock 데이터로 응답",
  //         "API 요청 및 응답을 시뮬레이션하여 프론트엔드 개발과 API 서버 개발을 독립적으로 진행",
  //       ],
  //     },
  //   },
  //   technologies: {
  //     "Program Language": ["TypeScript", "HTML5", "CSS"],
  //     "Language Engine": ["Node.js"],
  //     "Web SPA Library": ["React.js"],
  //     "Bundling Tool": ["Vite"],
  //     "State Management": ["Zustand"],
  //     "Code Analysis Tool": ["ESLint", "Prettier"],
  //     "API 통신": ["Axios", "React Query"],
  //     "비동기 처리 및 오류 복구": ["React Query", "React Error Boundary"],
  //     "환경 구성": [".env"],
  //     "기타 도구": ["MSW(Mock Service Worker)"],
  //   },
  //   retrospective: {
  //     positives: [],
  //     negatives: [],
  //   },
  // },
  // mailA1t: {
  //   project: {
  //     title: "메일앳 (Mail@)",
  //     name: "SSAFY 12기 2학기 관통 프로젝트 (AIoT)",
  //     description: "AI 기반의 이메일 관리 서비스",
  //     logo: mailAtLogo,
  //     "mini-duration": "2025. 04 ~ 2025. 05.",
  //     duration: "2025. 04. 14. ~ 2025. 05. 22.",
  //     team: [
  //       ["Frontend", 1],
  //       ["Backend", 2],
  //       ["AI", 3],
  //     ],
  //     collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
  //     usage_tools: [
  //       "TypeScript",
  //       "HTML5",
  //       "CSS",
  //       "Node.js",
  //       "Electron",
  //       "React.js",
  //       "Vite",
  //       "Zustand",
  //       "React Query",
  //       "Axios API",
  //       "IPC",
  //       "React Quill",
  //       "MSW",
  //       "React Router",
  //       "ESLint",
  //       "Prettier",
  //       "React Force Graph",
  //     ],
  //     award: "",
  //     videoUrl: "",
  //     imgSrc: [],
  //   },
  //   responsibilities: {
  //     role: "Frontend",
  //     tasks: {
  //       "메일 관리 페이지 제작": [
  //         "메일 목록 페이지 제작",
  //         "메일 상세 정보 페이지 제작",
  //         "메일 검색 기능 구현",
  //         "메일 분류 및 필터링 기능 구현",
  //       ],
  //       "메일 작성 페이지 제작": [
  //         "메일 작성 페이지 제작",
  //         "메일 수신자, 참조인 및 제목 입력 기능 구현",
  //         "메일 본문 작성 기능 구현",
  //         "본문 작성 시 AI 기반의 맞춤법 교정 및 추천 기능 구현",
  //         "본문 작성 시 다양한 글꼴 및 스타일 적용 기능 구현",
  //         "답장 및 전달 시 원본 메일 내용 자동 삽입 기능 구현",
  //       ],
  //       "그래프 기반의 관계 페이지 구현": [
  //         "사용자와 메일 간의 관계를 시각화한 그래프 페이지 제작",
  //         "로컬에서 실행되는 AI 모델을 활용한 메일 분류 및 그래프화",
  //         "그래프 구성 요소 및 스타일링 구현",
  //         "그래프 이동, 병합, 삭제 등의 상호작용 기능 구현",
  //       ],
  //     },
  //   },
  //   technologies: {
  //     "Program Language": ["TypeScript", "HTML5", "CSS"],
  //     "Language Engine": ["Node.js"],
  //     "Web SPA Library": ["Electron", "React.js"],
  //     "Bundling Tool": ["Vite"],
  //     "State Management": ["Zustand"],
  //     "Code Analysis Tool": ["ESLint", "Prettier"],
  //     "API 통신": ["Axios", "IPC", "React Query"],
  //     "비동기 처리 및 오류 복구": ["React Query"],
  //     "환경 구성": [".env"],
  //     "기타 도구": ["MSW(Mock Service Worker)", "React Force Graph", "React Quill"],
  //   },
  //   retrospective: {
  //     positives: [],
  //     negatives: [],
  //   },
  // },
};
