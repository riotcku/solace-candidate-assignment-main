import { Advocate } from "../types/advocate";

interface AdvocateTableProps {
  headers: string[];
  rows: Advocate[];
}

const TABLE_CLASSNAME = {
  table: "w-full text-left table-auto min-w-max",
  th: "p-2 border-b border-slate-300 bg-solace-dark-green",
  thp: "block text-sm font-semibold leading-none",
  td: "p-2 border-b border-slate-200",
  tdp: "block text-sm text-slate-800",
}

const AdvocateTable = ({
  headers,
  rows,
}: AdvocateTableProps) => {
  return (
  <div className="relative flex flex-col w-full h-full overflow-scroll bg-white shadow-md rounded-lg bg-clip-border">
    <table className={`${TABLE_CLASSNAME.table}`}>
      <thead>
        <tr>
          {headers.map((headText, i) => (
            <th key={`th-${i}-${headText}`} className={`${TABLE_CLASSNAME.th}`}>
              <p className={`${TABLE_CLASSNAME.thp}`}>
                {headText}
              </p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((advocate, i) => {
          return (
            <tr key={`tr-${i}-${advocate.phoneNumber}`}
              className="hover:bg-solace-light-green">
              <td className={`${TABLE_CLASSNAME.td}`}>
                <p className={`${TABLE_CLASSNAME.tdp}`}>{advocate.firstName}</p>

              </td>
              <td className={`${TABLE_CLASSNAME.td}`}>
                
                <p className={`${TABLE_CLASSNAME.tdp}`}>{advocate.lastName}</p>

              </td>
              <td className={`${TABLE_CLASSNAME.td}`}>
                <p className={`${TABLE_CLASSNAME.tdp}`}>{advocate.city}</p>

              </td>
              <td className={`${TABLE_CLASSNAME.td}`}>
                <p className={`${TABLE_CLASSNAME.tdp}`}>{advocate.degree}</p>

              </td>
              <td className={`${TABLE_CLASSNAME.td}`}>
                {advocate.specialties.map((specialty, j) => (
                  <div key={`sp-${j}-${advocate.phoneNumber}`}>
                    {specialty}
                  </div>
                ))}
              </td>
              <td className={`${TABLE_CLASSNAME.td}`}>
                <p className={`${TABLE_CLASSNAME.tdp}`}>{advocate.yearsOfExperience}</p>

              </td>
              <td className={`${TABLE_CLASSNAME.td}`}>
                <p className={`${TABLE_CLASSNAME.tdp}`}>{advocate.phoneNumber}</p>

              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>);
}

export default AdvocateTable;