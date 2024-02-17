import DynamicMainHeader from "components/MainHeader/DynamicMainHeader";
import { Outlet } from "react-router-dom";

export default function MainHeader() {
    return (
        <main>
            <DynamicMainHeader />
            <Outlet />
        </main>
    )
};