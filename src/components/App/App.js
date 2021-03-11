import React from 'react';
import './App.css';

export default function App () {
  return (
    <main className="app">
      <header className="logo"><img src="./applogo.svg" className="logo--img" alt="App logo" title="App logo" /></header>
      <aside className="aside">Left</aside>
      <article className="body">Main</article>
    </main>
  )
}