const List = ({ title, items }) => {
  return (
    <>
      {title && <p>{title}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
