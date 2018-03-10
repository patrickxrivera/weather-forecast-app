import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import isEmpty from 'lodash/isEmpty';

import Pin from '../Pin/Pin';
import * as S from './ResultStyles.jsx'; // S === Styles => didn't want massive import :/
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContentForward from 'material-ui/svg-icons/content/forward';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
  fill: 'hsla(222, 7%, 35%, .9)'
};

class Result extends Component {
  componentDidMount() {
    const { city, fetchPinWeather, id } = this.props;
    fetchPinWeather(city, id);
  }

  render() {
    const {
      primaryColor,
      secondaryColor,
      city,
      weather,
      fetchView,
      id
    } = this.props;

    const newView = Pin;
    const payload = { id, newView };

    if (isEmpty(weather)) return <S.Wrapper>Loading</S.Wrapper>;

    const { description, average, high, low } = this.props.weather;

    return (
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Header primaryColor={primaryColor}>{city}</S.Header>
        </S.HeaderWrapper>
        <S.Middle>
          <S.StyledSun size={80} />
          <S.Gutter />
          <S.CurrentTemp>{average}&deg;</S.CurrentTemp>
        </S.Middle>
        <S.Bottom>
          High: {high}&deg; | Low: {low}&deg;
        </S.Bottom>
        <S.BtnWrapper>
          <FloatingActionButton
            onClick={() => fetchView(payload)}
            backgroundColor={secondaryColor}
            mini={true}
          >
            <ContentClear style={style} color="black" />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={secondaryColor} mini={true}>
            <ContentForward style={style} color="black" />
          </FloatingActionButton>
        </S.BtnWrapper>
      </S.Wrapper>
    );
  }
}

export default Result;
