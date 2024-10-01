import React from "react";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
import NutrientDensityAnalysisChart from "./NutrispectrumPieChart";
import { productData } from "../exportProductsData";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const Container = styled.div`
  padding: 20px;
`;

const ContentArea = styled.div`
  margin-top: 20px;
`;

const InvoicesAnalysisScreen: React.FC = () => {
  return (
    <div>
      <TypographyH2 className="text-white">Invoice Analysis</TypographyH2>
      <div className="mt-[20px]">
        <div className="">
          <NutrientDensityAnalysisChart products={productData} />
        </div>

        {/* Table */}
        <Table className="text-white w-max mx-auto">
          <TableRow>
            <TableHead className="w-[100px]">Cost to nutrient ratio</TableHead>
            <TableHead className="text-left">Glycemic index</TableHead>
            <TableHead className="text-left">Carbon footprint</TableHead>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell>One</TableCell>
              <TableCell className="ml-auto">Two</TableCell>
              <TableCell className="ml-auto">Three</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>One</TableCell>
              <TableCell className="ml-auto">Two</TableCell>
              <TableCell className="ml-auto">Three</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>One</TableCell>
              <TableCell className="ml-auto">Two</TableCell>
              <TableCell className="ml-auto">Three</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>One</TableCell>
              <TableCell className="ml-auto">Two</TableCell>
              <TableCell className="ml-auto">Three</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>One</TableCell>
              <TableCell className="ml-auto">Two</TableCell>
              <TableCell className="ml-auto">Three</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InvoicesAnalysisScreen;
