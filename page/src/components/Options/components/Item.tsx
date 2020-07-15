import React, { useCallback } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from '../styles.module.scss';

import { KVObject } from '..';
import Input from './Input';

const Item: React.FC<{
  item: KVObject;
  setItem: (item: KVObject) => void;
  deleteItem: (item: KVObject) => void;
  title: string;
}> = ({ item, setItem, deleteItem, title }) => {
  const setName = useCallback(
    (name: string) => {
      item.key = name;
      setItem(item);
    },
    [item, setItem]
  );

  const setValue = useCallback(
    (value: string) => {
      item.value = value;
      setItem(item);
    },
    [item, setItem]
  );

  const onDelete = useCallback(() => {
    deleteItem(item);
  }, [item, deleteItem]);

  return (
    <div>
      <span>{title}</span>
      <Input value={item.key} setValue={setName} placeholder="Name" />
      <Input value={item.value} setValue={setValue} placeholder="Value" />
      <button className={styles.delete} onClick={onDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Item;
