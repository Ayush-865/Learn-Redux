import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title && content) {
      dispatch(postAdded({ id: nanoid(), title, content }));
      setTitle("");
      setContent("");
    }
  };

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
          <button type="submit">Add Post</button>
        </form>
      </section>
    </>
  );
};

export default AddPost;
