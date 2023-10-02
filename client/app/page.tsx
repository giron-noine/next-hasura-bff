"use client";
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS, GET_USERS } from "../src/posts";
import { GetUsersQuery, GetPostsQuery } from "../src/gql/graphql";

export default function Home() {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS);
  const { data: postData, error: postsError } = useQuery<GetPostsQuery>(GET_POSTS);
  return (
    <>
      <div>
        <h1>Users table</h1>
        {data?.user.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>

      <div>
        <h1>Posts table</h1>
        {postData?.post.map((post) => (
          <>
            <p key={post.id}>{post.post}</p>
            <span>{post.date}</span>
          </>
        ))}
      </div>
    </>
  );
}
