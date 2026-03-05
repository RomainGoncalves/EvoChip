import insightsData from "@/data/insights.json";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return insightsData.map((article) => ({ id: String(article.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const article = insightsData.find((a) => String(a.id) === params.id);
  return {
    title: article?.title ?? "Article",
  };
}

export default function ArticlePage() {
  return <ArticlePageClient />;
}
