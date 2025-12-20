import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackBar({ AhandleClose, Aopen, tile }) {
  const handleClose = () => {
    AhandleClose();
  };
  return (
    <>
      <Snackbar
        open={Aopen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {tile}
        </Alert>
      </Snackbar>
    </>
  );
}
