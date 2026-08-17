type PageDocumentProps = {
  title: string;
  children: React.ReactNode;
};

export default function PageDocument({ title, children }: PageDocumentProps) {
  return (
    <div className="page-document">
      <div className="container page-document__inner">
        <h1 className="page-document__title">{title}</h1>
        <article className="prose">{children}</article>
      </div>
    </div>
  );
}
