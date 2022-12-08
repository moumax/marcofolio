const Button = (props) => {
 
   return (
    <button
      onClick={props.onClick}
      className={
        props.className ||
     
        "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-5 mr-5 mt-5 xl:w-80 xl:mb-24 xl:text-xl" }
    >
      {props.children}
    </button>
  );
};

export default Button;
