import React from 'react';
import { ResponsivePie } from "@nivo/pie";
import { ProductType } from "../types";
import styled from 'styled-components';

type Props = {
  products: ProductType[];
};

const ChartContainer = styled.div`
  height: 450px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h3`
  text-align: center;
  color: #333333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const categorizeProducts = (products: ProductType[]): Record<string, number> => {
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
    <ChartContainer>
      <ChartTitle>Nutrient Density Distribution</ChartTitle>
      <ResponsivePie
        data={pieChartData}
        margin={{ top: 20, right: 80, bottom: 60, left: 80 }}
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
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          { match: { id: 'Indulgence zone' }, id: 'dots' },
          { match: { id: 'Mindful munchies' }, id: 'lines' },
          { match: { id: 'Balanced boosters' }, id: 'dots' },
          { match: { id: 'Nutrient powerhouse' }, id: 'lines' }
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 40,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </ChartContainer>
  );
};

export default NutrientDensityAnalysisChart;