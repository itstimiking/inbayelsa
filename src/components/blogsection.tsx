import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import FadeInUp from './animation/fadeinUp';
import SlideIn from './animation/slideIn';

interface picture{
    id:number,
    name: string,
    alternativeText?:string | null,
    caption?:string | null,
    width?:number,
    height?:number,
    formats: any,
    hash?:string,
    ext?:string,
    mime?:string,
    size?:number,
    url:string,
    previewUrl?:string | null,
    provider?:string | null,
    provider_metadata?:string | null,
    created_at?:string,
    updated_at?:string
}
interface author{
    id: number,
    firstname: string,
    lastname: string,
    about: string,
    username:string,
    email:string,
    created_at:Date,
    updated_at:Date,
    picture: picture[],
}

interface category {
    id: number,
    name: string,
    slug: string,
    created_at: Date,
    updated_at: Date
}

interface article {
    id: number,
    title: string,
    excerpt: string,
    status: string,
    slug: string,
    content: string,
    created_at: Date,
    updated_at: Date,
    published_at: Date,
    categories: category[],
    image: picture, 
    author: author
}

export interface BlogSectionProps {
    articles: article[];
}
 
const BlogSection: React.FC<BlogSectionProps> = ({articles}) => {
    return ( 
        <section className="flex flex-col front-page-blogs-height pb-32">

            <div className="px-8 py-24 sm:p24 flex flex-col justify-items-center">

                {/* BLOG section heading ------------------------------------*/}

                <h2 className="text-bold text-2xl w-full text-center">
                    From the blog
                </h2>

                {/* BLog section sub heading -----------------------------*/}
                <SlideIn>
                    <p className="text-center w-full md:w-2/3 lg:w-2/5 mx-auto pt-5">
                        Consequuntur illo beatae saepe commodi alias veniam ullam quaerat voluptatem odit eos aspernatur.
                    </p>
                </SlideIn>
            </div>

            <div className="flex flex-wrap p-4 w-full">
                
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

        </section>
     );
}

export default BlogSection;