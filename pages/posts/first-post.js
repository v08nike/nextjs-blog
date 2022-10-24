import Link from 'next/link' // client side navigation
import Image from 'next/image'

export default function FirstPost() {
  return <>
    <h1>First Post</h1>
    <h2>
      <Link href="/">Back to home</Link>
      {/* <img src="/images/Rabbit.png" alt='Rabbit' /> */}
      <Image 
        src="/images/Rabbit.png"
        height={144}
        width={144}
        alt="Rabbit"
        />
    </h2>
  </>;
}
