import DataDisplay from "../components/DataDisplay";

import { useState, useEffect } from "react";
import axios from "axios";

const Paintings = () => {
  const urlEnding = "paintings"

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`/.netlify/functions/${urlEnding}`);
      setData(res.data);
    };

    getData();
  }, []);

  return <DataDisplay {...{data }} />;
};

export default Paintings;
