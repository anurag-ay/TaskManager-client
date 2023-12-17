import React, { createContext, useContext, useState } from "react";

const ActiveCategoryContext = createContext(null);

export function useActiveCategory() {
  return useContext(ActiveCategoryContext);
}

function CurrentActiveCategoryProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <ActiveCategoryContext.Provider value={[activeCategory, setActiveCategory]}>
      {children}
    </ActiveCategoryContext.Provider>
  );
}

export default CurrentActiveCategoryProvider;
