'use client'

import Head from 'next/head';
import Image from 'next/image';

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  /// States

  const [articles, setArticles] = useState([]);

  /// Effects

  useEffect(() => {
    getArtices();
  }, []);

  /// Actions

  const getArtices = async () => {
    try {
      const res = await axios.get('http://localhost:4000/');
      setArticles(res.data);
    } catch (error) {
      console.log('There was an error fetching RSS feedURL', error);
    }
  };

  /// Render

  console.log(articles);
  return (
    <>
      <Head>
        <title>Isla Tic Toc Página de Inicio</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
          <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            RSS feed
          </p>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <Image
              className='relative'
              src='/islatictoc_logo.png'
              alt='Isla Tic Toc Logo'
              width={512}
              height={310}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
