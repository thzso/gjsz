import DataDisplay from "../components/Datadisplay";

const Paintings = () => {
  const urlEnding = "paintings";

  return <DataDisplay {...{ urlEnding }} />;
};

export default Paintings;
