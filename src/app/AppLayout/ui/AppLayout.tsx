import React from 'react'
import styles from './AppLayout.module.scss'
import {LayoutHeader} from "src/entities/LayoutHeader";
import {AppRouter} from "src/app/AppRouter";

export const AppLayout = () => {
    return (
        <div className={styles.AppLayout}>
            <LayoutHeader />
            <AppRouter />
        </div>
    )
}