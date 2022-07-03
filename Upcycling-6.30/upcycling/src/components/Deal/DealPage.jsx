/* 🥑 deal 게시판 목록 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './CSS/dealPage.module.css';
import { firestore } from "../../firebase";
import { query, collection, where, onSnapshot } from "firebase/firestore";

import SubMainBanner from "../banner/SubMainBannerDeal";
import Nav from "../Nav/Nav";
import DealItem from "./DealItem";

const DealPage = ({deals}) => {

    const [searchDeals, setSearchDeals] = useState([]);

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/deals/write');
    };

    const [keyword, setKeyword] = useState('');

    const onChange = (e) => {
        setKeyword(e.target.value);
    };

    /* 해시태그 검색 */
    const onSearchClick = async (e) => {
        e.preventDefault();
        const q = query(
            collection(firestore, 'dbDeals'),
            where('hashtagArray', 'array-contains', keyword),
        );
        
        onSnapshot(q, (snapshot) => {
            const searchArray = snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }));
            setSearchDeals(searchArray);
            console.log(searchDeals);
        });
    };

    return (
        <div>
            <Nav />
            <SubMainBanner/>
            <section className={styles.dealPage}>
                <div className={styles.header}>
                    {/* 검색 */}
                    <div className={styles.container}>
                        <span className={styles.title}>해시태그로 검색 : </span>
                        <input 
                        onChange={onChange}
                        type="text" />
                        <button 
                        onClick={onSearchClick}
                        className={styles.search}>
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>
                    {/* 글 작성 버튼 */}
                    <button
                    className={styles.button_write}
                    onClick={onClick}>
                        글 작성하기
                    </button>
                </div>

                <ul className={styles.list}>
                    {
                        !keyword ? (
                            deals.map(deal => (
                                <li key={deal.createdAt}
                                className={styles.list_item}>
                                    <DealItem deal={deal} />
                                </li>
                            ))
                        ) : (
                            searchDeals.map(search => (
                                <li key={search.createdAt}
                                className={styles.list_item}>
                                    <DealItem deal={search} />
                                </li>
                            ))
                        )
                    }
                </ul>
            </section>
        </div>
    );
};

export default DealPage;