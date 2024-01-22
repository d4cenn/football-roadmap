import styles from './MatchBlock.module.scss'
import {Endpoint} from "src/entities/Endpoint";
export const MatchBlock = () => {
    return <div className={styles.MatchBlock}>
        <div className={styles.MatchInfo}>match</div>
        <div className={styles.VertLine} />
        <div className={styles.HorizLine}>
            <Endpoint label={`01 Feb 2023`} size="small"/>
        </div>
    </div>
}