import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function ModalViewBlog({viewBlog,setViewBlog,singleBlog,setSingleBlog,setBlogData}) {

    console.log("singleBlog",singleBlog)
    
    // console.log("BlogData",blogData)

    const navigate = useNavigate()

   const handleClose = ()=>{
        setViewBlog(false)
        navigate('/allblogs')
    }

  return (
    <>
     <Modal  show={viewBlog} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={singleBlog?.photo} style={{objectFit:"contain"}} className='w-100 mb-2' />    
        <span >{singleBlog?.content}</span></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViewBlog;