
function generateSketchpad(n)
{
    for(let i=0;i<n;i++)
    {
        let content = document.querySelector('#content');
        let container = document.createElement('div');
        container.classList.add('container');
        for(let j=0;j<n;j++)
        {
            const div = document.createElement('div');
            div.classList.add('new');
            div.addEventListener('mouseover',() => {
                div.style.backgroundColor = squreColor;
            })                      
            container.appendChild(div);
        }
        content.appendChild(container);
    }
}

let squreColor = 'black'
let n = 16  ;
generateSketchpad(n);

const button = document.querySelector('#button');
button.addEventListener('click',() => {
    const contentContainer = document.querySelector('#content-container');
    let content = document.querySelector('#content');
    contentContainer.removeChild(content);
    content = document.createElement('div');
    content.setAttribute('id', 'content');
    contentContainer.appendChild(content);
    let n = prompt("How many squares would you like in new sketchpad?")
    generateSketchpad(n);

});

const select = document.querySelector('select');
select.addEventListener('change',(e) => {
    squreColor = e.target.value ;
});




