let projects = [
{
    img:"https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
    title:"project",
    description:"Portfolio website using HTML,CSS,JS",
    link:"",
},
{
    img:"https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
    title:"project",
    description:"Portfolio website using HTML,CSS,JS",
    link:"",
}
]

const myProjects = document.querySelector(".project");

const showinnerHTML = projects.map((project,index)=>{
    return `
    <div class="objs">
    <a href=${project.link}>
    <img src=${project.img} alt="">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    </a>
    </div>
    `
})

myProjects.innerHTML = showinnerHTML;