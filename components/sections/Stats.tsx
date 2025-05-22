import React from "react";

const stats = [
  { label: "Projects Completed", value: "350+" },
  { label: "Happy Clients", value: "280+" },
  { label: "Years of Experience", value: "15" },
  { label: "Awards Won", value: "12" },
];

export default function Stats() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-10 text-center md:grid-cols-4">
        {stats.map(({ label, value }) => (
          <div key={label} className="rounded-xl bg-white p-10 shadow">
            <div className="mb-2 text-4xl font-bold text-gold">{value}</div>
            <div className="font-medium text-text-light">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
