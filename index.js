const kart =[
    {
        "id":1,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Classic-Agency-Uncode-2025-2048x1366.webp",
        "title":"Classic Agency"
    },
    {
        "id":2,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Shop-Ajax-Uncode-2025-2048x1366.webp",
        "title":"Shop Ajax"
    },
    {
        "id":3,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Creative-Hub-Uncode-2025-2048x1366.webp",
        "title":"Creative Lab"
    },
    {
        "id":4,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2023/05/demo-homepage-Creative-Agency-Uncode-2023-New-2048x1366.webp",
        "title":"Creative Agency"
    },
    {
        "id":5,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/01/demo-homepage-Classic-Innovators-New-Uncode-2025-2048x1366.webp",
        "title":"Classic Innovators"
    },
    {
        "id":6,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/02/demo-homepage-Portfolio-Cards-Def-Uncode-2025-2048x1366.webp",
        "title":"Portfolio Cards"
    },
    {
        "id":7,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2024/08/demo-homepage-Creative-Marketing-Uncode-2024-C-New-2048x1366.webp",
        "title":"Creative Marketing"
    },
    {
        "id":8,
        "url":"https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2025/03/demo-homepage-Classic-Business-New-Uncode-2025-2048x1366.webp",
        "title":"Classic Business"
    }
]

const kartGrid = document.querySelector(".kartGrid")

kart.forEach(kart =>{
    kartGrid.innerHTML += `
    
    <div class="mainkart">
                    <img src="${kart.url}" alt="">
                    <h2>${kart.title}</h2>
                </div>
    `
})