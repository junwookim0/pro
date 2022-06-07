import DataContext from "../context/DataContext";
import { useContext } from "react";

const MyPage = () => {
  // ContextAPI를 통해서 관련 값을 가져옴
  const data = useContext(DataContext);
  return <p>{data.state.user}</p>;
};
export default MyPage;
