import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <main>
      <ItemListContainer to={"/home"} />
      <ItemDetailContainer />
    </main>
  );
};

export default Home;
