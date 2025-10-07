import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PROFILE_INFO } from "@data/ProfileInfo";

import ProfileEducation from "@pages/profile/component/ProfileEducation";
import ProfileAwards from "@pages/profile/component/ProfileAwards";

const ProfileInfo = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!PROFILE_INFO) return;

    if (!educationRef.current || !awardsRef.current) return;

    gsap.set(educationRef.current, { opacity: 0, x: -60 });
    gsap.set(awardsRef.current, { opacity: 0, x: 60 });

    const eduAnim = gsap.to(educationRef.current, {
      opacity: 1,
      x: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: educationRef.current,
        start: "top 95%",
        end: "bottom 75%",
        scrub: true,
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    const awardAnim = gsap.to(awardsRef.current, {
      opacity: 1,
      x: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: awardsRef.current,
        start: "top 95%",
        end: "bottom 75%",
        scrub: true,
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      eduAnim.kill();
      awardAnim.kill();
    };
  }, []);

  if (!PROFILE_INFO) {
    return null;
  }

  return (
    <>
      <section className="relative flex-1 flex flex-col items-center w-full h-fit gap-18 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div ref={educationRef} className="w-full h-fit">
          <ProfileEducation educations={PROFILE_INFO.educations} />
        </div>

        <div ref={awardsRef} className="w-full h-fit">
          <ProfileAwards awards={PROFILE_INFO.awards} />
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
