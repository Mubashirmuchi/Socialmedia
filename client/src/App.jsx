import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Loginpage/Login";
import Privatelayout from "./Layout/Privatelayout";
import Homepage from "./pages/Homepage";
import Explore from "./pages/Loginpage/Explore";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import Profilepage from "./pages/Profilepage";

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

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
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
