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
    if (!isOpen && dialog.current) {
      dialog.current.close(); // 모달 닫기

      // 모달 닫힐 때 스크롤 위치 초기화
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
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
      className={`modal z-50 w-full lg:w-2xl h-full rounded-3xl ${isClosing ? "is-closing" : ""}`}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 z-60 rounded-full bg-black/30 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-black/50 focus:outline-none"
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
