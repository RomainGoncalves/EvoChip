import React from "react";
import { ProductPageLayout } from "@/components/layouts/ProductPageLayout";
import { McuShowcase } from "@/components/sections/McuShowcase";

export const metadata = {
  title: "AltiCoreMCU — Technical Details",
};

export default function McuTechnicalDetailsPage() {
  return (
    <ProductPageLayout>
      <McuShowcase />
    </ProductPageLayout>
  );
}
