import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈 화면입니다</p>
      {/**a 태그와 동일하게 생각 */}
      <Link to="/about">소개</Link>
      <Link to="/intro">소개(intro)</Link>
      <Link to="/profile/hong-gil">프로필</Link>
    </div>
  );
};

export default Home;
