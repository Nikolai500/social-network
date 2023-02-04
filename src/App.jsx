import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostsPage from "./pages/postsPage";
import SignIn from "./pages/signIn";
import CreateNewAccount from "./pages/signUp";
import "./App.css"
import SinglePostPage from "./pages/singlePostPage/singlePostPage";

function App() {
  return (
    <div className="app">
      <header>
        <Link className="logo" to={"/posts"}>MyBlog</Link>
        <div className="auth-btns">
          <Link className="sign-in" to={"/sign-in"}>Sign In</Link>
          <Link className="sign-up" to={"/sign-up"}>Sign Up</Link>
        </div>
      </header>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<CreateNewAccount />} />
        <Route path="/posts/:slug" element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}

export default App;
