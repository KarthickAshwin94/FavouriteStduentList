import { ListContext } from "../ListProvider";
import { useContext } from "react";
import {useState} from "react"
const List1=()=>{
    const {list,setlist}=useContext(ListContext);
    const[clicked,setclicked]=useState(false);
   const handleclick=(name)=>{
    setclicked(true);
    // now when the user clicks the button we need to add the corresponding element in a new array
    const updated_list=list.map((item)=>{
        if(item.name===name){
           return {...item,isFav:true}
        }
        else{
            return{...item}
        }
    })
    setlist(updated_list);
   }
    return(
        <div>
            <ol>
                {
                    list.map(function(item,index){
                        return(
                            <div key={index} className="flex items-center">
                                <li className="m-4">{index+1}. {item.name}</li>
                                <button className="bg-slate-700 text-white rounded-md p-1" onClick={()=>{handleclick(item.name)}}>Add to Favourite</button>
                                
                               
                            </div>
                        )
                    })
                }
            </ol>
            
        </div>
    )
}
export default List1;
//The List1 contains all the students name 