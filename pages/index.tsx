
import Head from "next/head";

import NavTop from "../components/nav";
import HeaderSection1 from "../components/frontpage/header1";
import HeaderSection2 from "../components/frontpage/header2";

import SecondSection from "../components/frontpage/secondsection";
import BlogSection from "../components/blogsection";
import StaffSection from "../components/staffsection";
import TestimonySection from "../components/testimonysection";

import { navlinks, boxes } from "../data/data";

import { staffs } from "../data/staffs";
import { testimonies } from "../data/testimonies";
import FooterSection from "../components/footersection";

import { getAllPostsData } from "../lib/getPostData";
import HeaderSection3 from "../components/frontpage/header3";
import { useThemeContext } from "../context/themeContext";

export default function Index({ articles }) {

    const {theme} = useThemeContext();

    return (
        <div>
            <Head>
                <title>Taking bayelsa to a digital space</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavTop links={navlinks} />

            <main className="text-gray-700">
                <header className="flex -mt-14 py-50  justify-center relative banner overflow-hidden"
                    style={{backgroundColor: theme.background.rgb}}
                >
                    {/** Main Jumbotron Header section ----------------------- */}
                    <HeaderSection1 />
                    <HeaderSection3 />

                    {/** Header image section -------------------------------- */}

                    <HeaderSection2 />

                </header>

                {/* Boxes section whith a side heading ---------------------*/}

                <SecondSection
                    heading={boxes.heading}
                    contents={boxes.content}
                />

                <BlogSection articles={articles} />

                <StaffSection staffs={staffs} />

                <TestimonySection testimonies={testimonies} />

                <FooterSection links={navlinks} />
            </main>

            <footer className="footer"></footer>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const articles = await getAllPostsData();

    return {
        props: { articles },
        revalidate: 1,
    };
}
