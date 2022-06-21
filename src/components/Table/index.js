import "./Table.css";

export default function Table({ data, columns }) {
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          {columns.map((column) => (
            <th key={column} className="table__cell">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={`${index}-${column}`} className="table__cell">
                {item[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
