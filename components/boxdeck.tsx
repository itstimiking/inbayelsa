import Image from 'next/image';
import _ from 'lodash';


const BoxDeck: React.FC = () => {

    const ar = _.range(600)

    return ( 
        <div className="flex flex-wrap absolute w-full h-full space-x-5 left-0 bottom-0 transform overflow-hidden rotate-45">  
          
            {
                ar.map(x=>(
                    <div className="w-3 h-3 bg-gray-300 mr-2 mt-2 md:hidden lg:block" key={x}>

                    </div>
                ))
            }

        </div>
    );
}
 
export default BoxDeck;