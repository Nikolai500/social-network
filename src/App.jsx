import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostsPage from "./pages/postsPage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import "./App.css"
import SinglePostPage from "./pages/singlePostPage/singlePostPage";

function App() {
  return (
    <div className="app">
      <header>
        <Link className="logo" to={"/"}>MyBlog</Link>
        <div className="auth-btns">
          <Link className="sign-in" to={"/sign-in"}>Sign In</Link>
          <Link className="sign-up" to={"/sign-up"}>Sign Up</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/posts/:slug" element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}

export default App;
