import React, { useState } from "react";
import upload from "/Users/mac/Documents/ForceIndia-Frontend/src/assets/fileupload.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Datepicker from "../components/Datepicker";
import { Typography } from "@mui/material";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [agencyError, setAgencyError] = useState(true);
  const [extractedAgency, setExtractedAgency] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  //code to handle a file when uploaded by pressing upload button
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name); //filename displayed

    const [agency, month, y] = file.name.split(" "); // Assuming the format is 'agency date.xls'
    const year = y.split(".")[0];
    setSelectedAgency(null);
    setExtractedAgency(agency); //agency name only extracted for later comparison
    console.log(extractedAgency);

    //setSelectedDate(new Date(`${month} 1, ${year}`));
    const monthNumber = new Date(Date.parse(`${month} 1, 2022`)).getMonth() + 1; //unrequisite
  };

  //code to handle agency selection change from select option
  const handleAgencyChange = (event) => {
    const newAgency = event.target.value; //taking selected value and storing it in externam var
    if (newAgency !== selectedAgency) {
      //checking if selected value is equal to the previous value (like selecting same agency name twice )

      setSelectedAgency(event.target.value); //we only update selectedAgency only if a different agency is selected
    }
    //commparing selected agency name and extractedAgency from filename and setting Agencyerror flags appropriately
    if (newAgency !== extractedAgency) {
      setAgencyError(true);
    } else {
      setAgencyError(false);
    }
  };

  //code to set the Selecteddate variable updated by the Datepicker component
  const handleDatePickerChange = (newValue) => {
    setSelectedDate(newValue);
  };
  //code to check if all fields (selected agency, selected date, filename) are all present and accurate
  const isFormValid = () => {
    if (!fileName || !selectedAgency || !selectedDate) {
      return false; // checks for absence of any one of above conditons
    }

    const [agency, month, y] = fileName.split(" "); //split filename based on spaces and assigning them orderwise as agency, month, year(Y)
    const year = y.split(".")[0]; //the last variable wil have the extension part '.xls' so we remove the .xls part

    // filedate is stored as a Date variable with month and year assigned from previously extracted details
    //day does not matter for validation - given default as 1
    const fileDate = new Date(`${month} 1, ${year}`);
    //validating
    console.log(extractedAgency);
    console.log(selectedAgency);

    // isValid is flag that checks for all conditions (file agency, date ) is same as (selected Agency, date)
    const isValid =
      selectedAgency === agency &&
      selectedDate.month() + 1 === fileDate.getMonth() + 1 &&
      selectedDate.year() === fileDate.getFullYear();

    return isValid;
  };

  //code for handling dragged files from other window liKE Explorer
  const handleDragOver = (event) => {
    event.preventDefault(); //default event is to open the file in new chrme tab, is prevented
    setIsDragging(true); //isDragging set to true for styling the form accordingly in ui code returned
  };
  //code handling file after dropped into form
  const handleDrop = (event) => {
    event.preventDefault(); //default event is to open the file in new chrme tab, is prevented
    setIsDragging(false); //file has already been dropped
    const file = event.dataTransfer.files[0]; //access file from dragged component

    if (file) {
      // Assuming you have a state variable to hold the file name
      setFileName(file.name);
    }

    //same code as fileHandleChange to extract data
    const [agency, month, y] = file.name.split(" ");
    const year = y.split(".")[0];
    setSelectedAgency(null);
    setExtractedAgency(agency);
  };
  //returning front-end components
  return (
    //parent component
    <div className="h-full w-full flex flex-col items-center p-4 gap-3">
      <div className="text-center fixed m-4 p-4 text-blue-500  font-bold tracking-wider">{/*file upload text title */}
        File Upload
      </div>
      <div className="bg-white shadow-lg m-20 p-4 h-2/3 w-2/3 rounded">{/*rectangular box for displaying all inner elements  */}
        <form
          action=""
          class={`flex flex-col justify-center items-center border-2 border-dashed border-blue-500 h-1/3 w-500 cursor-pointer rounded-5 ${
            isDragging ? "bg-green-100 border-green-500" : ""
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img src={upload} alt="upload" className="h-8 w-8 rounded-full" />
          <div
            className="drag-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {fileName ? (
              <span style={{ fontWeight: "bold" }}>{fileName}</span>
            ) : (
              "Drag and drop a file here"
            )}
          </div>

          <input
            className="m-4 "
            type="file"
            accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFileChange}
          />
        </form>
        {fileName && (
          <div className="mt-6">
            <FormControl fullWidth disabled={!fileName}>
              <InputLabel id="demo-simple-select-label">Agency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedAgency}
                onChange={handleAgencyChange}
                
                label="Agency"
                disabled={!fileName}
                error={agencyError}
                
              >
                <MenuItem value={"Balaji"}>Balaji</MenuItem>
                <MenuItem value={"Elma"}>Elma</MenuItem>
                <MenuItem value={"Kanmoney"}>Kanmoney</MenuItem>
                <MenuItem value={"New-sujith"}>New-sujith</MenuItem>
                <MenuItem value={"Us"}>Us</MenuItem>
                <MenuItem value={"Star"}>Star</MenuItem>

                <MenuItem value={"Hind"}>Hind</MenuItem>
                <MenuItem value={"Jayvi"}>Jayvi</MenuItem>
                <MenuItem value={"Prabhu"}>Prabhu</MenuItem>
                <MenuItem value={"Meyon"}>Meyon</MenuItem>
                <MenuItem value={"Sheen"}>Sheen</MenuItem>
              </Select>
              {agencyError && (
                <Typography variant="caption" color="error">
                  Agency name not match
                </Typography>
              )}
            </FormControl>

            <Datepicker
              disabled={!fileName}
              value={selectedDate}
              onChange={handleDatePickerChange}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button 
                style={{
                  backgroundColor: !isFormValid() ? "gray" : "blue",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "50px",
                }}
                disabled={!isFormValid()}
              >
                Upload
              </button>{/* upload button */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
