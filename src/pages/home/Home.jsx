import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/navbar/featured/Featured";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      {/* for featured movies and series */}
      {/* <Featured type="movie"/>  
      <Featured type="series" /> */}
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
