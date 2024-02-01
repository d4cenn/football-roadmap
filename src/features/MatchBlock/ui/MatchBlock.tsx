import styles from './MatchBlock.module.scss'
import {TeamBlock} from "src/entities/TeamBlock";

export const MatchBlock = () => {
    return <div className={styles.MatchBlock}>
        <div className={styles.MatchInfo}>
            <TeamBlock isHost/>
            —
            <TeamBlock/>
        </div>
        <div className={styles.DatePoint}>
            <div className={styles.DatePointCircle} />
            <div className={styles.DatePointLabel}>01.10.2023</div>
        </div>
    </div>
}