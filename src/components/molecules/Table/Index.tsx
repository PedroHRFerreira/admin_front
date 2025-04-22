import React from "react";
import style from "./styles.module.scss";
import type { IMoleculesTableProps } from "./MoleculesTable.types";

const MoleculesTable: React.FC<IMoleculesTableProps> = ({
  headers,
  rows,
  renderExtra,
  details,
}) => (
  <table className={style.table}>
    <thead className={style.table__header}>
      <tr>
        {headers.map((header, idx) => (
          <th key={idx} className={style.table__th}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className={style.table__tbody}>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex} className={style.table__row}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className={style.table__td}>
              {cell}
            </td>
          ))}
          {renderExtra && (
            <td className={style.table__extra}>
              <div className={style.table__extra_content}>
                {renderExtra(rowIndex)}
              </div>
            </td>
          )}
          {details && (
            <td className={style.table__details}>
              <div className={style.table__details_content}>
                {details(rowIndex)}
              </div>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default MoleculesTable;
