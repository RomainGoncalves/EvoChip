import insightsData from "@/data/insights.json";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return insightsData.map((article) => ({ id: String(article.id) }));
}

export default function ArticlePage() {
  return <ArticlePageClient />;
}
