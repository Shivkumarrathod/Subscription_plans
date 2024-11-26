import { FaAngleRight } from "react-icons/fa6";


const PricingCard = ({ plan }) => {
    // Set specific colors based on the plan name
    const planColors = {
      Free: {
        bg: "bg-green-500 text-white hover:bg-green-600",
        border: "border-green-500",
        hover:"bg-green-600 "
      },
      Paid: {
        bg: "bg-orange-500 text-white hover:bg-orange-600",
        border: "border-orange-500",
        hover:"bg-orange-600"
      },
      Enterprise: {
        bg: "bg-blue-500 text-white hover:bg-blue-600",
        border: "border-blue-500",
        hover:"bg-blue-600"
      },
    };
  
    return (
      <div
        className={`p-6 border-2 rounded-lg hover:shadow-lg transition-shadow ${
          planColors[plan.name].border
        } hover:transition-all hover:${planColors[plan.name].hover} hover:bg-opacity-20 `}
      >
        <div className="border-b-2 p-2">
            <h2 className={`text-2xl font-bold rounded-lg `}>
               {plan.name}
            </h2>
            <p className="text-3xl font-bold text-black mt-1">${plan.price} <span className="text-semibold text-sm">/{plan.name}</span> </p>
            <p className="text-sm">Make secure payments by clicking the button below.</p>
            <button
            className={`mt-6 p-1 text-center rounded-full transition-colors flex justify-center  gap-5 ${planColors[plan.name].bg}`}
            >
             <span className="pl-2 text-sm">Buy Plan</span>
             <div className="bg-white rounded-full p-0.5 ">
                <FaAngleRight size={20} className={`text-black`}/>
             </div>
            </button>
        </div>
        <span className="text-sm font-medium text-gray-500">/ mo</span>
        <ul className="mt-4 text-gray-600 space-y-2">
          {plan.features.map((feature, idx) => (
            <li key={idx}>&#x2713; {feature}</li>
          ))}
        </ul>
       
      </div>
    );
  };
  
  export default PricingCard;
  