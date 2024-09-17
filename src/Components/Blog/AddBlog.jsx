import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"

function AddBlog(){
   
    return(
        <>
        <div className='text-center'>
            <h2 className="m-4">Add Blog</h2>
            <input className="border rounded mb-4" type="text" name="" id="" placeholder="Title" style={{width:"400px"}}/><br />
            <input type="text " className="border rounded mb-4" placeholder='Photo' style={{width:"400px"}}/><br />
            <textarea className="border rounded mb-4" type="text" name="" id="" placeholder="Content" style={{width:"400px",height:"200px"}} /> <br />
      
            <input className=" border rounded mb-4" type="text" name="" id="" placeholder="Author" style={{width:"250px"}}/><br/>
                    
        <Button className="me-3" variant="primary" type="submit">
        Submit
        </Button>

        <Button variant="primary" type="button" onClick={()=>{navigate('/allblogs') 
        }}>
        Back
        </Button>
        
        </div>
        </>
    )
}
export default AddBlog