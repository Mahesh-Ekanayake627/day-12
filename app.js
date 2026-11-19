// // console.log("Hi");
// setTimeout(() => {
//     console.log("Pich report Eka Kiyanawa");
//     setTimeout(() => {
//         console.log("Captainla denna ground ekata enawa");
//         setTimeout(() => {
//             console.log("Toss eka Danawa");
//             setTimeout(() => {
//                 console.log("National Anthem Kiyanawa");
//                 setTimeout(() => {
//                     console.log("Umpairesa la and Batsmanla denna Ground ekata enawa");
//                     setTimeout(() => {
//                         console.log("Fildersla awith match eka patan gannawa");
//                         setTimeout(() => {
//                             console.log("Inning ekak iwara karala anith inning eka patan gannawa");
//                             setTimeout(() => {
//                                 console.log("Man of the match dila match eka iwara Karanawa");
                                
//                             }, 2500);
//                         }, 5500);
//                     }, 1000);
//                 }, 2500);
//             }, 2500);
//         }, 1000);
//     }, 5000);
// }, 2000);


function Sendmessage(){
const myHeaders = new Headers();
myHeaders.append("Authorization", "***");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "__cf_bm=W.PjJkGzMotcjDRzDwifZyCJwXoc6XkMpbu3rdvO30o-1795073695.2935297-1.0.1.1-gA2TrloqQwpOuLVr6PwWnyk1sGMqORVnXp6I4uzVm257oeG1I6Yd4p7YGJz4KxjbxYy0ofKAnQklppqVw1CJklhxnF3CI5F31FgCewzRe7s_b19tGP4uhnGoW1ABm58G");

const raw = JSON.stringify({
  "model": "openai/gpt-oss-20b",
  "input": document.getElementById("textUserInput").value
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.groq.com/openai/v1/responses", requestOptions)
  .then((response) => response.json())
  .then((result) =>{ 
    document.getElementById("lblDisplay").innerHTML =  marked.parse(result.output[1].content[0].text);})
}