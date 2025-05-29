import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import { PROFILE_INFO } from "@data/ProfileInfo";

import ProfileInnerProfile from "@pages/profile/component/ProfileInnerProfile";
import ContactInfo from "@pages/profile/component/ProfileContactInfo";
import ProfileEducation from "@pages/profile/component/ProfileEducation";
import ProfileAwards from "@pages/profile/component/ProfileAwards";

interface ProfileInfoProps {
  onProfileInfoReady?: () => void;
}

const ProfileInfo = ({ onProfileInfoReady }: ProfileInfoProps) => {
  const [profileReady, setProfileReady] = useState(false);

  const innerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (innerRef.current) {
      gsap.set(innerRef.current, { opacity: 1, y: 0 });
    }

    if (contactRef.current) {
      gsap.set(contactRef.current, { opacity: 0, y: 40 });
    }

    if (educationRef.current) {
      gsap.set(educationRef.current, { opacity: 0, y: 40 });
    }

    if (awardsRef.current) {
      gsap.set(awardsRef.current, { opacity: 0, y: 40 });
    }
  }, []);

  useEffect(() => {
    if (profileReady) {
      if (contactRef.current) {
        gsap.to(contactRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      }

      if (educationRef.current) {
        gsap.to(educationRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      }

      if (awardsRef.current) {
        gsap.to(awardsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            if (onProfileInfoReady) onProfileInfoReady();
          },
        });
      } else {
        if (onProfileInfoReady) onProfileInfoReady();
      }
    }
  }, [profileReady, onProfileInfoReady]);

  if (!PROFILE_INFO) {
    return null;
  }

  return (
    <section
      ref={scrollSectionRef}
      className="flex-1 flex flex-col items-center w-full h-full gap-2 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative"
    >
      <section className="flex flex-col items-center justify-between w-full h-fit py-8 gap-16 lg:h-screen lg:py-20 flex-shrink-0">
        <div ref={innerRef} className="w-full h-fit flex justify-center items-center">
          <ProfileInnerProfile innerProfile={PROFILE_INFO.innerProfile} onAnimationEnd={() => setProfileReady(true)} />
        </div>
        <div ref={contactRef} className="w-full h-fit flex flex-col justify-center items-center">
          <ContactInfo contacts={PROFILE_INFO.contacts} />
        </div>
      </section>

      <section className="flex flex-col items-center w-full h-fit py-8 pb-16 gap-32">
        <div ref={educationRef} className="w-5/6 lg:w-3/4 h-fit">
          <ProfileEducation educations={PROFILE_INFO.educations} />
        </div>
        <div ref={awardsRef} className="w-5/6 lg:w-3/4 h-fit">
          <ProfileAwards awards={PROFILE_INFO.awards} />
        </div>
      </section>
    </section>
  );
};

export default ProfileInfo;
