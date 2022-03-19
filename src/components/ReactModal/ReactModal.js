import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ReactModal({ product }) {
  const { image, title, description } = product;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <img width="250" src={image} className="mx-auto" alt="" />
        <Modal.Body>{description}</Modal.Body>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
}

export default ReactModal;
