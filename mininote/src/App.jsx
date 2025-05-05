import { useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import AddNote from './components/AddNote'
import ListNote from './components/ListNote'
import Error from './components/Error'
import About from './components/About'
import UpdateNote from './components/UpdateNote'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListNote />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/update/:id" element={<UpdateNote />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
