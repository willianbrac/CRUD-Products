import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import TableList from "./TableList";

const Home = () => {
  return (
      <div className="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <Menu/>
          <TableList/>
        </div>   
      </div>    
  );
}

export default Home;
