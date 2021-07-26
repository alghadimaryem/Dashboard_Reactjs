import React, { Fragment } from 'react';
import Progress from './Progress';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
const Uploader = () => {
  return (
    
    <Fragment>
  <div
    style={{
        position: 'absolute', left: '50%', top: '17%',
        transform: 'translate(-25%, -25%)'
    }}
    >
      <form>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
          />
          <label className='custom-file-label' htmlFor='customFile'>
            filename
          </label>
        </div>
       <Progress/>
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <img style={{ width: '100%' }} alt='' />
          </div>
        </div>
        </div>
    </Fragment>
  );
};

export default Uploader;
