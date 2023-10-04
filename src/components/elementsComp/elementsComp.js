export const ElementsComp = ({listItems}) => {
    const handleClick = (item) => {
        console.log(item); 
      };
    return (
      <>
        {listItems.map((item, index) => <li onClick={() => handleClick(item)} key={`listElement-${index}`} >{item}</li>)}
      </>
    );
  }

