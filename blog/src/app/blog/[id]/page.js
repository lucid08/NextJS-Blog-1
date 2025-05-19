async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.id);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {post.body}
        </p>
      </article>
    </div>
  );
}