import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  console.log(category);
  const { _id, photo, country, location, visitor, price, travel, session } =
    category;
  console.log(category);
  return (
    <div>
      <div className="">
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={photo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{location}</h2>
            <p className="font-bold">Country : {country}</p>
            <div className="flex gap-2">
              <p className="font-bold">Cost : {price}</p>
              <p className="font-bold">Visitor : {visitor}</p>
            </div>
            <p className="font-bold">Travel :{travel}</p>
            <p className="font-bold">
              <span className="text-secondary">Best Session</span> : {session}
            </p>
            <div>
              <Link to={`/Card/${_id}`}>
                <button className="text-center font-bold text-white btn btn-secondary">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
