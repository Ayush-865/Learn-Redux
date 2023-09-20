import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const renderedPosts=posts.map(post=>(
        <article key={post.id} >
            {post.title}
            {post.content}
        </article>
    ))
  return (
    <>
        <h2>Posts</h2> 
        <section>
            {renderedPosts}
        </section>
    </>
  )
}

export default PostsList
