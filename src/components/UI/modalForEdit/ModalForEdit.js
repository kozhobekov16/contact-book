import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";

function ModalForEdit({ editContact }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [valueName, setValueName] = useState(editContact.name);
  localStorage.setItem('name', JSON.stringify(valueName))
  const editName = (e) => {
    setValueName(e.target.value);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="relative">
            <input
              value={valueName}
              className="border border-slate-400 px-4 py-2 rounded-md w-full"
              onChange={editName}
            />
            <FaEdit className="absolute top-3 right-9" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForEdit;
