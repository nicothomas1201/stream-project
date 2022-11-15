function Link({color, size}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.9241 2.61722C21.876 2.50081 21.8049 2.39166 21.7109 2.29666C21.7082 2.294 21.7056 2.29135 21.7029 2.28871C21.6083 2.19519 21.4996 2.12438 21.3838 2.0763M21.0528 2.00137C21.0361 2.0005 21.0193 2.00004 21.0024 2C21.0016 2 21.0008 2 21 2H20.9998H15C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4H20V9C20 9.55228 20.4477 10 21 10C21.5523 10 22 9.55228 22 9V3C22 2.86441 21.973 2.73512 21.9241 2.61722M21.0528 2.00137C21.1684 2.00739 21.2789 2.03305 21.3809 2.07509L21.0528 2.00137ZM5 7C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H16C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8946 19.5196 17 19.2652 17 19V13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13V19C19 19.7957 18.6839 20.5587 18.1213 21.1213C17.5587 21.6839 16.7957 22 16 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H5Z" fill={color}/>
      <path d="M10 14L21 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  
    
  )
}

export default Link