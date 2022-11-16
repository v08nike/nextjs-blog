import Link from 'next/link' // client side navigation

export default function FirstPost() {
  return <>
    <h1>First Post</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
  </>;
}
