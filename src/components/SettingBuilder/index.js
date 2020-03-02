import { createLinkRouter } from "../utils/util";

const SettingsBuilder = () => {
    const settingsBuilder = document.createElement('div')
    const test = document.createElement('p')
    test.textContent = 'Settings Builder'
    const link2 = createLinkRouter('portal-builder', 'Go to portal-builder', '#/portal-builder');
    const link1 = createLinkRouter('home', 'Go to home', '#/home');
    settingsBuilder.appendChild(link1);
    settingsBuilder.appendChild(link2);
    settingsBuilder.appendChild(test)
    return settingsBuilder
}

export {
    SettingsBuilder
}