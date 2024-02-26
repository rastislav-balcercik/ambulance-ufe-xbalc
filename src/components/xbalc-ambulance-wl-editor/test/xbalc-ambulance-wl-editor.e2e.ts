import { newE2EPage } from '@stencil/core/testing';

describe('xbalc-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xbalc-ambulance-wl-editor></xbalc-ambulance-wl-editor>');

    const element = await page.find('xbalc-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
