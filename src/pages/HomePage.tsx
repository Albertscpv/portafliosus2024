function HomePage(){
    return(
        <div className="flex flex-col gap-10 ">
          <p className="text-left text-2xl font-satoshi-bold">Hola, Soy Susana 🌻</p>
          <p className="text-left  ">
              Actualmente soy estudiante de  publicidad en la UIA. Me gusta la pintura y la ilustracion. Considero importante aprender y probar cosas que me ayuden en mi crecimiento personal.
          </p>
          <div className="flex flex-col gap-5">
          <div className="flex w-[100%] justify-between gap-5">
                
                <img src="/images/pinturas/Arte.jpeg" 
                    alt="image-1" 
                    className="w-[45%] rounded-md object-cover "/>
                
                <img src="/images/pinturas/SunFlowers.jpeg" 
                    alt="image-2" 
                    className="w-[55%] rounded-md object-cover "/>
          </div>
            <div className="flex w-[100%] justify-between gap-5">
                
                <img src="/images/pinturas/Dragones.jpeg" 
                    alt="image-3" 
                    className="w-[55%] rounded-md "/>
                
                <img src="/images/pinturas/Arte2.jpeg" 
                    alt="image-4" 
                    className="w-[45%] rounded-md object-cover"/>
          </div>
        </div>
        <p className="text-left mt-5 ">Soy una persona que ama la naturaleza y he hecho muchos trabajos en relación a ella.</p>
        </div>
    )
}
export default HomePage;