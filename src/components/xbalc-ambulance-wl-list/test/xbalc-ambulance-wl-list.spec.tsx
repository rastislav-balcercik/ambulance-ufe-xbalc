import { newSpecPage } from '@stencil/core/testing';
import { XbalcAmbulanceWlList } from '../xbalc-ambulance-wl-list';

describe('xbalc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XbalcAmbulanceWlList],
      html: `<xbalc-ambulance-wl-list></xbalc-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xbalc-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xbalc-ambulance-wl-list>
    `);
  });
});
