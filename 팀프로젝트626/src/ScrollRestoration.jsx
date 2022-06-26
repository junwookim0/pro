//Navigate 사용해서 페이지 이동시 react 스크롤위치가 그대로 유지됨 
//브라우저 화면에서 스크롤 위치 초기화(맨위로) 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
