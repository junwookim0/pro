//프로필 변경 컴포넌트 마이페이지에서 모달창으로 표시
import { useState } from "react";
import { ProfileUpdate } from "../../firebase"
import { useNavigate } from "react-router-dom";
import "./TestProfile.css";
const TestProfile = () => {

    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [error, seterror] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisplayName("");
        setPhotoURL("");
        const res = await ProfileUpdate(displayName, photoURL);
        alert("프로필 변경 되었습니다");
        navigate("/mypage");
        if (res.error) seterror(res.error);
    };
    return (
        <div className="profile_box">
            <div className="div_profile">
                    <form onSubmit={handleSubmit} className="input_profile">
                    <h1>프로필 변경</h1>
                        <input
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="닉네임"
                            required
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                        <input className="upload-name" value={photoURL ? photoURL :'파일선택' } disabled="disabled"/>
                        <label for="ex_file">프로필 사진 업로드</label>
                        <input
                            type="file"
                            id="ex_file"
                            name="photoURL"
                            value={photoURL}
                            placeholder="프로필 사진"
                            accept="image/png, image/jpeg"
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                        <button className="profile_submit" type="submit" value="프로필변경">프로필변경</button>
                    </form>
                    {error ? 
                    <div className="profile_error"> {error} </div> : null}
            </div>
        </div>
    );
};
export default TestProfile;