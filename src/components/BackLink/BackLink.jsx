import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BackLink = ({ backLink }) => {
  return <Link to={backLink}>Go back</Link>;
};

// BackLink.propTypes = {
//   backLink: PropTypes.object,
// };
