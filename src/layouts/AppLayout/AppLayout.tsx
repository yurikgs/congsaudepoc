
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import withAuthorization from "../Authentication/withAuthorization";
interface Props {
    children: React.ReactNode
}
function AppLayout({children} : Props) {
    return <>
    <Navbar />
    <>{children}</>
    </>
}
export default AppLayout;