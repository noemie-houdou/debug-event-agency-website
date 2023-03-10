import PropTypes from 'prop-types';
import { getMonth } from '../../helpers/Date';

import './style.scss';

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? ' EventCard--small' : ''}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title" data-testid="card-title-testid">{title}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);

EventCard.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  small: PropTypes.bool,
};

EventCard.defaultProps = {
  imageAlt: 'image',
  imageSrc: '',
  title: '',
  label: '',
  small: false,
};

export default EventCard;
