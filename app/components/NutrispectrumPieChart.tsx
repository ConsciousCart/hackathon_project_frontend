import { ResponsivePie } from '@nivo/pie';

// Define types for the product and the categories
type NutrientDensityScore = {
  value: number;
  category: string;
};

type Product = {
  nutrient_density_score: NutrientDensityScore;
};

type Categories = {
  'Very Low': number;
  'Low': number;
  'Medium': number;
  'High': number;
};

// Function to categorize products
const categorizeProducts = (products: Product[]): Categories => {
  const categories: Categories = {
    'Very Low': 0,
    'Low': 0,
    'Medium': 0,
    'High': 0,
  };

  products.forEach((product) => {
    const score = product.nutrient_density_score.value;

    if (score >= 0 && score <= 25) {
      categories['Very Low'] += 1;
    } else if (score > 25 && score <= 50) {
      categories['Low'] += 1;
    } else if (score > 50 && score <= 75) {
      categories['Medium'] += 1;
    } else if (score > 75 && score <= 100) {
      categories['High'] += 1;
    }
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
  return [
    { id: 'Very Low', label: 'Very Low', value: categories['Very Low'] },
    { id: 'Low', label: 'Low', value: categories['Low'] },
    { id: 'Medium', label: 'Medium', value: categories['Medium'] },
    { id: 'High', label: 'High', value: categories['High'] },
  ];
};

// Main component to render the pie chart
type Props = {
  products: Product[];
};

const NutrientDensityAnalysisChart: React.FC<Props> = ({ products }) => {
  const categories = categorizeProducts(products);
  const pieChartData = getPieChartData(categories);

  return (
    <div style={{ height: '400px' }}>
      <ResponsivePie
        data={pieChartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        colors={{ scheme: 'set3' }}
      />
    </div>
  );
};

export default NutrientDensityAnalysisChart;
