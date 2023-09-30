import PropTypes from 'prop-types';
import Styles from 'assets/scss/progress.module.scss';

const ProgressBar = ({ progressPercentage }) => {
  const progressStyle = () => {
    const progressDeg = (progressPercentage / 100) * 360;
    return {
      background: `conic-gradient(#307bbe, #379cf6 ${progressDeg}deg, #e8e8e8 0deg)`,
    };
  };
  return (
    <>
      <div className={Styles.progress__chart} style={progressStyle()} />
      <div className={Styles.progress__percentage}>
        <h3 className={Styles.progress__fig}>{`${progressPercentage}%`}</h3>
        <p className={Styles.progress__text}>Completed</p>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  progressPercentage: PropTypes.number.isRequired,
};

export default ProgressBar;
