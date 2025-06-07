import React from "react";

import { create } from "zustand";

interface ModalState {
  // isOpen: 모달이 열려있는지 여부, isClosing: 모달이 닫히는 중인지 여부, modalContent: 모달에 렌더링할 컴포넌트트, openModal: 모달 열기 함수, closeModal: 모달 닫기 함수
  isOpen: boolean;
  isClosing: boolean;
  loadingContent: React.ReactNode | null;
  modalContent: React.ReactNode | null;
  openModal: ({
    loadingContent,
    modalContent,
  }: {
    loadingContent: React.ReactNode;
    modalContent: React.ReactNode;
  }) => void;
  closeModal: () => void;
  imageModalIsOpen: boolean;
  imageModalIsClosing: boolean;
  imageModalContent: React.ReactNode | null;
  openImageModal: (content: React.ReactNode) => void;
  closeImageModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  isClosing: false,
  loadingContent: null,
  modalContent: null,
  openModal: ({ loadingContent, modalContent }) => {
    set({ isOpen: true, isClosing: false, loadingContent, modalContent });
  },
  closeModal: () => {
    set({ isClosing: true });

    setTimeout(() => {
      set({ isOpen: false, isClosing: false, loadingContent: null, modalContent: null });
    }, 300);
  },
  imageModalIsOpen: false,
  imageModalIsClosing: false,
  imageModalContent: null,
  openImageModal: (content) => {
    set({ imageModalIsOpen: true, imageModalIsClosing: false, imageModalContent: content });
  },
  closeImageModal: () => {
    set({ imageModalIsClosing: true });

    setTimeout(() => {
      set({ imageModalIsOpen: false, imageModalIsClosing: false, imageModalContent: null });
    }, 300);
  },
}));

export default useModalStore;
