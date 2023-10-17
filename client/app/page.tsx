"use client";
import { useQuery, gql } from "@apollo/client";
import { GET_POST, GET_USERS } from "../src/query";
import { GetUsersQuery, GetPostQuery } from "../src/gql/graphql";
import { use, useEffect, useState } from "react";
import getUser from "../components/fetch/getUser";
import Link from "next/link";
import ProfileClient from "../components/auth/profileClient";

export default function Home() {
  // const [serverPostData, setserverPostData] = useState<GetPostsQuery>();
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS);
  const { data: postData, error: postsError } = useQuery<GetPostQuery>(GET_POST);

  const getDatas = async () => {
    const data = await getUser();
    // setserverPostData(data);
  };
  getDatas();

  return (
    <>
      <div>
        <h2>Users table</h2>
        {data?.users.map((user) => (
          <>
            <p key={user.id}>{user.name}</p>
            <p>{user.last_seen}</p>
          </>
        ))}
      </div>

      <div>
        <h2>Posts table</h2>
        {postData?.post.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <span>{post.create}</span>
          </div>
        ))}
      </div>

      <div>
        <h2>Server Component</h2>
        {/* {serverPostData?.post.map((post) => (
          <div key={post.id}>
            <p>{post.post}</p>
            <span>{post.date}</span>
          </div>
        ))} */}
      </div>

      {/* <Link href="/auth">Auth Page</Link> */}
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

      <ProfileClient />
    </>
  );
}
