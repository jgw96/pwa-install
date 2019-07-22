import { TestWindow } from '@stencil/core/testing';
import { InstallPopover } from './install-popover';

describe('install-popover', () => {
  it('should build', () => {
    expect(new InstallPopover()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLInstallPopoverElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [InstallPopover],
        html: '<install-popover></install-popover>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
