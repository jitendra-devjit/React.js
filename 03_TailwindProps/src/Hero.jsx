import React from 'react'

const Hero = () => {
  return (
    <div>
            <div className="relative min-h-screen overflow-hidden">
        
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative top-32 max-w-3xl font-Manrope">
                  <h1 className="text-5xl font-extrabold sm:text-7xl">
                    Making bitcoin more than an investment.
                  </h1>
                  <p className="my-4 font-medium">
                    Bitcoin is the best money. It should defenitely be used like it. We
                    always build and fund free, open-source projects aimed at making
                    bitcoin the planet's preferred currency.
                  </p>
                  <div>
                    <button className="m-1 rounded-xl  bg-[#FF00E5] px-16 py-3">
                      Learn More
                    </button>
                    <button className=" mx-1 rounded-xl bg-white px-16 py-3 text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative   top-[10vh] max-w-full sm:top-0 ">
                <div className="absolute w-full object-contain">
                  <img src="circle.png" alt="" className="relative  object-fill" />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Hero