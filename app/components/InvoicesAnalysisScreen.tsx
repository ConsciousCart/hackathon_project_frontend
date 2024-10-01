// import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

// const InvoicesAnalysisScreen = () => {
//   return (
//     <div className="text-white p-6">
//       <TypographyH2 className="tracking-wide border-none pb-2">
//         Invoice analysis
//       </TypographyH2>

//       {/* Content area */}
//       <div className="space-y-4">
//       {/* Pie chart */}
//       {/* Table */}
//       </div>
//     </div>
//   );
// };

// export default InvoicesAnalysisScreen;

import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
import NutrientDensityAnalysisChart from "./NutrispectrumPieChart";
import { productData } from "../exportProductsData";

const InvoicesAnalysisScreen = () => {
  return (
    <div className="text-white p-6">
      <TypographyH2 className="tracking-wide border-none pb-2">
        Invoice analysis
      </TypographyH2>

      {/* Content area */}
      <div className="space-y-4">
        {/* Pie chart */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Nutrient Density Distribution</h3>
          <NutrientDensityAnalysisChart products={productData} />
        </div>
        {/* Table */}
        {/* You can add a table component here if needed */}
      </div>
    </div>
  );
};

export default InvoicesAnalysisScreen;