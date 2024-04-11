import React, { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography } from "@mui/material";

export default function Datepicker({ onChange}) {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const handleDateChange = (newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <Box className="mt-6">
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        defaultValue={dayjs("2022-04-17")}
      >
        <DatePicker
          label="select date"
          value={value}
          onChange={handleDateChange}
        ></DatePicker>
      </LocalizationProvider>
    </Box>
  );
}
