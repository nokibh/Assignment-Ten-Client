import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewList = ({ item }) => {
  // console.log(item);
  const { _id, name, country, location } = item;
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mylist/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Location has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
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
                <Link to={`/update/${_id}`}>
                  <button>Update</button>
                </Link>
              </th>
              <th>
                <button onClick={() => handleDelete(_id)}>Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewList;
