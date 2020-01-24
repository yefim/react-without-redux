import React, { useState } from 'react';

import Popup from './shared/Popup';

const AddToCart = (props) => {
  const [isQuantityPickerShown, setQuantityPickerShown] = useState(false);

  if (isQuantityPickerShown) {
    return (
      <Popup
        onClick={(quantity) => {
          setQuantityPickerShown(false);
          props.onSubmit(quantity);
        }}
      />
    );
  }

  return (
    <button onClick={() => setQuantityPickerShown(true)}>Purchase</button>
  );
};

export default AddToCart;
