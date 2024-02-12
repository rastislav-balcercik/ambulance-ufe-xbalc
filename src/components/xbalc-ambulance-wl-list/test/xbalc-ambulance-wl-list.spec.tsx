import { newSpecPage } from '@stencil/core/testing';
import { XbalcAmbulanceWlList } from '../xbalc-ambulance-wl-list';

describe('xbalc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XbalcAmbulanceWlList],
      html: `<xbalc-ambulance-wl-list></xbalc-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XbalcAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
