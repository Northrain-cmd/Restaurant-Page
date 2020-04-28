export default function clear(){
    const content = document.querySelector("#content");
    console.log(content.lastChild);
    content.removeChild(content.lastChild);
}