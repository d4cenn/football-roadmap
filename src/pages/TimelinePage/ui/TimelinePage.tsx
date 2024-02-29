import {FC} from "react";
import {useParams} from "react-router-dom";
import styles from './TimelinePage.module.scss'
import {Endpoint} from "src/entities/Endpoint";
import {MatchBlock} from "../../../features/MatchBlock";
import data from 'src/shared/allData/data.json'

export const TimelinePage: FC = () => {
    const { year } = useParams()

    const parsedYearData = data["matches"][year as keyof typeof data.matches]
    if (!parsedYearData) {
        return <div>Oops!</div>
    }

    return (
        <div className={styles.TimelineLayout}>
            <div className={styles.TimelineScroll}>
            <Endpoint style={{ paddingLeft: '200px' }} label={`01.01.${year}`} />
                {parsedYearData.map((match) => <MatchBlock match={match} key={match.id} />)}
            <Endpoint style={{ paddingRight: '200px' }} label={`31.12.${year}`} />
            </div>
        </div>
    )
}