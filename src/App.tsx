import Navbar from "@/components/navbar/Navbar"
import { useEffect, useState } from "react"
import Home from "./components/home/Home"



const App = () => {
  const [selectedPage , setSelectedPage] = useState<string>('home')
  const [isTop , setIsTop] = useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTop(true);
        setSelectedPage("home");
      } 
      if(window.scrollY !== 0) setIsTop(false);
    }
    window.addEventListener("scroll" , handleScroll);
    return () => window.removeEventListener("scroll" , handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTop={isTop}  selectedPage = {selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App