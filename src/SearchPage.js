import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {

    return (<div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneOutlinedIcon/>
            <h2>
                FILTER
            </h2>
        </div>
        <hr/>
        <ChannelRow image="https://avatars.githubusercontent.com/u/88846343?v=4" channel="shiviv" Verified subscribers="15"
            noOfVideos={350}
            discreiption="here you can find cool content"/>
        <hr/>
        <VideoRow veiws="3500" subscribers="15" description="do you want to develop some usefull content" timestamp="59 sec" channel="shivi" title="lets learn about things " image="https://i.ytimg.com/vi/zAeBKvxfg_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN_kGGL1eKBtdKC_Tk4F8xpPujqQ"/>
        < VideoRow veiws = "3700" subscribers = "15" description = "do you want to develop some usefull content i will help in that " timestamp = "59 sec" channel = "shivi" title = "lets learn " image = "https://i.ytimg.com/vi/1YqmSp22-60/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCw1IVx3h130sW4k7jDo9kHAlBXog" />
        <VideoRow veiws="3500" subscribers="15" description="do you want to develop some usefull content" timestamp="59 sec" channel="shivi" title="lets learn " image="https://i.ytimg.com/vi/zAeBKvxfg_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN_kGGL1eKBtdKC_Tk4F8xpPujqQ"/>
        < VideoRow veiws = "3700" subscribers = "15" description = "do you want to develop some usefull content i will help in that " timestamp = "59 sec" channel = "shivi" title = "lets learn " image = "https://i.ytimg.com/vi/1YqmSp22-60/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCw1IVx3h130sW4k7jDo9kHAlBXog" />


    </div>);

}

export default SearchPage;
