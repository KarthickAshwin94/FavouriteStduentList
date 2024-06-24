import List1 from "./components/List1"
import List2 from "./components/List2"
import ListProvider from "./ListProvider"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route,Routes} from "react-router-dom"
const App=()=>{
    return(
        <div>
           
            <ListProvider>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}></Route>
                    <Route path="/list" element={<List1/>}></Route>
                    <Route path="/favlist" element={<List2/>}></Route>
                </Routes>
                </BrowserRouter>
            </ListProvider>
        </div>
    )
}
export default App;