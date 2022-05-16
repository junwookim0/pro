//화살표함수형

function UserGreeting(props) {
    return (
        <div>
            <h1>로그인에 성공하였습니다</h1>
            <p>홍길동</p>
        </div>
    );
    }
    
    function GuestGreeting(props) {
        return (
            <div>
                <h1>로그인이 실패</h1>
                <p>리액트를 시작했습니다</p>
            </div>
        );
    }
    
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn===true) {
        return <UserGreeting />;
        }
        return <GuestGreeting />;
    }

export default Greeting;