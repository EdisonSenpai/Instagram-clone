import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram | Album</title>
        <link rel="icon" href="/favicon_e.ico" />
      </Head>

      {/* <h1>Instagram Album</h1> */}
      
      {/* Header */}
      <Header />

      {/* Feed */}
      
      {/* Modal */}

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.instagram.com/edy_donea/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/esenpai.svg" alt="EdisonSenpai Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
