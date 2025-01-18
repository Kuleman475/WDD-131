const newParagraph = document.createElement('p');
newParagraph.innerText = "added with javascript :)";
document.body.appendChild(newParagraph);


const image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/200");
image.setAttribute("alt", "image");
document.body.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
newSection.innerHTML = "<h2>DOM basics </h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);