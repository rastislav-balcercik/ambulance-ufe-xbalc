import { newSpecPage } from '@stencil/core/testing';
import { XbalcAmbulanceWlApp } from '../xbalc-ambulance-wl-app';

describe('xbalc-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XbalcAmbulanceWlApp],
      html: `<xbalc-ambulance-wl-app base-path="/"></xbalc-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xbalc-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XbalcAmbulanceWlApp],
      html: `<xbalc-ambulance-wl-app base-path="/ambulance-wl/"></xbalc-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xbalc-ambulance-wl-list');
  });
});
