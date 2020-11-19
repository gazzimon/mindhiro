window.addEventListener("camera-init", data => {
    console.log("camera-init", data);
  });
  window.addEventListener("camera-error", error => {
    console.log("camera-error", error);
  });

let markerId;
  
  AFRAME.registerComponent("registerevents", {
    init: function() {
      var marker = this.el;
      marker.addEventListener("markerFound", function() {
        markerId = marker.id,
        console.log("markerFound", markerId);
        console.log(markerId)
        start.addEventListener("markerFound",startQuiz());
      });
      marker.addEventListener("markerLost", function() {
        var markerId = marker.id;
        console.log("markerLost", markerId);
        // TODO: Add your own code here to react to the marker being lost.
      });
    }
  });