import PropTypes from "prop-types";
import s from '../Feedback/Feedback.module.css'

const Feedback = ({feedback, total, positivePercentage}) => {
    return (
        <div className={s.feedbackContainer}>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positivePercentage}%</p>
        </div>
    );
};

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;