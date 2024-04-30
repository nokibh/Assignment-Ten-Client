import { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import ViewList from '../ViewList/ViewList';

const MyList = () => {
  const { user } = UseAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mylist/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user]);

  return (
    <div>
      {items.map(i => (
        <ViewList key={i._id} item={i}></ViewList>
      ))}
    </div>
  );
};

export default MyList;
