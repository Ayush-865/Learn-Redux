import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId]=useState("");

  const users = useSelector(selectAllUsers);

  const usersOption = users.map(user=>(
    <option key={user.id} value={user.id} >
        {user.name}
    </option>
  ))

  const handleSubmit = () => {
    if (title && content) {
      dispatch(postAdded(title,content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <>
      <section>
        <h2>Add a new Post</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            handleSubmit();
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Add Title"
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add Content"
          />

            <select value={userId} onChange={e=>setUserId(e.target.value)} >
                <option value="" ></option>
                {usersOption}
            </select>

          <button type="submit"  disabled={!canSave}>Add Post</button>
        </form>
      </section>
    </>
  );
};

export default AddPost;
