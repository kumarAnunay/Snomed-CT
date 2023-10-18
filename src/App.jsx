import { RouterProvider } from "react-router";
import { routes } from "./Components/Routes";
import { ContextProvider } from "./Components/ContextProvider";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={routes} />
      </ContextProvider>
    </>
  );
};

export default App;
