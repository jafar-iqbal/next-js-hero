import { redirect } from "next/navigation";
import React from "react";
const getDetailsPost = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  const data = await res.json();
  if (data) {
    redirect(`/posts/${data[0].id}`)
  }
  return data;
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`)
  const postData = await res.json();
  return {
    title: {
      absolute:`${postData.title}`
    },
    description: postData.body,
    keywords: postData.body.split(' ')
  };
};
const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);
  return (
    <div>
      <h6>Title: {title}</h6>
      <h6>Body: {body}</h6>
    </div>
  );
};

export default PostDetailsPage;
