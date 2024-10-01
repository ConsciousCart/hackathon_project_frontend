import AnalysisBar from "./AnalysisBar";

const AnalysisScreen = () => {
  // return (
  //   <div className="p-4 h-full">
  //     <Card className="bg-transparent text-white">
  //       <CardHeader>
  //         <CardTitle>
  //           <TypographyH2 className="border-none tracking-wide">
  //             Summary
  //           </TypographyH2>
  //         </CardTitle>
  //       </CardHeader>
  //       <CardContent>
  //         <TypographyP>
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
  //           nesciunt delectus magnam repellat quos deleniti error officia maxime
  //           repellendus vel ullam voluptate asperiores porro mollitia, culpa
  //           fuga natus provident ipsam.
  //         </TypographyP>
  //       </CardContent>
  //     </Card>

  //     <div className="my-5">
  //       <TypographyH4 className="font-bold tracking-wide border-none text-white">Allowed vs Not Allowed</TypographyH4>
  //       <Table className="text-white w-max mx-auto">

  //           <TableRow>
  //             <TableHead className="w-[100px]">Allowed</TableHead>
  //             <TableHead className="text-left">Not Allowed</TableHead>
  //           </TableRow>
  //         <TableBody>
  //           <TableRow>
  //             <TableCell>One</TableCell>
  //             <TableCell className="ml-auto">Two</TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>One</TableCell>
  //             <TableCell className="ml-auto">Two</TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>One</TableCell>
  //             <TableCell className="ml-auto">Two</TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>One</TableCell>
  //             <TableCell className="ml-auto">Two</TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>One</TableCell>
  //             <TableCell className="ml-auto">Two</TableCell>
  //           </TableRow>
  //         </TableBody>
  //       </Table>
  //     </div>

  //   </div>
  // );

  return (
    <div className="text-gray-100">
      <h3 className="text-xl">Monthly Nutritional Performance Breakdown</h3>
      <AnalysisBar />
    </div>
  );
};

export default AnalysisScreen;
