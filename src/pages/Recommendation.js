import React,  { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CardPage from './CardPage';

function DataPage() {

  return (
    <div>
      <h1>Recommendations</h1>
      <div className='d-flex justify-content-center'>
        <button onClick={() =>
            {window.location.href = '/';}}>Back Home
        </button>
      </div>
    </div>
  );
}

export default DataPage;