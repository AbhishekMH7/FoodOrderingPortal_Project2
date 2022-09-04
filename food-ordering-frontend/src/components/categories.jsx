import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Categories = ({ item }) => {
    const {id, img} = item;
   
    if(id==1){
    return (
        <>
            <div className="main-page">
                <div className="main-img">
                <Link to ="/pizza"><img src={img} alt=""></img></Link>
                </div>
            </div>
        </>
    )}
    else
    {
        return (
            <>
                <div className="main-page">
                    <div className="main-img">
                    <Link to ="/burger"><img src={img} alt=""></img></Link>
                    </div>
                </div>
            </>
        )};
}
export default Categories;