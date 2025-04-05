const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then(res => res.json())
  .then(data => displayData(data.categories))
  .catch(err => console.log(err))
};

const displayData = (categorie)=>{
    const categories = document.getElementById("categoriyes");

    categorie.forEach((item) => {
        // console.log(item)
        const button = document.createElement("div");
        button.classList.add("bg-blue-500", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-600");
        button.innerHTML = `<button>${item.category}</button>`
        categories.append(button)
    });
};


const loadVideoData = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayDataVideos(data.videos))
}

const displayDataVideos = (items) => {
    const card = document.getElementById("videos");

    items.forEach((item) => {
        const creatCard = document.createElement("div");
        creatCard.innerHTML = `
        
        `
    });
}


loadCategories();
loadVideoData()