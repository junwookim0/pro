import { useState } from "react";
import { signIn , signInWithGoogle, signInWithFacebook ,signInWithGithub} from "../../firebase";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, seterror] = useState("");
        const navigate = useNavigate();

        const handleGoolge = () => {
            signInWithGoogle();
            navigate("/home");
        };
        const handleFacebook = () => {
            signInWithFacebook();
            navigate("/home");
        };
        const handleGithub = () => {
            signInWithGithub();
            navigate("/home")
        }
        const goSignUp = () => {
            navigate("/signup");
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            setEmail("");
            setPassword("");
            const res = await signIn(email, password);
            if (res.error) seterror(res.error);
            alert("환영합니다");
            navigate("/home");
        };
        
        return (
            <div className="signin_box">
                <div className="div_signin">
                    {error ? <div>{error}</div> : null}
                    <form onSubmit={handleSubmit} className="input_signin">
                        <h1>로그인</h1>
                        <input
                            className="signin_id"
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Your Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="signin_password"
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Your Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input className="signin_submit" type="submit" value="UPTOWN 로그인" />
                        <input className="signin_button" type="button" value="회원가입" onClick={goSignUp} />
                        
                    </form>
                    <div className="social-btns">
                        <button className="google" onClick={handleGoolge}><i className="fab fa-google fa-lg"></i></button>
                        <button className="facebook" onClick={handleFacebook}><i className="fab fa-facebook-f fa-lg"></i></button>
                        <button className="github" onClick={handleGithub}><i className="fab fa-github fa-lg"></i></button>
                    </div>
                </div>
            </div>
        );
        
};
export default SignIn;