import { newE2EPage } from '@stencil/core/testing';

describe('xbalc-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xbalc-ambulance-wl-app></xbalc-ambulance-wl-app>');

    const element = await page.find('xbalc-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
