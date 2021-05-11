import { Heading } from "@styled-icons/fa-solid"

interface data {
    heading: string,
    sub: string
}

export interface HeaderBarProps {
    data: data
}
 
const HeaderBar : React.FC<HeaderBarProps> = ({data}) => {
    return ( 
        <div className="bg-gray-200 px-8 md:pl-12 text-gray-700 flex flex-col min-h-60 pt-28 w-full pb-12">

            <h2 className="font-bold text-3xl pb-2"> 
                {data.heading}
            </h2>

            <p className="w-full md:w-4/5 lg:w-3/5"> 
                {data.sub} 
            </p>

        </div> 
    );
}
 
export default HeaderBar ;