import "@components/modal/Modal.css";

import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import useModalStore from "@stores/modalStore";

import CloseIcon from "@assets/icon/CloseIcon";

const Modal = () => {
  const { isOpen, isClosing, modalContent, closeModal } = useModalStore();

  const dialog = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLElement>(null); // section ref 추가

  useEffect(() => {
    if (isClosing) return; // 모달이 닫히는 중이면 아무것도 하지 않음

    if (isOpen && dialog.current) {
      dialog.current.showModal(); // 모달 열기
    } else if (!isOpen && dialog.current) {
      dialog.current.close(); // 모달 닫기

      // 모달 닫힐 때 스크롤 위치 초기화
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }

    return () => {
      // 모달 닫힐 때 스크롤 위치 초기화
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    };
  }, [isOpen, isClosing]);

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
        className="absolute top-6.5 right-6.5 w-11 h-11 z-60 rounded-full cursor-pointer bg-black/65 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-red-500 focus:outline-none"
        onClick={closeModal}
      >
        <CloseIcon />
      </button>

      <section
        ref={contentRef}
        className="w-full h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden "
      >
        {modalContent}
      </section>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
