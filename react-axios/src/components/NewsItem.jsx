// styled-components를 사용하기 위해 가져옴
import styled from "styled-components";

// styled-components의 이름작성
// styled.(태그)를 통해서 사용할 컴포넌트의 디자인 작성
const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 320px;
      height: 200px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      text-align: left;
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ news }) => {
  const { title, url, description, urlToImage } = news;
  return (
    <NewsItemBlock>
      {
        /* jsx 언어 && */
        urlToImage && (
          <div className="thumbnail">
            <a href={url}>
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )
      }
      <div className="contents">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
