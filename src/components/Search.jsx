import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchTerm}`);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.search}>
        <FaSearch className={styles.icon} />
        <input
          className={styles.input}
          onChange={(e) => setSearchTerm(e.target.value)}
          type='text'
          value={searchTerm}
          placeholder='Search...'
        />
      </div>
    </form>
  );
};

export default Search;
