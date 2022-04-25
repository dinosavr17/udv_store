import React, {Fragment, useState} from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import {Title} from "../components/Title";
export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Title/>
            <Slider/>
        </div>
    )

}