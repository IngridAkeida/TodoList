import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import TodoApp from "./components/TodoApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
