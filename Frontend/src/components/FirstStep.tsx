"use client";
import React from "react";
import { MuiChipsInput } from "mui-chips-input";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useRecoilState } from "recoil";
import { userInfoState, stepState } from "../Atom/recoilState";

const FirstStep = ({ handleNext }: any) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [roles, setRoles] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [visitstatus, setVisitstatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setVisitstatus(event.target.value as string);
  };

  const handleLocationChange = (newChips: any) => {
    setUserInfo({ ...userInfo, location: newChips });
  };

  const handleRolesChange = (newChips: any) => {
    setUserInfo({ ...userInfo, roles: newChips });
  };

  return (
    <div className=" px-20 bg-[#F9F9F9]">
      <h1 className=" py-10 text-5xl font-bold ">Add New Company</h1>
      <div className="form">
        <h1>Company Name</h1>
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          onChange={(e) =>
            setUserInfo({ ...userInfo, CompanyName: e.target.value })
          }
        />
        <h1>company visit Date</h1>
        <TextField
          id="outlined -basic"
          label="visit Date"
          variant="outlined"
          onChange={(e) => setUserInfo({ ...userInfo, date: e.target.value })}
        />
        <h1>Location </h1>
        <MuiChipsInput
          value={userInfo.location || []}
          onChange={handleLocationChange}
        />
        <h1>Roles</h1>
        <MuiChipsInput
          value={userInfo.roles || []}
          onChange={handleRolesChange}
        />
        <h1>Visit Status</h1>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Visit Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={visitstatus}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={10}>True</MenuItem>
              <MenuItem value={10}>False</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex justify-end">
          <div
            onClick={handleNext}
            className="text-[#23A689] flex flex-row text-md "
          >
            <span>Next</span> <IoMdArrowRoundForward className="text-xl mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
