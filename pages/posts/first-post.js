import Link from 'next/link' // client side navigation
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export default function FirstPost() {
  return <>
    <Head>
      <title>First Post</title>
      {/* <script src="https://connect.fackbook.net/en_US/sdk.js" /> */}
      <Script 
        src="https://connect.fackbook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated!`)
        }}
        />
    </Head>
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
