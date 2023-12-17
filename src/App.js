import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import UserInfoProvider from "./context/userInfoContext";
import UserTaskProvider from "./context/userTaskContext";
import UserCategoryProvider from "./context/userCategoryContext";
import CurrentActiveCategoryProvider from "./context/currentActiveCategoryContext";
import RenderTasksProvider from "./context/renderTasksContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserInfoProvider>
              <UserTaskProvider>
                <UserCategoryProvider>
                  <CurrentActiveCategoryProvider>
                    <RenderTasksProvider>
                      <Home />
                    </RenderTasksProvider>
                  </CurrentActiveCategoryProvider>
                </UserCategoryProvider>
              </UserTaskProvider>
            </UserInfoProvider>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
