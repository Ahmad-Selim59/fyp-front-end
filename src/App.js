import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Screen/Home";
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import Charts from "./Screen/Charts";
import Chat from "./Screen/Chat";
import ForgetPassword from "./Screen/ForgetPassword";

// context API
import { AuthContextProvider } from "./context/AuthContext";

// material ui css base line
import CssBaseline from "@mui/material/CssBaseline";

// every body can visit without logged in
import PublicRoute from "./Components/PublicRoute";
// user who is logged in can be visited
import PrivateRoute from "./Components/PrivateRoute";
import PasswordReset from "./Screen/PasswordReset";
import Play from "./Screen/Play";
import WordGame from "./Screen/WordGame";
import HangmanGame from "./Screen/HangManGame";
import LetterMatch from "./Screen/LetterMatch";

// for authentication system
axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <PublicRoute>
                <PasswordReset />
              </PublicRoute>
            }
          />
          <Route
            path="/stats"
            element={
              <PrivateRoute>
                <Charts />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="/play"
            element={
              <PrivateRoute>
                <Play />
              </PrivateRoute>
            }
          />
          <Route
            path="/play/word-game"
            element={
              <PrivateRoute>
                <WordGame />
              </PrivateRoute>
            }
          />
          <Route
            path="/play/hangman-game"
            element={
              <PrivateRoute>
                <HangmanGame />
              </PrivateRoute>
            }
          />
          <Route
            path="/play/letter-game"
            element={
              <PrivateRoute>
                <LetterMatch />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
