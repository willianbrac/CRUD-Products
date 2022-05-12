import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CreateProductForm from './forms/CreateProductForm';

const Menu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row ">
      <div className="col-sm-3 mt-5 mb-4 text-gred">
      </div> 
      <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Produtos</b></h2></div>
      <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
        <Button variant="primary" onClick={handleShow}>
          Novo Produto
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateProductForm/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div> 
  );
}
export default Menu;