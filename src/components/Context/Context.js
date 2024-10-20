import { createContext, useContext, useState } from "react";
export const appContext = createContext();
export const useGlobalContext = () => {
  return useContext(appContext);
};
const Context = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isThankyou, setIsThankyou] = useState(false);
  const [currentProductName, setCurrentProductName] = useState("");
  return (
    <appContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cartCount,
        setCartCount,
        isThankyou,
        setIsThankyou,
        setCurrentProductName,
        currentProductName,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export default Context;
