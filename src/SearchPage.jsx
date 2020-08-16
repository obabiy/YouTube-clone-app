import React from "react";

import "./Search-style.css";

import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="data:image/jpeg;base64,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"
        channel="Oleksii Babii"
        verified
        subs="64K"
        numOfVideos={89}
        description="Hello guys! Here you can find a lot useful programming tips!"
      />
      <hr />

      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
      <VideoRow
        imageSrc="https://ru.reactjs.org/logo-og.png"
        title="How to do an React application"
        timestamp="3 days ago"
        channel="Oleksii Babii"
        description = 'In this video we are going to talk about React..'
        views="2M Views"
        subs = "300K"
      />
    </div>
  );
}

export default SearchPage;
