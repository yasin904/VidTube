import "./App.css"
function VideoCard(props){
   return <div className="card">
        <img src={props.videoUrl} alt="video Thumbnail"/>
        <h3 className="title">{props.videoTitle}</h3>
        <div className="channel-info">
          <span className="views">{props.videoViews} views</span>
          <span className="likes">{props.videoLikes}likes</span>
          <div className="channel">
            <img src={props.videChannel} alt="channel Logo"/>
            <span className="channel-name">{props.videoChannelName}</span>
          </div>
        </div>
  
      </div>

}
export default VideoCard