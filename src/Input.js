import React from 'react'
import mail from "./assets/mail.png"
import call from "./assets/call.png"

const Input = ({type}) => {
  return (
    <div className='flex bg-white rounded-t-md shadow m-3 my-2 ml-2 py-2 border-b border-button overflow-hidden gap-2'>
        <img alt="" src={type==="Email"?mail:call} className="p-2 mx-2 self-center" width="10%"/>
        <div className='flex flex-col'>
            <p className="text-sm opacity-80">{type}</p>
            <input type="text"  className="outline-none border-0 sm:max-w-3/5"
            placeholder={type==="Email" ? `shaila_bot@gmail.com` : "+91 9999999999"}/>
        </div>
    </div>
  )
}

export default Input