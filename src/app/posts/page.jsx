import { getPosts } from "@/services/postApi";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Post | Hero Next JS ",
  description: "Post Page",
};
const PostPage = async () => {
  const postsData = await getPosts();
  console.log(postsData);
  return (
    <div className="h-screen">
      <h6>All Posts</h6>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0,20)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 p-6">
            <h3>Title: {title}</h3>
                <h3>Description: {body}</h3>
                <button className="bg-red-400 px-3 py-3 rounded"><Link href={`/posts/${id}`}>See Details</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
