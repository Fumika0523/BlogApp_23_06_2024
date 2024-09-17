import NavBar from "./Components/NavBar";
import BlogDisplay from "./Components/Blog/BlogDisplay";
import Footer from "./Components/Footer";
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home'
import './App.css'
import React, {useEffect,useState} from 'react'
import AddBlog_Formik from "./Components/Blog/AddBlog_Formik";
import EditBlog from './Components/Blog/EditBlog'
import ContactForm from "./Components/ContactForm";

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
},[]) // API CALL

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/allblogs' element={<BlogDisplay blogData={blogData} setBlogData={setBlogData}/>}/>
        <Route path='/addblog' element={<AddBlog_Formik setBlogData={setBlogData}/>}/>
        <Route path="/editblog/:id" element={<EditBlog blogData={blogData} setBlogData={setBlogData}/>}/>
        <Route path="/contactus" element={<ContactForm/>}/>
    </Routes>

    <div>
    <Footer/>
    </div>
    </>
  )
}

export default App
