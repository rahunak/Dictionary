import React from 'react';
import './home.scss';

function Home() {
  return (
    <div className="home__wrapper">
      <main className="home__main">
        <h2>Welcome to the Dictionary!</h2>
        <p>Макета дизайна нет было, поэтому: я его слепила из того что было...</p>
        <p>Приложение словарь для поиска значения слова из Dictionary API</p>
        <p>
          Данное приложение написано с использоавнием: React,Redux,Eslint,Material Ui,Axios,Sass
        </p>
      </main>
    </div>
  );
}

export default Home;
