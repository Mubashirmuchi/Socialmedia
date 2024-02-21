import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "c:/Users/muham/OneDrive/Desktop/Socialmedia/client/src/store/index";
import Userlayout from "c:/Users/muham/OneDrive/Desktop/Socialmedia/client/src/Layout/userlayout";
import Authlayout from "c:/Users/muham/OneDrive/Desktop/Socialmedia/client/src/Layout/Authlayout";
import Homepage from "./Pages/User/Homepage";
import Message from "./Pages/User/Message";
import Friends from "./Pages/User/Friends";
import Explore from "./Pages/User/Explore";
import Profile from "./Pages/User/Profile";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import { useEffect } from "react";
import { checkAuthorization } from "./Store/UserSlice";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Userlayout />}>
                <Route path="" element={<Homepage />} />
                <Route path="/message" element={<Message />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/" element={<Authlayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
        </Route>
    )
);

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuthorization());
    }, []);
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
