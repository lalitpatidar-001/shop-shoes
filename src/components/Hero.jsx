import React from 'react'
import Navbar from './Navbar'
import soulmate_text from "../assets/soulmate-text-img.png";
import white_shoes_img from "../assets/white-shoes-img.png"
import Button from '../shared/Button';

const Hero = () => {
    return (
        <div className="flex items-center w-full">
            <div className="bg-[#FFFFFF] h-screen w-[757px] flex flex-col gap-4 justify-center px-[76px] pt-[60px]">
                <h1 className=" text-[70px] font-[600] text-black leading-[75px] ">
                    Find Your Soul Mate With Us
                </h1>
                <p className="text-[18px] leading-[28px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                {/* button */}
                <Button title="Shop Now" myStyle="bg-black text-white"/>
            </div>
            <div className="bg-[#EAEAEA] h-screen w-[971px] relative">
                <img src={soulmate_text} className="w-[100px] h-[calc(100vh-100px)] mt-[90px] -ml-2" />
                <div className="absolute top-[70px]">
                    <img src={white_shoes_img} className="w-[970px] h-[400px]" />
                    <div className="flex flex-col items-center">
                        <span className="text-[22px] text-black font-[500]">Trendy Slick pro</span>
                        <span className="text-[18px]">3999.00</span>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Hero