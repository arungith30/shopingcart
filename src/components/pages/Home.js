import "./home.css";
import Cards from "../cards/Cards";
function Home() {
  return (
    <div className="home-page">
      <div className="home-banner">
        <div className="page-heading">
          <div className="text-middle">
            <h1>Shop in style</h1>
            <p>With this shop homepage template</p>
          </div>
        </div>
      </div>

      <Cards />

    </div>
  );
}

export default Home;
