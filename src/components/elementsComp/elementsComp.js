import React, { useState, useEffect } from 'react';

export function ElementsComp() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const handleItemClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
      document.title = 'Zadanie';
    } else {
      setSelectedItem(item);
      document.title = item.title;
    }
  };

  return (
    <div>
      <ul>
        {data.map(item => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{
              backgroundColor: selectedItem === item ? 'green' : 'transparent'
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
