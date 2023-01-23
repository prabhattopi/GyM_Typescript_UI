import Navbar from "@/scences/navbar";
import { useEffect, useState } from "react";
import Home from "@/scences/home";
import { SelectedPage } from "@/shared/types";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  ); //typestring
  const [isTopPage,setIsTopPage]=useState<boolean>(true);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY===0){
        setIsTopPage(false);
        setSelectedPage(SelectedPage.Home);

      }
      if(window.scrollY!==0){
        setIsTopPage(false);

      }
    }

    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopPage={isTopPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
