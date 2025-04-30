import style from "./styles.module.scss";
import MoleculesModalAside from "@/components/molecules/Modal/Aside/Index";
import type { IOrganismsProfileProps } from "./organismsProfile.types";
const OrganismsProfile = ({
  isShow,
  title,
  onSave,
  onCancel,
}: IOrganismsProfileProps) => {
  return (
    <MoleculesModalAside
      isOpen={isShow}
      textSave="Salvar"
      title={title}
      onSave={onSave}
      onCancel={onCancel}
    >
      <div>teste</div>
    </MoleculesModalAside>
  );
};

export default OrganismsProfile;
