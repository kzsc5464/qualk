import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate, Link} from "react-router-dom";
import styles from 'stylesheets/workbook/search/QuizSearch.module.css'
import publicAnimations from 'stylesheets/public/animation.module.css'
import PublicImageBtnContainer from "../../../components/public/public-image-btn/PublicImageBtnContainer";
import {ReactComponent as ArrowLeftIconDefault} from "assets/images/public/arrow_left_icon.svg";
import {ReactComponent as ArrowLeftIconHover} from "assets/images/public/arrow_left_icon_hover.svg";
import QuizResultContainer from "./QuizResultContainer";
import {useQuery} from "@tanstack/react-query";
import getSearchResult from "../../../queries/workbook/search/getSearchResult";


function QuizSearch(){
    const location = useLocation()
    const navigate = useNavigate()
    const [searchKeyword, setSearchKeyword] = useState<string>(decodeURI(location.search.split('&')[0].split('=')[1]));
    const [searchType, setSearchType] = useState<string>(location.search.split('&')[1].split('=')[1]);
    const {isLoading: keywordIsLoading, isError: keywordIsError, data: keywordData, error: keywordError, refetch: keywordRefetch} = useQuery(['search', 'keyword', searchKeyword], () => getSearchResult(searchKeyword,'keyword'), {staleTime: 100000});
    const {isLoading: tagIsLoading, isError: tagIsError, data: tagData, error: tagError, refetch: tagRefetch} = useQuery(['search', 'tag', searchKeyword], () => getSearchResult(searchKeyword,'tag'), {staleTime: 100000});

    useEffect(() => {
        setSearchKeyword(decodeURI(location.search.split('&')[0].split('=')[1]))
        setSearchType(location.search.split('&')[1].split('=')[1])
    },[location, searchKeyword])

    return(
        <div className={`${styles.quiz_root} ${publicAnimations.fade_in}`}>
            <div className={styles.header}>
                <PublicImageBtnContainer
                    btnText="뒤로가기"
                    options={{border: false}}
                    logoIcon={{
                        default: <ArrowLeftIconDefault />,
                        hover: <ArrowLeftIconHover />,
                    }}
                    btnClickEventHandler={(event: React.MouseEvent)=>{
                        if(location.state && location.state.beforeLocation){
                            navigate(location.state.beforeLocation)
                        } else {
                            navigate('/quiz/gaiq')
                        }
                    }}
                />
            </div>
            <div className={styles.search_result_header}>
                <div className={styles.title}>
                    <p>'{searchKeyword}'</p><span>에 대한 검색 결과입니다.</span>
                </div>
                <ul className={styles.list_container}>
                    <li onClick={() => navigate(`/quiz/search?keyword=${searchKeyword}&type=all`, {state: {beforeLocation: location.pathname + location.search}})}
                        className={searchType == 'all' ? styles.selected : ''}>
                        <p>전체</p> <p className={searchType == 'all' ? styles.active : ''}>{keywordData && tagData ? keywordData.length + tagData.length : 0}</p>
                    </li>
                    <li onClick={() => navigate(`/quiz/search?keyword=${searchKeyword}&type=keyword`, {state: {beforeLocation: location.pathname + location.search}})}
                        className={searchType == 'keyword' ? styles.selected : ''}>
                        <p>문제</p> <p className={searchType == 'keyword' ? styles.active : ''}>{keywordData ? keywordData.length : 0}</p>
                    </li>
                    <li onClick={() => navigate(`/quiz/search?keyword=${searchKeyword}&type=tag`, {state: {beforeLocation: location.pathname + location.search}})}
                        className={searchType == 'tag' ? styles.selected : ''}>
                        <p>태그</p> <p className={searchType == 'tag' ? styles.active : ''}>{tagData ? tagData.length : 0}</p>
                    </li>
                </ul>
            </div>
            <div className={styles.search_result_container}>
                {searchType == 'all' ? <><QuizResultContainer containerType='keyword' containerTitle="문제" searchData={keywordData} searchType={searchType} searchKeyword={searchKeyword} /> <QuizResultContainer containerType='tag' containerTitle="태그" searchData={tagData} searchType={searchType} searchKeyword={searchKeyword} /></> : null }
                {searchType == 'keyword' ? <QuizResultContainer containerType='keyword' containerTitle="문제" searchData={keywordData} searchType={searchType} searchKeyword={searchKeyword} /> : null }
                {searchType == 'tag' ? <QuizResultContainer containerType='tag' containerTitle="태그" searchData={tagData} searchType={searchType} searchKeyword={searchKeyword} />: null }

            </div>
        </div>
    )
}

export default QuizSearch;
