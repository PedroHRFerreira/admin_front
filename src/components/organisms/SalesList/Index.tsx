import AtomsText from "@/components/atoms/Text/Index";
import MoleculesTable from "@/components/molecules/Table/Index";
import style from "./styles.module.scss";

const OrganismsSalesList = () => {
  const data = [
    {
      id: 1,
      name: "Produto 1",
      quantity: 10,
      price: "R$ 10,00",
    },
  ];

  const rows = data.map((item) => [
    item.name,
    item.quantity.toString(),
    item.price,
  ]);

  return (
    <>
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Listagem
      </AtomsText>
      <section className={style.content}>
        <MoleculesTable
          headers={["Produto", "Quantidade", "Preço"]}
          rows={rows}
          renderExtra={(rowIndex: number) => (
            <button className={style.button_delete}>Excluir</button>
          )}
        />
      </section>
    </>
  );
};

export default OrganismsSalesList;
