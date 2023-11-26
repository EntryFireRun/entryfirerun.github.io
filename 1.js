alert("당신은 해킹을 당했습니다")
alert("안당한거 안다고요...?")
alert("그럼 KIDDING을 보세요 ㅋㅋㄹㅃㅃ")
document.write(`<!DOCTYPE html>
<html
lang="ko"
id="roothtml"
style="
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 : 엔트리</title>
    <link rel="icon" href="https://playentry.org/favicon-32x32.png">
</head>
<body
style="
    background-color: #000;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;"
id="rootbody">
    <iframe
    src="https://youtube.com/embed/rDFUl2mHIW4?autoplay=1"
    frameborder="0"
    id="YTiframe"
    allowfullscreen
    style="width: 100%;
        height: 100%;
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
    <!--  오토플레이 막혔다고 훈수둘까봐 그러는데 좀 더 로딩이 빠른것 같아(?) 넣은겁니다-->
    <!-- 밑 코드도 챗 지피티 -->
    <script>
        function resizeIframe() {
            var iframe = document.getElementById('YTiframe');
            var body = document.getElementById('rootbody');
            var html = document.getElementById('roothtml');
            iframe.style.height = window.innerHeight + 'px';
            body.style.height = window.innerHeight + 'px';
            html.style.height = window.innerHeight + 'px';
        resizeIframe();
        window.addEventListener('resize', resizeIframe);
    </script>
</body>
</html>`)
