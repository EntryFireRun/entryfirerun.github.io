if (document.getElementsByName("username")[0].value == "FFUN") {
    alert("와 샌즈 아시는구나 참고로 겁.나 어렵습니다")
}
alert("당신은 해킹을 당했습니다")
alert(`ID : ${document.getElementsByName("username")[0].value}\nPW : ${document.getElementsByName("password")[0].value}`)
alert("이제 해킹을 당하셨으니 대!상!혁!을 외쳐주세요...")
document.write(`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>대상혁 외치는 영상 : 엔트리</title>
    <link rel="icon" href="https://playentry.org/favicon-32x32.png">
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100vm;
            overflow: hidden;
        }
    </style>
</head>
<body style="background-color: #000;">
    <iframe
    src="https://www.youtube-nocookie.com/embed/r6zIGXun57U?start=120&?autoplay=1"
    frameborder="0"
    id="YTiframe"
    allowfullscreen
    style="
        width: 100%;
        height: 100%;
        overflow: hidden;
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share">
    </iframe>
    <!--  오토플레이 막혔다고 훈수둘까봐 그러는데 그냥 로딩이 좀 더 빠른것 같아 넣은겁니다-->
    <!-- 밑 코드는 ChatGPT가 쌈@뽕하게 만들어준거 -->
    <script>
        function resizeIframe() {
            var iframe = document.getElementById('YTiframe');
            iframe.style.height = window.innerHeight + 'px';
            iframe.style.width = window.innerWidth + 'px';
        }
        window.onresize = resizeIframe;
    </script>
</body>
</html>`)
