import React from 'react'
import styles from './AppLayout.module.scss'
import {LayoutHeader} from "src/entities/LayoutHeader/ui/LayoutHeader";
import {YearsPage} from "src/pages/YearsPage/ui/YearsPage";

export const AppLayout = () => {
    return (
        <div className={styles.AppLayout}>
            <LayoutHeader />
            <YearsPage />
        </div>
    )
}