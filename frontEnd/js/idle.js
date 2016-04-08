
$(document).ready(function () {
    //window.location.href = "visualizations/particles.html";
    //window.location.replace("visualizations/particles.html");
    //Increment the idle time counter every minute.
    var idleTime = 0;
    var idleInterval = setInterval(timerIncrement, 1000); // 1 minute
    //Zero the idle timer on mouse movement.
    $("body").mousemove(function (e) {
        idleTime = 0;
    });
    $("body").keypress(function (e) {
        idleTime = 0;
    });
    function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 25) { // 20 minutes
        var x = Math.floor((Math.random() * 4) + 1);
        if(x == 1){
            window.location.href = "visualizations/flock.html";
        }
        if(x == 2){
            window.location.href = "visualizations/linespheres.html";
        }
        if(x == 3){
            window.location.href = "visualizations/particles.html";
        }
        if(x == 4){
            window.location.href = "visualizations/waves.html";
        }
    }
}

});
