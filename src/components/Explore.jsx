import React from 'react'
import slick_img from "../assets/Slick.png"
import girl_legs from "../assets/girl-legs.png"
import Button from '../shared/Button'
import shoes_black from "../assets/shoes-black.png"

const Explore = () => {
    return (
        <div className="px-[86px] mt-[100px] ">
            <div className="bg-[#FD8B92] h-[350px] w-full ] rounded-[10px] relative flex items-center  ">
                <div className="w-[700px] ">

                    <img className="w-[700px] h-[200px] z-10 absolute bottom-0 " src={slick_img} />
                    <img className="absolute z-20 h-[600px] -bottom-[45px]" src={girl_legs} />
                </div>

                {/* details */}

                <div className="flex flex-col gap-3 text-white  ">
                    <h1 className=" text-[35px] w-[55%] leading-[40px]">Are you ready to lead the way</h1>
                    <p className="leading-[20px] w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <Button title="Explore" myStyle="bg-[#FFFFFF] text-[#FD8B92]" />
                    <div className="flex gap-4">
                        <div className="relative bg-white w-[50px] h-[40px] rounded-lg">
                            <img src={shoes_black} className="w-[100px] absolute mt-[5px] " />
                        </div>
                        <div className="relative bg-white w-[50px] h-[40px] rounded-lg">
                            <img src={shoes_black} className="w-[100px] absolute mt-[5px] " />
                        </div>
                        <div className="relative bg-white w-[50px] h-[40px] rounded-lg">
                            <img src={shoes_black} className="w-[100px] absolute mt-[5px] " />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Explore