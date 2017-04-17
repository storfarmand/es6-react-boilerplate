import dispatcher from '../dispatcher';

export function bgToggle(data) {
  dispatcher.dispatch({
    type: "HOME",
    action: "BGTOGGLE"
  });
}
