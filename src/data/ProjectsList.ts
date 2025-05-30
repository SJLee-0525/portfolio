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
        "프론트엔드 UI/UX 개발": [
          "홈페이지 및 인증 페이지(로그인/회원가입) UI/UX 설계 및 구현",
          "사용자 프로필 및 금융 상품 관련 페이지 UI/UX 설계 및 구현",
          "뉴스 페이지 및 커뮤니티 페이지 UI/UX 설계 및 구현",
          "금융 상품 계산기(예적금/대출) 인터페이스 구현",
          "AI 챗봇 대화형 UI/UX 설계 및 구현",
        ],
        "금융 상품 데이터 및 추천 시스템": [
          "금융감독원 API 연동을 통한 예적금/대출 상품 데이터 처리",
          "사용자 맞춤형 금융 상품 추천 알고리즘 구현",
          "금융 상품 상세 정보 조회 및 비교 기능 개발",
          "예적금 및 대출 이자 계산기 로직 구현",
        ],
        "위치 기반 서비스": [
          "카카오 지도 API 연동 및 사용자 위치 정보 처리",
          "선택한 금융 상품 기반 주변 지점 자동 검색 기능",
        ],
        "AI 챗봇 시스템": [
          "AI 모델 API 연동 및 자연어 처리 기능 구현",
          "대화형 인터페이스 및 실시간 응답 시스템 개발",
          "금융 상품 상담 및 추천 챗봇 로직 구현",
        ],
        "커뮤니티 플랫폼": [
          "게시판 CRUD 기능 및 카테고리 관리 시스템 구현",
          "게시글 검색, 필터링 및 정렬 기능 개발",
          "사용자 인터랙션 기능(좋아요, 댓글) 구현",
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
        problem: "카카오 소셜 로그인으로 회원가입 시 금융 상품 추천에 필요한 사용자 정보 부족",
        solution:
          "카카오 회원가입 완료 후 추가 정보 입력 폼으로 자동 리다이렉트하여, 개인화 서비스에 필요한 데이터를 수집",
      },
    ],
    retrospective: [
      "SSAFY에서 처음 코딩을 배우기 시작해 이번 최종 관통 프로젝트에서 그간 배운 내용을 바탕으로 구현하고 싶던 기능들을 직접 개발해볼 수 있었습니다.\n재미와 성취감을 느끼는 동시에, 부족한 점도 많이 깨달으며 의미 있는 성장을 경험했습니다.",
      "이번 프로젝트를 통해 협업의 중요성을 깊이 체감했습니다.\n팀원들과의 원활한 소통과 역할 분담을 통해 효율적으로 작업을 진행할 수 있었고, 서로의 강점을 살려 프로젝트를 성공적으로 완성할 수 있었습니다.",
      "짧은 기간 내에 많은 기능을 구현해야 했기 때문에 시간 관리와 우선순위 설정의 중요성을 배우게 되었습니다.\n초기 기획 단계에서 명확한 목표를 설정하고 이를 중심으로 개발을 진행한 경험은 앞으로의 프로젝트에 큰 자산이 될 것이라 생각합니다.",
      "개발에 집중하느라 UI/UX 측면에서 아쉬운 점이 있었던 것이 가장 큰 반성이었습니다.\n다음 프로젝트에서는 기획 초기부터 UI/UX를 충분히 고려해 사용자 친화적인 결과물을 만들 수 있도록 개선할 계획입니다.",
      "기술적으로 부족했던 부분들을 실전에서 마주하며 학습하고 성장할 수 있는 기회가 되었습니다.\n앞으로도 꾸준히 학습하며, 팀에 도움이 되는 개발자가 되기 위해 노력하겠습니다.",
    ],
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
        "보호자 페이지 UI/UX 개발": [
          "보호자 메인 대시보드 및 알림 시스템 구현",
          "캘린더 일정 관리 및 가족 간 메시지 기능 개발",
          "건강 정보 조회 및 감정/정신 리포트 분석 기능 구현",
          "가족 정보 관리 및 수정 권한 시스템 개발",
        ],
        "모달 기반 UI/UX 시스템 구축": [
          "재사용 가능한 모달 컴포넌트 라이브러리 개발",
          "페이지 전환 최소화를 통한 앱 수준의 사용자 경험 구현",
          "모달 상태 관리 및 라우팅 최적화",
        ],
        "애니메이션 효과 및 인터랙션 구현": [
          "CSS keyframes 기반 UI 애니메이션 효과 개발",
          "GSAP 라이브러리를 활용한 고급 애니메이션 시스템 구축",
          "사용자 액션 기반 동적 인터랙션 개발",
        ],
        "차트 및 데이터 시각화 구현": [
          "Recharts를 활용한 건강 및 감정 데이터 차트 개발",
          "사용자 맞춤형 리포트 대시보드 구현",
          "반응형 데이터 시각화 컴포넌트 개발",
        ],
        "QR 코드 가족 연동 기능 개발": [
          "QRCode.react를 이용한 QR 코드 생성 시스템 구현",
          "QR 코드 기반 가족 정보 공유 및 연동 기능 개발",
          "QR 접속 시 인증 상태 확인 및 라우팅 처리",
        ],
        "API 통신 및 데이터 관리": [
          "Fetch API 기반 서버 통신 및 데이터 처리 구현",
          "비동기 처리 최적화 및 에러 핸들링 시스템 구축",
          "API 응답 캐싱 및 성능 최적화",
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
        problem: "fixed 속성의 사이드 네비게이션 바에서 z-index 미적용으로 인한 레이어 겹침 문제",
        solution:
          "createPortal을 활용하여 네비게이션을 별도 DOM 트리로 분리하고, z-index 계층 구조를 재설계하여 알림 애니메이션과의 충돌 해결",
      },
      {
        problem: "복잡한 상태 관리와 컴포넌트 간 의존성 증가로 인한 관리 복잡도 문제",
        solution:
          "React Context API를 활용한 전용 API store를 구현하여 데이터 fetching 로직을 중앙화하여 상태 관리 단순화",
      },
      {
        problem: "QR 코드 기반 가족 정보 연동 시 비로그인 사용자의 접근 권한 문제",
        solution:
          "QR 코드 접속 여부를 감지하는 라우터 가드를 구현하여, 미인증 사용자의 경우 자동으로 로그인 페이지로 리다이렉트 처리",
      },
    ],
    retrospective: [
      "이번 프로젝트를 통해 AIoT 기술을 활용한 실버케어 로봇 플랫폼의 가능성을 직접 경험할 수 있었습니다.\n특히, 사용자 경험을 고려한 UI/UX 설계와 모달 기반의 인터페이스 구현이 큰 도전이었지만, 팀원들과의 협업을 통해 성공적으로 완성할 수 있었습니다.",
      "프로젝트 초기 기획 단계에서부터 명확한 목표 설정과 역할 분담이 중요하다는 것을 깨달았습니다.\n각자의 강점을 살려 효율적으로 작업을 진행할 수 있었고, 이는 프로젝트의 성공적인 결과로 이어졌습니다.",
      "프론트엔드 개발에서 애니메이션과 인터랙션 구현이 중요한 요소임을 다시 한번 느꼈습니다.\nGSAP 라이브러리를 활용하여 사용자 경험을 향상시키는 데 큰 도움이 되었으며, 앞으로도 이러한 기술을 적극 활용할 계획입니다.",
      "프로젝트 기간이 짧았던 만큼 시간 관리와 우선순위 설정의 중요성을 깊이 체감했습니다.\n초기 기획 단계에서 명확한 목표를 설정하고 이를 중심으로 개발을 진행한 경험은 앞으로의 프로젝트에 큰 자산이 될 것이라 생각합니다.",
      "메시지나 집안 상태 모니터링과 같은 실시간 데이터 처리 기능을 구현하면서, 데이터 송수신을 Polling 방식으로 구현한 것이 아쉬웠습니다.\n다음 프로젝트에서는 WebSocket을 이용해 이러한 부분을 개선하여 더 나은 사용자 경험을 제공할 수 있도록 노력하겠습니다.",
      "코드의 가독성과 유지보수성을 높이기 위해 컴포넌트 구조와 스타일링 방식을 개선할 필요성을 느꼈습니다.\n더 나은 코드 품질을 위해 설계 단계에서부터 컴포넌트 구조를 명확히 하여 재사용성을 높이고, 일관된 스타일링을 적용할 계획입니다.",
    ],
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
        "재료 관리 화면 개발": [
          "고내 식재료 목록 페이지 구현",
          "재료 입고 모달 구현",
          "재료 출고 모달 구현",
          "재료 상세 정보 모달 구현",
          "좌우로 스와이프하여 페이지 전환 및 추적 기능 구현",
        ],
        "사용자 프로필 관리 화면 개발": [
          "프로필 생성 및 설정 페이지 구현",
          "프로필 전환 모달 구현",
          "프로필 삭제 모달 구현",
          "프로필 개인화 필터 페이지 구현",
        ],
        "레시피 기록 및 즐겨찾기 화면 개발": [
          "페이지네이션을 활용한 기록 페이지 구현",
          "스와이프를 활용한 삭제 기능 구현",
          "기록 삭제 시 적절한 연산을 통해 페이지네이션 유지 및 조정",
        ],
        "개발용 Mock API 서버 구축": [
          "개발 환경에서 API 서버를 Mocking하여 프론트엔드 개발",
          "MSW를 사용해 API 요청을 가로채고 Mock 데이터로 응답",
          "API 요청 및 응답을 시뮬레이션하여 프론트엔드 개발과 API 서버 개발을 독립적으로 진행",
        ],
        "데이터 통신 및 상태 관리 시스템": [
          "Axios를 사용하여 API 요청 및 응답 처리",
          "React Query를 사용하여 데이터 캐싱",
          "재료 입고 및 출고 등 캐시된 데이터의 갱신이 필요할 시, invalidateQueries를 이용한 캐시 무효화 및 새 데이터 갱신",
        ],
        "에러 처리 및 복구 시스템": [
          "React Error Boundary를 사용하여 컴포넌트 트리에서 발생하는 에러를 잡아내고, 사용자에게 에러 메시지 표시",
          "에러 발생 시, 전용 에러 페이지로 이동 및 사용자에게 재시도 버튼 제공",
        ],
        "식재료 검색 자동완성 기능": [
          "재료 검색 시 입력 자동완성 기능 구현",
          "사용자가 입력한 재료를 기반으로 추천 재료 목록 제공",
          "재료 검색 시, 재료 이름과 함께 재료 이미지도 함께 표시",
          "디바운스 훅을 사용하여 입력 시 API 호출 최적화",
          "재료 입고 및 개인 선호/비선호 재료 선택 시 해당 기능 제공",
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
        problem: "앱 초기 로딩 시 로컬 스토리지 토큰 확인이 렌더링보다 지연되어 에러 페이지 이동",
        solution:
          "App 컴포넌트에서 토큰 로딩 상태를 관리하고, 토큰 확인이 완료될 때까지 로딩 UI를 표시하여 조건부 렌더링으로 race condition 해결",
      },
      {
        problem: "React Query 캐싱으로 인한 재료 추가/삭제 후 데이터 동기화 문제",
        solution:
          "재료 CRUD 작업 완료 후 invalidateQueries 메서드를 활용하여 관련 쿼리 캐시를 무효화하고, 최신 데이터로 자동 refetch 되도록 구현",
      },
      {
        problem: "재료 출고 후 브라우저 뒤로가기 시 이전 선택 상태가 유지되는 문제",
        solution:
          "페이지 이동 시점에 선택된 재료 상태를 초기화하고, 필요한 데이터는 페이지 간 props로 전달하여 브라우저 히스토리와 상태 관리를 분리",
      },
    ],
    retrospective: [
      "삼성전자와의 연계 프로젝트를 통해 실무 환경에서의 개발 경험을 쌓을 수 있었습니다.\n특히, 생성형 AI를 활용한 레시피 추천 서비스 개발은 매우 흥미롭고 도전적인 경험이었습니다.",
      "실제 냉장고를 사용해보며 사용자가 직관적으로 이해하고 편리하게 사용할 수 있는 인터페이스를 구현하기 위해 많은 노력을 기울였습니다.\n사용자의 입장에서 생각하며 UI/UX를 설계하는 것이 얼마나 중요한지 다시 한 번 깨달을 수 있는 기회였습니다.",
      "팀원들과의 협업을 통해 각자의 역할을 명확히 하고, 효율적인 작업 분담이 프로젝트 성공에 얼마나 중요한지 깨달았습니다.\n서로의 강점을 살려 최상의 결과물을 만들어낼 수 있었습니다.",
      "React Query를 활용한 데이터 캐싱과 상태 관리와 Debounce 훅을 사용한 API 호출 최적화, MSW를 사용한 Mock API 서버 구축 등 프론트엔드 개발에서의 다양한 기술적 도전을 경험했습니다.\n이러한 기술들을 통해 프로젝트의 성능과 개발 능률을 크게 향상시킬 수 있었습니다.",
      "개발 과정에서 발생한 다양한 문제들을 해결하면서, 문제 해결 능력과 디버깅 기술이 크게 향상되었습니다.\n앞으로도 이러한 경험을 바탕으로 더 나은 개발자가 되기 위해 노력하겠습니다.",
    ],
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
        "Electron 커스텀 타이틀바 개발": [
          "Electron 기본 타이틀바를 제거하고, 커스텀 타이틀바 제작",
          "타이틀바에 앱 이름 및 로고 표시",
          "타이틀바에 새로고침, 최소화, 전체화면 전환, 닫기 버튼 구현",
          "타이틀 바 빈 영역 클릭 시 앱 창 이동 기능 구현",
          "로딩 중인 상태가 있을 경우, 타이틀바에 로딩 스피너 및 정보 표시",
        ],
        "메일 목록 및 조회 화면 개발": [
          "메일 목록 페이지 제작",
          "메일 상세 정보 페이지 제작",
          "메일 검색 기능 구현",
          "메일 분류 및 필터링 기능 구현",
        ],
        "메일 작성 및 편집 화면 개발": [
          "메일 작성 페이지 제작",
          "메일 수신자, 참조인 및 제목 입력 기능 구현",
          "메일 본문 작성 기능 구현",
          "본문 작성 시 AI 기반의 맞춤법 교정 및 추천 기능 구현",
          "본문 작성 시 다양한 글꼴 및 스타일 적용 기능 구현",
          "답장 및 전달 시 원본 메일 내용 및 수신자 자동 삽입 기능 구현",
        ],
        "관계 시각화 그래프 화면 개발": [
          "React Force Graph를 활용해, 사용자와 메일 간의 관계를 시각화한 그래프 페이지 제작",
          "로컬에서 실행되는 AI 모델을 활용한 메일 분류 및 그래프화",
          "그래프 구성 요소 및 스타일링 구현",
          "그래프 이동, 병합, 삭제 등의 상호작용 기능 구현",
        ],
        "HTML 메일 렌더링 및 링크 처리": [
          "html 형식으로 작성된 메일 본문 렌더링 시, 본문 스타일을 유지한 채로 렌더링 하도록 구현",
          "html 본문 내 스타일이 전체 페이지에 영향을 주지 않도록 스타일을 제거하는 함수 구현",
          "본문 내 외부 사이트로 연결되는 링크 클릭 시, 새 창에서 열리도록 처리",
        ],
        "테마 및 UI 커스터마이징": [
          "Light/Dark 모드 테마 기능 구현",
          "테마 변경 시 전체 페이지에 적용되는 기능 구현",
          "사용자가 설정한 테마를 로컬 스토리지에 저장하고 불러오는 기능 구현",
        ],
        "AI 기반 메일 작성 지원": [
          "AI 모델을 활용해 사용자가 작성한 본문 기반으로 하는 내용 자동완성 추천 혹은 메일 초안 생성 기능 구현",
          "맞춤법 오류 발견 시 AI 모델을 활용한 교정 기능 구현",
          "Tap키를 눌러 추천된 내용을 본문에 삽입하는 기능 구현",
          "디바운스 훅을 사용하여 입력 시 API 호출 최적화",
        ],
        "Electron 통신 및 데이터 관리 시스템": [
          "IPC를 사용하여 Electron과의 통신 구현",
          "React Query를 사용하여 데이터 캐싱 및 상태 관리",
          "메일 목록, 메일 상세 정보, 그래프 데이터 등을 React Query로 관리",
          "새 메일 수신 및 메일 삭제 등의 상태 변경 시 React Query의 invalidateQueries를 사용하여 캐시 무효화 및 새 메일 데이터 가져오기",
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
        problem: "Electron 환경에서 브라우저 기본 팝업(alert, confirm) 사용 시 입력 블로킹 문제",
        solution: "브라우저 기본 팝업을 대체할 커스텀 모달 컴포넌트를 구현하여 Electron의 입력 처리 방식과 호환성 확보",
      },
      {
        problem: "HTML 형식 메일 본문 렌더링 시 애플리케이션 전체 스타일 오염 문제",
        solution:
          "메일 본문 렌더링 전 스타일 태그를 제거하고, 링크의 target 속성을 _blank로 설정하는 sanitize 함수를 구현하여 스타일 격리",
      },
      {
        problem: "React Force Graph에서 복잡한 노드 관계 렌더링 시 성능 저하",
        solution:
          "React.memo로 불필요한 리렌더링을 방지하고, useCallback을 활용하여 이벤트 핸들러 메모이제이션으로 렌더링 최적화",
      },
      {
        problem: "React Query에서 초기 기본값과 이후 파라미터 변경에 따른 데이터 호출 제어 로직의 복잡성",
        solution:
          "queryKey에 파라미터를 포함하고 enabled 옵션으로 호출 시점을 제어. 초기 상태와 파라미터 상태를 분리하여 마운트 시에만 기본값으로 fetch하고, 이후에는 명시적 파라미터 변경으로 데이터 갱신",
      },
    ],
    retrospective: [
      "이번 프로젝트를 통해 Electron을 활용한 데스크톱 애플리케이션 개발 경험을 쌓을 수 있었습니다.\n특히, 로컬 LLM 모델을 탑재한 메일 관리 서비스는 매우 흥미롭고 도전적인 경험이었습니다.",
      "기존 메일 시스템에 불편함을 느끼는 사용자들을 위해, 직관적이고 사용하기 쉬운 UI/UX를 구현하는 데 중점을 두었습니다.\n그 과정에서 많은 고민과 시행착오가 있었지만, 사용자 관점에서 개발하는 능력을 키울 수 있었던 좋은 기회였습니다.",
      "프론트엔드 개발에서 Electron과 React의 통합, IPC 통신, React Query를 활용한 상태 관리 등 다양한 기술적 도전을 경험했습니다.\n이러한 기술들을 통해 프로젝트의 성능과 개발 능률을 크게 향상시킬 수 있었습니다.",
      "AI 기반의 메일 작성 지원 기능 구현은 매우 흥미로운 경험이었습니다.\n사용자의 편의를 고려한 기능 설계와 구현이 중요하다는 것을 다시 한 번 깨달았습니다.",
    ],
  },
  portfolio: {
    project: {
      title: "개인 포트폴리오",
      name: "개인 프로젝트",
      description: "개인 포트폴리오 웹사이트",
      background:
        "개발자로서의 성장과 경험을 정리하고, 저의 기술 스택과 프로젝트를 소개하기 위해 개인 포트폴리오 웹사이트를 제작하게 되었습니다.",
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
        "페이지 UI/UX 설계 및 구현": [
          "페이지 메인 화면 제작",
          "기술 스택 페이지 제작",
          "자기소개 페이지 제작",
          "프로젝트 목록 페이지 제작",
        ],
        "자연스러운 애니메이션 효과 구현": [
          "GSAP 라이브러리 및 CSS keyframes를 사용하여 스크롤 애니메이션 및 요소 애니메이션 구현",
          "홈페이지 로딩 시 단계별 애니메이션 효과 구현",
          "애니메이션 진행 중 페이지 스크롤 방지 및 padding 추가로 레이아웃 유지",
        ],
        "해당 페이지로 스크롤 이동 기능 구현": [
          "네비게이션 바 내부 링크 클릭 시 해당 섹션으로 스크롤 이동 기능 구현",
          "스크롤 이동 시 부드러운 애니메이션 효과 적용",
        ],
        "모달 기반의 UI/UX 설계": [
          "프로젝트 상세 정보 모달 구현",
          "createPortal을 사용하여 모달을 root가 아닌 별도의 DOM 트리로 분리",
          "모달 열림 시 배경 스크롤 방지 및 padding 추가로 레이아웃 유지",
        ],
        "반응형 웹 디자인 구현": [
          "Tailwind CSS를 사용하여 반응형 웹 디자인 구현",
          "모바일 및 데스크톱 환경에서 최적화된 레이아웃 제공",
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
    troubleshooting: [
      {
        problem: "스크롤 방지 시 스크롤바 제거로 인해 레이아웃이 깨지는 문제",
        solution:
          "overflow-hidden 클래스를 동적으로 추가하고, 스크롤바 너비만큼 padding을 보정하여 레이아웃 shift 방지",
      },
      {
        problem: "SPA 환경에서 페이지 새로고침 시 스크롤 위치가 복원되는 문제",
        solution:
          "scrollRestoration='manual' 설정 후, 컴포넌트 마운트 시점에 location.hash를 초기화하고 setTimeout을 활용해 scrollTo(0,0)를 지연 실행하여 브라우저 복원 동작을 우회",
      },
      {
        problem: "타이핑 효과 구현 시 한글 조합형 문자가 깨져서 출력되는 문제",
        solution:
          "JavaScript의 문자열 인덱싱이 유니코드 코드 단위로 처리되는 특성을 고려하여, 스프레드 연산자([...text])로 문자열을 배열화해 완성형 한글 기준으로 문자 분리 처리",
      },
    ],
    retrospective: [
      "개인 포트폴리오 웹사이트를 제작하면서, 개발자로서의 성장과 경험을 정리하는 좋은 기회가 되었습니다.\n자신의 기술 스택과 프로젝트를 체계적으로 정리하고, 이를 통해 다른 사람들에게 저를 소개할 수 있는 플랫폼을 만들 수 있었습니다.",
      "Tailwind CSS를 활용한 반응형 웹 디자인 구현과 GSAP 라이브러리를 사용한 애니메이션 효과 구현을 통해 사용자 경험을 향상시키고자 노력했습니다.\n이 과정을 통해 웹 디자인과 애니메이션에 대한 이해도를 높일 수 있었습니다.",
      "개인 프로젝트로서 자유롭게 디자인과 기능을 구현할 수 있었고, 이를 통해 창의력을 발휘할 수 있었습니다.\n스스로 기획하고 개발하는 과정에서 많은 것을 배우고 성장할 수 있었습니다.",
    ],
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
