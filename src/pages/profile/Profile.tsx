import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import ProfileImageCarousel from "@pages/profile/component/ProfileImageCarousel";
import ProfileInfo from "@pages/profile/component/ProfileInfo";

const Profile = () => {
  const [infoReady, setInfoReady] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.set(carouselRef.current, { opacity: 0, x: 60 });
    }
  }, []);

  useEffect(() => {
    if (infoReady && carouselRef.current) {
      gsap.to(carouselRef.current, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" });
    }
  }, [infoReady]);

  return (
    <section className="flex flex-col-reverse xl:flex-row justify-between items-center w-full h-full overflow-x-hidden">
      <ProfileInfo onProfileInfoReady={() => setInfoReady(true)} />

      <div
        ref={carouselRef}
        className="flex flex-col items-center justify-center w-full h-2/5 xl:w-2/5 xl:min-w-lg xl:h-full"
      >
        <ProfileImageCarousel />
      </div>
    </section>
  );
};

export default Profile;
