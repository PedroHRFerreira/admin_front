export interface IMoleculesTableProps {
  headers: string[];
  rows: (string | number)[][];
  renderExtra?: (rowIndex: number) => React.ReactNode;
  details?: (rowIndex: number) => React.ReactNode;
}
