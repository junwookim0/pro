// 리뷰 게시판
import { Link, Outlet, NavLink } from "react-router-dom";

const Reviewlist = () => {
    const numlist = [1, 2, 3, 4, 5];
    return (
        <div>
        <h1>Reviewlist</h1>
        
        <ul>
        {numlist.map((num, index) => (
            <li key={index}>
                <NavLink
                to={`/boardlist/${num}`}
                >
                게시글 {num}
                </NavLink>
            </li>
            ))}
        </ul>
        <Outlet />
        </div>
    );
};
export default Reviewlist;
