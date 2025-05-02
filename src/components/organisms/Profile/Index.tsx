import React, { useState } from "react";
import style from "./styles.module.scss";
import MoleculesModalAside from "@/components/molecules/Modal/Aside/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";
import type { IOrganismsProfileProps } from "./organismsProfile.types";
import { useFetchUsers } from "@/store/UseFetchUsers";
const OrganismsProfile = ({
  isShow,
  onSave,
  onCancel,
}: IOrganismsProfileProps) => {
  const { data } = useFetchUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const differenceTitle = () => {
    if (!data) {
      return "Criar Perfil";
    }
    return "Editar Perfil";
  };

  if (!data) return;
  const mapAdmin = data?.users.map((item) => {
    console.log(item);
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      created_at: item.created_at,
      updated_at: item.updated_at,
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
        {!data && (
          <>
            <MoleculesFormInputFloatLabel
              label="Criar nome do perfil*"
              value={name}
              onInput={setName}
            />
            <MoleculesFormInputFloatLabel
              label="Criar email do perfil*"
              value={email}
              onInput={setEmail}
            />
          </>
        )}
        {data && (
          <>
            <MoleculesFormInputFloatLabel
              label="Editar nome do perfil*"
              value={mapAdmin[0].name}
              onInput={setName}
            />
            <MoleculesFormInputFloatLabel
              label="Editar email do perfil*"
              value={mapAdmin[0].email}
              onInput={setEmail}
            />
            <MoleculesFormInputFloatLabel
              label="Criação do perfil"
              value={mapAdmin[0].created_at}
              onInput={setName}
            />
            <MoleculesFormInputFloatLabel
              label="Alteração do perfil"
              value={mapAdmin[0].updated_at}
              onInput={setEmail}
            />
          </>
        )}
      </section>
    </MoleculesModalAside>
  );
};

export default OrganismsProfile;
