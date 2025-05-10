export interface IMoleculesModalProps {
  isOpen: boolean | undefined;
  title: string;
  children: React.ReactNode;
  loading?: boolean;
  error?: string;
  textSave?: string;
  textClear?: string;
  onSave: () => void;
  onCancel: () => void;
}
