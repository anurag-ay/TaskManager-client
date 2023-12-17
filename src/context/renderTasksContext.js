import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserTasks } from "./userTaskContext";

const RenderTaskContext = createContext(null);

export function useRenderTask() {
  return useContext(RenderTaskContext);
}

function RenderTasksProvider({ children }) {
  const [renderTask, setRenderTask] = useState([]);
  const [userTask] = useUserTasks();

  useEffect(() => {
    if (!userTask) return;
    setRenderTask(userTask);
  }, [userTask]);

  return (
    <RenderTaskContext.Provider value={[renderTask, setRenderTask]}>
      {children}
    </RenderTaskContext.Provider>
  );
}

export default RenderTasksProvider;
