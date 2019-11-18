import React from "react";
import {Switch, Tooltip} from "antd";

import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";
import {inject, observer} from "mobx-react";

import "./ScrollSync.css";

@inject("navbar")
@observer
class ScrollSync extends React.Component {
  render() {
    return (
      <Tooltip placement="bottom" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="同步滚动">
        <Switch
          defaultChecked
          checked={this.props.navbar.scrollSync}
          onChange={this.props.navbar.setScrollSync}
          className="scrollsync"
        />
      </Tooltip>
    );
  }
}

export default ScrollSync;
