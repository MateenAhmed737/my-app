import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";

const OfficeModal = ({ modal, setModal, initialIndex = 0 }) => {
  const [curIndex, setCurIndex] = useState(initialIndex);
  const Component =
    curIndex !== null && curIndex !== undefined && modal.components[curIndex];

  const close = () => {
    setModal({ ...modal, isOpen: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the current form is the last form
    if (curIndex === modal.components.length - 1) {
      // If it is, close the modal
      return close();
    }

    setCurIndex(curIndex + 1);
  };

  const componentProps = {
    handleSubmit,
    state: modal.data,
    setState: (key, value) =>
      setModal((prev) => ({ ...prev, data: { ...prev.data, [key]: value } })),
  };

  const styles = {
    modal: {
      base: "fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity",
      open: modal.isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none",
    },
    content: `bg-white w-full mx-5 max-w-xl rounded-md`,
    header: "flex justify-between items-center py-3 px-4 border-b",
    main: {
      base: `p-4 pt-10 sm:pt-4 overflow-y-auto max-h-[70vh] min-h-[50vh] ${
        curIndex !== modal?.components?.length - 1
          ? "flex justify-center items-center"
          : ""
      }`,
      get() {
        return `${this.base}`;
      },
    },
    footer: "flex justify-between items-center py-3 px-4 border-t",
    closeButton:
      "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center fixed top-2 right-2",
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div
      className={`${styles.modal.base} ${styles.modal.open}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.content}>
        <button type="button" onClick={close} className={styles.closeButton}>
          <VscClose />
        </button>
        <div className={styles.main.get()}>
          {Component && <Component {...componentProps} />}
        </div>

        <div className={styles.footer}>
          {/* Styled Prev and Next Buttons */}
          <button
            type="button"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 disabled:hover:bg-blue-500 disabled:saturate-0"
            onClick={() => setCurIndex(curIndex - 1)}
            disabled={curIndex === 0}
          >
            Back
          </button>

          {/* Dot indicators */}
          <div className="min-[450px]:flex">
            {modal.components.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full mx-[1px] transition-all duration-300 ${
                  index === curIndex ? "bg-blue-500 !w-5" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            type="submit"
            form="current-form"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 disabled:hover:bg-blue-500 disabled:saturate-0"
            // disabled={curIndex === modal.components.length - 1}
          >
            {curIndex === modal.components.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficeModal;
