import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import chartData from "../../subdivided_bar_chart.json";
import { chartTheme } from "../../chartTheme";
const AnalysisBar = () => {
  // Transform the data into the format expected by ResponsiveBar
  const data = Object.entries(chartData).map(([month, categories]) => ({
    month,
    ...categories,
  }));

  return (
    <div className="h-[400px] w-[300px] min-w-full">
      <ResponsiveBar
        theme={chartTheme}
        data={data}
        keys={[
          "Indulgence Zone",
          "Mindful Munchies",
          "Balanced Boosters",
          "Nutri Powerhouse",
        ]}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "Mindful Munchies",
            },
            id: "dots",
          },
          {
            match: {
              id: "Balanced Boosters",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Count",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 5]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 110,
            translateY: 0,
            itemsSpacing: 1,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 10,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default AnalysisBar;
