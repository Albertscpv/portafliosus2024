import Loader from "../components/Loader";
import { useEffect, useState } from "react";



function DesignsPage(){
        const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false);
        }, 2000);
    }, []);
    return(
        <div>
            {isLoading ? (<Loader/>): (
        <>
        <p className="text-left mb-5 font-satoshi-medium ">
            Aquí te muestro algunos de mis proyectos personales de este año.  
        </p>
        <div className="flex flex-col gap-5 mb-5">
            <div className="flex w-[100%] justify-between gap-5 ">
                            <img className="flex w-[50%] rounded-md" src="/images/tipografia/image1.png" alt="ImageDesign"/>
                            <img className="flex w-[50%] rounded-lg object-cover" src="/images/ñeca/MiniDonas.png" alt="ImageDesign"/>
            </div>
            <div className="flex w-[100%] justify-between gap-5">
                            <img className="flex w-[50%] rounded-md object-scale-down " src="/images/carpe/brief.jpg" alt="ImageDesign"/>
                            <img className="flex w-[50%] rounded-md object-fill" src="/images/carpe/tipografia.png" alt="ImageDesign"/>
            </div>
            <div className="flex w-[100%] justify-between gap-5">
                            <img className="flex w-[50%] rounded-md object-scale-down " src="/images/ilustraciones/kindred.jpg" alt="ImageDesign"/>
                            <img className="flex w-[50%] rounded-md object-cover" src="/images/ilustraciones/Kirby3D.jpg" alt="ImageDesign"/>
            </div>
        </div>
        <p className="text-left text-xl font-satoshi-bold-italic ">
            Nuevos proyectos pronto...
        </p>
        </>
        )}
        </div>
    )
}

export default DesignsPage;