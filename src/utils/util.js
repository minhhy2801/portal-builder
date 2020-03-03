const createLinkRouter = (title, text, href) => {
    let p = document.createElement('p')

    let a = document.createElement('a');
    let linkText = document.createTextNode(text);
    a.appendChild(linkText);
    a.title = title;
    a.href = href;
    p.appendChild(a)
    return p;
};

export {
    createLinkRouter
}