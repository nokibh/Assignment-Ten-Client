const Category = ({ category }) => {
  console.log(category);
  const { photo, country } = category;
  console.log(category);
  return (
    <div>
      <div className="">
        <div className="card w-80 h-80 hover:scale-105 bg-base-100 shadow-xl ">
          <figure className="px-3 h-80 pt-3">
            <img src={photo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className=" w-full group-hover:bg-[#ab31a5] rounded h-10 mt-2 bg-[#ff497d8f] flex justify-center items-center">
            <p className="text-center font-bold text-white">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
