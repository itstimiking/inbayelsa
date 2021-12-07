import { useThemeContext } from "../context/themeContext";

interface data {
    heading: string,
    sub: string
}

export interface HeaderBarProps {
    data: data
}
 
const HeaderBar : React.FC<HeaderBarProps> = ({data}) => {

    const {theme} = useThemeContext();

    return ( 
        <div 
            className="px-8 md:pl-12 flex flex-col min-h-60 pt-28 w-full pb-12 -mt-10"
            style={{
                backgroundColor: theme.primary.rgb,
                color: theme.text.rgb
            }}
        >

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