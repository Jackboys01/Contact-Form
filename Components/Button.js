import React from 'react';

const Button = ({isOutline,text,icon}) => {
    
  return (
    // <button
    //   className={`flex text-white text-base min-w-[220px] p-2.5 rounded-md gap-x-3.5 items-center justify-center ${
    //     props.outline
    //       ? 'bg-white border border-black text-black'
    //       : 'bg-black'
    //   }`}
    // >
    //   {props.icon}
    //   {props.text}
    // </button>
   
    
    <button
   className={`flex text-base min-w-[220px] p-2.5 rounded-md gap-x-3.5 items-center justify-center 
   ${isOutline ? 
   'bg-white border border-black text-black w-full' : 'bg-black text-white'}`}
 >
   {icon}
   {text}
 </button>
  );
}

export default Button;  