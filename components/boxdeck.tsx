import _ from 'lodash';

interface Props{
    boxColor: string
}

const BoxDeck: React.FC<Props> = ({boxColor}) => {

    const ar = _.range(2000)

    return ( 
        <div 
            className={`
                flex flex-wrap absolute right-0 w-screen h-60 
                space-x-5 left-0 bottom-0 transform overflow-hidden 
                opacity-30`
            }
        >  
          
            {
                ar.map(x=>(
                    <div className="w-10 h-10 animate-spin rounded-sm rotate-45 transform mr-2 mt-2" key={x}
                        style={{backgroundColor: boxColor}}
                    >

                    </div>
                ))
            }

        </div>
    );
}
 
export default BoxDeck;