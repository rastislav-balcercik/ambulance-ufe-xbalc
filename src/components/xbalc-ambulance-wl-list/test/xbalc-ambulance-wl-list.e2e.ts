import { newE2EPage } from '@stencil/core/testing';

describe('xbalc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xbalc-ambulance-wl-list></xbalc-ambulance-wl-list>');

    const element = await page.find('xbalc-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
