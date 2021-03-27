console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'





function init() {
     fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        
        for(let i=0;i<data.message.length;i++){
            const image = document.createElement("img")
            image.src = data.message[i];
            document.querySelector("#dog-image-container").appendChild(image)
        }
        
     })
     dogBreeds()
}


function dogBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        for(const key in data.message){
            const liTag = document.createElement('li')
            liTag.innerText = key
            const breedDrop = document.querySelector("#breed-dropdown");
            breedDrop.addEventListener('click',()=>{
                if(liTag.innerText.charAt(0)===breedDrop.value){
                    document.querySelector("#dog-breeds").appendChild(liTag) }
                    else if(breedDrop.value==="all breeds"){
                        document.querySelector("#dog-breeds").appendChild(liTag)
                    }
                    else{ liTag.remove()}
            })
            liTag.addEventListener('click',() =>{
                liTag.style.color="#F699CD"
            })
       }
    })       
}    



     
   
document.addEventListener('DOMContentLoaded', init)

