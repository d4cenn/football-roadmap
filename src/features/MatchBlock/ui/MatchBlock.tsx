import styles from './MatchBlock.module.scss'
import {TeamBlock} from "src/entities/TeamBlock";
import {useNavigate} from "react-router-dom";

export const MatchBlock = () => {
    const navigate = useNavigate()
    return <div className={styles.MatchBlock} onClick={() => navigate('/match')}>
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