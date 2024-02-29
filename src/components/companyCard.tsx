interface ICompanyCardProps {
  readonly name: string;
  readonly date: string;
  readonly position: string;
  readonly langs: string;
  readonly frameworks: string;
  readonly stack: string;
  readonly contribution: string;
  readonly sector: string;
}

export function CompanyCard({
  contribution,
  date,
  frameworks,
  langs,
  name,
  position,
  stack,sector
}: ICompanyCardProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="font-bold">{name}</h2>
        <span>{date}</span>
      </div>
      <ul>
        <li>Position: {position}</li>
        <li>Languages: {langs}</li>
        <li>Frameworks: {frameworks}</li>
        <li>Sector: {sector}</li>
        <li>Stack: {stack}</li>
      </ul>
      <p>Contribution: {contribution}</p>
    </div>
  );
}
