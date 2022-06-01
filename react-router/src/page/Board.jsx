import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>{id}번 게시글 입니다</h3>
    </div>
  );
};
export default Board;
