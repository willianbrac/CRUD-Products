import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { UPDATE_PRODUCT } from "../../Graphql/Mutation";

const UpdateProductForm = ({product}: any) => {
  const id = product.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  async function HandleUpdateProduct(event: FormEvent) {
    event.preventDefault();
    await updateProduct({
      variables: {
        id,
        name,
        price: parseFloat(price),
        stock: parseFloat(stock),
      }
    })
    window.location.reload()
  }

  return (
    <form onSubmit={HandleUpdateProduct}>
      <div className="form-group">
        <input type="text" className="form-control"  placeholder="Nome" onChange={e => setName(e.target.value)}/>
      </div>
      <div className="form-group mt-3">
        <input type="number" className="form-control" placeholder="Preço" onChange={e => setPrice(e.target.value)}/>
      </div>
      <div className="form-group mt-3">
        <input type="number" className="form-control" placeholder="Estoque" onChange={e => setStock(e.target.value)}/>
      </div> 
      <button type="submit" className="btn btn-success mt-4">Atualizar</button>
    </form>
  )
}
export default UpdateProductForm;