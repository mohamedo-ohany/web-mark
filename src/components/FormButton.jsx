import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import FormDialog from "./FormDialog";

export default function Form({ AddFun }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddFunToFun = (reason) => {
    AddFun(reason);
  };

  return (
    <Container centered maxWidth="sm" sx={{ p: 0, mt: 3, width: "100%" }}>
      <Button
        sx={{ minHeight: 55 }}
        variant="contained"
        color="success"
        onClick={handleClickOpen}
      >
        add new mark
      </Button>
      {/* Dialog */}
      <FormDialog AddFun={AddFunToFun} open={open} handleClose={handleClose} />
    </Container>
  );
}
