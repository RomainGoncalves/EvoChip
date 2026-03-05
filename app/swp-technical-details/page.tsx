import React from "react";
import { ProductPageLayout } from "@/components/layouts/ProductPageLayout";
import { SwShowcase } from "@/components/sections/SwShowcase";

export const metadata = {
  title: "AltiCoreSWP — Technical Details",
};

export default function SwpTechnicalDetailsPage() {
  return (
    <ProductPageLayout>
      <SwShowcase />
    </ProductPageLayout>
  );
}
