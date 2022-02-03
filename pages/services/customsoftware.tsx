import React from 'react';
import Head from "next/head";

import NavTop from "../../components/nav";
import FooterSection from "../../components/footersection";

import { navlinks } from "../../data/data";
import HeaderBar from "../../components/headerBar";

const Customsoftware = () => {
    return (
        <div className="text-xl leading-loose">
        <Head>
            <title>Inbayelsa.com digital services and solutions.</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavTop links={navlinks} bgColor={true} />

        <main className="text-gray-700">
            {/* HEADER SECTION ------------------------------------------------------*/}

            <HeaderBar
                data={{
                    heading: "Our Services",
                    sub: " We offer the following professional services.",
                }}
            />

            <section className="bg-white px-8 flex flex-wrap">

                <div className="w-11/12 h-96 bg-white rounded-lg shadow">

                </div>
            </section>

            {/* FOOTER SECTION ------------------------------------------------------*/}

            <FooterSection links={navlinks} />
        </main>

        <footer className="footer"></footer>
    </div>
    )
}

export default Customsoftware
