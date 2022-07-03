import React, { useState } from "react";
import { useEffect } from "react";
import styles from './CSS/menu.module.css'



const Menu = ({ id,  isToggle, onReviseComment,  onDeleteComment, divRef}) => {
    const [toggle, setToggle] = useState(isToggle);


    //🍎다른곳 토글하면 메뉴창 없어짐
    const clickEvent = ()=> {
        setToggle(false)
    }

    useEffect(()=>{
        divRef.current !==undefined && divRef.current.addEventListener('click', clickEvent);
    })
    

    const viewMenu = () => {
        setToggle(!toggle);
    };


    return (
        <div>
            <button id={id} onClick={()=>viewMenu()} className={styles.comments_ellipsis}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div className={toggle ? `${styles.comments_ellipsis_container}`: `${styles.comments_ellipsis_container_none}`}>
                <button onClick={()=>onReviseComment(id)}>수정</button>
                <button onClick={()=>onDeleteComment(id)}>삭제</button>
            </div>
        </div>
    );
};

export default Menu;