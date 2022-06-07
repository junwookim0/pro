import { useParams } from "react-router-dom";

// 리뷰 게시판 세부 

const Reviewdetail = () => {
    const { id } = useParams();
    return (
        <div>
        <h1>Reviewdetail {id}</h1>
        </div>
    );
};
export default Reviewdetail;
