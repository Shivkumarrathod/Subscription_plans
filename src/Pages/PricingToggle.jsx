import React from "react";

const intervals = ["monthly", "quarterly", "yearly"];

const PricingToggle = ({ selected, onChange }) => {
  return (
    <div className="flex justify-center  mb-4">
      <div className="flex justify-center bg-gray-300 mt-5 p-1 rounded-full">
        {intervals.map((interval) => (
            <button
            key={interval}
            onClick={() => onChange(interval)}
            className={`py-1 px-4 mx-1 text-sm font-medium rounded-full ${
                selected === interval
                ? "bg-white text-black"
                : "bg-gray-300 text-black"
            } transition-colors`}
            >
            {interval.charAt(0).toUpperCase() + interval.slice(1)}
            </button>
        ))}
      </div>
    </div>
  );
};

export default PricingToggle;
