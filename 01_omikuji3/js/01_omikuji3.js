"use strict";

window.addEventListener("DOMContentLoaded",
    function () {
        $("header").textillate({
            loop: false,
            minDisplayTime: 2000,
            initialDelay: 2000,
            autoStart: true,
            in: {
                effect: "fadeInLeftBig",
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: true
            }
        });

        //omikuji button (id="btn1")
        $(function () {
            ScrollReveal().reveal("#btn1", { duration: 9800});
        });

        setTimeout(
            function () {
                let popmsg = "いらっしゃい!おみくじ引いてって";
                window.alert(popmsg);
            },
            "5000"
        );

    }, false
);



        /*AUDIO*/
        let soundEndflag = "0"; //sound control

        //OMIKUJI TEXT
        const btn1 = document.getElementById("btn1");
        const omikujiText = document.getElementById("omikujiText");
        const omikujiTextImage = document.getElementById("omikujiTextImage");

        btn1.addEventListener("click",
            function () {
                if (soundEndflag === "1") {
                    soundControl("end", "");
                }
                    //omikuji Text
                let resultText = ["img/daikichi.png", "img/chukichi.png", "img/syokichi.png", "img/suekichi.png","img/daikyo.png"];   
            
                let resultMaxSpeed = [10, 10, 8, 5, 5];
                let resultMaxSize = [30, 30, 20, 15, 20,20];
                let resultImage = ["img/star.png", "img/sakura_hanabira.png", "img/water1.png", "img/redLeaves4.png", "img/snowflakes.png"];
                let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound5.mp3",];

                let n = Math.floor(Math.random() * resultText.length);
               
                   //OmikujiText Image gazou
                   omikujiTextImage.src = resultText[n];
                   omikujiTextImage.classList.add("omikujiPaper");
             //Animation
                    omikujiTextImage.addEventListener("animationend",
                   function() {
                    omikujiTextImage.classList.remove("omikujiPaper");
                   }, false
                    );
                 //soundControl
                 w_sound = resultSound[n];
                 soundControl("start", w_sound);
                 soundEndflag = "1";
               
                //snowfall stop
                $(document).snowfall("clear");
                   
                setTimeout(
                    function() {
                        $(document).ready(function() {
                            $(document).snowfall({
                                maxSpeed : resultMaxSpeed[n],
                                minSpeed : 1,
                                maxSize : resultMaxSize[n],
                                minSize : 1,
                                image : resultImage[n]
                            });
                        });
                    }, 
                    "200"
                );
                    },false
                   );
               

        //sound control
        let w_sound
        let music
        function soundControl(status, w_sound) {
            if(status === "start") {
                music = new Audio (w_sound);
                music.currentTime = 0;
                music.play();
            }
            else if (status === "end"){
                music.pause();
                music.currentTime = 0;
            }
        }