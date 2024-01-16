import {FC} from "react";
import styles from './YearBlock.module.scss'

type YearBlockPropsType = {
    year: number,
    backgroundUrl: string
}

export const YearBlock: FC<YearBlockPropsType> = ({ year, backgroundUrl }) => {
    return (
        <div className={styles.YearBlock} style={{ backgroundImage: `url(${backgroundUrl})` }}>
            {year}
        </div>
    )
}