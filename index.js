const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayData(data.categories))
    .catch((err) => console.log(err));
};

const displayData = (categorie) => {
  const categories = document.getElementById("categoriyes");

  categorie.forEach((item) => {
    // console.log(item)
    const button = document.createElement("div");
    button.classList.add(
      "bg-blue-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-blue-600"
    );
    button.innerHTML = `<button>${item.category}</button>`;
    categories.append(button);
  });
};

const loadVideoData = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayDataVideos(data.videos))
    .catch(err => console.log(err))
};

// {
//     "category_id": "1003",
//     "video_id": "aaac",
//     "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//     "title": "Laugh at My Pain",
//     "authors": [
//       {
//         "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//         "profile_name": "Kevin Hart",
//         "verified": false
//       }
//     ],
//     "others": {
//       "views": "1.1K",
//       "posted_date": "13885"
//     },
//     "description": "Comedian Kevin Hart brings his unique brand more."
//   },

const displayDataVideos = (items) => {
  const card = document.getElementById("videos");

  console.log(items)
  items.forEach((item) => {
    const creatCard = document.createElement("div");
    creatCard.classList.add("card", "w-96", "bg-base-100", "shadow-xl")
    creatCard.innerHTML = `
        
    <figure><img src="${item.thumbnail}" /></figure>
    <div class="card-body">
     <h2 class="card-title">
        ${item.title}
      <div class="badge badge-secondary">NEW</div>
     </h2>
     <p>${item.description}</p>
     <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
     </div>
    </div>

        `;
        card.append(creatCard)
  });
};
// 3

// 4
loadCategories();
loadVideoData();
