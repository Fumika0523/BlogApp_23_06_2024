function Footer() {
    return (
        <>
            {/* <div className="py-5" style={{border:"1px solid red",paddingTop:"1000px"}}>
            
        <div className="text-black fixed-bottom text-center">© 2024 Copyright:
            <a href=""> Traveling Blog</a>
            </div>
        </div> */}

            <footer class="footer" style={{position:"relative"}}>
                <div class="container">
                <div className="d-flex gap-5 justify-content-center " >
            {/* Facebook */}
         <i class="fa-brands fa-facebook fs-3"></i>
            {/* Instagram */}
            <i class="fa-brands fa-instagram fs-3"></i>
            {/* Twitter */}
            <i class="fa-brands fa-square-twitter fs-3"></i></div>
                         <p class="text-black text-center">© 2024 Copyright:
                        <a href=""> Traveling Blog</a></p>
                </div>
            </footer>

        </>
    )
}
export default Footer