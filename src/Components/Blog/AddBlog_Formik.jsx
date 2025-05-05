import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { MdArrowBackIos } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MdOutlineDone } from "react-icons/md";
import Row from 'react-bootstrap/Row';

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
            <div className="mx-auto text-center " style={{marginTop:"10%"}}>
                <div className='border border-2 col-11 col-lg-6 col-md-8 mx-auto px-4 py-3 rounded ' >
                <h2 className='mb-5' style={{color:"rgb(110, 111, 111)"}}>Post a new Blog</h2>
                {/* onSubmit event */}
                <Form onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                   {/* Author */}
                   <Form.Group as={Col} md="6" controlId="formBasicAuthor" className='mb-3 position-relative'>
                    <Form.Control
                    type="text" name="author" placeholder='Author' onChange={formik.handleChange} value={formik.values.author}
                    />
                        {formik.errors.author && formik.touched.author? (
                    <div style={{color:"red"}}>{formik.errors.author}</div>
                ) : null}

                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>
       
                {/* Title */}
                <Form.Group as={Col} md="6" controlId="formBasicTitle" className='position-relative'>
                <Form.Control
                    type='text' name="title"  placeholder='Title' onChange={formik.handleChange} value={formik.values.title}
                    />
                    {formik.errors.title && formik.touched.title? (
                    <div style={{color:"red"}}>{formik.errors.title}</div>
                ) : null}
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>
             
                </Row>
                <Row className="mb-3">
                         
                {/* Blog Content */}
                <Form.Group as={Col} md="6" controlId="formBasicContent" className='mb-3 position-relative'>
                    <Form.Control
                    type="text" name="content"  placeholder='Content' onChange={formik.handleChange} value={formik.values.content}
                    />
                    {formik.errors.content && formik.touched.content? (
                    <div style={{color:"red"}}>{formik.errors.content}</div>
                ) : null}
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* Image */}
                <Form.Group as={Col} md="6" controlId="formBasicImage" className='position-relative'>
                    <Form.Control
                    type="text" name="photo" placeholder="Photo URL" onChange={formik.handleChange} value={formik.values.photo}
                    />
                        {formik.errors.photo && formik.touched.photo? (
                    <div style={{color:"red"}}>{formik.errors.photo}</div>
                ) : null}

                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>
                </Row>
             
                <div className='d-flex flex-row justify-content-end gap-2'>
                    {/* ADD MOVIE */}
                    <Button type="submit" variant="success" 
                    className='d-flex align-items-center justify-content-center flex-row gap-1'><MdOutlineDone className='fs-6'/>Post</Button>

                    {/* Back */}
                    <Button  type="submit" className='d-flex align-items-center justify-content-center flex-row'
                    onClick={()=>{navigate('/allblogs')}}><MdArrowBackIos className='fs-6'/>Back</Button>
                </div>
                </Form>
                </div>
            </div>
        </>
    )
}
export default AddMovie_Formik
