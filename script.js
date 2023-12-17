const accesskey = "w3k5FXvoTdBi6o9KyRi8VxbuixTr7D37M118BMzQYkY";

const searchresult = document.querySelector(".search-results");
const form =document.querySelector("form");
const showbutton=document.getElementById("show-more-button");
const inputEl=document.getElementById("searchInput");

let inputdata="";
let pagenumber= 1;

function search() {
    inputdata=inputEl.value;
}
async function searchimages () {
    inputdata=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;
if(page ==1)
{
    searchresult.innerHTML=""

}
 results.map((result) =>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("search-result");
    const image=document.createElement("img");
    image.src=result.urls.small;
    image.alt=result.alt_description;
    const imagelink=document.createElement('a');
    imagelink.href=result.links.html;
    imagelink.target="_blank";
    imagelink.textContent=result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imagelink);
    searchresult.appendChild(imageWrapper);

 });
page++
if(page > 1)
{
    showbutton.style.display="block";
}
}
form.addEventListener('submit',(event)=>
{
    event.preventDefault()
    page=1;
    searchimages()
})
showbutton.addEventListener('click',()=>
{
    searchimages()
})







