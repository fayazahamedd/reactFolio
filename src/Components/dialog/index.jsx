import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function FormDialog({ open, setOpen, isEdit }) {
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  const heading_name = localStorage.getItem("heading_name");

  React.useEffect(() => {
    if (isEdit) {
      setName(heading_name);
    }
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setName(event.target.value);
    localStorage.setItem("heading_name", event.target.value);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const heading_name = formJson.name;
            setOpen(false);
            {
              !isEdit && navigate("create");
            }
          },
        }}
      >
        <DialogTitle>{isEdit ? " Edit " : "Create Feedback Form"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Enter the name"
            value={name}
            onChange={handleChange}
            type="name"
            fullWidth
            variant="standard"
            className="w-"
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            style={{
              color: "#189657",
            }}
          >
            {isEdit ? "SAVE" : "CREATE"}
          </Button>
          <Button
            style={{
              color: "#19191957",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
