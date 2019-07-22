import { Component, Prop, State, h } from '@stencil/core';

import '@ionic/core';

@Component({
  tag: 'pwa-install',
  styleUrl: 'pwa-install.css'
})
export class PWAInstall {

  @State() deferredPrompt: any;
  @State() showInstall: boolean = false;
  // @State() showInstall: boolean = true;

  @Prop() manifestpath: string;
  @Prop() iconpath: string;
  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement | null = null;

  componentDidLoad() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('e', e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;

      this.showInstall = true;
    });
  }

  async install() {
    const popover = await this.modalCtrl.create({
      component: 'install-popover',
      cssClass: 'installPopover',
      componentProps: {
        installEvent: this.deferredPrompt,
        path: this.manifestpath,
        iconPath: this.iconpath
      }
    });
    await popover.present();
  }

  render() {
    return (
      <div>
        {this.showInstall ? <button onClick={() => this.install()} id="desktopInstallButton">Install App</button> : null}
      </div>
    );
  }
}
