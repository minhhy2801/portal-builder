const Tab = (name, className) => {
    const tabDOM = document.createElement('div')
    tabDOM.textContent = name
    tabDOM.className = className
    return tabDOM;
}
export {
    Tab
}