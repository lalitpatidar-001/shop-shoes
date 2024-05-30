import React from 'react'
import Button from '../shared/Button'
import ShoesCard from './ShoesCard'

const Popular = () => {
    return (
        <div className="mt-[100px] px-[86px] flex justify-between ">

            {/* details */}
            <div className="min-w-[300px] flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                    {/* border */}
                    <span className=" h-[2px] bg-black w-[40px]" />
                    <span className="text-[14px] font-[500] ">Our Trending Shoes</span>

                </div>
                <h1 className="text-[45px] font-[500] leading-[55px]">Most Popular
                    Products</h1>
                <p className="leading-[25px] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <Button title="Explore" myStyle="bg-black text-white"/>
            </div>

            {/* shoes */}
            <div className="flex items-center gap-10 relative">
                <ShoesCard />
                <ShoesCard />
                <ShoesCard />

{/* change buttons  */}
{/* //TODO change button icons */}
                <div className="absolute -left-[30px]">l</div>
                <div className="absolute -right-[30px]">r</div>
            </div>
        </div>
    )
}

export default Popular