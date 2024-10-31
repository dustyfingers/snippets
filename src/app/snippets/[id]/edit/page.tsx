interface EditSnippetPageProps {
  params: {
    id: string;
  };
}

export default function EditSnippetPage({
  params: { id },
}: EditSnippetPageProps) {
  return <div>{parseInt(id)}</div>;
}
