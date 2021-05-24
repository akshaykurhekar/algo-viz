import { useState } from "react";

function App() {
  const [item, setItem] = useState([1, 2, 3, 4, 5]);
  const [style, setStyle] = useState('');  

  var steps = [];

  for (var i = 0; i < 5; i++) {
    steps.push(
      <div className="flex m-4  border border-white rounded-lg">
        {item.map((item, id) => (
          <div
            key={id}
            className={ style + " m-1 px-4 py-2 bg-white text-gray-600 font-semibold rounded-lg w-12 h-12"}
          >
            {" "}
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="bg-white text-3xl p-2 font-bold shadow h-14 mb-8">
        Algo Viz{" "}
      </div>

       <div className=" m-auto mb-8">
       <select className="text-gray-600 font-bold appearance-none px-4 py-2 bg-gray-100 text-sm" onChange={(e) => setStyle(e.target.value) }>
          <option value="animate-none" className="text-gray-600 font-semibold appearance-none" >Select Animation Properties</option>
          <option value="animate-pulse" className="text-gray-600 font-semibold appearance-none" >Pulse</option>
          <option value="animate-bounce" className="text-gray-600 font-semibold appearance-none" >Bounce</option>
          <option value="animate-spin" className="text-gray-600 font-semibold appearance-none" >Spin</option>
          <option value="animate-ping" className="text-gray-600 font-semibold appearance-none" >Ping</option>
          <option value="animate-none" className="text-gray-600 font-semibold appearance-none" >None</option>
        </select> 
        <button className="text-gray-600 font-bold px-4 py-2 text-sm" onClick={() => setStyle("animate-none")} >Stop animation </button>
       </div> 
        

      <div className="w-min h-min bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 m-auto border border-white rounded-2xl lg:px-8 sm:px-2">
        <div className="mt-12 text-center w-min place-items-center">
            {steps}
        </div>
      </div>
    </div>
  );
}

export default App;
