import './globals.css';

export const metadata = {
  title: 'Next.js Blog',
  description: 'A blog website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}