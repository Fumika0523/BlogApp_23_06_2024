import NavBar from "./Components/NavBar";
import BlogDisplay from "./Components/Blog/BlogDisplay";
import Footer from "./Components/Footer";
import {Route,Routes} from 'react-router-dom';
import './App.css'
import React, {useEffect,useState} from 'react'
import AddBlog_Formik from "./Components/Blog/AddBlog_Formik";
import EditBlog from './Components/Blog/EditBlog'
import ContactForm from "./Components/ContactForm";
import HomePage from "./Components/HomePage";

function App() {
const [blogData,setBlogData] = useState([])

const getBlogData = async()=>{
  console.log("Blog Data is called...")
  let res = await fetch("https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog")
  let data = await res.json()
  console.log(data)
  setBlogData(data)
}
useEffect(()=>{
  getBlogData()
},[]) // API CALL Empty dependency,>> only 1 time rendering,
//  if you pass something, whenever that state changing the api 

const [mode,setMode] = useState("light")
const toggleMode = () =>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor = "#042045"
  }else{
    setMode("light")
    document.body.style.backgroundColor = "#fff8e6"
  }
}

  return (
    <>
    <NavBar mode={mode} toggleMode={toggleMode}/>
    <Routes>
        <Route path="/" element={<HomePage mode={mode} toggleMode={toggleMode}/>}/>
        <Route path='/allblogs' element={<BlogDisplay blogData={blogData} setBlogData={setBlogData} mode={mode} toggleMode={toggleMode}/>}/>
        <Route path='/addblog' element={<AddBlog_Formik setBlogData={setBlogData} mode={mode} toggleMode={toggleMode}/>}/>
        <Route path="/editblog/:id" element={<EditBlog blogData={blogData} setBlogData={setBlogData} mode={mode} toggleMode={toggleMode}/>}/>
        <Route path="/contactus" element={<ContactForm mode={mode} toggleMode={toggleMode}/>}/>
    </Routes>
    {/* <Footer /> */}

    </>
  )
}

export default App
