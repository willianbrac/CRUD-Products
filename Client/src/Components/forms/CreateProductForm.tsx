import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { CREATE_PRODUCT } from "../../Graphql/Mutation";

const CreateProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);

  async function HandleCreateProduct(event: FormEvent) {
    event.preventDefault();
    await createProduct({
      variables: {
        name,
        price: parseFloat(price),
        stock: parseFloat(stock),
      }
    })
    window.location.reload()
  }

  return (
    <form onSubmit={HandleCreateProduct}>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Nome" onChange={e => setName(e.target.value)}/>
      </div>
      <div className="form-group mt-3">
        <input type="number" className="form-control" placeholder="Valor" onChange={e => setPrice(e.target.value)}/>
      </div>
      <div className="form-group mt-3">
        <input type="number" className="form-control" placeholder="Estoque" onChange={e => setStock(e.target.value)}/>
      </div>               
      <button type="submit" className="btn btn-success mt-4">Adicinar</button>
    </form>
  );
}
export default CreateProductForm;