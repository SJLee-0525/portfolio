import "@components/modal/Modal.css";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import useModalStore from "@stores/modalStore";

import CloseIcon from "@assets/icon/CloseIcon";

const StackModal = () => {
  const { stackModalIsOpen, stackModalIsClosing, stackModalContent, closeStackModal } = useModalStore();

  const [uiPhase, setUiPhase] = useState<"initial" | "loading" | "transitioning" | "content">("initial");

  const dialog = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (stackModalIsClosing) return;

    if (stackModalIsOpen && dialog.current) {
      dialog.current.showModal();
    } else if (!stackModalIsOpen && dialog.current) {
      dialog.current.close();
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    };
  }, [stackModalIsOpen, stackModalIsClosing]);

  useEffect(() => {
    let phaseTimer1: NodeJS.Timeout;
    let phaseTimer2: NodeJS.Timeout;

    if (stackModalIsOpen) {
      setUiPhase("loading");

      phaseTimer1 = setTimeout(() => {
        setUiPhase("transitioning");
      }, 500);

      phaseTimer2 = setTimeout(() => {
        setUiPhase("content");
      }, 1200);
    } else {
      setUiPhase("initial");
    }

    return () => {
      clearTimeout(phaseTimer1);
      clearTimeout(phaseTimer2);
    };
  }, [stackModalIsOpen]);

  useEffect(() => {
    if (stackModalIsOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [stackModalIsOpen]);

  return createPortal(
    <dialog
      ref={dialog}
      onClose={() => {
        if (stackModalIsOpen || stackModalIsClosing) {
          closeStackModal();
        }
      }}
      onClick={(event) => {
        if (dialog.current && event.target === dialog.current) {
          closeStackModal();
        }
      }}
      className={`modal z-50 w-full lg:w-2xl h-fit rounded-3xl ${stackModalIsClosing ? "is-closing" : ""}`}
    >
      <button
        className="absolute top-5.5 right-5.5 w-11 h-11 z-60 rounded-full cursor-pointer bg-black/65 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-red-500 focus:outline-none"
        onClick={closeStackModal}
      >
        <CloseIcon />
      </button>

      <section
        ref={contentRef}
        className="relative w-full h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white" // Added bg-white
      >
        {stackModalContent && (
          <div
            className={`w-full h-full transition-opacity duration-700 ease-in-out
                        ${uiPhase === "transitioning" || uiPhase === "content" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {stackModalContent}
          </div>
        )}
      </section>
    </dialog>,
    document.getElementById("stack-modal") as HTMLElement
  );
};

export default StackModal;
