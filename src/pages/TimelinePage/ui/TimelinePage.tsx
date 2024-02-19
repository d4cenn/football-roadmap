import {FC} from "react";
import {useParams} from "react-router-dom";
import styles from './TimelinePage.module.scss'
import {Endpoint} from "src/entities/Endpoint";
import {MatchBlock} from "../../../features/MatchBlock";
import matchesData from 'src/shared/matchesData/matches.json'

export const TimelinePage: FC = () => {
    const { year } = useParams()

    const parsedYearData = matchesData[year as keyof typeof matchesData]
    if (!parsedYearData) {
        return <div>Oops!</div>
    }

    return (
        <div className={styles.TimelineLayout}>
            <div className={styles.TimelineScroll}>
            <Endpoint style={{ paddingLeft: '200px' }} label={`01 Jan ${year}`} />
                {parsedYearData.map((match) => <MatchBlock match={match} key={match.id} />)}
            <Endpoint style={{ paddingRight: '200px' }} label={`31 Dec ${year}`} />
            </div>
        </div>
    )
}