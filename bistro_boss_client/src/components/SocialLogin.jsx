import { Link, useNavigate } from "react-router-dom";
import google from "../assets/icon/google.png";
import fb from "../assets/icon/fb.png";
import foodpanda from "../assets/icon/foodpanda.png";
import useAuth from "../hooks/useAuth";
import { axiosPublic } from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <main className="flex gap-8 items-center justify-center">
      <Link onClick={handleGoogleLogin}>
        <img src={google} alt={google} />
      </Link>
      <Link>
        <img src={fb} alt={fb} />
      </Link>
      <Link>
        <img src={foodpanda} alt={foodpanda} />
      </Link>
    </main>
  );
};

export default SocialLogin;
