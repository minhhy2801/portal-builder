const IconButton = (iconName, iconSize, btnClass, settingBtnHeaderOnClick = () => {}) => {
    const btn = document.createElement('button');
    const icon = document.createElement('i');
    btn.className = btnClass
    icon.className = `${iconName} ${iconSize}`
    btn.onclick = settingBtnHeaderOnClick
    btn.appendChild(icon)
    return btn;
}
export {
    IconButton
}