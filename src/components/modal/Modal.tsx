import "@components/modal/Modal.css";

import { useRef, useEffect } from "react";

import useModalStore from "@stores/modalStore";

import CloseIcon from "@assets/icon/CloseIcon";

const Modal = () => {
  const { isOpen, isClosing, modalContent, closeModal } = useModalStore();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isClosing) return; // 모달이 닫히는 중이면 아무것도 하지 않음

    if (isOpen && dialog.current) {
      dialog.current.showModal(); // 모달 열기
      document.body.style.overflow = "hidden"; // 스크롤 막기
    } else if (!isOpen && dialog.current) {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = ""; // 스크롤 복원
      }
    }

    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = ""; // 스크롤 복원
      }
    };
  }, [isOpen, isClosing]);

  useEffect(() => {
    if (!isOpen && dialog.current) {
      dialog.current.close(); // 모달 닫기

      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = ""; // 스크롤 복원
      }
    }
  }, [isOpen]);

  return (
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

      <section className="w-full h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
        {modalContent}
      </section>
    </dialog>
  );
};

export default Modal;
