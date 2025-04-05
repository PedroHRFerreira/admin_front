export interface IOrganismsProductsListDetails {
  isModalOpen?: boolean;
  handleCloseModal: () => void | undefined;
  name: string;
  description: string;
  price: string;
  quantity: string;
  image: string;
}
