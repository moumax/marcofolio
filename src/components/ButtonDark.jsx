const ButtonDark = () => {
  return (
    <div>
      <div>
        <input
          className="relative mr-3 appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        ></input>
        <label
          className="relative form-check-label inline-block text-white"
          htmlFor="flexSwitchCheckDefault"
        >
          White mode
        </label>
      </div>
    </div>
  );
};

export default ButtonDark;
