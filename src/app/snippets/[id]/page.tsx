import { notFound } from "next/navigation";
import { db } from "@/db";

interface ViewSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function ViewSnippetPage(props: ViewSnippetPageProps) {
  const { id } = props.params;
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) return notFound();
  return <div>{snippet.title}</div>;
}
