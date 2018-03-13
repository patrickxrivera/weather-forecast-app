import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import { func, string, number } from 'prop-types';
import { Link } from 'react-router-dom';

import getIconFrom from '../../../utils/iconData.js';
import * as S from './ResultStyles.jsx'; // S === Styles => didn't want massive import :/
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContentForward from 'material-ui/svg-icons/content/forward';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Loading from '../Loading/Loading';

const style = {
  fill: 'hsla(222, 7%, 35%, .9)'
};

class Result extends Component {
  static propTypes = {
    id: number.isRequired,
    View: string.isRequired,
    primaryColor: string.isRequired,
    secondaryColor: string.isRequired,
    fetchDashboardWeather: func.isRequired,
    fetchView: func.isRequired,
    receiveCity: func.isRequired
  };

  componentDidMount() {
    const { city, fetchDashboardWeather, id } = this.props;
    fetchDashboardWeather(city, id);
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

    const nextView = 'Pin';
    const payload = { id, nextView };

    if (isEmpty(weather)) return <Loading primaryColor={primaryColor} />;

    const { description, average, high, low } = this.props.weather;
    const Icon = getIconFrom(description);
    const StyledIcon = S.style(Icon);

    return (
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Header primaryColor={primaryColor}>{city}</S.Header>
        </S.HeaderWrapper>
        <S.Middle>
          <StyledIcon size={80} />
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
          <Link
            to={{
              pathname: `forecast/dashboard/${id}`
            }}
          >
            <FloatingActionButton backgroundColor={secondaryColor} mini={true}>
              <ContentForward style={style} color="black" />
            </FloatingActionButton>
          </Link>
        </S.BtnWrapper>
      </S.Wrapper>
    );
  }
}

export default Result;
