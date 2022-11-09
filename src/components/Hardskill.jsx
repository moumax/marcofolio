const Hardskill = ({ skill }) => {
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-1xl text-center mb-6">{skill.texte}</p>
      <img className="w-10" src={skill.image} alt={skill.image} />
    </div>
  );
};

export default Hardskill;
