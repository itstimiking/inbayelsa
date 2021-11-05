import axios from 'axios';

export const getPostData = async (slug) => {
    const data = await fetch(`${process.env.API_URL}/articles?slug=${slug}`);
    const articles = await data.json();
    
    return articles[0]
}


export const getAllPostsData = async () => {
    const data = await fetch(`${process.env.API_URL}/articles`);
    const articles = await data.json();
    console.log(articles)
    return articles
}

export const getPaths = async () => {
    const data = await fetch(`${process.env.API_URL}/articles`);
    const articles = await data.json();

    const paths = articles.map((post) => ({
        params: { slug: post.slug},
    }))
    
    return paths;
}