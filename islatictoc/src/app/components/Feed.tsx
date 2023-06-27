export type FeedProps = {
  key: number;
  title: string;
  date: string;
  author: string;
  description?: string;
};

const Feed = (props: FeedProps) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.author}</p>
      <p>{props.description}</p>
    </>
  );
};

export default Feed;
