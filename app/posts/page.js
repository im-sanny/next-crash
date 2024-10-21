import getAllPosts from "@/lib/getAllPosts";

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <div>
      <h1>All posts</h1>
      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
