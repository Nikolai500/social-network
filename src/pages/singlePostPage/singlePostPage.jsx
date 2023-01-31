import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { parseISO, getDate, getYear, format } from "date-fns";
import Heart from "../imgs/heart.png"
import Loader from "../../components/loader/loader";
import "./singlePostPage.css";

const SinglePostPage = () => {

    const [post, setPost] = useState(null)
    const {slug} = useParams()

    useEffect(() => {
        fetch(`https://blog.kata.academy/api/articles/${slug}`)
            .then(res => res.json())
            .then(data => setPost(data.article))
    }, [])

    // const date = parseISO(post.createdAt)
    // const day = getDate(date)
    // const month = format(date, "MMM")
    // const year = getYear(date)
              
    if (post) {
      return(
      <div className="post">
        <div className="post-left">
            <div className="post-top">
              <h1>{post.title}</h1>
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
          {/* <p>{month} {day} {year}</p>    */}
          </div>
          <img src={post.author.image} alt="" />
        </div>
      </div>
    )} else {
      return(<Loader />)
    }

}
export default SinglePostPage;
  