import {Twitter, Linkedin} from '@styled-icons/fa-brands';
import FadeInLate from './animation/fadeInLate';
import FadeInUp from './animation/fadeinUp';

interface staff {
    id: number,
    firstname: string,
    lastname: string,
    avatar: string,
    dept: string,
    about: string,
    social:string[]
}

export interface StaffSectionProps {
    staffs: staff[];
}

const StaffSection: React.FC<StaffSectionProps> = ({staffs}) => {
    return ( 
        <section className="staffsection">

            <div className="px-8 py-24 flex flex-col justify-items-center">

                {/* Staff section heading ------------------------------------*/}
                <FadeInUp>
                    <h2 className="text-bold text-2xl w-full text-center">
                        Meet our team
                    </h2>
                </FadeInUp>

                {/* Staff section sub heading -----------------------------*/}
                <FadeInLate>
                    <p className="text-center w-full md:w-2/3 lg:w-2/5 mx-auto pt-5">
                        Consequuntur illo beatae saepe commodi alias veniam ullam quaerat voluptatem odit eos aspernatur.
                    </p>
                </FadeInLate>

            </div>

            <div className="flex flex-wrap w-full">

                {
                    staffs.map(staff => (
                        <div className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 pt-4 lg:pt-0 mt-8" key={ staff.id}>
                            <FadeInLate>
                            <div className="flex flex-col flex-wrap content-center">

                                <img src={staff.avatar} alt="" className="object-cover rounded-full h-40 w-40 bg-white ring-4 ring-gray-100 ring-offset-4 ring-offset-gray-50" />
                                
                                <h3 className="text-center pt-4 font-bold">
                                    
                                    {staff.firstname} {staff.lastname}
                                    
                                </h3>
                                
                                <p className="text-center text-xs">
                                    
                                    {staff.dept}

                                </p>

                                <div className="flex justify-center space-x-2 pt-1">
                                    { // Return twitter logo if twitter link is available ----
                                        staff.social[0].includes("twitter") && (
                                        <a href={staff.social[0]} className="text-blue-500" >
                                            <Twitter size="16" />
                                        </a>
                                    )}

                                    { // Return linkedin link if link is availeble --------
                                        staff.social[1].includes("linkedin") && (
                                        <a href={staff.social[1]} className="text-blue-500"  >
                                            <Linkedin size="16" />
                                        </a>
                                    )}
                                </div>
                                
                            </div>
                            </FadeInLate>
                        </div>
                    ))
                }
            </div>

        </section>
     );
}
 
export default StaffSection;