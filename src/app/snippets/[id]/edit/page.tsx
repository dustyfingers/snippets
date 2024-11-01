import SnippetEditForm from "@/components/SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface EditSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage({
  params: { id },
}: EditSnippetPageProps) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) return notFound();
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
