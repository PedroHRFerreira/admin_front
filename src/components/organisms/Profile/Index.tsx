import style from "./styles.module.scss";
import MoleculesModalAside from "@/components/molecules/Modal/Aside/Index";
import type { IOrganismsProfileProps } from "./organismsProfile.types";
import { useFetchUsers } from "@/store/UseFetchUsers";
const OrganismsProfile = ({
  isShow,
  onSave,
  onCancel,
}: IOrganismsProfileProps) => {
  const { data } = useFetchUsers();

  const differenceTitle = () => {
    if (!data) {
      return "Criar Perfil";
    }
    return "Editar Perfil";
  };

  if (!data) return;
  const mapAdmin = data?.users.map((item) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
    };
  });
  return (
    <MoleculesModalAside
      isOpen={isShow}
      textSave="Salvar"
      title={differenceTitle()}
      onSave={onSave}
      onCancel={onCancel}
    >
      <section className={style.container}>
        {!data && <div>Criar Perfil</div>}
        {data && (
          <>
            <div>Nome: {mapAdmin[0].name}</div>
            <div>Email: {mapAdmin[0].email}</div>
          </>
        )}
      </section>
    </MoleculesModalAside>
  );
};

export default OrganismsProfile;
