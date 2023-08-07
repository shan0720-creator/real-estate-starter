import React from "react";
import { useState } from "react";
import {AiOutlineCaretDown,AiOutlineCaretUp} from 'react-icons/ai';
import list from './list.json';



function Dropdown(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative flex flex-col items-center  rounded-edge">
            <button onClick={()=> setIsOpen((prev)=> !prev)} className="  w-full flex items-center justify-between p-1 rounded-lg color:white  border-4 border-transparent active:border-white duration:300 active:text-white">Manage Property
            {!isOpen ? (
                <AiOutlineCaretDown className="h-8"/>):(
           <AiOutlineCaretUp className="h-8"/>
                )}</button>
                {isOpen && <div className="bg-purple-300 absolute top-10 flex flex-col rounded-lg p-2 w-full ">
                        {list.map((item1,i)=> (
                            <div>
                                  <h3>{item1.city}</h3>
                                </div>
                        ))}
                    </div>}
        </div>
    )
}








export  default Dropdown ;