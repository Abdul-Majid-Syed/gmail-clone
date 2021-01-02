import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail(){
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" type="email" placeholder="To" ref={register({required: true})} />
                {errors.to && <p className="sendMail_error">To is required</p>}

                <input name="subject" type="text" placeholder="Subject" ref={register({required: true})} />
                {errors.subject && <p className="sendMail_error">Subject is required</p>}

                <input name="message" type="text" placeholder="Message..." className="sendMail_message" ref={register({required: true})} />
                {errors.message && <p className="sendMail_error">Message is required</p>}

                <div className="sendMail_options">
                    <Button type="submit" className="sendMail_send" variant="contained" color="primary">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;