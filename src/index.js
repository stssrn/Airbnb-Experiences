import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import './styles/hero-banner.css';
import './styles/card.css'
import activitiesData from './data'

console.log(activitiesData);
ReactDOM.render(
    <App activitiesData={activitiesData}/>,
    document.getElementById('root')
)