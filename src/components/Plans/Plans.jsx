import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { planPropTypes, Plan } from './Plan/Plan';
import { setActivePlanMsg, setActivePlanId } from '../../redux/actions/plansActions';
import styles from './Plans.module.scss';

class Plans extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(id) {
    const { setId, getMsg, plans } = this.props;
    const message = plans.find((planId) => planId.id === id);
    const messageText = `Chosen plan: ${message.date} ${message.dateText} => ${message.price} / ${message.term}`;
    // eslint-disable-next-line no-console
    console.log(messageText);
    setId(id);
    getMsg(messageText);
  }

  render() {
    const { plans, activePlanId } = this.props;
    return (
      <section className={styles['fp-plans']}>
        <ul className={styles['fp-plans__list']}>
          {plans ? plans.map((plan) => (
            <Plan
              key={plan.id}
              plan={plan}
              onClick={this.onClickHandler}
              className={plan.id === activePlanId ? 'active' : ''}
            />
          )) : null}
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    plans: state.plans.plans,
    activePlanId: state.plans.activePlanId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setId: (id) => dispatch(setActivePlanId(id)),
    getMsg: (msg) => dispatch(setActivePlanMsg(msg)),
  };
}

Plans.propTypes = {
  activePlanId: PropTypes.string.isRequired,
  plans: PropTypes.arrayOf(PropTypes.shape(planPropTypes)).isRequired,
  setId: PropTypes.func.isRequired,
  getMsg: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Plans);
