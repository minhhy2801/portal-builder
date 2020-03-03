import { WIDGET_CLASS, BUTTON_ICON_CLASS } from "../../resource/constant";
import { IconButton } from "../components/Common/IconButton";

const Widget = (iconName, iconSize, iconBtnClassName, name) => {
    const widgetDOM = document.createElement('div');
    const spanDOM = document.createElement('span')
    const iconBtn = IconButton(iconName, iconSize,`${BUTTON_ICON_CLASS} ${iconBtnClassName}`)
    spanDOM.textContent = name
    widgetDOM.className = WIDGET_CLASS
    widgetDOM.appendChild(iconBtn)
    widgetDOM.appendChild(spanDOM)
    return widgetDOM;
}
export {
    Widget
}