import {useState, useEffect,useCallback} from "react";
import Head from "next/head";

import NavTop from "../components/nav";
import HeaderSection1 from "../components/frontpage/header1";

import SecondSection from "../components/frontpage/secondsection";
import BlogSection from "../components/blogsection";
import Brands from "../components/brands";

import { navlinks, boxes } from "../data/data";

import { brands } from "../data/brands";
import FooterSection from "../components/footersection";

import { getAllPostsData } from "../lib/getPostData";


export default function Index({ articles }) {

    const images = [
        "url(/images/scyify.jpg)",
        "url(/images/scyfy1.jpg)"
    ]
    let counter = 0;
    const [image, setImage] = useState(images[counter]);
    const slide = useCallback(()=>{
        let start;
        setInterval(()=>{
            counter++
            if(counter < images.length){
                setImage(images[counter]);
            }else{
                counter = 0;
                setImage(images[counter])
            }         
        },6000)
        
    },[image,images,counter])

    useEffect(()=>{
        slide()
        return ()=>{
            //clearInterval(slide)
        }
    },[])

    return (
        <div className="font-robo text-lg" >
            <Head>
                <title>Taking bayelsa into a digital space, Inbayelsa.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavTop links={navlinks} />

            <main className="text-gray-700">
                <header 
                    className="flex -mt-14 py-50 justify-center relative z-0 banner overflow-hidden"
                    style={{
                        backgroundImage:image,
                        backgroundSize:"cover",
                        transition: "background-image 2s"
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full"
                        style={{backgroundColor:"rgba(0,0,0,0.7)"}}
                    ></div>
                    {/** Main Jumbotron Header section ----------------------- */}
                    <HeaderSection1 />

                </header>

                {/* Boxes section whith a side heading ---------------------*/}

                <SecondSection
                    heading={boxes.heading}
                    contents={boxes.content}
                />

                <BlogSection articles={articles} />

                <Brands brands={brands} />
            </main>
            <FooterSection links={navlinks} />
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
