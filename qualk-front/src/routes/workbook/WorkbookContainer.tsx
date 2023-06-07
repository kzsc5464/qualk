import React,{useEffect} from 'react';
import WorkbookPresenter from "./WorkbookPresenter";
import {useNavigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "reducers/reducers";

function WorkbookContainer(){
    const navigate = useNavigate();
    const location = useLocation();
    const shareWorkbookClickSelector = useSelector((state: RootState) => state.shareWorkbookClickReducer)
    const {isToast, toastType, toastMsg} = useSelector((state: RootState) => state.toastMsgReducer);

    const headerLogoOnClickHandler = (event:React.MouseEvent) => {
        navigate('/');
    }

    // 잘못된 경로로 접속할 경우 임시 redirect
    useEffect(() => {
        console.log(location.pathname.split('/'))
        if(location.pathname.split('/')[2] != 'gaiq'
            && location.pathname.split('/')[2] != 'GAIQ'
            && location.pathname.split('/')[2] != 'sqld'
            && location.pathname.split('/')[2] != 'SQLD'
            && location.pathname.split('/')[2] != 'sqid'
            && location.pathname.split('/')[2] != 'SQID'
            && location.pathname.split('/')[2] != 'search'){
            navigate('/quiz/gaiq')
        }
    }, [])
    return(
        <WorkbookPresenter
            location={location}
            headerLogoOnClickHandler={headerLogoOnClickHandler}
            modalState={shareWorkbookClickSelector ? shareWorkbookClickSelector['modalStateId'] : 0}
            toastType={toastType}
            isToast={isToast}
            toastMsg={toastMsg}
        />
    );
}

export default WorkbookContainer;
