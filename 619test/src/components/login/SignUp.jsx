import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../firebase";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [Nickname , setNickname ] = useState("");
    const [error, seterror] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            seterror("Passwords do not match");
        } else {
            setEmail("");
            setPassword("");
            setNickname("");
            const res = await signUp(email, password, Nickname);
            if (res.error) seterror(res.error)
        }
    };
    return (
        <div>
            <h2>Sign Up</h2>
            <div>
                {error ? <div>{error}</div> : null}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Your Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        name="Nickname"
                        value={Nickname}
                        placeholder="Your Nickname"
                        required
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        placeholder="Your Password"
                        required
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>already registered? <Link to="/signin">Login</Link></p>
            </div>
        </div>
    );
    };
export default Signup;