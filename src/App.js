import React from "react"
import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={ <HomeScreen /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
