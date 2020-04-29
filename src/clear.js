export default function clear(){
    const content = document.querySelector("#content");
    const wrapper = document.querySelector(".wrapper");
    content.removeChild(wrapper);
}