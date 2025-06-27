import React, { createContext, useState, useContext } from 'react';

const MyListContext = createContext();

export const useMyList = () => useContext(MyListContext);

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  const addToList = (item) => {
    setMyList((prev) =>
      prev.find((i) => i.id === item.id && i.title === item.title) ? prev : [...prev, item]
    );
  };

  const removeFromList = (id) => {
    setMyList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList }}>
      {children}
    </MyListContext.Provider>
  );
};
