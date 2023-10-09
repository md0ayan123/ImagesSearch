const accessKey ="bBgcT9H9doxL_0mgP8i8xout6ImPzbylGQFEe7Ec_Cw"

const formE1 = document.querySelector("Form")
const inputE1 =document.getElementById("search-input")
const searchResult=document.querySelector(".search-results")
// const searchButton=document.getElementById("search-button")
const showMore = document.getElementById("show-more-button")

let inputData="dog";
let page=1;


async function searchImages(){
    inputData=inputE1.value;
    // console.log(inputE1);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=LSo0-t_QtnFPrIYh4P7-J596aYvXtEBwHEvdE6rW11E`
    
    const response =await fetch(url);
    const data= await response.json(); 

    const results=data.results;

    if(page==1){
        searchResult.innerHTML=""
    }
    results?.map((result)=>{
        console.log(result?.urls.small)
        const imageWrapper=document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image=document.createElement("img")
       
        
        image.src=result?.urls?.small
        image.alt=result?.alt_description 
        const imageLink=document.createElement("a")
        imageLink.href=result?.links?.download
        imageLink.target="_blank"
        imageLink.text=result?.alt_description
        
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResult.appendChild(imageWrapper)
    })

    page++;
    if(page>1){
        showMore.style.display="block"
    }
}
formE1.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchImages()

})
showMore.addEventListener("click",()=>{
    
    searchImages()

})