export type FeedProps = {
  key: number;
  title: string;
  date: string;
  author: string;
  link: string;
  description?: string;
};

const Feed = (props: FeedProps) => {
  const datePublished = new Date(props.date).toLocaleDateString();

  return (
    <div className='card'>
      <a href={props.link}>
        <h3 className='font-poppins font-semibold mb-2 text-xl leading-tight sm:leading-normal text-white'>
          {props.title}
        </h3>

        <div className='flex flex-row my-2'>
          <div className='text-sm flex items-center'>
            <svg
              className='opacity-75 mr-2 '
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              id='Capa_1'
              x='0px'
              y='0px'
              width='12'
              height='12'
              style={{ fill: 'gray' }}
              viewBox='0 0 97.16 97.16'
              xmlSpace='preserve'
            >
              <path d='M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z' />
              <path d='M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z' />
            </svg>
            <p className='leading-none text-gray-400'>{datePublished} ·</p>
          </div>
          <p className='text-sm text-gray-400 mx-2'>{props.author}</p>
        </div>
        <p className='text-slate-300'>{props.description}</p>
      </a>
    </div>
  );
};

export default Feed;
