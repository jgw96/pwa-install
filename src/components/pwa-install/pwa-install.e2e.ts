import { newE2EPage } from '@stencil/core/testing';

describe('pwa-install', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pwa-install></pwa-install>');
    const element = await page.find('pwa-install');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<pwa-install></pwa-install>');
    const component = await page.find('pwa-install');
    const element = await page.find('pwa-install >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
