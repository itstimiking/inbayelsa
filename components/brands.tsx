import {Twitter, Linkedin} from '@styled-icons/fa-brands';
import FadeInLate from './animation/fadeInLate';
import FadeInUp from './animation/fadeinUp';

interface brand {
    id: number,
    website: string,
    image: string,
    name: string
}

export interface BrandsProps {
    brands: brand[];
}

const Brands: React.FC<BrandsProps> = ({brands}) => {
    return ( 
        <section className="w-full min-h-0 bg-gray-600 flex flex-col relative px-4 md:px-8 text-gray-100 pb-32">

            <div className="px-8 py-24 flex flex-col justify-items-center">

                {/* Staff section heading ------------------------------------*/}
                <FadeInUp>
                    <h2 className="text-bold text-2xl w-full text-center">
                        Brands We have worked With
                    </h2>
                </FadeInUp>
            </div>

            <div className="flex flex-wrap w-full">

                {
                    brands.map(brand => (
                        <div className=" w-full min-h-0 sm:w-1/2 px-4 pt-4 lg:pt-0 mt-8" key={ brand.id}>
                            <FadeInLate>
                               

                                    <img 
                                        src={brand.image} 
                                        alt="" 
                                        className="object-cover w-1/3 mx-auto" 
                                    />
                                    
                                    <h3 className="text-center mt-10 font-bold">
                                        
                                        {brand.name}
                                        
                                    </h3>
                                    <p className="w-full text-center text-sm font-light">
                                        <a href={brand.website} >Visite website</a>
                                    </p>
                                    
                            </FadeInLate>
                        </div>
                    ))
                }
            </div>

        </section>
     );
}
 
export default Brands;