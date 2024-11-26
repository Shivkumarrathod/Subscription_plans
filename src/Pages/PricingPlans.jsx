import React, { useState } from "react";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";

const plans = {
    monthly: [
        { name: "Free", price: 0, features: ["Basic Support", "1 GB Storage", "Community Access","Basic Support", "1 GB Storage", "Community Access"] },
        { name: "Paid", price: 250, features: ["Priority Support", "10 GB Storage", "Advanced Analytics","Basic Support", "1 GB Storage", "Community Access"] },
        { name: "Enterprise", price: 1000, features: ["Dedicated Support", "Unlimited Storage", "Custom Integrations","Basic Support", "1 GB Storage", "Community Access"] },
      ],
      quarterly: [
        { name: "Free", price: 0, features: ["Basic Support", "3 GB Storage", "Community Access","Basic Support", "1 GB Storage", "Community Access"] },
        { name: "Paid", price: 700, features: ["Priority Support", "30 GB Storage", "Advanced Analytics","Basic Support", "1 GB Storage", "Community Access"] },
        { name: "Enterprise", price: 2800, features: ["Dedicated Support", "Unlimited Storage", "Custom Integrations","Basic Support", "1 GB Storage", "Community Access"] },
      ],
      yearly: [
        { name: "Free", price: 0, features: ["Basic Support", "12 GB Storage", "Community Access","Basic Support", "1 GB Storage", "Community Access"] },
        { name: "Paid", price: 2500, features: ["Priority Support", "120 GB Storage", "Advanced Analytics","Basic Support", "1 GB Storage", "Community Access"] },
        { name: "Enterprise", price: 10000, features: ["Dedicated Support", "Unlimited Storage", "Custom Integrations","Basic Support", "1 GB Storage", "Community Access",] },
      ],
};

const PricingPlans = () => {
  const [interval, setInterval] = useState("monthly");

  return (
    <div className="w-full max-w-5xl px-4 py-8 bg-white rounded-lg ">
      <h1 className="text-3xl font-bold text-black tracking-wider text-center mb-1">Choose Your Plan</h1>
      <p className="text-center text-sm">Choose the best plan that fits you.</p>
      <div className="grid gap-6 mt-6 sm:grid-cols-1 md:grid-cols-3">
        {plans[interval].map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      <PricingToggle selected={interval} onChange={setInterval} />
    </div>
  );
};

export default PricingPlans;
