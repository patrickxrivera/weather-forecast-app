import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import isEmpty from 'lodash/isEmpty';

import * as S from './ResultStyles.jsx'; // S === Styles => didn't want massive import :/

const style = {
  marginBottom: 8,
  border: 'none'
};

class Result extends Component {
  componentDidMount() {
    const { city, fetchPinWeather, id } = this.props;
    fetchPinWeather(city, id);
  }

  render() {
    const { primaryColor, secondaryColor, city, weather } = this.props;

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
        <RaisedButton
          label="View Forecast"
          backgroundColor={secondaryColor}
          style={style}
        />
      </S.Wrapper>
    );
  }
}

export default Result;
