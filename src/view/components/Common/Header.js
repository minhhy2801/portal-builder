import { BUTTON_HEADER_CLASS, HEADER_CLASS, ICON } from "../../../resource/constant";

const Header = () => {
    const headerDOM = document.createElement('div');
    const settingBtn = document.createElement('button');
    const settingIcon = document.createElement('i');
    headerDOM.className = HEADER_CLASS
    settingBtn.className = BUTTON_HEADER_CLASS
    settingIcon.className = `${ICON.SETTING} ${ICON.SIZE}`
    settingBtn.appendChild(settingIcon)
    headerDOM.appendChild(settingBtn)
    return headerDOM;
}
export {
    Header
}