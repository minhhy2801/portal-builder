import { createLinkRouter } from "../utils/util";

const PortalBuilder = () => {
    const portalBuilder = document.createElement('div')
    const test = document.createElement('p')
    test.textContent = 'Portal Builder'
    const link2 = createLinkRouter('settings-builder', 'Go to settings-builder', '#/settings-builder');
    const link1 = createLinkRouter('home', 'Go to home', '#/home');
   
    portalBuilder.appendChild(link1);
    portalBuilder.appendChild(link2);
    portalBuilder.appendChild(test)
    return portalBuilder
}

export {
    PortalBuilder
}
