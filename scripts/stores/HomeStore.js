import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class HomeStore extends EventEmitter {
  constructor() {
    super();
  }
  handleBgToggle() {
    this.emit('home:bgtoggle');
  }
  handleActions(evt) {
    switch(evt.type) {
      case "HOME":
        switch (evt.action) {
          case "BGTOGGLE":
            this.handleBgToggle();
            break;
        }
    }
  }

}

const homeStore = new HomeStore;
dispatcher.register(homeStore.handleActions.bind(homeStore));

export default homeStore;
