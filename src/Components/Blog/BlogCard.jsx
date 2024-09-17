import { useContext, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


function BlogCard({title,author,content,photo,setBlogData,id}){

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
    <div style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
    <Card style={{display:"flex",flexDirection:"row",width:"80%"}}>
      <Card.Img variant="top" src={photo} style={{width:"300px"}}/>
      <Card.Body>
        <div className='d-flex'>
        <Card.Title className='align-self-center fs-3'>{title}</Card.Title>

        {/* DELETE */}
        <Button className="btn me-4 px-2 ms-auto" variant="secondary" onClick={()=>deleteBlog()}>DELETE This Post</Button>

        {/* EDIT */}
        <Button className="btn m-0 px-2" style={{backgroundColor:"navy"}} onClick={()=>navigate(`/editblog/${id}`)}>EDIT This Post</Button>

        </div>
        <Card.Text className="mt-2">
        {content}
        </Card.Text>
        <Card.Link href="#">Read More...</Card.Link>
        <Card.Text className="mt-2">{author}
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div> 
        </>
    )
}
export default BlogCard
