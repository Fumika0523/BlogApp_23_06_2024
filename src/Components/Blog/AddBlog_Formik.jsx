import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function AddMovie_Formik({setBlogData}){
    const navigate=useNavigate()
    const formSchema=Yup.object().shape({
        title:Yup.string().required().min(5,"Too Short"),

        author:Yup.string().required().min(5,"Too Short").max(20,"Author too long"),

        photo:Yup.string().required(),

        content:Yup.string().required().min(5,"Too Short").max(450,"Content Too long"),    
    })

    // Style
    const addFormDesign={
        height:"40px",
        width:"50%",
        borderColor:"grey",
        marginBottom:"20px",
    }

    const formik=useFormik({
        initialValues:{
            title:"",
            author:"",
            photo:"",
            content:"",
        },

        validationSchema:formSchema,
        onSubmit:(values)=>{
            console.log(values) 
            postBlog(values)
        }   
    })
console.log(formik)
    //handleSubmit
    //handleChange
    //values > (movieName:"",moviePoster:""...)
    
    const postBlog=async(newBlog)=>{
        console.log("Blog Posted to the DB..")
        console.log("NEW BLOG:",newBlog)
        let res = await fetch(`https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog`,{
            method:'POST',
            headers:{'content-type':'application/json'}, 
            //send your data in the request body as JSON
            body:JSON.stringify(newBlog)
            //passing a object and sending to the server > string format
        })
        let data = await res.json()
        console.log(data)
        getBlogData()
    }

    //updating a data to browser
    const getBlogData=async()=>{
        console.log("Blog data is called....")
        let res = await fetch('https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog')//API call to get all Blog data
        let data = await res.json()//responding in string, conver to json format
        console.log(data)
        setBlogData(data)
    }

    return(
        <>
    <div className="mx-auto text-center mt-3">
        <h2>Add BLOG</h2>
        {/* onSubmit event */}
        <form onSubmit={formik.handleSubmit}>

            {/* Blog Title */}
            <input style={addFormDesign} type="text" name="title" id="title" placeholder='Blog Title' onChange={formik.handleChange} value={formik.values.title}/><br />
            {formik.errors.title && formik.touched.title? (
             <div style={{color:"red"}}>{formik.errors.title}</div>
           ) : null}

            {/* Blog Photo */}
            <input style={addFormDesign} type="text" name="photo" id="photo" placeholder="Photo URL" onChange={formik.handleChange} value={formik.values.photo} /> <br />
            {formik.errors.photo && formik.touched.photo? (
             <div style={{color:"red"}}>{formik.errors.photo}</div>
           ) : null}

            {/* Blog Content */}
            <input style={addFormDesign} type="text" name="content" id="content" placeholder='Content' onChange={formik.handleChange} value={formik.values.content}/> <br />
            {formik.errors.content && formik.touched.content? (
             <div style={{color:"red"}}>{formik.errors.content}</div>
           ) : null}

            {/* Blog Author */}
            <input style={addFormDesign} type="text" name="author" id="author" placeholder='Author' onChange={formik.handleChange} value={formik.values.author}/> <br />
            {formik.errors.author && formik.touched.author? (
             <div style={{color:"red"}}>{formik.errors.author}</div>
           ) : null}        
     

            {/* ADD MOVIE */}
            <button  type="submit" className='btn btn-warning mx-3'>ADD BLOG</button>

            {/* Back */}
            <button  type="submit" className='btn btn-warning mx-3' onClick={()=>{navigate('/allblogs')}}>BACK</button>
       
        </form>
    </div>
        </>
    )
}
export default AddMovie_Formik
