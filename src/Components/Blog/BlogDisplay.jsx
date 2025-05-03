import {useEffect, useState} from 'react'
import BlogCard from './BlogCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogDisplay({blogData,setBlogData}){

const [searchTerm,setSearchTerm] = useState("") //initial value
const [filterBlogData,setFilterBlogData] = useState([])
console.log("filterBlogData",filterBlogData)
console.log("blogData",blogData)

  const fetchData = (searchTerm)=>{
    console.log("Searching For",searchTerm)
    //apil call
    const filterData =(searchText,allblogs)=>{
      console.log("searchText",searchText,"allblogs",allblogs)
      let fData = allblogs.filter((element)=>element.title.toLowerCase().includes(searchTerm.toLowerCase()))
       return fData
    }
  }
  console.log("searchTerm",searchTerm)

  // const debounce = (fun,delay)=>{ //1
  //   let timeoutId;
  //   return function (args){
  //     clearTimeout(timeoutId)
  //     timeoutId=setTimeout(()=>fun(args),delay) 
  //} } 
  // const debounceFetch = debounce(fetchData,900)
    // console.log(debounceFetch)
    // debounceFetch("Hello")
// console.log("searchTerm",searchTerm)

// 2 useEffect is needed. another function is to just console 

useEffect(()=>{
  // console.log("Mounted a component")
  const timeoutId = setTimeout(()=>{
    //fetchData >> searchTerm is not empty // additional spaces trim("")
    if(searchTerm.trim()!==""){
     const fData = fetchData(searchTerm)
     setFilterBlogData(fData)
    }},900)
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
}
},[blogData])



    return(
        <>
    <Container fluid className="border border-danger border-4 min-vh-100">
      <div className='text-end mb-3 w-100 justify-content-end d-flex mt-4 border-4'>
      <input className='' type='search' name='' placeholder="Search blog..." id="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>
       <Row className="mx-auto border border-4 border-primary" >
          {
          blogData?.map((element,index)=>(
            <BlogCard {...element} key={index} setBlogData={setBlogData}/>
          ))
          }
        </Row>
      </Container>
       </>  
    )
}
export default BlogDisplay