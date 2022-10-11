function Categories({ value, onChangeCategory }) {
  const categories = ['All', 'Meat', 'Veggie', 'Grilled', 'Spicy', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? 'active' : ''}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
