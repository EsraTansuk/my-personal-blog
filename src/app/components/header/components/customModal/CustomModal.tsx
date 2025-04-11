"use client";

// React Imports
import React, { FC, PropsWithChildren } from "react";
import Modal from "react-modal";
import { useTheme } from "next-themes";

const getCustomStyles = (theme: string | undefined) => ({
  overlay: {
    backgroundColor: theme === 'dark' ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.6)",
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
    backgroundColor: theme === 'dark' ? "#1a1a1a" : "#ffffff",
    color: theme === 'dark' ? "#ffffff" : "#000000",
    border: "none",
    borderRadius: "10px",
    position: "fixed",
    boxShadow: theme === 'dark' 
      ? "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
});

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
  const { theme } = useTheme();
  const customStyles = getCustomStyles(theme);

  return (
    <Modal
      className={`${className} transition-all duration-300 ease-in-out`}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles as any}
      contentLabel="Blog Post Modal"
    >
      <div className="relative">
        {children}
      </div>
    </Modal>
  );
};
