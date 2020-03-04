const Textbox = (className) => {
    const textDOM = document.createElement('input')
    textDOM.type = 'text'
    textDOM.className = className
    return textDOM
}

export { Textbox }