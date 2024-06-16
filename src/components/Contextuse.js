import React, { createContext, useState } from "react";
export const DesktopContext = createContext();
const Contextuse = ({ children }) => {
  const [open, setclose] = useState(false);
  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const [show, setShow] = useState(false);
  const [Cadd, setCadd] = useState(true);
  const [None, setNone] = useState(false);

  return (
    <>
      <DesktopContext.Provider
        value={{
          open,
          setclose,
          show,
          setShow,
          Cadd,
          setCadd,
          None,
          setNone,
        }}
      >
        {children}
      </DesktopContext.Provider>
    </>
  );
};

export default Contextuse;
