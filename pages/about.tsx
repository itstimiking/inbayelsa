import Head from "next/head";

import NavTop from "../components/nav";

import StaffSection from "../components/staffsection";
import TestimonySection from "../components/testimonysection";

import { navlinks } from "../data/data";
import { staffs } from "../data/staffs";
import { testimonies } from "../data/testimonies";
import FooterSection from "../components/footersection";
import HeaderBar from "../components/headerBar";

export default function About() {
    return (
        <div className="text-xl leading-loose">
            <Head>
                <title>About Inbayelsa, all you should know</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavTop links={navlinks} bgColor={true} />

            <main className="text-gray-700">
                {/* HEADER SECTION ------------------------------------------------------*/}

                <HeaderBar
                    data={{
                        heading: "About Inbayelsa.com",
                        sub: "We need you to need us.",
                    }}
                />

                {/* PROFESSIONAL COURSES SECTION ------------------------------------------------------*/}

                <div className=" container mx-auto grid grid-row-2 md:flex">
                    <div
                        className={`
                            row-start-2 shadow w-full md:w-2/3 h-auto 
                            px-8 md:px-12 pt-8 pb-32 sm:flex sm:space-x-5 text-gray-600
                            border-l-2 border-solid 
                        `}
                    >
                        <div className="w-full md:w-full min-h-0 rounded-lg -mt-12 bg-gray-100 mb-10 p-10 md:hidden lg:block">
                            <fieldset className="w-full min-h-0 border border-gray-200 reounded-lg p-6 mt-10">
                                <legend className="mx-5 px-5">
                                    Our Mission
                                </legend>

                                <p>
                                    To connect every business, indivudual and
                                    organizations to digital opportunities and a
                                    global customer base.
                                </p>
                            </fieldset>

                            <fieldset className="w-full min-h-0 border border-gray-200 reounded-lg p-6 mt-10">
                                <legend className="mx-5 px-5">
                                    Our Vission
                                </legend>

                                <p>
                                    Our vission is to become the goto solution for organizations and business
                                    that needs to utilize all online digital opportunities and software productivity.
                                </p>
                            </fieldset>
                        </div>

                        <div className="w-full md:w-full p-5 flex flex-col space-y-10">
                            <p>
                                Inbayelsa.com offers end-to-end digital
                                solutions to assist individuals businesses and 
                                organizations in Bayelsa to deploy
                                digital solutions that can increase sales, improve
                                business coverage and attract more customers. It
                                is a technology-driven world and we provide all
                                the tech services that a business will need to
                                expand and grow digitally.
                            </p>

                            <p>
                                Traditional media platforms are getting
                                flooded, they are not as productive as
                                they once were. The world is already a digital
                                one. We provide solutions for businesses and organizations 
                                with the needed tools and services to enable them to establish a
                                successful digital presence.
                            </p>

                            <p>
                                Founded by Timi Ambaye in 2020, Inbayelsa.com is established in 
                                Bayelsa State Nigeria. It can be very costly for small businesses
                                and organizations to create a digital presence and to access software
                                solutions because large software companies and corporations have decided
                                to make it so. Inbayelsa was established to provide a solution to this 
                                problem. To provide such services in good quality and affordability for everyone.
                            </p>
                        </div>
                    </div>

                    <div className="row-start-1 w-full md:w-1/3 h-auto p-8">
                        <img
                            src="/logo_inbayelsa_vertical_light.png"
                            className="object-cover w-full"
                        />
                    </div>
                </div>

                <FooterSection links={navlinks} />
            </main>

            <footer className="footer"></footer>
        </div>
    );
}
