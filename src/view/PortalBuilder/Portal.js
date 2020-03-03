import { PORTAL_CLASS, ICON, BUTTON_ICON_CLASS } from "../../resource/constant";
import { IconButton } from "../components/Common/IconButton";

const Portal = (name) => {
    const portalDOM = document.createElement('div');
    portalDOM.textContent = name
    portalDOM.className = PORTAL_CLASS
    const deployBtn = IconButton(ICON.DEPLOY, ICON.SIZE_2x, BUTTON_ICON_CLASS)
    portalDOM.appendChild(deployBtn)
    return portalDOM;
}
export {
    Portal
}