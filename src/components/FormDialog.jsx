import Button from "@mui/material/Button";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  AddFun,
  open,
  handleClose,
  head = "Add web mark",
  subTitel = "to add a new web mark, please enter web name and web link",
  WebEnvo = { name: "", link: "" },
  onEdit,
}) {
  const [webEn, setWebEn] = React.useState(WebEnvo);

  // Sync webEn when dialog opens with new data

  React.useEffect(() => {
    if (open) {
      setWebEn({ name: WebEnvo.name, link: WebEnvo.link });
    }
  }, [onEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onEdit) {
      onEdit(webEn);
    } else {
      AddFun(webEn);
      setWebEn({ name: "", link: "" });
    }
    handleClose();
  };
  return (
    <>
      <React.Fragment>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{head}</DialogTitle>
          <DialogContent>
            <DialogContentText>{subTitel}</DialogContentText>
            <form onSubmit={handleSubmit} id="subscription-form">
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="web name"
                type="text"
                fullWidth
                variant="outlined"
                value={webEn.name}
                onChange={(e) => {
                  setWebEn({ ...webEn, name: e.target.value });
                }}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="link"
                type="link"
                label="web link"
                variant="outlined"
                fullWidth
                value={webEn.link}
                onChange={(e) => {
                  setWebEn({ ...webEn, link: e.target.value });
                }}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" form="subscription-form">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}
