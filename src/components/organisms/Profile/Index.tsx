import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { datetimeMask } from "@/utils/masks";
import style from "./styles.module.scss";
import MoleculesModalAside from "@/components/molecules/Modal/Aside/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";
import type { IOrganismsProfileProps } from "./organismsProfile.types";
import { useFetchUsers, PostUsers, UpdateUsers } from "@/store/UseFetchUsers";
const OrganismsProfile = ({ isShow, onCancel }: IOrganismsProfileProps) => {
  const { data, refetch } = useFetchUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const differenceTitle = () => {
    if (!data) {
      return "Criar Perfil";
    }
    return "Editar Perfil";
  };

  const validate = () => {
    if (!name) {
      toast.error("Informe um nome antes de salvar.");
      return false;
    }
    if (!email) {
      toast.error("Informe um email antes de salvar.");
      return false;
    }
    if (!password) {
      toast.error("Informe uma senha antes de salvar.");
      return false;
    }

    return true;
  };

  const handlePost = async () => {
    const isValid = validate();
    if (!isValid) return;
    await PostUsers({
      name,
      email,
      password,
    });
    refetch();
  };

  const handleUpdate = async () => {
    const isValid = validate();
    if (!isValid) return;
    await UpdateUsers(
      {
        name,
        email,
      },
      data.users[0].id
    );
    refetch();
  };

  if (!data) return;
  const mapAdmin = data?.users.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      email: item?.email,
      created_at: item?.created_at,
      updated_at: item?.updated_at,
    };
  });
  return (
    <MoleculesModalAside
      isOpen={isShow}
      textSave="Salvar"
      title={differenceTitle()}
      onSave={mapAdmin.length === 0 ? handlePost : handleUpdate}
      onCancel={onCancel}
    >
      <Toaster />
      <section className={style.container}>
        {mapAdmin.length === 0 && (
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
            <MoleculesFormInputFloatLabel
              label="Criar senha do perfil*"
              type="password"
              value={password}
              onInput={setPassword}
            />
          </>
        )}
        {mapAdmin.length > 0 && (
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
              value={datetimeMask(mapAdmin[0].created_at)}
              disabled={true}
            />
            <MoleculesFormInputFloatLabel
              label="Alteração do perfil"
              value={datetimeMask(mapAdmin[0].updated_at)}
              disabled={true}
            />
          </>
        )}
      </section>
    </MoleculesModalAside>
  );
};

export default OrganismsProfile;
