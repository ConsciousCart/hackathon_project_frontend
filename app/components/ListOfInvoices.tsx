import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

const ListOfInvoices = () => {
  const invoicesList = [
    { dateUploaded: "23/1/2025", invoice: "invoice1" },
    { dateUploaded: "24/1/2025", invoice: "invoice2" },
    { dateUploaded: "25/1/2025", invoice: "invoice3" },
  ];

  return (
    <div className="text-white">
      <TypographyH2 className="font-light p-6 tracking-wide border-none w-full text-center">
        List of Invoices
      </TypographyH2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date uploaded</TableHead>
            <TableHead>Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoicesList.map((item) => (
            <TableRow key={item.invoice}>
              <TableCell>{item.dateUploaded}</TableCell>
              <TableCell>{item.invoice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListOfInvoices;