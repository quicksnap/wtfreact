import React from 'react';

process.env.NODE_ENV = 'production';

class Foo extends React.Component {
  render() {
    return <div>Bar</div>;
  }
}

console.log(React.createElement(Foo));
