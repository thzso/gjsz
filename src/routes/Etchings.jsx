import DataDisplay from "../components/DataDisplay";
import { useState, useEffect } from "react";
import axios from "axios";


const Etchings = () => {



  const urlEnding = "etchings";
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

export default Etchings;
