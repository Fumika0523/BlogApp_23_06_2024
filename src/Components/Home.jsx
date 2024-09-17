import Card from 'react-bootstrap/Card';

function Home(){
    return (
        <Card>
          <Card.Img src="https://lovetravellingblog.com/wp-content/uploads/2024/04/new-york-header-2.jpg?w=1024" alt="Card image" />
          
          {/* <Card.ImgOverlay> */}
            {/* <Card.Title className='text-white'>
                <h2>Hi, I'm Fumika.</h2> 
                <h5 className='w-25'>A normala girl living her biggest, messiest dreams.</h5></Card.Title> */}
          {/* </Card.ImgOverlay> */}
          <div>
          <p className='m-4'><h3>Welcome to my Travel Blog.</h3>I’m Marion, an award winning independent traveller writing about my visits to countries near and far. I research destinations myself and that’s part of the fun – visiting the local library and selecting some travel guides, looking things up online and, of course, all the amazing tips I discover from fellow travel bloggers.</p>
          </div>
        </Card>
       
      //  
      );
}
export default Home