import spinner from './assets/spinner.png';

import pin from './assets/pin.png';
import './App.css';
import React from "react";
import { useRef,useState } from 'react';
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom';

function SpinWheel() {
  const [spin,setSpin] = useState(false)
  const [run,setRun] = useState(false);
  const wheel = useRef(null);
  const items = [
    {
      angle:"0deg",
      reward:"Rs. 100 OFF",
    },
    {
      angle:"60deg",
      reward:"Buy 2 Get 1 FREE on Biscuits",
    },
    {
      angle:"120deg",
      reward:"Better Luck Next Time",
    },
    {
      angle:"180deg",
      reward:"FREE Cadbury Celebrations",
    },
    {
      angle:"240deg",
      reward:"10% OFF",
    },
    {
      angle:"300deg",
      reward:"Better Luck Next Time",
    }
  ];
  const spinIt = ()=>{
    const angleIndex = Math.floor( Math.random()*100 % 6 );
    return items[angleIndex];
  }
  // const { width, height } = useWindowSize();
  const navigate = useNavigate();
  return (
    <div className="App bg-theme-green">
    <Confetti
    run={run}
    />

      <div className="App-header z-10">
        <img src={spinner} ref={wheel} className={`App-logo transition w-96 ${spin && "spin-logo"}`} alt="logo" style={{height:"auto"}}/>
        <img alt="pin" src={pin} className={`absolute z-12 w-12 ${spin && "spinner-logo"}`} />
        <button 
        className='absolute text-white bottom-24 btn m-2 bg-button font-bold p-4 px-8 text-md sm:text-xl rounded-full cursor-pointer'
        onClick={()=>{
            let item = spinIt();
            setSpin(true);
            console.log(item);
            setTimeout(()=>{
              wheel.current.style.transform = `rotate(-${item.angle})`;
              setRun(true);
              setTimeout(()=>{
                navigate("/reward",{
                  state:{
                    reward:item.reward
                  }
                })
              },4000)
            },4000)

        }}>
          {run?"Generating your reward...":"SPIN"}
        </button>
        
      </div>
    </div>
  );
}

export default SpinWheel;
