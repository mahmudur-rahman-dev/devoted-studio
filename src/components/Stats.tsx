import React from 'react';

const stats = [
  { label: "Projects Completed", value: "350+" },
  { label: "Happy Clients", value: "280+" },
  { label: "Years of Experience", value: "15" },
  { label: "Awards Won", value: "12" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl shadow p-10">
            <div className="text-4xl font-bold text-gold mb-2">
              {value}
            </div>
            <div className="text-text-light font-medium">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
