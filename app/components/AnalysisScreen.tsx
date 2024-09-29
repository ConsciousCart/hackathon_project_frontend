import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
import { TypographyP } from "@/components/ui/Typography/TypographyP";

const AnalysisScreen = () => {
  return (
    <div className="p-4">
      <Card className="bg-transparent text-white">
        <CardHeader>
          <CardTitle>
            <TypographyH2 className="border-none tracking-wide">
              Summary
            </TypographyH2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TypographyP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            nesciunt delectus magnam repellat quos deleniti error officia maxime
            repellendus vel ullam voluptate asperiores porro mollitia, culpa
            fuga natus provident ipsam.
          </TypographyP>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisScreen;
