import {Link} from "react-router-dom"
import {useState} from "react"
import List1 from "./List1"
import List2 from "./List2"
const Navbar=()=>{
    const[active,setactive]=useState('');
    return(
        <div>
        <div className="fixed top-0 w-full bg-red-400 p-7 text-white flex justify-start gap-10 z-50 ">
           <p className="hover:underline cursor-pointer" onClick={()=>{setactive('list1')}} >List of Students</p>
           <p className="hover:underline cursor-pointer" onClick={()=>{setactive('list2')}} >Favourite Students </p>
        </div>
        <div className="mt-28">
            {active==='list1' &&<List1/>}
            {active==='list2' &&<List2/>}
        </div>
       
         </div>
       
    )
};
export default Navbar;