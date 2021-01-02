import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import './EmailRow.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id, title, subject, description, time}){
    const history = useHistory(); {/* to move forward to /mail on clicking the mail and move backward to the previous page on clicking back button in the gmail mail component */}

    const dispatch = useDispatch(); //hook for dispatching

    const openMail = () => {

        //call the function in the data layer using dispatch function
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time
        }));

        history.push("/mail")
    }

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <h3 className="emailRow_title">
                {title}
            </h3>

            <div className="emailRow_message">
                <h4>
                    {subject}
                    <span className="emailRow_description"> - {" "}
                        {description}
                    </span>
                </h4>
            </div>

            <div className="emailRow_time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow;