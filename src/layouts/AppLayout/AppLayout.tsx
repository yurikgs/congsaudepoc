
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
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