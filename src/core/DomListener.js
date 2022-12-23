export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No root element`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {}

  removeDOMListeners() {}
}