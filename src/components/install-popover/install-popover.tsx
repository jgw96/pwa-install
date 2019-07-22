import { Component, Element, h, Prop, State } from '@stencil/core';

interface IManifest {
  name: string,
  description: string,
  short_name: string,
  start_url: string,
  display: string,
  icons: any[],
  background_color: string,
  screenshots: any[],
  theme_color: string
}

@Component({
  tag: 'install-popover',
  styleUrl: 'install-popover.css',
  shadow: true
})
export class InstallPopover {

  @Prop() path: string;
  @Prop() iconPath: string;
  @Prop() installEvent: any;

  @State() manifestData: IManifest;

  @Element() el: HTMLElement;

  async componentWillLoad() {
    console.log(this.path);
    if (this.path) {
      const response = await fetch(this.path);
      const data = await response.json();

      console.log(data);
      this.manifestData = data;
    }
  }

  async install() {
    console.log(this.installEvent);
    if (this.installEvent) {
      this.installEvent.prompt();
      console.log(this.installEvent);

      /*this.installEvent.userChoice.then((choiceResult) => {

        if (choiceResult.outcome === 'accepted') {
          console.log('Your PWA has been installed');
        } else {
          console.log('User chose to not install your PWA');
        }

        this.installEvent = null;

      });*/

      const choiceResult = await this.installEvent.userChoice;
      console.log(choiceResult);
      if (choiceResult.outcome === 'accepted') {
        console.log('Your PWA has been installed');
      } else {
        console.log('User chose to not install your PWA');
      }

      this.installEvent = null;
    }
  }

  cancel() {
    (this.el.closest('ion-modal') as any).dismiss();
  }

  render() {
    return (
      <div id="popoverContainer">
        <div id="headerContainer">
          <img src={this.iconPath}></img>

          <div>
            <h1>{this.manifestData.name}</h1>
            <p>
              {this.manifestData.description}
            </p>
          </div>
        </div>

        <div id="contentContainer">
          <h3>Screenshots</h3>

          <div id="screenshots">
            {
              this.manifestData.screenshots.map((screen) => {
                return (
                  <img src={screen.src}></img>
                )
              })
            }
          </div>
        </div>

        <div id="buttonsContainer">
          <button id="installButton" onClick={() => this.install()}>Install</button>
          <button id="cancelButton" onClick={() => this.cancel()}>Cancel</button>
        </div>
      </div>
    );
  }
}
