import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";

import NavTop from "../components/nav";
import TestimonySection from "../components/testimonysection";
import FooterSection from "../components/footersection";

import { navlinks } from "../data/data";
import { testimonies } from "../data/testimonies";
import HeaderBar from "../components/headerBar";
import FadeInUp from "../components/animation/fadeinUp";
import SlideIn from "../components/animation/slideIn";
import { Router } from "next/router";

const Updates = () => {
    // const [num, setnum] = useState(0);
    // const [count, setCount] = useState(0);
    // const [articles, setArticles] = useState([]);

    // const getarticles = async (num) => {

    //     if(num===1){
    //         const data = await fetch(`http://server.inbayelsa.com/articles?&_limit=2`);
    //         const articles = await data.json();
    //         setArticles(articles)
    //     }else{
    //         const data = await fetch(`http://server.inbayelsa.com/articles?_start=${+num}&_limit=2`);
    //         const articles = await data.json();
    //         setArticles(articles)
    //         console.log("articles ----------------- got -----------", num)
    //     }

    //     if (count < 1) {
    //         const count = await fetch("http://server.inbayelsa.com/articles/count");
    //         const countnum = await count.json();
    //         setCount(countnum)
    //     }    
    // };


    // useEffect(() => {
    //     console.log("UseEffect called ___-----_____----")
    //     getarticles(num);

    // }, [ num]);

    return (
        <div>
            <Head>
                <title>Digitec Hub Official website</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavTop links={navlinks} bgColor={true} />

            <main className="text-gray-700">
                {/* HEADER SECTION ------------------------------------------------------*/}

                <HeaderBar
                    data={{
                        heading: "Updates",
                        sub:
                            "Catchup on all our blog updates and stay informed about all ict related events in Bayelsa and the world at large",
                    }}
                />

                {/* <section className="px-20 py-5" >
                <button onClick={() => setnum(num - 2)} className="px-5" disabled={num <= 1}>Prev</button>

                    {Array.from({length:Math.floor(count/2)+1},(k,v)=>v+1).map((n,ind)=><span className="px-4" key={ind}>{n}</span>)}
                <button onClick={() => setnum(num + 2)} className="px-5" disabled={Math.floor(count/2)+2 == num}>
                    Next
                </button>
                </section> */}

                

                {/* TESTIMONY SECTION ------------------------------------------------------*/}
                
                <TestimonySection testimonies={testimonies} />

                {/* FOOTER SECTION ------------------------------------------------------*/}

                <FooterSection links={navlinks} />
            </main>

            <footer className="footer"></footer>
        </div>
    );
};

// export async function getStaticProps({ params }) {
//     const data = await fetch("http://server.inbayelsa.com/articles?_limit=1");
//     const count = await fetch("http://server.inbayelsa.com/articles/count");

//     const countnum = await count.json();
//     const articles = await data.json();

//     return {
//         props: { articles, count: countnum },
//         revalidate: 1,
//     };
// }
export default Updates;
