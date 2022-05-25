import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

const Popup = () => {
  const [open, setOpen] = useState(false);
  const PopupSubmitEvent = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Box className={`${open ? "active" : "not-active"}`} sx={style}>
        <form className="popup-model" onSubmit={PopupSubmitEvent}>
          <div className="popup-model-item">
            <label for="fimage">Image</label>
            <input type="text" name="fimage" placeholder="HTTP LINK...." />
          </div>
          <div className="popup-model-item">
            <label for="fname">Name</label>
            <input type="text" name="fname" placeholder="Name...." />
          </div>
          <div className="popup-model-item">
            <label for="fmpns">MPNS</label>
            <input type="text" name="fmpns" placeholder="Mpns...." />
          </div>
          <div className="popup-model-item">
            <label for="fproduct">Product</label>
            <input type="text" name="fproduct" placeholder="product...." />
          </div>
          <div className="popup-model-item">
            <label for="fmanifactuler">Manifactuler</label>
            <input
              type="text"
              name="fmanifactuler"
              placeholder="Manifactuler...."
            />
          </div>
          <Button
            onClick={() => setOpen(false)}
            className="submit-button"
            variant="contained"
          >
            Submit
          </Button>
          <Button
            onClick={() => setOpen(false)}
            className="close-modal-button"
            variant="contained"
          >
            Close modal
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Popup;
