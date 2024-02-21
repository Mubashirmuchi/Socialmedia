export const API = {
    LOGIN: "/api/auth/login", // Login
    REGISTER: "/api/auth/register", // Create Account
    CHANGEPASSWORD: "/api/users/:id", // Change PAssword
    DELETEACCOUNT: "/api/users/:id", // Delete Account
    GETAUSERPOST: "/api/users", // Get  user post
    FOLLOW: "/api/users/:id/follow", //Follow a user
    UNFOLLOW: "/api/users/:ID/unfollow", // unfollow a user
    CREATEPOST: "/api/post", // crate a post
    UPDATEPOST: "/api/post/:id", // change discription
    DELETEPOST: "/api/post/:id", // delete a post
    LIKEPOST: "/api/post/:id/like", // like a post
    GETPOST: "/api/post/:id", // get a post
    TIMELINEPOST: "/api/post/timeline", // get all post of followin user
    OAUTH: "/api/auth/oauth", // google oauth
};
