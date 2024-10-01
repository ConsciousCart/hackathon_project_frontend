import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { ProductType } from "../types";
import { chartTheme } from "@/chartTheme";

type Props = {
  products: ProductType[];
};

const categorizeProducts = (
  products: ProductType[]
): Record<string, number> => {
  const categories: Record<string, number> = {
    "Indulgence zone": 0,
    "Mindful munchies": 0,
    "Balanced boosters": 0,
    "Nutrient powerhouse": 0,
  };

  products.forEach((product) => {
    const category = product.nutrient_density_score.category;
    switch (category) {
      case "Very Low":
        categories["Indulgence zone"]++;
        break;
      case "Low":
        categories["Mindful munchies"]++;
        break;
      case "Medium":
        categories["Balanced boosters"]++;
        break;
      case "High":
        categories["Nutrient powerhouse"]++;
        break;
    }
  });

  return categories;
};

type PieData = {
  id: string;
  label: string;
  value: number;
};

const getPieChartData = (categories: Record<string, number>): PieData[] => {
  return Object.entries(categories).map(([category, count]) => ({
    id: category,
    label: category,
    value: count,
  }));
};

const NutrientDensityAnalysisChart: React.FC<Props> = ({ products }) => {
  const categories = categorizeProducts(products);
  const pieChartData = getPieChartData(categories);

  return (
    <div className="w-full max-w-[800px] mx-auto rounded-lg shadow-md">
      <h3 className="text-xl text-gray-100 mb-4 font-semibold">
        Nutrient Density Distribution
      </h3>
      <div className="h-[300px]">
        <ResponsivePie
          theme={chartTheme}
          data={pieChartData}
          margin={{ top: 0, right: 80, bottom: 80, left: 80 }}
          innerRadius={0}
          padAngle={0}
          cornerRadius={0}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#fff"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          arcLinkLabelsOffset={-24}
          arcLinkLabelsDiagonalLength={0}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            { match: { id: "Indulgence zone" }, id: "dots" },
            { match: { id: "Mindful munchies" }, id: "lines" },
            { match: { id: "Balanced boosters" }, id: "dots" },
            { match: { id: "Nutrient powerhouse" }, id: "lines" },
          ]}
        />
      </div>
    </div>
  );
};

export default NutrientDensityAnalysisChart;
