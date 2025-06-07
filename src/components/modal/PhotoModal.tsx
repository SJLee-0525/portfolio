import "@components/modal/Modal.css";

import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import useModalStore from "@stores/modalStore";

const PhotoModal = () => {
  const { imageModalIsOpen, imageModalIsClosing, imageModalContent, closeImageModal } = useModalStore();

  const dialog = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (imageModalIsClosing) return;

    if (imageModalIsOpen && dialog.current) {
      dialog.current.showModal();
    } else if (!imageModalIsOpen && dialog.current) {
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
  }, [imageModalIsOpen, imageModalIsClosing]);

  useEffect(() => {
    if (imageModalIsOpen) {
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
  }, [imageModalIsOpen]);

  return createPortal(
    <dialog
      ref={dialog}
      onClose={() => {
        if (imageModalIsOpen || imageModalIsClosing) {
          closeImageModal();
        }
      }}
      onClick={(event) => {
        if (dialog.current && event.target === dialog.current) {
          closeImageModal();
        }
      }}
      className={`photo-modal z-50 w-screen h-screen ${imageModalIsClosing ? "is-closing" : ""}`}
      style={{ width: "100vw", height: "100vh", maxWidth: "100vw", maxHeight: "100vh", margin: 0, padding: 0 }}
    >
      <section
        ref={contentRef}
        className="relative w-full h-full bg-transparent overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {imageModalContent && <>{imageModalContent}</>}
      </section>
    </dialog>,
    document.getElementById("photo") as HTMLElement
  );
};

export default PhotoModal;
