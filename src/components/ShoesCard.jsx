import React from 'react'
import shoes_black from "../assets/shoes-black.png"

const ShoesCard = () => {
  return (
    <div className="h-[230px] w-[210px] bg-[#f5f3f3 border-[1.5px] border-[#DEDEDE] rounded-[15px] ">
        <img src={shoes_black} className="w-[220px] h-[220px]  "/>
        <div className="-mt-[70px] px-[20px] flex flex-col gap-2">
            <span className="text-[16px] font-[500]">Running sport shoe</span>
            <div className="flex items-center justify-between">
                {/* // TODO - add ruppe icon and adjust color */}
                <span>3999.00</span>

                {/* // TODO - add arrow icon */}
                <button className="bg-black rounded-full text-white h-[30px] w-[30px]">ar</button>
            </div>
        </div>

        
    </div>
  )
}

export default ShoesCard