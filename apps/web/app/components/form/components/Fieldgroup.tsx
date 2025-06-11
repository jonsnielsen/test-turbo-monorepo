import React from 'react';

// eslint-disable-next-line
const Fieldgroup = ({ children }: { children: any }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '20px', gap: '20px' }}>
      {children}
    </div>
  );
};

export default Fieldgroup;
