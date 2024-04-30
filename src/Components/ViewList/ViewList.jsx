const ViewList = ({ item }) => {
  console.log(item);
  const { _id, name, country, location } = item;
  return (
    <div>
      <div className="overflow-x-auto mb-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Location</th>
              <th>Btn</th>
              <th>BTn</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <td>{name}</td>
              <td>{country}</td>
              <td>{location}</td>
              <th>
                <button>Update</button>
              </th>
              <th>
                <button>Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewList;
