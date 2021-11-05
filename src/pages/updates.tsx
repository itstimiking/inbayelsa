import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";

import NavTop from "../components/nav";
import TestimonySection from "../components/testimonysection";
import FooterSection from "../components/footersection";

import { navlinks } from "../data/data";
import { testimonies } from "../data/testimonies";
import HeaderBar from "../components/headerBar";

import FadeInUp from '../components/animation/fadeinUp';
import { getAllPostsData } from "../lib/getPostData";

const Updates = ({articles}) => {
    const [num, setnum] = useState(0);
    const [count, setCount] = useState(0);

    const getarticles = async (num) => {

        if (count < 1) {
            const count = await fetch(`${process.env.API_URL}/count`);
            const countnum = await count.json();
            setCount(countnum)
        }    
    };


    useEffect(() => {
        getarticles(num);

    }, [ num]);

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

                <section className=" container mx-auto grid grid-row-2 md:flex">
                    <div className={`
                        row-start-2 shadow w-full md:w-2/3 h-auto 
                        px-8 md:px-12 pt-8 pb-32 flex flex-col 
                        space-y-4 text-justify text-gray-600
                        border-l-2 border-solid
                    `}
                    >

                        {// BLog Section article cards, 4 cols @lg to @xl, 3 col @md and 2 @sm -------
                            articles.map(article=>(
                                
                                <div className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 pt-8 lg:pt-0" key={ article.title}>

                                    <div className="shadow-md">

                                    <FadeInUp>

                                        {/* Article featured image --------------------------------*/}

                                        <div className="object-cover w-full h-40 rounded rounded-b-none overflow-hidden">
                                            <Link 
                                                href="/post/[slug]"
                                                as={`/post/${article.slug}`}
                                                passHref
                                            > 
                                                <img 
                                                    src={article.image ? article.image[0].formats.thumbnail.url : ""} 
                                                    alt={article.title} 
                                                    className="w-full"
                                                />
                                            </Link>
                                        </div>

                                        {/* Article category --------------------------------------*/}

                                        <div className="p-4">
                                            <span className="text-xs font-light text-blue-600">
                                                {article.categories.map(category=>category.name)}
                                            </span>

                                            {/* Article title --------------------------------------*/}
                                            
                                            <h2 className="font-bold">
                                            {article.title}
                                            </h2>

                                            {/* Article short content text --------------------------------------*/}
                                            
                                            <p className="text-sm pt-1">
                                                {article.excerpt}
                                            </p>

                                            {/* Article Author Section --------------------------------------*/}
                                            
                                            <div className="flex pt-3">
                                                { article.author.picture && <img src={article.author.picture[0].formats.thumbnail.url} className="w-10 h-10 rounded-full" />}
                                                <div className="flex flex-col pl-1">
                                                    <span className="text-xs">
                                                    {article.author ? article.author.firstname + " " + article.author.lastname : ""}
                                                    </span>
                                                    <span className="text-xs pt-1">
                                                        {article.created_at.toString().slice(0,10)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        </FadeInUp>
                                    </div>
                                    
                                </div>
                            ))

                        }

                    </div>

                    <div className="row-start-1 w-full md:w-1/3 h-auto p-8" >
                        <img src="/images/logo_digitec.png" className="object-cover w-full" />
                    </div>
                </section>  


                <section className="px-20 py-5" >
                    <button onClick={() => setnum(num - 2)} className="px-5" disabled={num <= 1}>Prev</button>

                        {Array.from({length:Math.floor(count/2)+1},(k,v)=>v+1).map((n,ind)=><span className="px-4" key={ind}>{n}</span>)}
                    <button onClick={() => setnum(num + 2)} className="px-5" disabled={Math.floor(count/2)+2 == num}>
                        Next
                    </button>
                </section>


                {/* FOOTER SECTION ------------------------------------------------------*/}

                <FooterSection links={navlinks} />
            </main>

            <footer className="footer"></footer>
        </div>
    );
};

export async function getStaticProps({ params }) {
    const data = await fetch(`${process.env.API_URL}`);
    const count = await fetch(`${process.env.API_URL}/count`);

    const countnum = await count.json();
    const articles = await data.json();

    return {
        props: { articles, count: countnum },
        revalidate: 1,
    };
}
export default Updates;
