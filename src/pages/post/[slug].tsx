import { useEffect, useState } from "react";
import {GetStaticPaths, GetStaticProps} from 'next';
import Head from "next/head";
import { motion } from "framer-motion";

import NavTop from "../../components/nav";

import StaffSection from "../../components/staffsection";
import TestimonySection from "../../components/testimonysection";

import { navlinks } from "../../data/data";
import { staffs } from "../../data/staffs";
import { testimonies } from "../../data/testimonies";
import FooterSection from "../../components/footersection";
import HeaderBar from "../../components/headerBar";
import SlideIn from "../../components/animation/slideIn";

import {getPaths, getPostData} from "../../lib/getPostData";
import processMarkdown from "../../lib/processMarkdown";

interface PostProps {
    article:{
        title:string,
        description:string,
        content:string,
        image:any
    }
}

const Post: React.FC<PostProps> = ({ article }) => {

    const [content,setContent] = useState("");

    useEffect(()=>{

        processMarkdown(article,setContent)

    },[content])
    
    if(!article){
        return <p>No article to display</p>
    }
    
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
                        heading: article.title,
                        sub: article.description,
                    }}
                />

                <div className="grid grid-row-2 md:flex">
                    <div className="row-start-2 shadow w-full md:w-2/3 h-auto px-8 md:px-12 pt-8 pb-32 flex flex-col space-y-4 text-justify text-gray-600">
                        <img
                            src={article.image.url}
                            alt={article.title}
                            className="shadow-ms mb-5 ring-4 ring-gray-100 ring-offset-4 ring-offset-white rounded"
                        />
                        <div dangerouslySetInnerHTML={{__html:content}} />
                        
                    </div>
                    <div className="row-start-1 w-full md:w-1/3 h-auto p-8">
                        <img
                            src="/images/logo_digitec.png"
                            className="object-cover w-full"
                        />
                    </div>
                </div>

                <StaffSection staffs={staffs} />

                <TestimonySection testimonies={testimonies} />

                <FooterSection links={navlinks} />
            </main>

            <footer className="footer"></footer>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {   
    const paths = await getPaths();
    return { 
        paths, 
        fallback: false 
    }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params.slug;
    const article = await getPostData(slug)

    return {
        props: { article },
        revalidate:2
    };
};

export default Post;
