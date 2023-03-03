import DataDisplay from "../components/DataDisplay";

import { useState, useEffect } from "react";
import axios from "axios";


const Digital = () => {
  const urlEnding = "digital"
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`/.netlify/functions/${urlEnding}`);
      setData(res.data);
      console.log(res)
    };

    getData();
  }, []);
  return <DataDisplay {...{ urlEnding, data }} />;
};

export default Digital;
