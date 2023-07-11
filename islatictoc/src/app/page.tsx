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
      // add ArticleApiItem shape for item
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

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
        />
      </Head>

      <main className='bg-slate-700 py-4'>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-between items-center text-center mb-16 text-white'>
            <Image
              className='invert'
              src='/islatictoc_logo_text.png'
              alt='Isla Tic Toc Logo'
              width={300}
              height={100}
              priority
            />

            <p className='border-y border-white mt-2 py-2 w-full text-sm'>
              · Recopilación de noticias e información sobre Autismo ·
            </p>
          </div>

          {articles.length ? (
            <section>
              <div className='grid sm:grid-cols-2 gap-4 grid-cols-1 '>
                <img
                  className='h-16 bg-white m-4 shadow-lg  bg-slate-700 border-b-2 border-yellow-300 py-3, px-4'
                  src='https://cdn.the-scientist.com/assets/articleNo/67560/iImg/37910/uploads/logo%20small.png'
                />
              </div>

              <div className='grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {articles.map((item, index) => {
                  return (
                    <Feed
                      key={index}
                      title={item.title}
                      date={item.pubDate}
                      author={item.creator}
                      link={item.link}
                      description={item.contentSnippet}
                    />
                  );
                })}
              </div>
            </section>
          ) : (
            <section>
              <p className='text-white'>
                No hay artículos disponibles ahora mismo
              </p>
            </section>
          )}
        </div>
      </main>

      <footer className='footer footer-center lg:absolute w-full p-2 bg-gray-300 text-gray-800 bottom-0'>
        <div className='text-center'>
          <p>
            {'© 2023' + ' '}
            <a className='font-semibold' href='mailto:hola@islatictoc.com'>
              · Isla Tic Toc
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
