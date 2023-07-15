/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import {
  Container,
  Stack,
  Typography,
  Grid,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { css } from "@emotion/react";
import { BiPlus } from "react-icons/bi";


import BackToAccount from "./backtoaccount";

export default function UserAddress() {
  const navigate = useNavigate();
  const location = useLocation();
  let hash = location.hash;
  console.log(hash);
  return (
    <div>
      <Container maxWidth="md">
        {/* back to my account page link */}
        <BackToAccount />

        {/* page heading - My Address */}
        <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom>
          My Address
        </Typography>

        {/* using the hash in the query to load add new address form */}
        {!hash && (
          <>
            <div
              css={css`
                padding: 1.5rem 0;
                background-color: #;
                border-radius: 0.5rem;
              `}
            >
              {/* grid container for address cards */}
              <Grid
                container
                spacing={2}
                sx={css`
                  padding: 1.5rem 0;
                `}
              >
                {/* address cards */}
                {user_addresses.map((address, index) => (
                  <Grid item xs="12" sm="4" key={index}>
                    <AddressCard address={address} />
                  </Grid>
                ))}
              </Grid>

              {/* add new address button */}
              <div
                css={css`
                  padding: 0.25rem 0.5rem;
                  display: flex;
                  justify-content: center;
                `}
              >
                <Button
                  sx={css`
                    padding: 0.25rem 3.25rem;
                    border: 1px solid #ccc;
                    border-radius: 0.5rem;
                    &:hover {
                      border: 1px solid #999;
                    }
                  `}
                  onClick={() =>
                    navigate({
                      pathname: "/myaccount/address",
                      hash: "#AddressForm-NEW",
                    })
                  }
                >
                  <Stack direction={"column"} alignItems="center">
                    <BiPlus
                      css={css`
                        font-size: 1.5rem;
                        color: #999;
                      `}
                    />
                    <Typography
                      variant="subtitle2"
                      fontWeight="normal"
                      color="#999"
                    >
                      Add New Address
                    </Typography>
                  </Stack>
                </Button>
              </div>
            </div>
          </>
        )}

        {/* address form */}
        {hash === "#AddressForm-NEW" && <AddAddressForm />}
      </Container>
    </div>
  );
}

const user_addresses = [
  {
    country: "India",
    name: "Anurag Biswal",
    phone: "1234567890",
    address: {
      addressLine1: "Dalmia Vidya Mandir, rajgangpur",
      addressLine2: "silicon",
      city: "Bhubaneswar",
      landmark: "near Dlf Cybercity",
      pincode: "751024",
      state: "ODISHA",
    },
    addressType: "Home",
  },
  {
    country: "India",
    name: "Anurag Biswal",
    phone: "1234567890",
    address: {
      addressLine1: "Dalmia Vidya Mandir, rajgangpur",
      addressLine2: "silicon",
      city: "Bhubaneswar",
      landmark: "near Dlf Cybercity",
      pincode: "751024",
      state: "ODISHA",
    },
    addressType: "Home",
  },
];

const AddAddressForm = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState({
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });
  const [addressType, setaddressType] = useState("Other");

  const handleAddNewAddress = (e) => {
    e.preventDefault();
    console.log(country);
    console.log(fullname);
    console.log(phone);
    console.log(address);
    console.log(addressType);
    user_addresses.push({
      name: fullname,
      country: country,
      phone: phone,
      address: address,
      addressType: addressType,
    });
    console.log("Add new address");
    navigate("/myaccount/address");
  };
  return (
    <>
      <div
        css={css`
          max-width: 600px;
          padding: 2rem 0 5rem 0;
        `}
      >
        <Container maxWidth="md">
          <form onSubmit={(e) => handleAddNewAddress(e)}>
            <Stack spacing={2}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="Country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"China"}>China</MenuItem>
                  <MenuItem value={"Sri lanka"}>Sri lanka</MenuItem>
                </Select>
              </FormControl>
              <Divider />
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                fullWidth
                size="small"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                fullWidth
                size="small"
                type="tel"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
              <Divider />
              <TextField
                id="outlined-basic"
                label="Pincode/Postal Code/Zip Code"
                variant="outlined"
                fullWidth
                size="small"
                value={address.pincode}
                onChange={(e) =>
                  setaddress({ ...address, pincode: e.target.value })
                }
              />
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={address.city}
                  onChange={(e) =>
                    setaddress({ ...address, city: e.target.value })
                  }
                />
                <TextField
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={address.state}
                  onChange={(e) =>
                    setaddress({ ...address, state: e.target.value })
                  }
                />
              </Stack>

              <TextField
                id="outlined-basic"
                label="Flat no/Building, Street name"
                variant="outlined"
                fullWidth
                size="small"
                value={address.addressLine1}
                onChange={(e) =>
                  setaddress({ ...address, addressLine1: e.target.value })
                }
              />
              <TextField
                id="outlined-basic"
                label="Area/Locality "
                variant="outlined"
                fullWidth
                size="small"
                value={address.addressLine2}
                onChange={(e) =>
                  setaddress({ ...address, addressLine2: e.target.value })
                }
              />
              <TextField
                id="outlined-basic"
                label="LandMark (Optional)"
                variant="outlined"
                fullWidth
                size="small"
                value={address.landmark}
                onChange={(e) =>
                  setaddress({ ...address, landmark: e.target.value })
                }
              />

              <div css={{ marginBottom: "1.5rem 0" }}>
                <Typography
                  variant="subtitle2"
                  sx={css`
                    color: #777;
                    padding: 0 0.5rem;
                  `}
                >
                  Save Address as
                </Typography>
                <ToggleButtonGroup
                  size="small"
                  color="secondary"
                  value={addressType}
                  exclusive
                  onChange={(e) => setaddressType(e.target.value)}
                  aria-label="Platform"
                >
                  <ToggleButton value="Home">Home</ToggleButton>
                  <ToggleButton value="Work">Work</ToggleButton>
                  <ToggleButton value="Other">Other</ToggleButton>
                </ToggleButtonGroup>
              </div>

              <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                <Button
                  sx={css`
                    min-width: 200px;
                    border-radius: 0.25rem;
                    padding: 0.75rem 1.5rem;
                  `}
                  variant={"contained"}
                  type="submit"
                >
                  Save Changes
                </Button>
                <Button
                  sx={css`
                    min-width: 200px;
                    border-radius: 0.25rem;
                    padding: 0.75rem 1.5rem;
                  `}
                  variant={"outlined"}
                  onClick={() => navigate({ pathname: "/myaccount/address" })}
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </form>
        </Container>
      </div>
    </>
  );
};

const AddressCard = ({ address }) => {
  return (
    <div
      css={css`
        padding: .75rem;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
        &:hover {
          border: 1px solid #999;
        }
      `}
    >
      <Stack direction={"column"} spacing={1}>
        <Typography variant="subtitle1" fontWeight="bold" color="#000">
          {address.name}
        </Typography>
        <Typography variant="body2" fontWeight="normal" color="#555">
          {address.address.addressLine1} {address.address.addressLine2} {address.address.landmark}
        </Typography>

        <Typography variant="body2"  color="#777">
          {address.address.city} {address.address.state}, {address.address.pincode}
          <div>Contact Number: {address.phone}</div>         
        </Typography>
        
        
        {/* address edit and delete controls */}
        <Stack direction={"row"} spacing={2} alignItems={"flex-end"}>
          <span
            css={css`
              cursor: pointer;
              font-weight: bold;
              text-transform: capitalize;
              color: #222;
            `}
            onClick={() => console.log("edit clicked")}
          >
            Edit
          </span>
          {/* <span>|</span> */}
          <span
            css={css`
              cursor: pointer;
              font-weight: bold;
              text-transform: capitalize;
              color: red;
            `}
            onClick={() => console.log("Delete clicked")}
          >
            Delete
          </span>
        </Stack>
      </Stack>
    </div>
  );
};
