import { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';

const MyList = () => {
  const { user } = UseAuth();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mylist/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
      });
  }, [user]);

  return (
    <div>
      {item.map(i => (
        <div key={i?._id}>
          <div className="overflow-x-auto mb-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th></th>
                  <td>{i?.name}</td>
                  <td>{i?.country}</td>
                  <td>{i?.location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyList;
