export interface IMoleculesTableProps {
  headers: string[];
  rows: string[][];
  renderExtra?: (rowIndex: number) => React.ReactNode;
  details?: (rowIndex: number) => React.ReactNode;
}
