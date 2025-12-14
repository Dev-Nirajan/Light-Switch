import { useState } from "react";
import "./App.css";
import {clsx} from "clsx";

const App = () => {
  const [IsOn, setIsOn] = useState(false);
  const stateChange = IsOn ? "bg-yellow-200" : "bg-slate-600";
  
  return <div className={ clsx ("flex justify-center items-center h-screen w-screen", stateChange)}>
    <button onClick={() => setIsOn(!IsOn)}
      className="cursor-pointer"
      >
      <div className="bg-slate-300 rounded-full"> 
        <div className={clsx (IsOn ? "bg-slate-400" : "bg-slate-300", "rounded-full w-8 h-12")}> </div>
        <div className={clsx (IsOn ? "bg-slate-300" : "bg-slate-400", "rounded-full w-8 h-12")}> </div>
      </div>
    </button>
  </div>;
};
export default App;
