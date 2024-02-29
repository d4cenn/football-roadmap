import {FC} from "react";
import styles from './YearBlock.module.scss'
import {useNavigate} from "react-router-dom";

type YearBlockPropsType = {
    year: string,
    backgroundUrl: string
}

export const YearBlock: FC<YearBlockPropsType> = ({ year, backgroundUrl }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.YearBlock} style={{ backgroundImage: `url(${require(`src/shared/images/${backgroundUrl}`)})` }} onClick={() => navigate(`/year/${year}`)}>
            {year}
        </div>
    )
}