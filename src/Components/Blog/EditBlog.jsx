import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext'
import { FaPenToSquare } from "react-icons/fa6";

function EditBlog({ setBlogData }) {//setBlogData is for entire data
    const [singleBlog, setSingleBlog] = useState()
    //1 blog data
    const { id } = useParams()

    const getBlogDataId = async () => {
        console.log("Blog data is called.........")
        let res = await fetch(`https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog/${id}`)//API call
        let data = await res.json()//responsing in string so we cant use string so, converting to json format
        console.log(data)
        setSingleBlog(data)
    }
    console.log(singleBlog)

    useEffect(() => {
        getBlogDataId()
    }, [])//when your page is loaded, id never change, Empty dependency, and loading is once

    return (
        <>
            {
                singleBlog ?
                    <EditBlogForm singleBlog={singleBlog} id={id} setBlogData={setBlogData} />//LOAD WHEN API COMPLETED
                    :
                    <p>Loading..........</p>//When API CALL IS RUNNING
            }
        </>
    )
}
export default EditBlog

function EditBlogForm({ singleBlog, id, setBlogData }) {
    const addFormDesign = {
        height: "40px",
        width: "50%",
        borderColor: "grey",
        marginBottom: "20px",
    }
    const navigate = useNavigate()

    const formSchema = Yup.object().shape({
        title: Yup.string().required("**Title filed is mandatory").min(3, "**title should contain minimum 3 letters"),
        author: Yup.string().required("**Author filed is mandatory").min(5, "**author should contain minimum 5 letters").max(20, "**Author should not be more than 20 letters"),
        photo: Yup.string().required("**Photo filed is mandatory").min(20, "**photo url should contain minimum 20 letters"),
        content: Yup.string().required("**Content filed is mandatory").min(20, "**content should be written more than 20 letters").max(450, "**Content should not be more than 450 letters"),
    })

    const formik = useFormik({
        initialValues: {
            title: singleBlog.title,
            author: singleBlog.author,
            photo: singleBlog.photo,
            content: singleBlog.content,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {//when you submit you need to update.
            console.log(values)
            updateBlogs(values)//thats why you calling 
        }
    })
    console.log(formik)

    //updating a data to browser, once again to get a entire Data
    const getBlogData = async () => {
        console.log("Blog data is called....")
        let res = await fetch('https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog')//API call to get all Blog Data
        let data = await res.json()//responding in string, convert into json format
        console.log(data)
        setBlogData(data)
    }

    const updateBlogs = async (Blogupdate) => {
        console.log("Blog Posted to the DB")
        console.log("UPDATE BLOG:", Blogupdate)
        //key:value
        //let > actual API what key is mentioned value > useState Values

        let res = await fetch(`https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog/${id}`,
            {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                // Send your data in the request body as JSON
                body: JSON.stringify(Blogupdate)// sending to the server >string format
            })
        let data = await res.json()
        console.log(data)
        // setBlogData(data)
        if (data) {
            console.log("Updated successfully")
            getBlogData()
            navigate(`/allblogs`)
        }
    }

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div className="container-fluid border-4" >
                <div className="row mx-auto" style={{ marginTop: "10%" }}>
                    <div className='border border-1 border-secondary  col-11 col-lg-5 col-md-8 col-sm-10 mx-auto px-4 py-3 rounded shadow '
                        style={{ backgroundColor: darkMode ? "rgb(2, 22, 49)" : "rgb(249, 249, 244)" }}>
                        <h3 className='mb-5 text-center d-flex justify-content-center gap-1 align-items-center' style={{ color: darkMode ? "rgb(248, 248, 190)" : "black" }}>
                            <FaPenToSquare className="fs-1" style={{ color: darkMode ? "rgb(250, 205, 7)" : "black" }} />Edit Blog</h3>
                        <Form onSubmit={formik.handleSubmit}>
                            <Row className="mb-3">
                                {/* Author */}
                                <Form.Group as={Col} md="6" controlId="formBasicAuthor" className='mb-3 position-relative'>
                                    <Form.Control
                                        type="text" name="author" placeholder='Author' onChange={formik.handleChange} value={formik.values.author}
                                    />
                                    {formik.errors.author && formik.touched.author ? (
                                        <div style={{ color: "red" }}>{formik.errors.author}</div>
                                    ) : null}

                                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                {/* Title */}
                                <Form.Group as={Col} md="6" controlId="formBasicTitle" className='position-relative'>
                                    <Form.Control
                                        type='text' name="title" placeholder='Title' onChange={formik.handleChange} value={formik.values.title}
                                    />
                                    {formik.errors.title && formik.touched.title ? (
                                        <div style={{ color: "red" }}>{formik.errors.title}</div>
                                    ) : null}
                                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">

                                {/* Image */}
                                <Form.Group as={Col} controlId="formBasicImage" className='position-relative'>
                                    <Form.Control
                                        type="text" name="photo" placeholder="Photo URL" onChange={formik.handleChange} value={formik.values.photo}
                                    />
                                    {formik.errors.photo && formik.touched.photo ? (
                                        <div style={{ color: "red" }}>{formik.errors.photo}</div>
                                    ) : null}

                                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                {/* Blog Content */}
                                <Form.Group as={Col} controlId="formBasicContent" className='mb-3 position-relative'>
                                    <Form.Control
                                        type="text" name="content" placeholder='Content' onChange={formik.handleChange} value={formik.values.content}
                                    />
                                    {formik.errors.content && formik.touched.content ? (
                                        <div style={{ color: "red" }}>{formik.errors.content}</div>
                                    ) : null}
                                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <div className='d-flex flex-row justify-content-end gap-3'>
                                {/* Update MOVIE */}
                                <Button type="submit"
                                    className='d-flex border-0 postBtn align-items-center stify-content-center flex-row gap-1' ><MdOutlineDone className='fs-5' />Update</Button>

                                {/* Back */}
                                <Button
                                    variant='secondary'
                                    type="submit" className='d-flex border-0 align-items-center justify-content-center flex-row'
                                    onClick={() => { navigate('/allblogs') }}><MdArrowBackIos className='fs-6' />Back</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}