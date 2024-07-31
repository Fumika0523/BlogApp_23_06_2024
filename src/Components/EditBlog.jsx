import React,{Suspense, useEffect,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function EditBlog({setBlogData}){//setBlogData is for entire data
const [singleBlog, setSingleBlog]=useState()
//1 blog data
const {id}=useParams()

const getBlogDataId=async()=>{
    console.log("Blog data is called.........")
    let res = await fetch (`https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog/${id}`)//API call
    let data =await res.json()//responsing in string so we cant use string so, converting to json format
    console.log(data)
    setSingleBlog(data)
}
console.log(singleBlog)

useEffect(()=>{
    getBlogDataId()
},[])//when your page is loaded, id never change, Empty dependency, and loading is once

return(
<>
{
        singleBlog?
     
        <EditBlogForm singleBlog={singleBlog} id={id} setBlogData={setBlogData}/>//LOAD WHEN API COMPLETED
        :
        <p>Loading..........</p>//When API CALL IS RUNNING
    }     
</>
)}
export default EditBlog

function EditBlogForm({singleBlog,id,setBlogData}){
    const addFormDesign={
        height:"40px",
        width:"50%",
        borderColor:"grey",
        marginBottom:"20px",
    }

    const navigate=useNavigate()
    const formSchema=Yup.object().shape({
        title:Yup.string().required("**Title filed is mandatory").min(3,"**title should contain minimum 3 letters"),
        author:Yup.string().required("**Author filed is mandatory").min(5,"**author should contain minimum 5 letters").max(20,"**Author should not be more than 20 letters"),
        photo:Yup.string().required("**Photo filed is mandatory").min(20,"**photo url should contain minimum 20 letters"),
        content:Yup.string().required("**Content filed is mandatory").min(20,"**content should be written more than 20 letters").max(450,"**Content should not be more than 450 letters"),
    })

    const formik=useFormik({
        initialValues:{
            title:singleBlog.title,
            author:singleBlog.author,
            photo:singleBlog.photo,
            content:singleBlog.content,
        },
        validationSchema:formSchema,
        onSubmit:(values)=>{//when you submit you need to update.
            console.log(values)
            updateBlogs(values)//thats why you calling 
        }
    })
    console.log(formik)

const updateBlogs=async(Blogupdate)=>{
    console.log("Blog Posted to the DB")
    console.log("UPDATE BLOG:",Blogupdate)
    //key:value
    //let > actual API what key is mentioned value > useState Values

    let res= await fetch(`https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog/${id}`,
        {
            method:'PUT',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(Blogupdate)// sending to the server >string format
        })
        let data = await res.json()
        console.log(data)
}

//updating a data to browser, once again to get a entire Data
const getBlogData=async()=>{
    console.log("Blog data is called....")
    let res=await fetch('https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog')//API call to get all Blog Data
    let data = await res.json()//responding in string, convert into json format
    console.log(data)
    setBlogData(data)//
}

return(
    <>
<form onSubmit={formik.handleSubmit} className="mx-5 mt-3">
<h2 >Edit Blog</h2>

{/* Blog Title */}
<input className="rounded" style={addFormDesign} type="text" name="title" id="title" placeholder='Blog Title' onChange={formik.handleChange} value={formik.values.title}/>{formik.errors.title && formik.touched.title? (
 <div style={{color:"red",display:"inline-flex",marginLeft:"10px"}}>{formik.errors.title.toUpperCase()}</div>
) : null}
<br />

{/* Blog Photo */}
<input className="rounded" style={addFormDesign} type="text" name="photo" id="photo" placeholder="Photo URL" onChange={formik.handleChange} value={formik.values.photo} />
{formik.errors.photo && formik.touched.photo? (
 <div style={{color:"red",display:"inline-block",marginLeft:"10px"}}>{formik.errors.photo.toUpperCase()}</div>
) : null} <br />

{/* Blog Content */}
<input className="rounded" style={addFormDesign} type="text" name="content" id="content" placeholder='Content' onChange={formik.handleChange} value={formik.values.content}/> 
{formik.errors.content && formik.touched.content? (
 <div style={{color:"red",display:"inline-block",marginLeft:"10px"}}>{formik.errors.content.toUpperCase()}</div>
) : null}<br />

{/* Blog Author */}
<input className="rounded" style={addFormDesign} type="text" name="author" id="author" placeholder='Author' onChange={formik.handleChange} value={formik.values.author}/>
{formik.errors.author && formik.touched.author? (
 <div style={{color:"red",display:"inline-block",marginLeft:"10px"}}>{formik.errors.author.toUpperCase()}</div>
) : null}  <br />

{/* ADD MOVIE */}
<button  type="submit" className='btn btn-warning mx-3'>UPDATE BLOG</button>

{/* Back */}
<button  type="submit" className='btn btn-warning mx-3' onClick={()=>{
    getBlogData()
    navigate('/allblogs')}}>BACK</button>
    {/* all the blogs will be called by getBlogData() */}

</form>

    </>
)
}