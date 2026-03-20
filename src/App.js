import logo from './logo.svg';
import './App.css';
import AddDeliveryDetails from './components/AddDeliveryDetails';
import SearchDeliveryDetails from './components/SearchDeliveryDetails';
import DeleteDeliveryDetails from './components/DeleteDeliveryDetails';
import ViewDeliveryDetails from './components/ViewDeliveryDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={ <AddDeliveryDetails/> } />
<Route path="/search" element={ <SearchDeliveryDetails/> } />
<Route path="/viewdelivery" element={ <ViewDeliveryDetails/> } />
<Route path="/delete" element={ <DeleteDeliveryDetails /> } />
</Routes>
</BrowserRouter>
  );
}

export default App;
