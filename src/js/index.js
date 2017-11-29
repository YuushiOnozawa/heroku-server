import Hello from './sub/sub.js';
const dom = document.getElementById('testText');

SmartBeat.leaveBreadcrumb("index2");

try {
  throw new ReferenceError('type smartbeat2');
} catch (error) {
  console.log(error);
  SmartBeat.handledException(error.message, error.fileName, error.lineNumber,
      error.columnNumber, error);
}

new Hello().say(dom);

