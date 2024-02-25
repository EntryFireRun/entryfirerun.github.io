console.clear()

function wasans(){
    Entry.youtube.generateView("dQw4w9WgXcQ?autoplay=1")
    document.write(Entry.youtube.getView().innerHTML)
    setTimeout(wasans, 100)
};

// 작품 만들기 페이지에서 사용해주세요
// "저장하지 않는 작품이 있습니다" 메시지가 사라진 후 입력해주세요
// import("https://entryfirerun.github.io/2.js")
