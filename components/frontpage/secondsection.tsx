import FadeIn from "../animation/fadeIn";
import SlideIn from "../animation/slideIn";

interface content{
    icon: any,
    title: string,
    text: string,
}
export interface SecondSectionProps {
    heading: string,
    contents: content[],
}
 
const SecondSection: React.FC<SecondSectionProps> = ({heading, contents}) => {
    return ( 

        <section className="gray">

            <div className="w-full md:w-1/3 bg-gray-50 md:text-right pb-10 px-8 text-3xl capitalize leading-10">
                <p className="pt-32"> 

                    {heading} 
                
                </p>
            </div>

            <div className="w-full md:w-2/3 bg-gray-50 md:pt-32 pb-20 md:pb-0 px-8 flex flex-wrap">

                {// Box content for the second sectoin -------------------------------
                    contents.map((content, index)=>(
                        <div className="w-full pt-8 md:pt-1 md:w-2/4" key={index}>
                            <FadeIn>
                            <p className="w-10 h-10 mb-4 p-2 bg-blue-600 text-gray-50 flex justify-center">
                                {content.icon}
                            </p>
                            <h2 className="font-bold pb-2">
                                {content.title}
                            </h2>
                            </FadeIn>
                            <SlideIn><p>
                                { content.text}
                            </p></SlideIn>
                        </div>
                    ))
                }
            
            </div>

        </section>

     );
}
 
export default SecondSection;