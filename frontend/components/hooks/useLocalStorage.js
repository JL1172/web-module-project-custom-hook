import { useState } from "react";
const initial = false;
export const useLocalStorage = (key) => {
    const [data,setData] = useState(()=> {
        if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key)) 
        } 
        window.localStorage.setItem(key,JSON.stringify(initial))
    }) 
    const changeData = (value) => {
        setData(value)
        window.localStorage.setItem(key,JSON.stringify(value))
        console.log(localStorage)
    }

    return [data,changeData];
}