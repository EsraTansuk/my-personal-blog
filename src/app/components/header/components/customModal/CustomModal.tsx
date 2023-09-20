// React Imports
import React, { FC, PropsWithChildren } from "react";

// Package Imports
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 1,
    zIndex: 40,
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#252525",
    border: "none",
    borderRadius: "10px",
    position: "fixed",
  },
};

interface CustomModalProps extends PropsWithChildren<any> {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const CustomModal: FC<CustomModalProps> = ({
  isOpen,
  onClose,
  className,
  children,
}) => {
  let subtitle: HTMLHeadingElement | null;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) subtitle.style.color = "#f00";
  }

  return (
    <Modal
      className={className}
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles as any}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};
