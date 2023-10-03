"use client";
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS, GET_USERS } from "../src/posts";
import { GetUsersQuery, GetPostsQuery } from "../src/gql/graphql";
import { use, useEffect, useState } from "react";
import getUser from "../components/fetch/getUser";

export default function Home() {
  const [serverPostData, setserverPostData] = useState<GetPostsQuery>();
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS);
  const { data: postData, error: postsError } = useQuery<GetPostsQuery>(GET_POSTS);

  const getDatas = async () => {
    const data = await getUser();
    setserverPostData(data);
  };
  getDatas();

  return (
    <>
      <div>
        <h2>Users table</h2>
        {data?.user.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>

      <div>
        <h2>Posts table</h2>
        {postData?.post.map((post) => (
          <div key={post.id}>
            <p>{post.post}</p>
            <span>{post.date}</span>
          </div>
        ))}
      </div>

      <div>
        <h2>Server Component</h2>
        {serverPostData?.post.map((post) => (
          <div key={post.id}>
            <p>{post.post}</p>
            <span>{post.date}</span>
          </div>
        ))}
      </div>
    </>
  );
}
