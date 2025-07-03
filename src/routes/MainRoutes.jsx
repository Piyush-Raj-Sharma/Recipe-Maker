import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import CreateRecipe from '../pages/CreateRecipe'
import SingleRecipe from '../pages/SingleRecipe'
import Favourite from '../pages/Favourite'
import PageNotFound from '../pages/PageNotFound'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe/details/:id" element={<SingleRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourite-recipes" element={<Favourite/>} />
        <Route path="/create-recipe" element={<CreateRecipe/>} />
        <Route path='*' element={<PageNotFound/>}/> 
    </Routes>
  )
}

export default MainRoutes