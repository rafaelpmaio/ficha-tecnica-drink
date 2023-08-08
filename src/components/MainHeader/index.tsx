import DynamicMainHeader from "components/HomeHeader";
import { Outlet } from "react-router-dom";

export default function MainHeader() {
    return (
        <main>
            <DynamicMainHeader />
            <Outlet />
        </main>
    )
};