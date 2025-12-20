import { useState, useEffect, useMemo, useReducer } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import FormDialog from "./components/FormDialog.jsx";
import Card from "./components/Card.jsx";
import Form from "./components/FormButton.jsx";
import SnackBar from "./components/SnackBar.jsx";
import DeleteDialog from "./components/DeleteDialog.jsx";
import webMarkReducer from "./reducers/WebMarkReducer.jsx";
function App() {
  const [webMarks, dispatch] = useReducer(webMarkReducer, [], () => {
    // const storedWebMarks = localStorage.getItem("webMarks");
    if (localStorage.getItem("webMarks")) {
      return JSON.parse(localStorage.getItem("webMarks"));
    } else {
      return [];
    }
  });

  // snackbar
  const [snackOpen, setSnackOpen] = useState(false);
  const [SnackTitle, setSnackTitle] = useState("Web mark added successfully!");
  function handleSnackClose(reason) {
    if (reason === "clickaway") return;
    setSnackOpen(false);
  }

  // toggle opened status
  function toggleOpened(id) {
    dispatch({ type: "opened", payload: { id } });
  }

  // delete web mark

  const [DeleteDialogopen, setDeleteDialogopen] = useState(false);
  const [currentDeleteId, setCurrentDeleteId] = useState(null);

  function handleDeleteDialogOpen(id) {
    setCurrentDeleteId(id);
    setDeleteDialogopen(true);
  }
  function deleteWebMark() {
    dispatch({ type: "delete", payload: { id: currentDeleteId } });
    setSnackOpen(true);
    setSnackTitle("Web mark deleted successfully!");
    handleDeleteDialogClose();
    setCurrentDeleteId(null);
  }
  function handleDeleteDialogClose() {
    setDeleteDialogopen(false);
  }
  // edit web mark
  const [FormDialogOpen, setFormDialogOpen] = useState(false);
  const [webEnvo, setWebEnvo] = useState({ name: "", link: "" });

  function formHandleClose() {
    setFormDialogOpen(false);
  }
  function handleEdit(markedData) {
    setCurrentDeleteId(markedData.id);
    setWebEnvo({ name: markedData.title, link: markedData.link });

    setFormDialogOpen(true);
  }
  function editWebMark(updatedData) {
    dispatch({
      type: "edit",
      payload: { id: currentDeleteId, data: updatedData },
    });
    setSnackOpen(true);
    setSnackTitle("Web mark edited successfully!");
  }

  // displayed filter & localStorage
  const [displayed, setDisplayed] = useState("All");

  function setDisplayedFun(filterType) {
    setDisplayed(filterType);
  }

  const displayedWebMarks = useMemo(() => {
    if (displayed === "All") {
      return webMarks;
    } else if (displayed === "Opened") {
      return webMarks.filter((webMark) => webMark.opened);
    } else if (displayed === "NotOpened") {
      return webMarks.filter((webMark) => !webMark.opened);
    }
  }, [displayed, webMarks]);
  useEffect(() => {
    localStorage.setItem("webMarks", JSON.stringify(webMarks));
  }, [webMarks]);

  // add web mark
  function AddWebM(e) {
    dispatch({ type: "add", payload: { name: e.name, link: e.link } });
    setSnackOpen(true);
  }

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "white",
          color: "black",
          marginTop: { xs: 0, sm: 10 },
          marginBottom: { xs: 0, sm: 2 },
          padding: 2,
          textAlign: "center",
          borderRadius: 1,
        }}
      >
        <Typography variant="h1">web mark</Typography>
        <ToggleButtonGroup
          value={displayed}
          exclusive
          aria-label="text alignment"
        >
          <Box sx={{ "& button": { m: 1 } }}>
            <ToggleButton
              value="All"
              variant="contained"
              size="medium"
              sx={{
                bgcolor: displayed === "All" ? "#283593" : "white",
                color: displayed === "All" ? "white" : "#283593",
                "&.Mui-selected": {
                  bgcolor: "#283593",
                  color: "white",
                  "&:hover": { bgcolor: "#1a237e" },
                },
                "&:hover": { bgcolor: "#283593", color: "white" },
              }}
              onClick={() => {
                setDisplayedFun("All");
              }}
            >
              All
            </ToggleButton>
            <ToggleButton
              value="Opened"
              variant="contained"
              size="medium"
              sx={{
                bgcolor: displayed === "Opened" ? "#283593" : "white",
                color: displayed === "Opened" ? "white" : "#283593",
                "&.Mui-selected": {
                  bgcolor: "#283593",
                  color: "white",
                  "&:hover": { bgcolor: "#1a237e" },
                },
                "&:hover": { bgcolor: "#283593", color: "white" },
              }}
              onClick={() => {
                setDisplayedFun("Opened");
              }}
            >
              Opened
            </ToggleButton>
            <ToggleButton
              value="NotOpened"
              variant="contained"
              size="medium"
              sx={{
                bgcolor: displayed === "NotOpened" ? "#283593" : "white",
                color: displayed === "NotOpened" ? "white" : "#283593",
                "&.Mui-selected": {
                  bgcolor: "#283593",
                  color: "white",
                  "&:hover": { bgcolor: "#1a237e" },
                },
                "&:hover": { bgcolor: "#283593", color: "white" },
              }}
              onClick={() => {
                setDisplayedFun("NotOpened");
              }}
            >
              Not Opened
            </ToggleButton>
          </Box>
        </ToggleButtonGroup>
        {displayedWebMarks.map((item) => (
          <Card
            key={item.id}
            item={{ ...item }}
            toggleOpened={toggleOpened}
            deleteWebMarkDialog={handleDeleteDialogOpen}
            editWebMark={handleEdit}
          />
        ))}
        <Form AddFun={AddWebM} />
      </Container>
      {/* snackbar */}
      <SnackBar
        Aopen={snackOpen}
        AhandleClose={handleSnackClose}
        tile={SnackTitle}
      />
      {/* delete sure dialog */}
      <DeleteDialog
        handleClose={handleDeleteDialogClose}
        open={DeleteDialogopen}
        deleteWebMark={deleteWebMark}
      />
      {/* form dialog */}
      <FormDialog
        open={FormDialogOpen}
        handleClose={formHandleClose}
        head="Edit web mark"
        subTitel="Please edit the web mark details below"
        WebEnvo={webEnvo}
        onEdit={editWebMark}
      />
    </>
  );
}

export default App;
