import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import Select from './components/Select';
import Input from './components/Input';
import KV from './components/KV';

export interface KVObject {
  id: string;
  key: string;
  value: string;
}

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
const methodsWithFormData = ['POST', 'PUT', 'PATCH', 'DELETE'];

const Options: React.FC = () => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState<KVObject[]>([]);
  const [formData, setFormData] = useState<KVObject[]>([]);

  return (
    <div className={styles.options}>
      <div>
        <Select value={method} setValue={setMethod} options={methods} />
        <Input value={url} setValue={setUrl} placeholder="URL" />
      </div>
      <KV
        value={headers}
        setValue={setHeaders}
        title="Header"
        addTitle="Add a new header"
      />
      {methodsWithFormData.includes(method) ? (
        <KV
          value={formData}
          setValue={setFormData}
          title="Form"
          addTitle="Add a new form row"
        />
      ) : null}
    </div>
  );
};

export default Options;
