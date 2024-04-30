import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const list = useLoaderData();
  console.log(list);
  return (
    <div>
      <h4>HI</h4>
    </div>
  );
};

export default Update;
