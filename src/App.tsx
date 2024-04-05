import "./App.css";
import { GlobalStateProvider } from "./contexts/states";
import ScheduleService from "./pages/scheduleService/scheduleService";
import { Route, Routes } from "react-router-dom";

//!No utilizo react-router-dom porque no tengo mas de una pagiona, puedo hacerlo
export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <GlobalStateProvider>
              <ScheduleService />
            </GlobalStateProvider>
          }
        />
      </Routes>
    </div>
  );
}
