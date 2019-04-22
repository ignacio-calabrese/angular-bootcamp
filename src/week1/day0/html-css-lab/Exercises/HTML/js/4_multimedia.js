function loadVideo() {
    // video
    let videoDiv = document.getElementById("videoDiv");
    if (Modernizr.video) {
        let video = document.createElement("video");            
        let type;
        let file;
        if (Modernizr.video.webm) {
          type = 'video/webm; codecs="vp8, vorbis"';
          file = "AC_DC_Thunderstruck_Official_Music_Video.webm";
        } else if (Modernizr.video.h264){
            type = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
            file = "AC_DC_Thunderstruck_Official_Music_Video.mp4";
           } else if (Modernizr.video.ogg) {
          type ='video/ogg; codecs="theora, vorbis"';
          file = "AC_DC_Thunderstruck_Official_Music_Video.ogv";
        } 
        video.setAttribute("src", "multimedia/video/" + file);
        video.canPlayType(type);
        video.setAttribute("controls", true);
        video.setAttribute("width", 500);
        videoDiv.appendChild(video);
      } else {
        videoDiv.innerHTML = "Your browser does not support the video tag.";
      }
}

window.onload = loadVideo();