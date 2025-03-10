import React from "react";

import About from "../components/About";
import Workshops from "../components/Workshops";
import Events from "../components/Events";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="h-screen">
            <About />
            <Workshops />
            <Events />
            <Team />
            <Contact />
        </div>
    )
}