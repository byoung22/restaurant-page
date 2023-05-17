function reset() {
    const content = document.getElementById('content');
    content.innerHTML= '';
}

function createContent() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
}
export default function initialize() {
    createContent();
    reset();
}