import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>This is the about page</p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </div>
  );
}
