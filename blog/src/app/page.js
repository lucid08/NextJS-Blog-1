import Link from 'next/link';
import DarkModeToggle from './dark-mode';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[rgb(var(--foreground))]">Blog Posts</h1>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-[rgba(var(--foreground),0.1)] 
                       text-[rgb(var(--foreground))] hover:bg-[rgba(var(--foreground),0.2)]
                       transition-colors duration-200"
          >
            Contact
          </Link>
          <DarkModeToggle />
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="p-6 rounded-lg shadow-md transition-colors duration-200
                      bg-[rgb(var(--background))] 
                      hover:bg-opacity-90"
          >
            <h2 className="text-xl font-semibold text-[rgb(var(--foreground))]">
              {post.title}
            </h2>
            <p className="mt-2 text-[rgba(var(--foreground),0.7)]">
              {post.body.slice(0, 100)}...
            </p>
            <Link
              href={`/blog/${post.id}`}
              className="mt-4 inline-block text-blue-500 hover:text-blue-600 
                         dark:text-blue-400 dark:hover:text-blue-300
                         transition-colors duration-200"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}