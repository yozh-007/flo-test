import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './containers/Layout/Layout';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Plans from './components/Plans/Plans';
import Button from './components/UI/Button/Button';
import Loader from './components/UI/Loader/Loader';
import { fetchData } from './redux/actions/globalActions';
import Main from './containers/Main/Main';
import ExtraText from './components/ExtraText/ExtraText';
import btnStyles from './components/UI/Button/Button.module.scss';
import Fader from './containers/Fader/Fader';


class App extends Component {
  // eslint-disable-next-line camelcase
  async UNSAFE_componentWillMount() {
    const { fetchDataLocal } = this.props;
    await fetchDataLocal();
  }

  render() {
    const { activePlanId, activePlanMsg, btn } = this.props;
    return (
      <Layout>
        {activePlanId ? (
          <Fader>
            <Header />
            <Main>
              <Slider />
              <Plans />
              <Button
                className={btnStyles['fp-btn']}
                onClick={() => {
                  if (activePlanMsg) {
                    // eslint-disable-next-line no-console
                    console.log(`Continue with <<${activePlanMsg}>>`);
                  } else {
                    // eslint-disable-next-line no-console
                    console.log('Continue Button Clicked!');
                  }
                }}
                text={btn}
                hasWrapper
              />
              <ExtraText />
            </Main>
          </Fader>
        ) : <Loader />}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    btn: state.plans.btn,
    activePlanId: state.plans.activePlanId,
    activePlanMsg: state.plans.activePlanMsg,
  };
}

function mapDipatchToProps(dispatch) {
  return {
    fetchDataLocal: () => dispatch(fetchData()),
  };
}

App.propTypes = {
  activePlanId: PropTypes.string,
  activePlanMsg: PropTypes.string,
  btn: PropTypes.string,
  fetchDataLocal: PropTypes.func.isRequired,
};

App.defaultProps = {
  activePlanMsg: '',
  activePlanId: '',
  btn: '',
};

export default connect(mapStateToProps, mapDipatchToProps)(App);
