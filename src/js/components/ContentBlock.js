import React, { Component } from 'react';
import EllipsisText  from 'react-ellipsis-text';

class ContentBlock extends Component {
  constructor() {
    super();
    this.showContent = this.showContent.bind(this);
    this.hideContent = this.hideContent.bind(this);
    this.state = {
      showContent: false,
    }
  }

  showContent() {
    this.setState({ showContent: true })
  }
  hideContent() {
    this.setState({ showContent: false })
  }

  render() {
    const contentBlockClassName = `content-block ${this.state.showContent ? 'show' : ''}`;
    return (
      <div onMouseEnter={this.showContent} onMouseLeave={this.hideContent} className={contentBlockClassName}>
        <div className="content">
          <p className="title">{this.props.title}</p>
          <EllipsisText className="description" text={this.props.description} length={250} />
        </div>
      </div>
    )
  }
}

export default ContentBlock;
