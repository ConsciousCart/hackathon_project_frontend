// import React from "react";
// import {
//   Table,
//   TableRow,
//   TableHead,
//   TableHeader,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

// const ListOfInvoices = () => {
//   const invoicesList = [
//     { dateUploaded: "23/1/2025", invoice: "invoice1" },
//     { dateUploaded: "24/1/2025", invoice: "invoice2" },
//     { dateUploaded: "25/1/2025", invoice: "invoice3" },
//   ];

//   return (
//     <div className="text-white">
//       <TypographyH2 className="font-light p-6 tracking-wide border-none w-full text-center">
//         List of Invoices
//       </TypographyH2>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Date uploaded</TableHead>
//             <TableHead>Invoice</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {invoicesList.map((item) => (
//             <TableRow key={item.invoice}>
//               <TableCell>{item.dateUploaded}</TableCell>
//               <TableCell>{item.invoice}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ListOfInvoices;

// import React from "react";
// import {
//   Table,
//   TableRow,
//   TableHead,
//   TableHeader,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// interface ListOfInvoicesProps {
//   invoices: Invoice[];
// }

// const ListOfInvoices: React.FC<ListOfInvoicesProps> = ({ invoices }) => {
//   return (
//     <div className="text-white">
//       <TypographyH2 className="font-light p-6 tracking-wide border-none w-full text-center">
//         List of Invoices
//       </TypographyH2>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Date uploaded</TableHead>
//             <TableHead>Invoice</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {invoices.map((item) => (
//             <TableRow key={item.invoice}>
//               <TableCell>{item.dateUploaded}</TableCell>
//               <TableCell>{item.invoice}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ListOfInvoices;


// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableRow,
//   TableHead,
//   TableHeader,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const ListOfInvoices: React.FC = () => {
//   const [invoices, setInvoices] = useState<Invoice[]>([]); // State to store the fetched invoices
//   const [loading, setLoading] = useState<boolean>(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state

//   // Fetch invoices from API
//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         setLoading(true); // Set loading before fetching
//         const response = await fetch("/api/invoices"); // Your API endpoint to fetch the invoices
//         if (!response.ok) {
//           throw new Error("Failed to fetch invoices");
//         }
//         const data = await response.json(); // Assuming the API returns an array of invoices
//         setInvoices(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false); // Set loading to false after the fetch
//       }
//     };

//     fetchInvoices();
//   }, []);

//   if (loading) {
//     return <div className="text-white text-center">Loading...</div>; // Show loading state
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>; // Show error if fetching fails
//   }

//   return (
//     <div className="text-white">
//       <TypographyH2 className="font-light p-6 tracking-wide border-none w-full text-center">
//         List of Invoices
//       </TypographyH2>

//       {invoices.length === 0 ? ( // Check if there are no invoices
//         <div className="text-center text-gray-400">No invoices found</div>
//       ) : (
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Date uploaded</TableHead>
//               <TableHead>Invoice</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {invoices.map((item) => (
//               <TableRow key={item.invoice}>
//                 <TableCell>{item.dateUploaded}</TableCell>
//                 <TableCell>{item.invoice}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default ListOfInvoices;



// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableRow,
//   TableHead,
//   TableHeader,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const ListOfInvoices: React.FC = () => {
//   const [invoices, setInvoices] = useState<Invoice[]>([]); // State to store the fetched invoices
//   const [loading, setLoading] = useState<boolean>(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state

//   // Fetch invoices from API
//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         setLoading(true); // Set loading before fetching
//         const response = await fetch("https://consciouscart-backend-production.up.railway.app/api/upload-file"); // Your API endpoint to fetch the invoices
//         if (!response.ok) {
//           throw new Error("Failed to fetch invoices");
//         }
//         const data = await response.json(); // Assuming the API returns an array of invoices
//         setInvoices(data);
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message); // Access the message property if err is an Error
//         } else {
//           setError("An unknown error occurred"); // Fallback for unknown error types
//         }
//       } finally {
//         setLoading(false); // Set loading to false after the fetch
//       }
//     };

//     fetchInvoices();
//   }, []);

//   if (loading) {
//     return <div className="text-white text-center">Loading...</div>; // Show loading state
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>; // Show error if fetching fails
//   }

//   return (
//     <div className="text-white">
//       <TypographyH2 className="font-light p-6 tracking-wide border-none w-full text-center">
//         List of Invoices
//       </TypographyH2>

//       {invoices.length === 0 ? ( // Check if there are no invoices
//         <div className="text-center text-gray-400">No invoices found</div>
//       ) : (
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Date uploaded</TableHead>
//               <TableHead>Invoice</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {invoices.map((item) => (
//               <TableRow key={item.invoice}>
//                 <TableCell>{item.dateUploaded}</TableCell>
//                 <TableCell>{item.invoice}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default ListOfInvoices;

// ListOfInvoices.tsx
import React from "react";

interface Invoice {
  dateUploaded: string;
  invoice: string;
}

interface ListOfInvoicesProps {
  invoices: Invoice[]; // Define the type for the invoices prop
}

const ListOfInvoices: React.FC<ListOfInvoicesProps> = ({ invoices }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">List of Invoices</h2>
      <ul>
        {invoices.map((inv, index) => (
          <li key={index}>
            {inv.dateUploaded} - {inv.invoice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfInvoices;
