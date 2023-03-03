import DataDisplay from "../components/DataDisplay";

import { useState, useEffect } from "react";
import axios from "axios";


const Comics = () => {

  const urlEnding = "comics"
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

export default Comics;
