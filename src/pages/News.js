import React from 'react';

import MyPagination from '../components/MyPagination';

const News = () => {

  // const [news, setNews] = useState();

  // useEffect(() => {
  //   async function getData() {
  //       const response = await api.get(`data`);
  //       const result = await response.data.results;
  //       setNews(result);
  //   }
  //   getData();
  // }, []);




  return (
    <div className='news-section'>
      <h1>Our News</h1>
      <div className='cards-container'>
        <div className='news-card'>
          <div className='news-img'>
            <img
              className="news-img"
              src="https://picsum.photos/501/500"
              alt="random"
            />
          </div>
          <div className="news-text">
            <h3>Podcast Title</h3>
            <span className="subtitle">
              <i class="fas fa-calendar-alt mr-2"></i>
              {' '}Mon, Sep 19th 2022
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              fugiat asperiores inventore beatae accusamus odit minima enim,
              commodi quia, doloribus eius! Ducimus nemo accusantium maiores
              velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
              ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
              dolores nobis enim quidem excepturi, illum quos!
            </p>
            <a class='twitter-share-button'
              href='https://twitter.com/intent/tweet'
              target='_blank'
              rel='noreferrer'>
              <button>Tweet</button>
            </a>
          </div>
        </div>
        <div className='news-card'>
          <div className='news-img'>
            <img
              className="news-img"
              src="https://picsum.photos/501/500"
              alt="random"
            />
          </div>
          <div className="news-text">
            <h3>Podcast Title</h3>
            <span className="subtitle">
              <i class="fas fa-calendar-alt mr-2"></i>
              {' '}Mon, Sep 19th 2022
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              fugiat asperiores inventore beatae accusamus odit minima enim,
              commodi quia, doloribus eius! Ducimus nemo accusantium maiores
              velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
              ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
              dolores nobis enim quidem excepturi, illum quos!
            </p>
            <a class='twitter-share-button'
              href='https://twitter.com/intent/tweet'
              target='_blank'
              rel='noreferrer'>
              <button>Tweet</button>
            </a>
          </div>
        </div>
      </div>
      <MyPagination />
    </div>
  );
};

export default News;