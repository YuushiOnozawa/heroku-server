export default class Hello {
  constructor() {
    console.log(`make Hello class`);
  }

  say(dom) {
    dom.innerHTML = 'hello';
  }
}