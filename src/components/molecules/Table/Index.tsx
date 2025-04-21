import style from "./styles.module.scss";
import type { IMoleculesTableProps } from "./MoleculesTable.types";

const MoleculesTable = ({
  headers,
  rows,
  renderExtra,
  details,
}: IMoleculesTableProps) => {
  return (
    <table className={style.table}>
      <thead className={style.table__header}>
        <tr>
          {headers.map((header: string, index: number) => (
            <th key={index} className={style.table__th}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={style.table__tbody}>
        {rows.map((row: string[], rowIndex: number) => (
          <tr key={rowIndex} className={style.table__row}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={style.table__td}>
                {cell}
              </td>
            ))}
            <div className={style.table__extra}>
              <td>{renderExtra ? renderExtra(rowIndex) : null}</td>
              {details && <td>{details ? details(rowIndex) : null}</td>}
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoleculesTable;
