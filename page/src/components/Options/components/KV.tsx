import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import { KVObject } from '..';
import Item from './Item';

const KV: React.FC<{
  value: KVObject[];
  setValue: React.Dispatch<React.SetStateAction<KVObject[]>>;
  title: string;
  addTitle: string;
}> = ({ value, setValue, title, addTitle }) => {
  const addItem = useCallback(() => {
    setValue(
      value.concat({
        id: uuid(),
        key: '',
        value: '',
      })
    );
  }, [value, setValue]);

  const updateItem = useCallback(
    (changedItem: KVObject) => {
      const newValue = value.map(item => {
        if (item.id !== changedItem.id) {
          return item;
        } else {
          return changedItem;
        }
      });

      setValue(newValue);
    },
    [value, setValue]
  );

  const deleteItem = useCallback(
    (deletedItem: KVObject) => {
      const newValue = value.filter(item => item.id !== deletedItem.id);

      setValue(newValue);
    },
    [value, setValue]
  );

  return (
    <>
      {value.map(item => (
        <Item
          key={item.id}
          item={item}
          setItem={updateItem}
          deleteItem={deleteItem}
          title={title}
        />
      ))}
      <div>
        <button onClick={addItem}>{addTitle}</button>
      </div>
    </>
  );
};

export default KV;
