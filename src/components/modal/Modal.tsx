import "@components/modal/Modal.css";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import useModalStore from "@stores/modalStore";

import CloseIcon from "@assets/icon/CloseIcon";

const Modal = () => {
  const { isOpen, isClosing, loadingContent, modalContent, closeModal } = useModalStore();

  const [uiPhase, setUiPhase] = useState<"initial" | "loading" | "transitioning" | "content">("initial");

  const dialog = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isClosing) return;

    if (isOpen && dialog.current) {
      dialog.current.showModal();
    } else if (!isOpen && dialog.current) {
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
  }, [isOpen, isClosing]);

  useEffect(() => {
    let phaseTimer1: NodeJS.Timeout;
    let phaseTimer2: NodeJS.Timeout;

    if (isOpen) {
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
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  return createPortal(
    <dialog
      ref={dialog}
      onClose={() => {
        if (isOpen || isClosing) {
          closeModal();
        }
      }}
      onClick={(event) => {
        if (dialog.current && event.target === dialog.current) {
          closeModal();
        }
      }}
      className={`modal z-50 w-full lg:w-4xl h-full rounded-3xl ${isClosing ? "is-closing" : ""}`}
    >
      <button
        className="absolute top-5.5 right-5.5 w-11 h-11 z-60 rounded-full cursor-pointer bg-black/65 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-red-500 focus:outline-none"
        onClick={closeModal}
      >
        <CloseIcon />
      </button>

      <section
        ref={contentRef}
        className="relative w-full h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white" // Added bg-white
      >
        {loadingContent && (uiPhase === "loading" || uiPhase === "transitioning") && (
          <div
            className={`absolute z-20 w-full h-full transition-opacity duration-700 ease-in-out
                        ${uiPhase === "transitioning" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            {loadingContent}
          </div>
        )}

        {modalContent && (
          <div
            className={`w-full h-full transition-opacity duration-700 ease-in-out
                        ${uiPhase === "transitioning" || uiPhase === "content" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {modalContent}
          </div>
        )}
      </section>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
