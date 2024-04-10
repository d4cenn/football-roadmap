import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {YearsPage} from "src/pages/YearsPage";
import {TimelinePage} from "src/pages/TimelinePage";
import {MatchPage} from "../../../pages/MatchPage";

export const AppRouter: FC = () => (
    <Routes>
        <Route element={<YearsPage />} path="/" />
        <Route element={<TimelinePage />} path="/year/:year" />
        <Route element={<MatchPage />} path="/match/:matchLink" />
    </Routes>
)