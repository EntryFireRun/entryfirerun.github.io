async function getCookie() {
  csrf = await fetch("https://playentry.org");
  body = await csrf.text();
}
getCookie().then(() => {
  const index = body.indexOf("csrf-token") + 21;
  const csrfToken = body.slice(index, index + 36);
  const xToken = body.split('xToken":"')[1].split('"')[0];
  const projectlink = "662e192bd5fc107f7e820dfc";

fetch("https://playentry.org/graphql", {
  headers: {
    "content-type": "application/json",
    "csrf-token": csrfToken,
    "x-client-type": "Client",
    "x-token": xToken,
  },
  "body": '{"query":"mutation FOLLOW($user:String){follow(user:$user){status}}","variables":{"user":"6415158297bafa011b552344"}}',
  "method": "POST",
});
