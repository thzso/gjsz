import DataDisplay from "../components/DataDisplay";
import comics from "../assets/comics"

const Comics = () => {

 
  const urlEnding = "c";
  return <DataDisplay {...{ urlEnding }} />;
};

export default Comics;
