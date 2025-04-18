import style from "./styles.module.scss";

const MoleculesTable = ({ headers, rows, renderExtra, details }: any) => {
  return (
    <table className={style.table}>
      <thead className={style.table__header}>
        <tr>
          {headers.map((header: string, index: number) => (
            <th key={index} className={style.table__th}>
              {header}
            </th>
          ))}
          <th className={style.table__th}>Ações</th>
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
            <td className={style.table__td}>
              {renderExtra ? renderExtra(rowIndex) : null}
            </td>
            {details && (
              <td className={style.table__td}>
                {details ? details(rowIndex) : null}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoleculesTable;
