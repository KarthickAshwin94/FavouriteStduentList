import {useState} from "react"
import { createContext } from "react";
const ListContext=createContext();
const ListProvider=(data)=>{
    const [list,setlist]=useState([
        {
            name:"Bharath",
            isFav:false
        },
        {
            name:"Praveen",
            isFav:false
        },
        {
            name:"Kumar",
            isFav:false
        },
        {
            name:"Ramya",
            isFav:false
        },{
            name:"Monica",
            isFav:false
        }
    ]);
    return(
        <div>
            <ListContext.Provider value={{list,setlist}}>
                {
                    data.children
                }
            </ListContext.Provider>
            
        </div>
    )
}
export default ListProvider;
export {ListContext};