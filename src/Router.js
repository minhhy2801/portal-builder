import { appDiv } from "./components/resource/constant";
import { createLinkRouter } from "./components/utils/util";
import { PortalBuilder } from "./components/PortalBuilder";
import { SettingsBuilder } from "./components/SettingBuilder";

let views = {}
let viewPage = (path, render) => {
    return views[`/${path}`] = render
}

viewPage('home', () => {
    let rootDOM = document.getElementById(appDiv);
    rootDOM.innerHTML = "";
    const link1 = createLinkRouter('portal-builder', 'Go to portal-builder', '#/portal-builder');
    const link2 = createLinkRouter('settings-builder', 'Go to settings-builder', '#/settings-builder');
    rootDOM.appendChild(link1);
    return rootDOM.appendChild(link2);
});

viewPage('portal-builder', () => {
    let rootDOM = document.getElementById(appDiv);
    rootDOM.innerHTML = "";
    return rootDOM.appendChild(PortalBuilder());
});

viewPage('settings-builder', () => {
    let rootDOM = document.getElementById(appDiv);
    rootDOM.innerHTML = "";
    return rootDOM.appendChild(SettingsBuilder());
});

let resolveRoute = (path) => {
    try {
        return views[path];
    } catch (error) {
        throw new Error("The route is not defined");
    }
};

let router = (evt) => {
    const url = window.location.hash.slice(1) || "/home";
    const routeResolved = resolveRoute(url);
    routeResolved();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);