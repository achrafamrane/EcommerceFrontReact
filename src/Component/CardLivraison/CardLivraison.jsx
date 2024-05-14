import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const CardLivraison = () => {
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");

  const handleChangeWilaya = (event) => {
    setWilaya(event.target.value);
  };
  const handleChangeCommune = (event) => {
    setCommune(event.target.value);
  };
  return (
    <div className="flex items-center justify-center space-x-2">
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Wilaya</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={wilaya}
              label="Wilaya"
              onChange={handleChangeWilaya}
            >
              <MenuItem value="" className="disabled:">
                Select
              </MenuItem>

              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Commune</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={commune}
              label="Commune"
              onChange={handleChangeCommune}
            >
              <MenuItem value="" className="disabled:">
                Select
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default CardLivraison;
