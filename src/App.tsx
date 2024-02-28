import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Collection, Contact, Layout, Roadmap, Landing } from '@/pages';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='about' element={<About />} />
          <Route path='collection' element={<Collection />} />
          <Route path='roadmap' element={<Roadmap />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
