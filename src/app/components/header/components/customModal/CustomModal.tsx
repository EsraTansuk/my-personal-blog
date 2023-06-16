// React Imports
import React, { FC, PropsWithChildren } from "react";

// Package Imports
import Modal from "react-modal";


const customStyles = {
  style: {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:"#323232",
  },
};

interface CustomModalProps extends PropsWithChildren {
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
    subtitle!.style.color = "#f00";
  }

  return (
    <Modal
      className={className}
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};
