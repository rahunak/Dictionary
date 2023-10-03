import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  addNewWord,
  findWord,
  setError,
} from "../../../redux/dictionaryReducer";
import "./dictionarySearchPanel.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function DictionarySearchPanel() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setSearchParams(e.target.value);
  };
  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearchWordClicked();
    }
  };
  const canSearch = [searchParams].every(Boolean) && loading === false;

  const onSearchWordClicked = async () => {
    if (canSearch) {
      try {
        setLoading(true);

        let resp = await dispatch(findWord({ searchParams })).unwrap();
        dispatch(setError(false));
        dispatch(addNewWord(resp[0]));

        setSearchParams("");
      } catch (err) {
        dispatch(setError(true));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Fragment>
      <div className="dictionary__wrapper">
        <h2>Find term from our DictionaryApi</h2>
        <main className="dictionary__main">
          <Box
            className="searchPanel"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Enter english word for searching"
              variant="outlined"
              value={searchParams}
              onChange={(e) => onChangeHandler(e)}
              onKeyPress={onKeyPressHandler}
            />
            {searchParams.match(/[\d]/) && (
              <Alert severity="warning">Will be wrong</Alert>
            )}
            <LoadingButton
              size="small"
              onClick={onSearchWordClicked}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              <span className="Monday_Donuts"> Find </span>
            </LoadingButton>
          </Box>
        </main>
      </div>
    </Fragment>
  );
}
export default DictionarySearchPanel;
