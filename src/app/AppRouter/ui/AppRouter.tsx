import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {YearsPage} from "src/pages/YearsPage";
import {TimelinePage} from "src/pages/TimelinePage";

export const AppRouter: FC = () => (
    <Routes>
        <Route element={<YearsPage />} path="/"/>
        <Route element={<TimelinePage />} path="/year/:year"/>
    </Routes>
)