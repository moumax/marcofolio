const Git = ({ data }) => {
    return (
      <div className="text-center">
        <h2 className="text-2xl underline">{data.title}</h2>
        <a className="border-2 bg-slate-300 border-" href={data.link}>
          {data.subTitle}
        </a>
        <p className="mb-4">{data.description}</p>
      </div>
    );
  };
  
  export default Git;