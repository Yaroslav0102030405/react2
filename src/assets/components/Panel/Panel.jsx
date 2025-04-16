import PropTypes from 'prop-types';

const Panel = ({ title, children }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {children}
    </>
  );
};

Panel.defaultProps = { title: '', children: [] };

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
