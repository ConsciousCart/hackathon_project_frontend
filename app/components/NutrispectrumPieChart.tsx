import { ResponsivePie } from "@nivo/pie";
import { ProductType } from "../types";

type Props = {
  products: ProductType[];
};

type Categories = {
  "Very Low": number;
  Low: number;
  Medium: number;
  High: number;
};

// Function to categorize products
const categorizeProducts = (products: ProductType[]): Categories => {
  const categories: Categories = {
    "Very Low": 0,
    Low: 0,
    Medium: 0,
    High: 0,
  };

  products.forEach((product) => {
    const category = product.nutrient_density_score.category as keyof Categories;
    categories[category] += 1;
  });

  return categories;
};

// Define the data format for the pie chart
type PieData = {
  id: string;
  label: string;
  value: number;
};

// Prepare pie chart data
const getPieChartData = (categories: Categories): PieData[] => {
  return Object.entries(categories).map(([category, count]) => ({
    id: category,
    label: category,
    value: count,
  }));
};

// Main component to render the pie chart
const NutrientDensityAnalysisChart: React.FC<Props> = ({ products }) => {
  const categories = categorizeProducts(products);
  const pieChartData = getPieChartData(categories);

  return (
    <div style={{ height: "400px" }}>
      <ResponsivePie
        data={pieChartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        colors={{ scheme: "set3" }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
};

export default NutrientDensityAnalysisChart;