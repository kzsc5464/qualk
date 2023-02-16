import React from 'react';
import styles from './WorkbookListViewPresenter.module.css'
import {ReactComponent as GaiqLogo} from 'assets/images/workbook/listview/gaiq_logo.svg';
import {ReactComponent as ListViewLogo} from 'assets/images/workbook/listview/listview_logo.svg';
import {ReactComponent as EyeImage} from 'assets/images/workbook/listview/eye_image.svg';
import WorkbookElement from "./WorkbookElement";

type workbookListViewPropsType = {
    categoryData: {
        activeMenu: string,
        activeMenuId: number,
    },
    workbookData: WorkbookDataType[],
}

type WorkbookDataType = {
    question_id: number,
    question_type: string,
    question_name: string,
    question_content: string[],
    question_description: string,
    question_correct: number,
    question_reference: { title: string; author: string; link: string; }[],
    question_view: number,
    question_create: Date,
    question_edited: Date,
    question_tag: string[],
}

function WorkbookListViewPresenter({categoryData, workbookData}: workbookListViewPropsType){
    console.log('workbookData ', workbookData);
    console.log('categoryData ', categoryData);
    return (
        <div className={styles.workbook_listview_root}>
            <div className={styles.favorite_container}>
                <div className={styles.favorite_header}>
                    <GaiqLogo width="50px" height="50px"/>
                    <span>{categoryData ? categoryData['activeMenu'] : 'Loading'}</span>
                </div>
                <div className={styles.favorite_help_container}>
                    <EyeImage width="36px" height="36px" />
                    <span>사람들이 가장 많이 찾아본 문제에요!</span>
                </div>
                <div className={styles.favorite_content_container}>

                </div>
            </div>
            <div className={styles.listview_root}>
                <div className={styles.listview_header}>
                    <div className={styles.listview_title_container}>
                        <ListViewLogo width="36px" height="36px"/>
                        <span>전체</span>
                    </div>
                    <div className={styles.listview_filter_container}>
                        <div className={styles.filter_element}><span>조회순</span></div>
                        <div className={styles.filter_element}><span>최신순</span></div>
                        <div className={styles.filter_element}><span>오래된순</span></div>
                    </div>
                </div>
                <div className={styles.listview_body}>
                    { workbookData ? workbookData.map((data: WorkbookDataType) => {
                        if(data){
                            return <WorkbookElement
                                key={data['question_id']}
                                question_id={data['question_id']}
                                question_type={data['question_type']}
                                question_name={data['question_name']}
                                question_view={data['question_view']}
                                question_create={data['question_create']}
                                question_tag={data['question_tag']}
                            />
                        }
                    }) : null}
                </div>
            </div>
        </div>
    );
}

export default WorkbookListViewPresenter;
