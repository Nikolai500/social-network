import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/loader/loader.jsx";
import { parseISO, getDate, format, getYear } from "date-fns";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import Heart from "./imgs/heart.png"
import "./postsPage.css";

const PostsPage = () => {

    const [posts, setPosts] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        fetch(`https://blog.kata.academy/api/articles?limit=5&offset=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.articles)
                setTotalPage(data.articlesCount)})
    }, [currentPage])

    const paginationHandler = (num) => {
        if (num === 1) {
            setCurrentPage(0)
        } else {
            setCurrentPage(num * 5)
        }
    }

    return (
      <div className="posts-page">
            {posts ? posts.map(post => {
                
                const date = parseISO(post.createdAt)
                const day = getDate(date)
                const month = format(date, "MMM")
                const year = getYear(date)
                return(
                        
                        <div className="post" key={post.slug}>
                            <div className="post-left">
                                <div className="post-top">
                                    <h1><Link to={`/posts/${post.slug}`}>{post.title}</Link></h1>
                                    <div className="post-like">
                                        <button><img src={Heart} alt="" className="heart" /></button>
                                        <span>{post.favoritesCount}</span>
                                    </div>
                                </div>
                                <p>{post.description}</p>
                            </div>
                            <div className="post-author">
                                <div className="info">
                                    {post.author.username}
                                    <p>{month} {day} {year}</p>   
                                </div>
                                <img src={post.author.image} alt="" />
                            </div>
                        </div>
                    )}) : <Loader />}
        <div className="pagination">
            <Pagination pageSize={5} total={totalPage} current={currentPage === 0 ? 1 : currentPage / 5} onChange={(page) => paginationHandler(page)} />
        </div>
        
      </div>
    );
  }
  
export default PostsPage;
  