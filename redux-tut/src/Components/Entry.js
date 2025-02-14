import React from "react"

function Entry() {
    return (
        <div className="entry">
            <div className="content">
                <h1>WELCOME TO LEADERBOARD WEBSITE</h1>
                <h3>PLAYER SCORE</h3>
                <button href="#" className="btn">Discover more</button>
            </div>

            <div className="video-container">
                <img src="https://static.vecteezy.com/system/resources/previews/000/371/663/original/vector-man-player-playing-cricket.jpg"></img>
                {/* <video src="https://videocdn.cdnpk.net/videos/1046cbcb-dd02-4d5f-b185-d8ab7d50ca2b/horizontal/previews/watermarked/small.mp4" id="video-slider"  loop autoplay muted style={{width:'100%',height:'auto'}}></video> */}
            </div>
        </div>
    )
}

export default Entry