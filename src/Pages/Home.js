import { Button } from "@mui/material";
import { MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Dropdata from "../components/Data/Dropdata";
import Alert from '@mui/material/Alert';
import "./Home.css";

const Home = ({ name, setName, getQuestions }) => {
  const [category, setCategory] = useState("");
  const [diff, setDiff] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !diff|| !name) {
      setError(true);
      return;
    } else {
      setError(false);
      getQuestions(category, diff);
      navigate("/Quiz");
    }
  };

  return (
    <div className="home">
      <div className="form">
        <span className="span-title">Get Set Go</span>
        <div className="inputPart">
          {error && <Alert severity="warning" style={{backgroundColor:"red", color:"white"}}>Please Fill all the fields</Alert>}
          <TextField
            style={{ marginBottom: 25, width:400, border:"2px solid blue" , backgroundColor:"white" }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30,width:400,border:"2px solid blue" , backgroundColor:"white" }}
          >
            {Dropdata.map((info) => (
              <MenuItem key={info.category} value={info.value}>
                {info.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={diff}
            onChange={(e) => setDiff(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30,width:400,border:"2px solid blue" , backgroundColor:"white" }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="banner1.svg" className="img-banner" />
    </div>
  );
};

export default Home;