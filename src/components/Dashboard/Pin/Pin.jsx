import React, { Component } from 'react';

import { OuterWrapper, ContentWrapper, Btn } from './PinStyles';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

export default class Pin extends Component {
  render() {
    const { primaryColor, secondaryColor } = this.props;
    return (
      <OuterWrapper secondaryColor={secondaryColor}>
        <ContentWrapper>
          Pin a city{' '}
          <FloatingActionButton backgroundColor={primaryColor} mini={true}>
            <ContentAdd />
          </FloatingActionButton>
        </ContentWrapper>
      </OuterWrapper>
    );
  }
}
