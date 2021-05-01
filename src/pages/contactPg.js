import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import React from 'react';
import Hero from '../components/Hero'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ContactPage(props) {
    const { register, errors, handleSubmit, reset } = useForm();
    const [disabled, setDisabled] = useState(false);


    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {
        // Send form email
        try {
          setDisabled(true);
          const templateParams = {
            email: data.email,
            subject: data.subject,
            message: data.message
          };
          console.log('clicked');
    
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );
    
          reset();
          toastifySuccess();
          setDisabled(false);
        } catch (e) {
          console.log(e);
        }
    };

    return (
        <div>
        <Jumbotron className='p-3 mb-2 bg-secondary text-white jumbotron-fluid'>
            <Container>
                <Col>
                    <Row>
                    <h3 className="display-4 font-weight-bold">{props.title}</h3>
                    </Row>
                    <Row>
                        <input type='email'
                            name='email'
                            ref={register({
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                })}
                            className='form-control formInput'
                            placeholder='Email address'
                            />
                    </Row>
                    <br/>
                    <Row>
                        <input type='text'
                            name='subject'
                            ref={register({
                                required: { value: true, message: 'Please enter a subject' },
                                maxLength: {
                                value: 75,
                                message: 'Subject cannot exceed 75 characters'
                                }
                            })}
                            className='form-control formInput'
                            placeholder='Subject'
                        ></input>
                        {errors.subject && (
                            <span className='errorMessage'>{errors.subject.message}</span>
                        )}
                    </Row>
                    <br/>
                    <Row>
                        <textarea type='text' name='body' ref={register({required: true})} className='form-control formInput' placeholder="Message" rows={4}/>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </Row>
                    <Row>
                        <button className='submit-btn' type='submit'>Submit</button>
                    </Row>
                    
                    
                </Col>
            </Container>
            <ToastContainer/>
        </Jumbotron>
        </div>
    );
}

export default ContactPage;