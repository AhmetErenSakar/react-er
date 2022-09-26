import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header" data-testid="header">
        <img
          id="img"
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        Emoji Search
        <img
          id="img"
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
