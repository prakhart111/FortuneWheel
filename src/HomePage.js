import React from 'react'
import bg1 from './assets/bg1.png';
import bg2 from './assets/bg2.png';
import staticSpinner from './assets/static-spinner.png';
import { Link } from "react-router-dom";
import Input from './Input';
import Checkbox from "react-custom-checkbox";
import checkmark from "./assets/checkmark.png"

const HomePage = () => {
  return (
    <div className="relative z-10 h-screen flex flex-col justify-center items-center align-center p-4">
    {/* <img src={bg1} className="absolute top-0" />
    <img src={bg2} className="absolute bottom-0" /> */}
        <img src={staticSpinner} alt="" className="self-center w-56 md:w-0 absolute -top-16 md:static" />
    <div className="flex flex-col sm:flex-row absolute gap-12">
    <img src={staticSpinner} alt="" className="self-center w-0 md:w-96 absolute -top-16 md:static" />
        
        <div className='sm:ml-8 w-96 flex flex-col align-center justify-center'>
        <p className='ml-2 font-bold text-2xl md:text-3xl text-left mb-1'>SuperMart</p>
        <p className='ml-2 font-bold text-xl md:text-2xl text-left mb-4'>Try your luck and win exciting offers.</p>
        <Input type="Email"/>
        <Input type="Call"/>
        <div className="border-2 border-black p-3 rounded-lg m-1 mx-2">
        <Checkbox
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#146531",
              alignSelf: "stretch",
            }}
          >
             <img src={checkmark} width="25px"/>
          </div>
        }
        borderColor="#146531"
        style={{ overflow: "hidden", }}
        size={25}
        labelStyle={{fontSize:"11px", paddingLeft:"12px",maxWidth:"90%",}}
        label="I agree to receiving recurring automated messages at the number I have provided.
        Consent is not a condition to purchase."
      />
        </div>

        <Link to="/spin">
            <button className='text-white my-2 -ml-1 mx-auto bg-button font-bold p-3 w-96 text-xl sm:text-2xl rounded-full cursor-pointer scale-[0.9]'>
                Try your luck
            </button>
        </Link>
        <p className='italic text-xs text-[#146531]'>*You can spin the wheel only once!</p>
        <p className='italic text-xs text-[#146531]'>*You can claim your coupon for 10 minutes only!</p>
        </div>

    </div>


  </div>
  )
}

export default HomePage