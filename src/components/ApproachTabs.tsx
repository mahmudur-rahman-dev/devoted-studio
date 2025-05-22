import React, { useState } from "react";

const steps = [
  {
    title: "Meet and Greet",
    img: "https://ext.same-assets.com/2815741424/consultation.webp",
    percent: 10,
    desc:
      "You'll meet our expert designers, and they will listen to your requirements. (No payment is required.)",
  },
  {
    title: "Design Development",
    img: "https://ext.same-assets.com/2815741424/planning.webp",
    percent: 30,
    desc:
      "With a range of designs, our designers will seek your approval and develop the design from start to finish. (Pay 5% of the estimated quotation.)",
  },
  {
    title: "Place Your Order",
    img: "https://ext.same-assets.com/2815741424/order.webp",
    percent: 60,
    desc:
      "Once the order is placed, we will begin working on construction drawings and start procuring materials.",
  },
  {
    title: "Installation Process",
    img: "https://ext.same-assets.com/2815741424/installation.webp",
    percent: 90,
    desc:
      "To ensure everything is on track, we'll provide you with a Gantt Chart and conduct 154 quality checks.",
  },
  {
    title: "You Moving In",
    img: "https://ext.same-assets.com/2815741424/completion.webp",
    percent: 100,
    desc: "Now that our installation is complete, you can move into your place.",
  },
];

export default function ApproachTabs() {
  const [index, setIndex] = useState(0);
  const step = steps[index];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between border-b border-primary mb-6 text-center text-sm md:text-base font-semibold text-text">
        {steps.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIndex(i)}
            className={`px-2 pb-4 flex-1 relative transition-colors ${
              i === index ? "text-primary" : "hover:text-primary"
            }`}
          >
            {s.title}
            {i === index && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-primary rounded-t" />
            )}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-8">
        <img
          src={step.img}
          alt={step.title}
          className="max-w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="w-full max-w-4xl">
          <div className="flex justify-between text-xs font-medium text-text-light mb-1">
            <span>0%</span>
            <span>{step.percent}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${step.percent}%` }}
            />
          </div>
        </div>
        <p className="max-w-3xl text-center text-text font-medium">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
