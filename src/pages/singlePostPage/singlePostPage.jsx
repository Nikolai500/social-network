import React from "react"
import { useParams } from "react-router-dom"

const SinglePostPage = () => {

    const [post, setPost] = useState()
    const {slug} = useParams()
    useEffect(() => {
        fetch(`https://blog.kata.academy/api/articles/${slug}`)
            .then(res => res.json())
            .then(data => setPost(data.article))
    }, [])

    return (
      <div className="posts-page"></div>
    )
}
export default SinglePostPage;
  