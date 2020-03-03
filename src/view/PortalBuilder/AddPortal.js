import { PORTAL_CLASS, ICON, BUTTON_ICON_CLASS } from "../../resource/constant";
import { IconButton } from "../components/Common/IconButton";

const AddPortal = (name, className) => {
    const addPortalDOM = document.createElement('div');
    const addSpanDOM = document.createElement('span');
    const addBtn = IconButton(ICON.ADD, ICON.SIZE_2x, BUTTON_ICON_CLASS)
    addSpanDOM.textContent = name
    addPortalDOM.className = `${PORTAL_CLASS} ${className}`
    addPortalDOM.appendChild(addBtn)
    addPortalDOM.appendChild(addSpanDOM)
    return addPortalDOM;
}
export {
    AddPortal
}