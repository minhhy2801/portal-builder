import { BUTTON_HEADER_CLASS, HEADER_CLASS, ICON, BUTTON_ICON_CLASS } from "../../../resource/constant";
import { IconButton } from "./IconButton";

const Header = () => {
    const headerDOM = document.createElement('div');
    const settingBtn = IconButton(ICON.SETTING, ICON.SIZE_3x, `${BUTTON_HEADER_CLASS} ${BUTTON_ICON_CLASS}`)
    headerDOM.className = HEADER_CLASS
    headerDOM.appendChild(settingBtn)
    return headerDOM;
}
export {
    Header
}