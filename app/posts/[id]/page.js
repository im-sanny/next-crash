import getPost from "@/lib/getPost";

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div className="mt-6">
      <h2 className="text-blue-500 uppercase">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
    </div>
  );
}
