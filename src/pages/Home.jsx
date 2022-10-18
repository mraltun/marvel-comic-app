import React, { useEffect } from "react";
import { fetchMarvel, QUERY } from "../api/utils";

const Home = () => {
  //   useEffect(() => {
  //     const getChars = async () => {
  //       try {
  //         const response = await fetchMarvel(`/characters`);
  //         const data = await response.data.data.results;
  //         console.log(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getChars();
  //   }, []);

  return <div>Home</div>;
};

export default Home;
