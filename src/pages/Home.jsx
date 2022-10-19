import React, { useState, useEffect } from "react";
import { fetchMarvel } from "../api/utils";

const Home = () => {
  const [chars, setChars] = useState();

  //   useEffect(() => {
  //     const getChars = async () => {
  //       try {
  //         const response = await fetchMarvel(`/characters`);
  //         const data = await response.data.data.results;
  //         console.log(data);
  //         setChars(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getChars();
  //   }, []);

  return (
    <main>
      <div>
        {chars &&
          chars.map((hero) => (
            <div key={hero.id}>
              <h4>{hero.name}</h4>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Home;
