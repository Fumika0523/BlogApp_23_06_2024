import BlogCard from './BlogCard'


function BlogDisplay({blogData,setBlogData}){
  console.log(blogData)
  let displayStyle={
    display:"flex",
    flexWrap:"wrap",
    gap:"1%",
    margin:"1%",
    position:"relative",
//    border:"1px solid red",
    cursor: "pointer",
  }
  
    return(
        <>
    <div style={displayStyle}>
    {
      blogData?.map((element,index)=>(
        <BlogCard {...element} key={index} setBlogData={setBlogData}/>
      ))
       }
      </div>
       </>  
    )
}
export default BlogDisplay