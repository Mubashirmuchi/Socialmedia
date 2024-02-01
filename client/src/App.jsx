import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Userlayout from "./Layout/userlayout";
import Homepage from "./pages/user/Homepage/Homepage";
import Message from "./pages/user/message/Message";
import Friends from "./pages/user/friends/Friends";
import Explore from "./pages/user/explore/Explore";
import Profile from "./pages/user/profile/Profile";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Authlayout from "./Layout/authlayout";

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
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
