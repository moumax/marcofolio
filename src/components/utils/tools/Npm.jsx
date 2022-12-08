const Npm = ({ data }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl underline">{data.title}</h2>
      <a href="{data.link}" className="border-2">
        {data.subtitle}
      </a>
      <p className="mb-4">{data.description}</p>
    </div>
  );
};

export default Npm;
