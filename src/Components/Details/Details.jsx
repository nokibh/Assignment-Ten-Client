import { FaLocationDot } from 'react-icons/fa6';
import { MdCardTravel, MdMeetingRoom } from 'react-icons/md';
import { SiSessionize } from 'react-icons/si';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find(card => card._id === id);
  console.log(card);
  return (
    <div className="mb-6">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={card.photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{card.country}</h1>
            <p className="py-6">{card.description}</p>
            <div className="flex gap-9">
              <p className="flex ">
                <span className="text-2xl">
                  <FaLocationDot />
                </span>
                <p className="font-semibold "> {card.location}</p>
              </p>
              <p className="font-bold mb-2 ">{card.price}</p>
              <p className="flex gap-1 font-bold">
                <span className="text-2xl">
                  <SiSessionize />
                </span>
                {card.session}
              </p>
              <p className="flex gap-1 font-bold">
                <span className="text-2xl">
                  <MdCardTravel />
                </span>
                {card.travel}
              </p>
            </div>
            <div className="flex gap-1  font-bold mb-3 mt-3">
              <span>
                <MdMeetingRoom />
              </span>
              <p>{card.visitor}</p>
            </div>
            <Link to="/">
              {' '}
              <button className="btn bg-green-300 hover:bg-green-500">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
