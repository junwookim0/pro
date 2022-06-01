import { useParams } from "react-router-dom";

// data.hong.name 객체 접근
// data[hong][name] 객체 접근
const data = {
  hong: {
    name: "hong-gil",
    adress: "부산",
  },
  green: {
    name: "green",
    adress: "부산",
  },
};

const Profile = () => {
  // 객체형식으로 들어옴
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>프로필</h1>
      {/**JSX 구문 사용 */}
      {/** params의 username 대신 profile의 이름과 주소 출력 */}
      {profile ? (
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.adress}</p>
        </div>
      ) : (
        <p>존재하지 않는 사람입니다</p>
      )}
    </div>
  );
};
export default Profile;
