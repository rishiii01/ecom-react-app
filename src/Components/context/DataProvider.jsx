import { createContext} from "react";

export const Data = createContext()

import React from 'react'

const DataProvider = ({ childern }) => {
    count [count, setCount] = useState(0);
  return 
    <Data.Provider value={{ count,setCount}}>{childern}</Data.Provider>;
};

export default DataProvider