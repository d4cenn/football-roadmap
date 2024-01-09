import React from 'react'
import styles from './AppLayout.module.scss'
import {LayoutHeader} from "src/entities/LayoutHeader/ui/LayoutHeader";

export const AppLayout = () => {
    return (
        <div className={styles.AppLayout}>
            <LayoutHeader />
            <div>Content</div>
        </div>
    )
}