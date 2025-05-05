import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
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
     <Col lg={3} md={4} sm={6} xs={12} key={idx} className="mb-5">
      <Card className="h-100 border-0" style={{cursor:"pointer"}}>
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
              <Button variant="none" className="d-flex flex-row align-items-center" 
               onClick={()=>deleteBlog()} style={{backgroundColor:"rgba(244, 3, 3, 0.4)",color:"rgba(244, 3, 3)"}}><FaTrashAlt/></Button>

              {/* EDIT */}
              <Button variant="none" className="d-flex flex-row justify-content-center align-items-center" style={{backgroundColor:"rgba(42, 211, 42, 0.54)",color:"rgb(4, 116, 4)"}} onClick={()=>navigate(`/editblog/${id}`)}><FaPenToSquare /></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        </>
    )
}
export default BlogCard
