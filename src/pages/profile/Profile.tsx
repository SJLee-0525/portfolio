import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { PROFILE_INFO } from "@data/ProfileInfo";

import ProfileImageCarousel from "@pages/profile/component/ProfileImageCarousel";
import ProfileInnerProfile from "@pages/profile/component/ProfileInnerProfile";

interface ProfileProps {
  infoReady: boolean;
  setInfoReady: (info: boolean) => void;
  // onScrollToInterview: () => void;
}

const Profile = ({
  infoReady,
  setInfoReady,
  // onScrollToInterview
}: ProfileProps) => {
  const [showScroll, setShowScroll] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.set(carouselRef.current, { opacity: 0, x: -60 });
    }
  }, []);

  useEffect(() => {
    if (infoReady && carouselRef.current) {
      gsap.to(carouselRef.current, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" });
      setShowScroll(true);
    }
  }, [infoReady]);

  return (
    <section className="flex flex-col xl:flex-row justify-center xl:justify-between items-center w-full h-full px-4 md:px-24 gap-16 md:gap-8 overflow-x-hidden">
      <div
        ref={carouselRef}
        className="flex flex-col items-center justify-center w-full h-2/5 md:h-3/5 xl:w-2/5 xl:min-w-lg xl:h-full"
      >
        <ProfileImageCarousel />
      </div>

      <ProfileInnerProfile
        innerProfile={PROFILE_INFO.innerProfile}
        onAnimationEnd={() => setInfoReady(true)}
        showScroll={showScroll}
        setShowScroll={setShowScroll}
        // onScrollToInterview={onScrollToInterview}
      />
    </section>
  );
};

export default Profile;
