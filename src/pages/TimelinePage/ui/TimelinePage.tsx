import {FC} from "react";
import {useParams} from "react-router-dom";
import styles from './TimelinePage.module.scss'
import {Endpoint} from "src/entities/Endpoint";
import {MatchBlock} from "../../../features/MatchBlock";

export const TimelinePage: FC = () => {
    const { year } = useParams()
    return (
        <div className={styles.TimelineLayout}>
            <Endpoint label={`01 Jan ${year}`} />
            <MatchBlock />
            <Endpoint label={`31 Dec ${year}`} />
        </div>
    )
}