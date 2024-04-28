import { IoMdAddCircle } from 'react-icons/io';
import Swal from 'sweetalert2';
import UseAuth from '../Hooks/UseAuth';

const AddTourist = ({ update }) => {
  const { user } = UseAuth();
  const handleAddUser = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const location = form.location.value;
    const price = form.price.value;
    const description = form.description.value;
    // const email = form.email.value;
    const photo = form.photo.value;
    const spot = form.spot.value;
    const session = form.session.value;
    const travel = form.travel.value;
    const visitor = form.visitor.value;
    const email = user.email;
    const addAll = {
      name,
      country,
      spot,
      location,
      price,
      description,
      email,
      photo,
      session,
      travel,
      visitor,
    };
    console.log(addAll);
    fetch('http://localhost:5000/spots', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addAll),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'User added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      });
  };
  return (
    <div className="gadgetContainer pt-10 ">
      <div className="shadow-lg p-5 border rounded-lg bg-[#e0d5dcb0]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#496affce]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white flex justify-center gap-2">
              <span className="text-[#6a49ffca] flex justify-center  gap-3">
                <IoMdAddCircle />
                {update ? 'Update ' : 'Add '}
              </span>
              Tourist Spot
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddUser}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                type="text"
                placeholder="Enter Your Name"
                id="name"
                name="name"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Location
              </label>
              <select
                name="country"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#6a49ffc2]"
                type="text"
                placeholder="Select Country"
              >
                <option value="Bangladesh" selected>
                  Bangladesh
                </option>
                <option value="Thailand" selected>
                  Thailand
                </option>
                <option value="Indonesia" selected>
                  Indonesia
                </option>
                <option value="Malaysia" selected>
                  Malaysia
                </option>
                <option value="Vietnam" selected>
                  Vietnam
                </option>
                <option value="Cambodia" selected>
                  Cambodia
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Location
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#494fffbd]"
                type="text"
                placeholder="location"
                id="Price"
                name="location"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Average Cost
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#494fffbd]"
                type="text"
                placeholder="Enter Cost"
                id="Price"
                name="price"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Short Description
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5549ffc3]"
                type="text"
                placeholder="Description"
                id="Price"
                name="description"
              />
            </div>

            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image_url
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="photo"
              />

              <label className="block mb-2 dark:text-white" htmlFor="image">
                Tourist Spot
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                type="text"
                placeholder="Spot name"
                id="image"
                name="spot"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Seasonality
              </label>
              <select
                name="session"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#5849ffb8]"
                type="text"
                placeholder="Select Brand"
              >
                <option value="Summer" selected>
                  Summer
                </option>
                <option value="Winter" selected>
                  Winter
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Travel Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5e49ffba]"
                maxLength={5}
                max={7}
                min={0}
                type="number"
                placeholder="Day"
                id="rating"
                name="travel"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Total Visitor
              </label>
              <input
                name="visitor"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#494fffbd]"
                type="text"
                placeholder="Total visitor per Year"
              ></input>
            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#6a49ffca]  bg-[#49dbff9f] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTourist;
