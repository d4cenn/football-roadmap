import {FC, PropsWithChildren} from "react";
import styles from './PageLayout.module.scss'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.PageLayout}>{children}</div>
}