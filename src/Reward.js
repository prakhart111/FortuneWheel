import React from 'react'
import staticSpinner from './assets/static-spinner.png';
import { Link, useLocation, useNavigate } from "react-router-dom";


const Reward = () => {
    const navigate = useNavigate();
    const location = useLocation();
    React.useEffect(()=>{
        if(!location?.state?.reward){
            console.log("Spin first")
            navigate("/")
        }
    },[])
const copy = () => {
    navigator.clipboard.writeText(
    `XAXPDF20`,100);
        window.open("https://t.me/ShaShiv_bot", "_blank");
    }
  return (
    <div className="relative z-10 h-screen flex flex-col justify-center items-center align-center p-4">
    {/* <img src={bg1} className="absolute top-0" />
    <img src={bg2} className="absolute bottom-0" /> */}
        <img alt="" src={staticSpinner} className="self-center w-56 md:w-0 absolute -top-16 sm:static" />
    <div className="flex flex-col sm:flex-row absolute items-center align-center">
    <img alt="" src={staticSpinner} className="self-center w-0 md:w-96 absolute -top-16 sm:static" />

        
        <div className='sm:ml-8 max-w-96'>
        <p className='ml-2 font-bold text-xl md:text-2xl  w-96 text-center '>Congrats! You Won:</p>
        <p className='ml-2 font-bold w-96 text-center text-2xl md:text-4xl my-4 p-1 sm:leading-4'>{location?.state?.reward}</p>
    <div className="flex flex-col align-center items-center gap-2">
    <div className='flex w-fit bg-[#14141420]'>
                <div className="rounded-l-md text-white w-fit p-4 text-xl font-bold">XAXPDF20</div>
                <button
                    onClick={copy}
                    className='rounded-r-md w-fit p-4 text-white bg-button font-bold text-lg cursor-pointer outline-none'
                    >
                        COPY
                    </button>
            </div>
            <Link to="/">
                <button
                onClick={copy}
                className='text-white m-2 bg-button font-bold p-2 px-8 text-xl rounded-full cursor-pointer self-center mx-auto'>
                    Copy and Go Back to Bot
                </button>
            </Link>
            <p className='italic text-xs text-[#146531]'>*You can claim your coupon for 10 minutes only!</p>
    </div>


    </div>
    </div>


  </div>
  )
}

export default Reward