import { MODAL } from "../../../resource/constant";

const ModalFooter = (listBtns, className) => {
    const modalFooterDOM = document.createElement('div')
    modalFooterDOM.className = className
    listBtns.forEach(btn => {
        const btnDOM = document.createElement('button')
        btnDOM.textContent = btn.text
        btnDOM.className = btn.className
        btnDOM.onclick = btn.onclickFuns
        modalFooterDOM.appendChild(btnDOM)
    });
    return modalFooterDOM
}
const ModalHeader = (title, className, closeOnClick = () => { }) => {
    const modalHeaderDOM = document.createElement('div')
    const titleDOM = document.createElement('h3')
    const closeDOM = document.createElement('span')
    titleDOM.textContent = title
    closeDOM.innerHTML = `&times;`
    closeDOM.className = 'close'
    closeDOM.onclick = closeOnClick

    modalHeaderDOM.className = className
    modalHeaderDOM.appendChild(closeDOM)
    modalHeaderDOM.appendChild(titleDOM)
    return modalHeaderDOM
}
const Modal = (title, className, listBtns, modalContainerDOM, closeOnClick = () => { }) => {
    const modalDOM = document.createElement('div')
    const modalContentDOM = document.createElement('div')
    modalContentDOM.className = MODAL.CONTENT_CLASS
    modalDOM.className = className
    modalDOM.id = MODAL.CONTAINER_ID
    modalContentDOM.appendChild(ModalHeader(title, MODAL.HEADER_CLASS, closeOnClick))
    modalContentDOM.appendChild(modalContainerDOM)
    modalContentDOM.appendChild(ModalFooter(listBtns, MODAL.FOOTER_CLASS))
    modalDOM.appendChild(modalContentDOM)
    return modalDOM
}

export {
    Modal
}