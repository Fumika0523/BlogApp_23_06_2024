import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContactForm() {
    return (
        <>
        <div class="wrapper">
    <div class="container main">
        <div class="row">
            <div class="col-md-6 side-image">
            </div>
            <div class="col-md-6 right">
                <div class="input-box">
                    <h3 className='mb-4 text-center' style={{color:"grey"}}>Contact us</h3>
                   <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""/>
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button class="btn btn-primary">Submit</button>
                    </div>
                   </div>
                </div>  
            </div>
        </div>
        {/* <div className='d-flex mx-auto' style={{border:"1px solid grey", width:"80%"}}>
        <img src="https://images2.alphacoders.com/458/458495.jpg" alt="" style={{width:"40%"}}/>
        <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="name@example.com" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Example textarea</Form.Label>
         <Form.Control as="textarea" rows={3} />
       </Form.Group>
     </Form>
        </div> */}
        </>

    )
}
export default ContactForm