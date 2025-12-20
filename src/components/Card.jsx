import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import ModeIcon from "@mui/icons-material/Mode";
import "../index.css";

export default function Card({
  item,
  toggleOpened,
  deleteWebMarkDialog,
  editWebMark,
}) {
  const { title, link } = item || {};

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "#283593",
          color: "white",
          borderRadius: 2,
          marginTop: 3,
          padding: 2,
          textAlign: "left",
        }}
      >
        <Grid container>
          <Grid size={{ xs: 6, sm: 9 }} className="linkbox">
            <Typography variant="h4">
              <a className="link" href={link} target="_blank">
                {title}
              </a>
            </Typography>
          </Grid>
          <Grid
            size={3}
            sx={{
              textAlign: "right",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* opened button */}
            <IconButton
              onClick={() => {
                toggleOpened(item.id);
              }}
            >
              <DoneIcon
                style={{
                  color: item.opened ? "white" : "#8bc34a",
                  backgroundColor: item.opened ? "#8bc34a" : "white",
                  border: item.opened ? "2px solid white" : "2px solid #8bc34a",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
            </IconButton>
            {/* edit button */}
            <IconButton onClick={() => editWebMark(item)}>
              <ModeIcon
                style={{
                  color: "#1769aa",
                  backgroundColor: "white",
                  border: "2px solid #1769aa",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
            </IconButton>
            {/* delete button */}
            <IconButton
              onClick={() => {
                deleteWebMarkDialog(item.id);
              }}
            >
              <DeleteIcon
                style={{
                  color: "#c42b2bff",
                  backgroundColor: "white",
                  border: "2px solid #c42b2bff",
                  borderRadius: "50%",
                  padding: 2,
                }}
                variant="outlined"
              />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
