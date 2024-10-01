// app/types.ts
export type NutrientDensityScore = {
    value: number;
    category: "Very Low" | "Low" | "Medium" | "High"; // Updated to specific string literals
};

export type ProductType = {
    product_name: string;
    price_paid: number;
    num_items: number;
    estimated_quantity: {
        value: number;
        unit: string;
    };
    serving_size: string;
    energy: {
        per_serving: {
            value: number;
            unit: string;
        };
    };
    nutrient_density_score: NutrientDensityScore;
    // Add other properties as needed
};
