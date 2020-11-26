const btn = document.querySelector('button');
const colors = ['red','yellow','green','blue','cyan']

btn.addEventListener('click',(e) => {
    e.preventDefault();

    let pos = colors.indexOf(document.querySelector('body').style.background);
    pos = (pos + 1)%(colors.length);
    document.querySelector('body').style.background = colors[pos];
});