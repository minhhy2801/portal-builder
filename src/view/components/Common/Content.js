const Content = (contentChildDOM, className) => {
    const contentDOM = document.createElement('div');
    contentDOM.className = className
    contentChildDOM.forEach(element => {
        contentDOM.appendChild(element)
    });
    return contentDOM;
}
export {
    Content
}