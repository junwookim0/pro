//마이페이지 tab 메뉴에 마켓 하위 내용
import MyDeal from "./myDeal/MyDeal";
import DCommentList from "./myDeal/dCommentList";

const tabcompDeal = ( ) => {
        return(
            <div>
                <MyDeal/>
                <DCommentList/>
            </div>
        )
}
    
export default tabcompDeal;