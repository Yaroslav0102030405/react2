import PropTypes from 'prop-types';

const User = ({ items }) => {
  return (
    <>
      <h1>Привіт Реакт</h1>

      <ul>
        {items.map(({ id, url, title }) => (
          <li key={id}>
            <img width="300" src={url} alt={title} />
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

User.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default User;
