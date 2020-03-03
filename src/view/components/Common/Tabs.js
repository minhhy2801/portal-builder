import { Tab } from "./Tab";
import { TABS, ICON, BUTTON_ICON_CLASS } from "../../../resource/constant";
import { IconButton } from "./IconButton";

const Tabs = (tabData, className) => {
    const tabsDOM = document.createElement('div')
    const tabContentDOM = document.createElement('div')
    tabsDOM.className = className
    tabData.forEach((item, i) => {
        let tab = null;
        tab = Tab(item.name, TABS.TABPANE_CLASS)
        if (i === 0) {
            tab = Tab(item.name, `${TABS.TABPANE_CLASS} ${TABS.TABPANE_ACTIVE_CLASS}`)
        }
        tabsDOM.appendChild(tab)
    })
    tabsDOM.appendChild(IconButton(ICON.ADD, '', BUTTON_ICON_CLASS))
    tabContentDOM.textContent = tabData[0].content
    tabContentDOM.className = TABS.TABCONTENT_CLASS
    tabContentDOM.appendChild(IconButton(ICON.SETTING, '', `${BUTTON_ICON_CLASS}`))
    tabsDOM.appendChild(tabContentDOM)
    tabsDOM.appendChild(tabContentDOM)
    return tabsDOM;
}
export {
    Tabs
}