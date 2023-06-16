import { useState } from "react";

// Write me a useModal hook with the following functionality:
// 1. It should return a boolean value that indicates whether the modal is open or not
// 2. It should return a function that can be used to open the modal
// 3. It should return a function that can be used to close the modal
// 4. It should return a function that can be used to toggle the modal
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return { isOpen, openModal, closeModal, toggleModal };
};
