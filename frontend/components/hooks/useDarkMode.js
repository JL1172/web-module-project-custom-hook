import {useState} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (key) => {
    const [data,setData] = useLocalStorage(key); 
    const change = () => {
        setData(!data);
    }
    return [data,change]; 
}