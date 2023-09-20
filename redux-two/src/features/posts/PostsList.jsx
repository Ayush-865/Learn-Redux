import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

    const renderedPosts=orderedPosts.map(post=>(
        <article key={post.id} >
            title: {post.title}
            content: {post.content}
            Author: <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
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
