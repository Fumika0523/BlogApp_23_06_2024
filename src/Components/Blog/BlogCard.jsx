import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import ModalViewBlog from './ModalViewBlog';
import { useState } from 'react';


function BlogCard({title,author,content,photo,setFilterBlogData,id,element}){

  const navigate=useNavigate()
  const [viewBlog,setViewBlog] = useState(false)
  const [singleBlog,setSingleBlog] = useState(null)

    const getBlogData = async()=>{
        console.log("Blog Data is called...")
        let res = await fetch("https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog")
        let data = await res.json()
        console.log("getBlogData",data)
        setFilterBlogData(data)
      }

      //DELETE
      const deleteBlog= async()=>{
        console.log(id)
        let res = await fetch(`https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog/${id}`,{
          method:"DELETE"
        })
        let data = await res.json()
        console.log(data)//output
        if(data){//if data exists
          console.log("Deleted successfully")
          //UPDATE UI
          getBlogData()
        }
      }

      const handleBlogClick = (element)=>{
        setViewBlog(true);
        console.log("Calling modal ")
        setSingleBlog(element)
      }


    return(
    <>
     <Col lg={3} md={4} sm={6} xs={12} key={id} className="mb-5">
      <Card className="h-100 border-0 shadow cardStyle" style={{cursor:"pointer"}}
        onClick={()=>handleBlogClick(element)}
      // onClick={handleShow}
      >
        <Card.Img variant="top" src={photo} style={{width:"100%",height:"200px",objectFit:"cover"}}/>
              <Card.Body>
              <Card.Title className='fw-bold' >{title}</Card.Title>
              {/* CONTEXT  */}
              <Card.Text className="mt-2" style={{ textAlign: "justify"}}>
              {/* {content} */}
              {content.substring(0,160).concat("...")}
              </Card.Text>
              {/* <Card.Link href="#">Read More...</Card.Link> */}
              {/* <Card.Text className="mt-2 text-end"><span>{author}</span>
              </Card.Text> */}
              
              {/* Button */}
              <div className="d-flex justify-content-end align-items-center flex-row gap-3">
              {/* DELETE */}
              <Button variant="none" className="d-flex flex-row align-items-center deleteBtn" 
               onClick={()=>deleteBlog()} ><FaTrashAlt/></Button>

              {/* EDIT */}
              <Button variant="none" className="d-flex flex-row justify-content-center align-items-center editBtn" 
              onClick={()=>navigate(`/editblog/${id}`)}><FaPenToSquare /></Button>

              </div>
            </Card.Body>
          </Card>
        </Col>

        { viewBlog && (
          <ModalViewBlog
          viewBlog={viewBlog}
          setViewBlog={setViewBlog}
          singleBlog={singleBlog}
          setSingleBlog={setSingleBlog} 
          setFilterBlogData={setFilterBlogData}/>
        )}
        </>
    )
}
export default BlogCard
