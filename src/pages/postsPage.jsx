import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Heart from "./imgs/heart.png"
import "./postsPage.css";

const PostsPage = () => {

    const [posts, setPosts] = useState()

    useEffect(() => {
        fetch("https://blog.kata.academy/api/articles")
            .then(res => res.json())
            .then(data => setPosts(data.articles))
    }, [])

    return (
      <div className="posts-page">
            {
            posts.map(post => (
                <div className="post" key={post.slug}>
                    <div className="post-left">
                        <div className="post-top">
                            <h1>{post.title}</h1>
                            <div className="post-like">
                                <button><img src={Heart} alt="" className="heart" /></button>
                                <span>5</span>
                            </div>
                        </div>
                        <p>{post.body}</p>
                    </div>
                    <div className="post-right"></div>
                </div>
            ))
            }
      </div>
    );
  }
  
export default PostsPage;
  