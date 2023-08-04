import HomeHeader from "components/HomeHeader";
import { Outlet } from "react-router-dom";

export default function CollectionHeader() {
    return (
        <main>
            <HomeHeader />
            <Outlet />
        </main>
    )
};