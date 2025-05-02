import {useState} from 'react'
import BlogCard from './BlogCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogDisplay({blogData,setBlogData}){



const [searchTerm,setSearchTerm] = useState("") //initial value

  const fetchData = (searchTerm)=>{
    console.log("Searching For",searchTerm)
  }

  const debounce = (fun,delay)=>{ //1
    let timeoutId;
    return function (args){
      clearTimeout(timeoutId)
      timeoutId=setTimeout(()=>fun(args),delay)
    }
  } 

  const debounceFetch = debounce(fetchData,900)
    console.log(debounceFetch)
    // debounceFetch("Hello")
    // debounceFetch("Hello Fumika")

console.log("searchTerm",searchTerm)

// 2 useEffect is needed. another function is to just console 


    return(
        <>
      <div className='text-end justify-content-end d-flex mt-4'>
      <input className='' type='search' name='' placeholder="Search blog..." id="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>
      <Container fluid className="border border-danger d-flex justify-content-center mt-2 align-items-start gap-3 flex-wrap ">
     
       {/* <Row  className="g-4 w-100 mx-auto d-flex flex-row vh-100 border border-danger"> */}
        <>
        {
      blogData?.map((element,index)=>(
        <BlogCard {...element} key={index} setBlogData={setBlogData}/>
      ))
       }
        </>
      </Container>
       </>  
    )
}
export default BlogDisplay