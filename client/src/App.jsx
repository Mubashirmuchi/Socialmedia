import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Privatelayout from "./Layout/Privatelayout";
import Homepage from "./pages/Homepage";
import Explore from "./pages/Loginpage/Explore";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import Profilepage from "./pages/Profilepage";
import Authlayout from "./Layout/authlayout";
import Login from "./pages/Loginpage/Login";
import Signup from "./pages/Signup/Signup";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Privatelayout />}>
                <Route path="" element={<Homepage />} />
                <Route path="explore" element={<Explore />} />
                <Route path="search" element={<Search />} />
                <Route path="chat" element={<Chat />} />
                <Route path="profile" element={<Profilepage />} />
            </Route>

            <Route path="" element={<Authlayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
        </Route>
    )
);

function App() {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    );
}

export default App;
