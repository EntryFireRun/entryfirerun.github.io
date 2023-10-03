document.write(`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 : 엔트리</title>
    <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script> 
    <style> 
    *{margin:0;padding:0} 
    body{overflow:hidden}
    </style> 
</head>
<body style="bgcolor: #000">
    <iframe id="video" src="https://youtube.com/embed/rDFUl2mHIW4?autoplay=1" frameborder="0">
    <script> 
    $(function(){ 
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
        $(window).resize(function(){ 
        $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' }); 
        }); 
    }); 
    </script> 
</body>
</html>`)