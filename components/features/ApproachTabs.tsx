import React, { useState } from "react";

const steps = [
  {
    title: "Meet and Greet",
    img: "https://ext.same-assets.com/2815741424/consultation.webp",
    percent: 10,
    desc: "You'll meet our expert designers, and they will listen to your requirements. (No payment is required.)",
  },
  {
    title: "Design Development",
    img: "https://ext.same-assets.com/2815741424/planning.webp",
    percent: 30,
    desc: "With a range of designs, our designers will seek your approval and develop the design from start to finish. (Pay 5% of the estimated quotation.)",
  },
  {
    title: "Place Your Order",
    img: "https://ext.same-assets.com/2815741424/order.webp",
    percent: 60,
    desc: "Once the order is placed, we will begin working on construction drawings and start procuring materials.",
  },
  {
    title: "Installation Process",
    img: "https://ext.same-assets.com/2815741424/installation.webp",
    percent: 90,
    desc: "To ensure everything is on track, we'll provide you with a Gantt Chart and conduct 154 quality checks.",
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
  
  // Create style object for progress bar
  const progressStyle = { width: `${step.percent}%` };

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap justify-between border-b border-primary text-center text-sm font-semibold text-text md:text-base">
        {steps.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIndex(i)}
            className={`relative flex-1 px-2 pb-4 transition-colors ${
              i === index ? "text-primary" : "hover:text-primary"
            }`}
          >
            {s.title}
            {i === index && (
              <span className="absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-t bg-primary" />
            )}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-8">
        <img
          src={step.img}
          alt={step.title}
          className="h-64 max-w-full rounded-lg object-cover shadow-md"
        />
        <div className="w-full max-w-4xl">
          <div className="mb-1 flex justify-between text-xs font-medium text-text-light">
            <span>0%</span>
            <span>{step.percent}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={progressStyle}
            />
          </div>
        </div>
        <p className="max-w-3xl text-center font-medium text-text">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
