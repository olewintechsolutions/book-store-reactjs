import React from 'react';

function CopyPage() {
  return (
    <div className='text-center m-4'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p className='text-center  fw-bold '>
            Designed & Developed by
            <p style={{
                color: '#008899',
                textAlign: 'center',
                fontWeight: 'bold',
                textDecoration: 'underline',
                fontSize: '24px',
            }}>OlewinTechSolutions</p>
            <p style={{
                color: '#008899',
                textAlign: 'center',
                fontWeight: 'bold',
                textDecoration: 'underline',
            }}>Bangalore - India</p>
           
        </p>
    ©2024 Copyright: <span>Visit:-</span>
    <a className='text-reset fw-bold' href='https://olewintechsolutions.com/'>
      OlewintechSolutions.com
    </a>

  </div>
  )
}

export default CopyPage;