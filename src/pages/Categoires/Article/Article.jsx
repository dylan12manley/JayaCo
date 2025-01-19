import './Article.css';
export default function Article({ data, index }) {
  return (
    <div className='article'>
      {data.articleTitle && <h3>{data?.articleTitle}</h3>}
      <div className='art-part'>
        <p>{data.articleTextOne}</p>
        {data.articleImgUrlOne && (
          <img
            src={data.articleImgUrlOne}
            alt={`article ${index} image 1`}
          />
        )}
      </div>
      <div className='art-part'>
        {data.articleImgUrlTwo && (
          <img
            src={data.articleImgUrlTwo}
            alt={`article ${index} image two`}
          />
        )}
        {data.articleImgUrlTwo && <p>{data.articleTextTwo}</p>}
      </div>
      <div className='art-part'>
        {data.articleTextThree && <p>{data.articleTextThree}</p>}
        {data.articleImgUrlThree && (
          <img
            src={data.articleImgUrlThree}
            alt={`article ${index} image three`}
          />
        )}
      </div>
    </div>
  );
}
