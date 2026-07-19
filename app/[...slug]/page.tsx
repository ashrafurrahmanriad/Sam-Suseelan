import type { Metadata } from "next";
import { PortfolioApp } from "../../components/PortfolioApp";
import { routeTitle } from "../../lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = routeTitle(slug.join("/"));
  return {
    title,
    description: `Explore ${title.toLowerCase()} from Sam Suseelan's AI research and machine-learning portfolio.`,
  };
}
export default async function CatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <PortfolioApp route={slug.join("/")} />;
}
