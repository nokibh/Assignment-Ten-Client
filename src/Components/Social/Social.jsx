import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Social = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const { googleLogin, githubLogin } = UseAuth();
  const handleGoogleLogin = () => {
    googleLogin().then(result => {
      if (result.user) {
        navigate(form);
        Swal.fire({
          title: 'Success!',
          text: 'User login Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        form.reset();
      }
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then(result => {
      if (result.user) {
        navigate(form);
      }
    });
  };
  return (
    <div>
      {' '}
      <div className="flex gap-8 text-2xl ml-14 mb-3 mt-2">
        <button onClick={handleGoogleLogin}>
          <FcGoogle></FcGoogle>
        </button>
        <button onClick={handleGithubLogin}>
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default Social;
