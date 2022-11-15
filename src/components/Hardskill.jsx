const Hardskill = ({ skill }) => {
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-xs text-center mb-3">{skill.texte}</p>
      <img className="w-10" src={skill.image} alt={skill.image} />
    </div>
  );
};

export default Hardskill;
