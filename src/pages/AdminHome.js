import React, {Fragment} from "react";
import BalanceIncrease from "../components/BalanceIncrease";
import AdmNavbar from "../components/AdmNavbar";
import AdminMenu from "../components/AdminMenu";
export const AdminHome = () => {
    return (
        <Fragment>
            <AdmNavbar/>
            <AdminMenu/>
        </Fragment>
    )

}