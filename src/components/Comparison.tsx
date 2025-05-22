import React from 'react';

const comparisonTableData = {
  headers: ["Feature", "Minimal Limited", "Competitors"],
  rows: [
    ["Quality Materials", "✔️", "✔️"],
    ["Custom Designs", "✔️", "❌"],
    ["On-time Delivery", "✔️", "❌"],
    ["24/7 Support", "✔️", "✔️"],
    ["Competitive Pricing", "✔️", "✔️"],
  ],
};

export default function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto overflow-x-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-dark">
          Why We Stand Out
        </h2>
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-gold text-dark">
              {comparisonTableData.headers.map((header) => (
                <th
                  key={header}
                  className="p-4 border border-gray-300 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonTableData.rows.map(([feature, minimal, competitor]) => (
              <tr key={feature} className="odd:bg-light even:bg-white">
                <td className="p-4 border border-gray-300 font-medium text-dark">{feature}</td>
                <td className="p-4 border border-gray-300">{minimal}</td>
                <td className="p-4 border border-gray-300">{competitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
