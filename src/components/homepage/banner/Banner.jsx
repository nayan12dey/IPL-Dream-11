
import React from 'react';
import bannerImg from "../../../assets/banner-main.png"

const Banner = () => {
    return (


        <div className='max-w-10xl container mx-auto bg-[url("src/assets/bg-shadow.png")] bg-cover bg-center bg-neutral flex justify-center items-center w-[90%] rounded-4xl my-4 py-20'>
            <div>
                <div className='flex justify-center my-3'>
                    <img src={bannerImg} alt="" />
                </div>
                <div className='text-white flex flex-col items-center space-y-4'>
                    <h1 className='text-5xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-3xl font-semibold text-gray-400'>Beyond Boundaries Beyond Limits</p>
                </div>
                <div className='flex justify-center mt-2'>
                    <div className='border p-2 rounded-2xl border-[#E7FE29]'>
                        <button className='btn bg-[#E7FE29] border-[#E7FE29] px-4 py-3 font-bold text-lg '>Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;