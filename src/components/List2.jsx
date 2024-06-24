import { ListContext } from "../ListProvider";
import { useContext } from "react";
const List2=()=>{
    const {list,setlist}=useContext(ListContext);
    console.log(list);
    const handleremove=(name)=>{
        const list_new=list.map((item)=>{
            if(item.name===name){
                return({...item,isFav:false});
            }
            else{
                return({...item});
            }
        })
        setlist(list_new);
    }
    return(
        <div>
           {
            list.map((item,index)=>{
                if(item.isFav===true){
                    return(<div key={index} className="flex m-4 gap-x-10">
                        <li >{item.name}</li>
                        <button className="bg-red-600  text-white rounded-md " onClick={()=>{handleremove(item.name)}}>Remove</button>
                    </div>)
                }
            })
           }
          
          
        </div>
    )

}
export default List2;
// The list2 contains all the favourite students name