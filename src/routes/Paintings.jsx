import DataDisplay from "../components/DataDisplay";

const Paintings = () => {
  const urlEnding = "paintings";

  return <DataDisplay {...{ urlEnding }} />;
};

export default Paintings;
