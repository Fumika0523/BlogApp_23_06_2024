import {useEffect, useState} from 'react'
import BlogCard from './BlogCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalViewBlog from './ModalViewBlog';

function BlogDisplay({blogData,setBlogData}){
  console.log("blogData",blogData)

//if you not passing from App.jsx >> create a useState here. >> Api call is needed
const [searchTerm,setSearchTerm] = useState("") //initial value
const [filterBlogData,setFilterBlogData] = useState([])
// console.log("filterBlogData",filterBlogData)

  const fetchData = (searchTerm)=>{
    console.log("Searching For",searchTerm)
    //apil call
    const filterData=(searchText,allBlogs)=>{
      return allBlogs.filter((element)=>
        element.title.toLowerCase().includes(searchText.toLowerCase()) //searching by element.title >> JSON structure always review
      )
    }
    return filterData(searchTerm,blogData)
  }

// 2 useEffect is needed. another function is to just console 

useEffect(()=>{
  // console.log("Mounted a component")
  const timeoutId = setTimeout(()=>{
    //fetchData >> searchTerm is not empty // additional spaces trim("")
    if(searchTerm.trim()!==""){ //not empty
     const fData = fetchData(searchTerm)
     setFilterBlogData(fData)
    }else{ //empty
      setFilterBlogData(blogData) //reset to all blogs if search is empty
      console.log("Re-render with searchTerm")
      //searchTerm >> search reupdated >> depenedency Array >> re-render whenever you are typing in seach box  >> blog data  will be updated >> filteration >> .filter
    }
  },900)
    //clearTimer
    //clear unmounting >> LifeCycle of an component
    return()=>{
      clearTimeout(timeoutId)
      // console.log(timeoutId)
    }
},[searchTerm,blogData]) // whenever searchTerm change inside useEffect >> it get called >> render in browser

useEffect(()=>{
if (blogData){
  setFilterBlogData(blogData)
  console.log("iitial render")
}
},[blogData])
console.log("filterBLogData",filterBlogData)


    return(
        <>

    <Container fluid className=" border-danger min-vh-100">
      <div className='text-end mb-3 w-100 justify-content-end d-flex mt-4 border-4'>
      <input className='' type='search' name='' placeholder="Search blog..." id="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>
       <Row className="mx-auto  border-4 border-primary" >
          {
          filterBlogData?.map((element,index)=>(
            <BlogCard {...element} key={index} blogData={blogData} setBlogData={setBlogData} setFilterBlogData={setFilterBlogData} element={element}/>
          ))
          }
        </Row>
      </Container>
       </>  
    )
}
export default BlogDisplay