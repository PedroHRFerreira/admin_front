export interface IMoleculesModalProps {
  isOpen: boolean | undefined;
  title: string;
  children: React.ReactNode;
  loading?: any;
  error?: any;
  textSave?: string;
  onSave: () => void;
  onCancel: () => void;
}
