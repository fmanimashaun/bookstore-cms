import Styles from 'assets/scss/progress.module.scss';

const ProgressDetails = () => (
  <>
    <div className={Styles.progress__details}>
      <h3 className={Styles.progress__heading}>CURRENT CHAPTER</h3>
      <p className={Styles.progress__chapter}>Chapter 17</p>
    </div>
    <button type="button" className={Styles.progress__btn}>
      UPDATE PROGRESS
    </button>
  </>
);

export default ProgressDetails;
