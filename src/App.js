import SalesReport from "./Sales/SalesReport/SalesReport";
import SalesList from "./Sales/SalesList/SalesList"
import SalesListEdit from "./Sales/SalesList/SalesListEdit/SalesListEdit";
import SalesListView from "./Sales/SalesList/SalesListView/SalesListView";

function App() {
  return (
    <div>
      <SalesListEdit />
      <SalesListView />
      <SalesReport />
      <SalesList />


    </div>
  );
}

export default App;
