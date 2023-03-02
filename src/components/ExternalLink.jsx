const ExternalLink = ({ children, url }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </>
  );
};

export default ExternalLink;
