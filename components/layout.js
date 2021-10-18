import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Nhan D Le'
export const siteTitle = 'I do, I done • Nhan D Le'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-md mx-auto p-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className="flex flex-col items-center my-8">
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.png"
                className="rounded-full"
                height={80}
                width={80}
                alt={name}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <h1 className="text-xl uppercase mt-0 tracking-widest text-gray-600">{name}</h1>
            </a>
          </Link>
        </>
      </header>
      
      <main>{children}</main>
      
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}