import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "../ReactPortal";

function ModalWrapper({ title, children, show, handleClose, portalId }) {
  //add portalId to props
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId={portalId}>
      <CSSTransition
        in={show}
        timeout={{ entry: 100, exit: 300 }}
        unmountOnExit
        classNames={{
          enter: "scale-50 opacity-0 pointer-events-auto",
          exit: "scale-50 opacity-0",
        }}
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          className="fixed flex justify-center scale-50 top-0 left-0 right-0 w-full p-4 overflow-x-hidden  h-screen md:inset-0 h-modal md:h-full z-50 transition ease-in-out duration-300"
        >
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-5 border-b rounded-t ">
                <h3 className="text-xl font-medium text-gray-900 ">{title}</h3>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
export default ModalWrapper;
