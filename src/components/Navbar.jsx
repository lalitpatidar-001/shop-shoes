import React from 'react'

const Navbar = () => {
    return (
        <div className=" px-[86px] w-full absolute top-[36px]">
            <div className=" h-[39px] flex justify-between items-center">
                <span className="text-black text-[28px] font-[800]">Slick</span>
                <div className="flex items-center gap-8 text-[14px]">
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Collection</span>
                    <span>Customize</span>
                </div>
                <div className="flex items-center gap-7 ">

                    {/* // TODO - add icons */}
                    <span>s</span>
                    <span>c</span>
                    <span>m</span>
                </div>

            </div>
        </div>
    )
}

export default Navbar