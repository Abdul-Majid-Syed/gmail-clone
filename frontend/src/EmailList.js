import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import './EmailList.css';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList(){
    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="blue" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList_list">
                <EmailRow id="50" title="Twitch" subject="sample!" description="check this" time="10pm" />
                <EmailRow id="54" title="Twitch" subject="sample!" description="dgasdglasdk;gasd;glas;dgkas;dgkas;dgas;dgkasdgas'dg dgasdglasdk;gasd;glas;dgkas;dgkas;dgkasdgas'dgthis" time="10pm" />
            </div>
        </div>
    )
}

export default EmailList;