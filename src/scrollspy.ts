import {autoinject} from 'aurelia-framework';
import $ from 'jquery';

@autoinject
export class Scrollspy {
  public heading: string = 'Github Users';
  public users: any[] = [];

  constructor() {
  }

  attached() {
    setTimeout(() => {
      $('#spyscroll1').scrollspy({ target: '#navbar-example2' })
    }, 500);
  }

  async activate(): Promise<void> {
  }

  detached() {
    // $('#navbar-example2').scrollspy('dispose');
  }
}
