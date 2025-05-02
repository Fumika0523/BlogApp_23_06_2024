import { useContext, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";


function BlogCard({title,author,content,photo,setBlogData,id,idx}){

  const navigate=useNavigate()

    const getBlogData = async()=>{
        console.log("Blog Data is called...")
        let res = await fetch("https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog")
        let data = await res.json()
        console.log(data)
        setBlogData(data)
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


    return(
        <>

  {/* <Col key={idx}> */}
  <Card style={{width:"28rem"}} >
      <Card.Img variant="top" src={photo} style={{height:"300px"}} />
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <div className="d-flex flex-row gap-3">
        {/* DELETE */}
        <Button variant="secondary" onClick={()=>deleteBlog()}><FaTrashAlt/>DELETE</Button>

        {/* EDIT */}
        <Button  style={{backgroundColor:"navy"}} onClick={()=>navigate(`/editblog/${id}`)}><FaPenToSquare/> EDIT </Button>
        </div>
        <Card.Text className="mt-2">
        {/* {content} */}
        {content.substring(0,160).concat("...")}
        </Card.Text>
        {/* <Card.Link href="#">Read More...</Card.Link> */}
        <Card.Text className="mt-2 text-end">{author}
        </Card.Text>
      
      </Card.Body>

    </Card>
    {/* </Col> */}

        </>
    )
}
export default BlogCard
