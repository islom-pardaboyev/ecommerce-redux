import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAxios } from "./hooks/useAxios";
import { useDispatch } from "react-redux";
import { ACTIONS } from "./redux/actions";
import {Home, Product} from './pages'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    useAxios()
      .get("products")
      .then((res) => {
        dispatch({ type: ACTIONS.GET_ALL_DATA, payload: res.data });
      });
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Home/>
      <Product/>
    </>
  );
}

export default App;
