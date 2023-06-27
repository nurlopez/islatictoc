'use client';

import Head from 'next/head';
import Image from 'next/image';

import axios from 'axios';
import { useState, useEffect } from 'react';
import Feed from './components/Feed';
import ArticleItem from './entities/ArticleItem';

export default function Home() {
  /// States

  const [articles, setArticles] = useState<ArticleItem[]>([]);

  /// Effects

  useEffect(() => {
    getArtices();
  }, []);

  /// Actions

  const getArtices = async () => {
    try {
      const res = await axios.get('http://localhost:4000/');
      // add ArticeApiItem shape for item
      setArticles(res.data.map((datum: { item: any }) => datum.item));
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
        <div>
          <p>RSS feed</p>

          <div>
            <Image
              src='/islatictoc_logo.png'
              alt='Isla Tic Toc Logo'
              width={512}
              height={310}
              priority
            />
          </div>

          {articles.map((item, index) => {
            return (
              <Feed
                key={index}
                title={item.title}
                date={item.pubDate}
                author={item.creator}
                description={item.contentSnippet}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
