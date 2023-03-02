import DataDisplay from "../components/Datadisplay";
import { useOutletContext } from "react-router-dom";

const Etchings = () => {

  // const {windowWidth} = useOutletContext()
  // console.log("context : ",windowWidth)


  const urlEnding = "a";

  return <DataDisplay {...{ urlEnding }} />;
};

export default Etchings;
