import { MODAL } from "../../../resource/constant";
import { Modal } from "../../components/Common/Modal";

const SettingModal = (listBtns, contentChildDOM, closeOnClick = () => { }) => {
    const modalBodyDOM = document.createElement('div')
    modalBodyDOM.appendChild(contentChildDOM)
    modalBodyDOM.className = MODAL.BODY_CLASS
    const modalSetting = Modal('Setting', MODAL.CONTAINER_CLASS, listBtns, modalBodyDOM, closeOnClick)
    return modalSetting
}

export {
    SettingModal
}