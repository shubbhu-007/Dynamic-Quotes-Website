const quotes = document.getElementById("quotes"); 
const author = document.getElementById("author");
const btnId = document.getElementById("newQ");
const twitMe = document.getElementById("twitMe")
let realData = "";
const tweetNow = () => {
    let teweeTurl =  "https://twitter.com/intent/tweet";
    window.open(teweeTurl);
}
const getNewQuotes = () => {
    let rnum = Math.floor(Math.random()*1500);
    console.log(rnum);
    console.log(realData[rnum].author)
    quotes.innerText = `${realData[rnum].text}`
    let authorName = realData[rnum].author;
    if(authorName==null){
        author.innerText = "unknown";

    }
    else{
        author.innerText = `${authorName}`
    }
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try{
        let data = await  fetch(api);
        //data will be output in form of readablestream so convert into json 
        realData = await data.json();
        // console.log(realData[10].text)
        // console.log(realData[10].author)

        getNewQuotes();

    }catch(error){}
};
twitMe.addEventListener("click" , tweetNow);
btnId.addEventListener("click",getNewQuotes);
getQuotes();
