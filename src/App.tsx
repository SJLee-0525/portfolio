import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LoadingSpinner from "@components/spinner/LoadingSpinner";

import Profile from "@pages/profile/Profile";
import Projects from "@pages/projects/Projects";
import Interview from "@pages/Interview/Interview";
import Stacks from "@pages/stacks/Stacks";
import Footer from "@pages/footer/Footer";
import Modal from "@components/modal/Modal";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const interviewRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scopeElement = mainRef.current;
    const profileElement = profileRef.current;
    const interviewElement = interviewRef.current;

    if (!scopeElement || !profileElement || !interviewElement) {
      setLoading(false);
      return;
    }

    let ctx: gsap.Context | undefined;
    let pinTrigger: ScrollTrigger | undefined;
    let fadeTween: gsap.core.Tween | undefined;
    let showTween: gsap.core.Tween | undefined;

    ctx = gsap.context(() => {
      gsap.set(interviewElement, { opacity: 0, y: 60 });
      gsap.set(profileElement, { opacity: 1, y: 0 });

      pinTrigger = ScrollTrigger.create({
        trigger: profileElement,
        start: "top top",
        end: "+=100%",
        pin: false,
        scrub: true,
        onUpdate: (self) => {
          gsap.to(profileElement, {
            opacity: 1 - self.progress,
            y: -60 * self.progress,
            duration: 0.1,
            overwrite: "auto",
          });

          gsap.to(interviewElement, {
            opacity: self.progress,
            y: 60 * (1 - self.progress),
            duration: 0.1,
            overwrite: "auto",
          });
        },
      });
      setLoading(false);
    }, scopeElement);

    return () => {
      if (pinTrigger) pinTrigger.kill();
      if (fadeTween) fadeTween.kill();
      if (showTween) showTween.kill();
      if (ctx) ctx.revert();
    };
  }, [mainRef, profileRef, interviewRef]);

  if (loading) return <LoadingSpinner />;

  return (
    <main ref={mainRef} className="relative flex flex-col justify-start items-center w-full h-fit bg-white">
      <section ref={profileRef} className="w-full h-screen relative z-[1] bg-gray-100">
        <Profile />
      </section>

      <section ref={interviewRef} className="w-full h-fit relative z-[2] bg-white">
        <Interview />
        <Stacks />
        <Projects />
        <Footer />
      </section>

      <Modal />
    </main>
  );
};

export default App;
