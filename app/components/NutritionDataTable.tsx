import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import groceryData from "../grocery_analysis_results_21Products.json";

export default function NutritionDataTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Product Name</TableHead>
            <TableHead>Cost to Nutrient Ratio</TableHead>
            <TableHead>Glycemic Index</TableHead>
            <TableHead>Carbon Footprint</TableHead>
            <TableHead>Versatility Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groceryData?.products?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-gray-100">
                {item.product_name}
              </TableCell>
              <TableCell className="text-gray-100">
                {item.cost_nutrient_ratio.value}(
                {item.cost_nutrient_ratio.category})
              </TableCell>
              <TableCell className="text-gray-100">
                {item.glycemic_index.value}({item.glycemic_index.category})
              </TableCell>
              <TableCell className="text-gray-100">
                {item.environmental_impact.carbon_footprint.value}
                {item.environmental_impact.carbon_footprint.unit}(
                {item.environmental_impact.carbon_footprint.category})
              </TableCell>
              <TableCell className="text-gray-100">
                {item.versatility_score.value}({item.versatility_score.category}
                )
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
