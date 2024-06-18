alert('엄준식 is God')
async function getCookie() {
  csrf = await fetch("https://playentry.org");
  body = await csrf.text();
}
getCookie().then(() => {
  const index = body.indexOf("csrf-token") + 21;
  const csrfToken = body.slice(index, index + 36);
  const xToken = body.split('xToken":"')[1].split('"')[0];
  const projectlink = "662e192bd5fc107f7e820dfc";

console.log(`xToken : ${xToken} / csrfToken : ${csrfToken}`)
})
setTimeout(()=>{
  async function getCookie() {
  csrf = await fetch("https://playentry.org");
  body = await csrf.text();
}
getCookie().then(() => {
  const index = body.indexOf("csrf-token") + 21;
  const csrfToken = body.slice(index, index + 36);
  const xToken = body.split('xToken":"')[1].split('"')[0];
  const projectlink = "662e192bd5fc107f7e820dfc";

console.log(`xToken : ${xToken} / csrfToken : ${csrfToken}`)
})
}, 10000) // 자동 리다이렉트 이슈로 일단 넣어 봄
