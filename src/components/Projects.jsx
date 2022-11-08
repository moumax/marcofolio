import PortfolioDatas from "../Datas/PortfolioDatas";

const Projects = () => {
  return (
    <section className="relative">
      <h1 className="text-4xl">Projets</h1>
      {PortfolioDatas.map((data) => (
        <div className="flex flex-col items-center">
          <h2 className="text-4xl mb-5">{data.titre}</h2>
          <a href={data.lien} target="_blank" rel="noopener noreferrer">
            <img
              className="w-fit rounded-3xl  mx-auto mb-6"
              src={data.image}
              alt={data.image}
            />
          </a>
          <p className="mb-2 text-3xl w-2/3">{data.description}</p>
          <ul className="mb-12 text-2xl">
            <li className={data.techno1 ? "techno" : "techno0"}>
              {data.techno1}
            </li>
            <li className={data.techno2 ? "techno" : "techno0"}>
              {data.techno2}
            </li>
            <li className={data.techno3 ? "techno" : "techno0"}>
              {data.techno3}
            </li>
            <li className={data.techno4 ? "techno" : "techno0"}>
              {data.techno4}
            </li>
            <li className={data.techno5 ? "techno" : "techno0"}>
              {data.techno5 ? data.techno5 : ""}
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
