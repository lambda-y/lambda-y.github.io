import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Alert } from 'reactstrap';



function ContactPage(props) {
    const { register, errors, handleSubmit, reset } = useForm();
    const [disabled, setDisabled] = useState(false);


    

    function sendEmail(e) {
        
        e.preventDefault();

        emailjs.sendForm('myEmail_ID_3436', 'template_xxdrsl7', e.target, 'user_KJnwJjtP3pbuCkcR6e5xc')
        .then(
            function(response) {
                alert("Email was sent!")
            },
            function(error) {
                alert("Email failed to send, " + error)
            }
        )
        e.target.reset()
    }
    return (
        <div>
        <Jumbotron className='p-3 mb-2 bg-secondary text-white jumbotron-fluid'>
            <Container>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        
                        <input type="text" name="user_name" className="form-control" placeholder="Name" />
                    </div>
                        
                    <div className="col-8 form-group pt-2 mx-auto">
                        
                        <input type="email" name="user_email" className="form-control" placeholder="Your Email Address"/>
                    </div>
                        
                    <div className="col-8 form-group pt-2 mx-auto">
                        
                        <input type="subject" name="subject" className="form-control" placeholder="Subject"/>
                    </div>

                        
                    <div className="col-8 form-group pt-2 mx-auto">
                        
                        <textarea name="message" className="form-control" placeholder="Message"/>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" value="Send" className="btn btn-info"/>
                    </div>
                </div>
            </form>
            </Container>
            <ToastContainer/>
        </Jumbotron>
        </div>
    );
}

export default ContactPage;