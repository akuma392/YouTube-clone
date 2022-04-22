import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Filter({ setTypeValue }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setTypeValue(value);
  }, [value]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"n"}>Now</MenuItem>
          <MenuItem value={"mu"}>Music</MenuItem>
          <MenuItem value={"mo"}>Movies</MenuItem>
          <MenuItem value={"g"}>Gaming</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
