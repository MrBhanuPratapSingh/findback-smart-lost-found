const PageHeader = ({ eyebrow, title, description, action }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        {eyebrow && <p className="text-sm font-medium text-slate-500">{eyebrow}</p>}
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        {description && <p className="mt-1 text-sm text-slate-600">{description}</p>}
      </div>
      {action}
    </div>
  );
};

export default PageHeader;