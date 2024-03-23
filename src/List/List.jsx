import PropTypes from 'prop-types'
import styles from './List.module.css'

function List(props){

  const itemList = props.items;
  const category = props.category;

  itemList.sort((a, b) => a.name.localeCompare(b.name))

  const listItems = itemList.map(item => <li key={item.id}>{item.name} {item.calories}</li>);
  return(
  <div className={styles["list-container"]}>
    <h2 className={styles["category-title"]}>{category}</h2>
    <ul>{listItems}</ul>
  </div>
  );
}

List.defaultProps = {
  items: [],
  category: "Empty",
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number,
  })),
  category: PropTypes.string
}

export default List