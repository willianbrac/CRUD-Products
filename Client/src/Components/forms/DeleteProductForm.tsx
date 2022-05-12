import { useMutation } from "@apollo/client";
import { FormEvent } from "react";
import { UPDATE_PRODUCT } from "../../Graphql/Mutation";

const DeleteProductForm = ({product}: any) => {
  const [deleteProduct] = useMutation(UPDATE_PRODUCT);
  const id = product.id
  
  async function HandleDeleteProduct(event: FormEvent) {
    event.preventDefault();
    await deleteProduct({
      variables: {
        id: id.toString()
      }
    })
    window.location.reload();
  }

  return (
    <form onSubmit={HandleDeleteProduct}>
      <div className="form-group">
        <span>Tem certeza que quer deletar esse produto?</span>
      </div>
      <button type="submit" className="btn btn-danger mt-4">Deletar</button>
    </form>
  )
}
export default DeleteProductForm;
