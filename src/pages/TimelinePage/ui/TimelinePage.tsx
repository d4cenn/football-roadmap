import {FC} from "react";
import {useParams} from "react-router-dom";

export const TimelinePage: FC = () => {
    const { year } = useParams()
    return <div>{year}</div>
}