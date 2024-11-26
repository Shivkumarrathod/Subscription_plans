import React from "react";
import PricingPlans from "./Pages/PricingPlans";
import sport from './utiles/sport.jpg'
function App() {
  return (
    <div>
      {/* <div className="flex justify-center">
       <img src={sport} alt="sport" className="h-[200px] w-[80%]"/>
      </div> */}
      <div className="min-h-screen flex items-center justify-center">
        <PricingPlans />
      </div>
    </div>
  );
}

export default App;
