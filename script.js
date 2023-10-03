let n = 16;

for(let i=0;i<n;i++)
{
    let content = document.querySelector('#content');
    let container = document.createElement('div');
    for(let j=0;j<n;j++)
    {
        const div = document.createElement('div');
        div.classList.add('new');
        div.addEventListener('mouseover',() => {
            div.style.backgroundColor= 'black';
        })                      
        container.appendChild(div);
    }
    content.appendChild(container);
}