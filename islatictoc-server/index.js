import cors from 'cors';
import express from 'express';
import RSSParser from 'rss-parser';

// States
let articles = [];

const feedURL = 'https://www.spectrumnews.org/feed';

const parser = new RSSParser();

const parse = async (url) => {
  const spectrumFeed = await parser.parseURL(url);

  spectrumFeed.items.forEach((item) => {
    articles.push({ item });
  });
};

parse(feedURL);

let app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send(articles);
});

const server = app.listen('4000', () => {
  console.log('App is listening to http://localhost:4000');
});

export default server;
