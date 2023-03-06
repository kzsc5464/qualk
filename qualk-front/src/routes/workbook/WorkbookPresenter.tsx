import React, {EventHandler, ReactEventHandler} from 'react';
import styles from 'stylesheets/workbook/WorkbookPresenter.module.css';
import styled from 'styled-components';
import SideBarContainer from "../../components/workbook/sidebarmenu/SideBarMenuContainer";
import SearchBarContainer from "../../components/public/searchbar/SearchBarContainer";
import WorkbookListViewContainer from "../../components/workbook/listview/WorkbookListViewContainer";
import {ReactComponent as QualkHeaderLogo} from 'assets/images/workbook/listview/qualk_logo_122_40.svg';
import SharePostModalContainer from 'components/public/share-post-modal/SharePostModalContainer';

const LogoTitle = styled.span`
    color: #ff9300;
    font-size: 2.25rem;
    font-family: bc-alphapipe, sans-serif;
    font-weight: bold;
    letter-spacing: -1.44px;
`;

type WorkbookPresenterPropsType = {
    headerLogoOnClickHandler: ReactEventHandler,
}

const workbookModalState = {
    0: null,
    1: <SharePostModalContainer />,
}

function WorkbookPresenter({headerLogoOnClickHandler}: WorkbookPresenterPropsType){
    return(
        <div className={styles.workbook_main}>
            <div className={styles.workbook_header_container}>
                <div className={styles.workbook_header}>
                    <div onClick={headerLogoOnClickHandler} className={styles.logo_container}>
                        <QualkHeaderLogo width="122px" height="40px"/>
                    </div>
                    <SearchBarContainer />
                </div>
            </div>
            <div className={styles.workbook_body}>
                <div className={styles.left_side_container}>
                    <SideBarContainer />
                </div>
                <div className={styles.right_side_container}>
                    <WorkbookListViewContainer />

                </div>
            </div>
            {workbookModalState ? workbookModalState['1'] : null}
        </div>
    );
}

export default WorkbookPresenter;
