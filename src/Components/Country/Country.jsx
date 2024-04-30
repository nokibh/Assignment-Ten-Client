import { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Country = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/country')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl text-center mt-5 mb-5">
          Southeast Asia
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {items.map(item => (
          <Category key={item._id} category={item}></Category>
        ))}
      </div>
    </div>
  );
};

export default Country;
