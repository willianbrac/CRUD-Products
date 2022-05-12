import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { GET_ALL_PRODUCTS } from "../Graphql/Queries";
import DeleteProductForm from "./forms/DeleteProductForm";
import UpdateProductForm from "./forms/UpdateProductForm";

const TableList = () => {
  const [show, setEditShow] = useState(false);
  const [showDelete, setDeleteShow] = useState(false);
  const editShow = () => setEditShow(true);
  const deleteShow = () => setDeleteShow(true);
  const handleClose = () => setEditShow(false);
  const handleCloseDelete = () => setDeleteShow(false);

  const { data } = useQuery(GET_ALL_PRODUCTS);

  return (
    <div className="row">
      <div className="table" >
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>#Codigo</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.findAll.map((product: any) => {
                return (
                  <tr>
                    <td>{product?.id}</td>
                    <td>{product?.name}</td>
                    <td>{product?.price}</td>
                    <td>{product?.stock}</td>
                    <td>
                      <button type="button" className="btn btn-warning" onClick={() => editShow()}>Editar</button>
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                          <Modal.Header closeButton>
                            <Modal.Title>Editar produto</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <UpdateProductForm product={product}/>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                          </Modal.Footer>
                        </Modal>
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger" onClick={() => deleteShow()}>Excluir</button>
                        <Modal show={showDelete} onHide={handleCloseDelete} backdrop="static" keyboard={false}>
                          <Modal.Header closeButton>
                            <Modal.Title>Confirmação de exclusão</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <DeleteProductForm product={product}/>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDelete}>Fechar</Button>
                          </Modal.Footer>
                        </Modal>
                    </td>
                  </tr>
                )
              })
            }      
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableList;