import './App.scss';
import Loader from "./components/loader";
import Header from "./components/header";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Loader />
        <Header />

        <main>
            <Home />
        </main>

    </>
  );
}

export default App;
