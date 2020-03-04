import { Header } from "../components/Common/Header";
import { createLinkRouter } from "../../utils/util";
import { Content } from "../components/Common/Content";
import { Portal } from "./Portal";
import { LEFT_CONTENT_CLASS, FLEX_CLASS, ICON, RIGHT_CONTENT_CLASS, CONTAINTER_CLASS, MAIN_CONTENT_CLASS, TABS, MODAL } from "../../resource/constant";
import { AddPortal } from "./AddPortal";
import { Widget } from "./Widget";
import { Tabs } from "../components/Common/Tabs";
import { Modal } from "../components/Common/Modal";
import { SettingModal } from "./SettingModal/SettingModal";

let dataTabs = [{
    name: 'Standard Portal',
    content: 'Standard Portal content'
}, {
    name: 'My Email',
    content: 'My Email, content'
}, {
    name: 'Schedule',
    content: 'Schedule, content'
}]

const settingBtnHeaderOnClick = () => {
    const modal = document.getElementById(MODAL.CONTAINER_ID);
    modal.style.display = 'block'
}

const closeOnClick = () => {
    const modal = document.getElementById(MODAL.CONTAINER_ID);
    modal.style.display = 'none'
}
const PortalBuilder = () => {
    const portalBuilder = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = 'Portal Builder'
    const link2 = createLinkRouter('settings-builder', 'Go to settings-builder', '#/settings-builder');
    const link1 = createLinkRouter('home', 'Go to home', '#/home');

    portalBuilder.appendChild(link1);
    portalBuilder.appendChild(link2);
    portalBuilder.appendChild(title)
    portalBuilder.appendChild(Header(settingBtnHeaderOnClick))

    const container = document.createElement('div')
    container.className = CONTAINTER_CLASS

    let listPortals = []
    listPortals.push(Portal('Portal 1'))
    listPortals.push(Portal('Portal 2'))
    listPortals.push(AddPortal('New Portal', FLEX_CLASS))

    let listWidgets = []
    listWidgets.push(Widget(ICON.IFRAME, ICON.SIZE_3x, '', 'Iframe'))
    listWidgets.push(Widget(ICON.HTML, ICON.SIZE_3x, '', 'HTML'))

    const tabs = Tabs(dataTabs, TABS.TABS_CLASS)

    container.appendChild(Content(listPortals, LEFT_CONTENT_CLASS))
    container.appendChild(Content([tabs], MAIN_CONTENT_CLASS))
    container.appendChild(Content(listWidgets, RIGHT_CONTENT_CLASS))

    let listBtns = [{ text: 'Cancel', className: '', onclickFuns: () => { } },
    { text: 'Save', className: '', onclickFuns: () => { } }]
    const modalBodyDOM = document.createElement('div')

    portalBuilder.appendChild(SettingModal(listBtns, modalBodyDOM, closeOnClick))
    portalBuilder.appendChild(container)
    return portalBuilder
}

export {
    PortalBuilder
}
