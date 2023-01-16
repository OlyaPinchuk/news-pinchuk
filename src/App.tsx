import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/header/headerComponent";
import ArticlesComponent from "./components/articles/articlesComponent";
import {Route, Routes} from "react-router";
import ArticleFullComponent from "./components/articleFull/articleFullComponent";

function App() {


  return (
    <div className='App'>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Ubuntu" rel="stylesheet"/>

        {/*<HeaderComponent></HeaderComponent>*/}

        <Routes>
            <Route path="/articles/:id" element={<ArticleFullComponent/>}></Route>
            <Route path="/" element={[<HeaderComponent key={new Date().valueOf() * Math.random()}/>,<ArticlesComponent key={new Date().valueOf() * Math.random()}/>]}></Route>
        </Routes>

        {/*<ArticlesComponent></ArticlesComponent>*/}

    </div>
  );
}

export default App;
