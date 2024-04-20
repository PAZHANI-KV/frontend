import React, { useState, useEffect } from "react";

const Component = () => {
  const [resource, setResource] = useState("posts");
  const [item, setItem] = useState([]);

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(response => response.json())
    .then(json => setItem(json))  //fake api resource for posts, users, comments.
}, [resource]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setResource("posts");
          }}
        >
          posts
        </button>
        <button
          onClick={() => {
            setResource("users");
          }}
        >
          users
        </button>
        <button
          onClick={() => {
            setResource("comments");
          }}
        >
          comments
        </button>
      </div>
      <h1>{resource}</h1>
      {item.map(ele => <pre>{JSON.stringify(ele)}</pre>)}
    </>
  );
};

export default Component;
