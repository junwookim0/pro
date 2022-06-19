import { useState } from "react";
import { signIn, signInWithGoogle, signInWithFacebook} from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
        const handleSubmit = async (e) => {
            e.preventDefault();
            setEmail("");
            setPassword("");
            navigate("/home");
            const res = await signIn(email, password);
            if (res.error) seterror(res.error);
        };
        return (
            <div>
                {error ? <div>{error}</div> : null}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="submit" />
                </form>
                <button onClick={handleGoolge}>구글 로그인</button>
                <button onClick={handleFacebook}>페이스북 로그인</button>
            </div>
        );
};
export default Login;