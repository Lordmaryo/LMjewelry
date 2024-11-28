import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <span>Home</span>
      <Link to={"/"}>Home</Link>
      <Link to={"/test"}>Test</Link> 
    </div>
  );
};

export default Home;
