import {YearBlock} from "src/features/YearBlock";
import styles from './YearsPage.module.scss'
import data from 'src/shared/allData/data.json'

export const YearsPage = () => {
    return (
        <div className={styles.YearsPage}>
            {Object.entries(data.backgrounds).map(([year, background]) => (
                <YearBlock key={year} year={year} backgroundUrl={background} />
            ))}
        </div>
    )
}