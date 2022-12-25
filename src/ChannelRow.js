import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlined';

function ChannelRow( {
    channel,
    image,
    Verified,
    subscribers,
    noOfVideos,
    discreiption

} ) {
    return (<div className='channelRow'>
        <Avatar className='channelRow__logo'
            alt={channel}
            src={image}/>
        <div className='channelRow__text'>
            <h4> {channel}
                {
                Verified &&< VerifiedIcon />
            } </h4>
            <p> {subscribers}
                Subscribers • {noOfVideos} Videos

            </p>
            <p>{discreiption}..</p>
        </div>
    </div>);



}

export default ChannelRow;
