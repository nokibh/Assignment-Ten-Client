import { useEffect, useState } from 'react';

const Country = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/country')
      .then(res => res.json())
      .then(data => {
        setItem(data);
      });
  }, []);

  return (
    <div>
      {item.map(p => (
        <div key={p._id}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
            <div className="card w-80 hover:scale-105 bg-base-100 shadow-xl ">
              <figure className="px-3 pt-3">
                <img src={p.photo} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className=" w-full group-hover:bg-[#ab31a5] rounded h-10 mt-2 bg-[#ff497d8f] flex justify-center items-center">
                <p className="text-center font-bold text-white">{p.country}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
