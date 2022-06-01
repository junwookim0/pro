import { Link, Outlet } from "react-router-dom";
const Boardlist = () => {
  return (
    <div>
      <h1>board</h1>
      <ul>
        <li>
          <Link to="/boardlist/1">게시글 1</Link>
        </li>
      </ul>
      {/** Outlet을 통해서 중첩된 컴포넌트의 화면이 출력 */}
      <Outlet />
    </div>
  );
};
export default Boardlist;
