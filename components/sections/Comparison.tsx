import React from "react";

const comparisonTableData = {
  headers: ["Feature", "Devoted Studio", "Competitors"],
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
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-5xl overflow-x-auto">
        <h2 className="mb-10 text-center text-3xl font-bold text-dark md:text-4xl">
          Why We Stand Out
        </h2>
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-gold text-dark">
              {comparisonTableData.headers.map((header) => (
                <th
                  key={header}
                  className="border border-gray-300 p-4 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonTableData.rows.map(([feature, devoted, competitor]) => (
              <tr key={feature} className="odd:bg-light even:bg-white">
                <td className="border border-gray-300 p-4 font-medium text-dark">
                  {feature}
                </td>
                <td className="border border-gray-300 p-4">{devoted}</td>
                <td className="border border-gray-300 p-4">{competitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
