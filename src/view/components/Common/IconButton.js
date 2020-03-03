const IconButton = (iconName, iconSize, btnClass) => {
    const btn = document.createElement('button');
    const icon = document.createElement('i');
    btn.className = btnClass
    icon.className = `${iconName} ${iconSize}`
    btn.appendChild(icon)
    return btn;
}
export {
    IconButton
}