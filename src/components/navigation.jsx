export const Navigation = () => {
  const navBtnStyle = {
    textTransform: 'uppercase',
    color: '#ffffff',
    padding: '10px 20px',
    textAlign: 'center',
    letterSpacing: '0px',
    margin: '0.3em',
    marginRight: '1em',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '4px',
    background: 'transparent linear-gradient(90deg, #3ba9fb 0%, #148af1 100%) 0% 0%',
    boxShadow: '0px 2px 7px #00000033',
    border: '2px solid transparent'
  };

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#page-top'>
            <img src="/img/xplenty-logo-1200x325.jpg" alt="xplenty logo" width="100px" />
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-left'>
            <li>
              <a href='/'>
                Product
              </a>
            </li>
            <li>
              <a href='/' >
                Integrations
              </a>
            </li>
            <li>
              <a href='/'>
                Solutions
                <b className='caret'></b>
              </a>
            </li>
            <li>
              <a href='/' >
                Resources
                <b className='caret'></b>
              </a>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li >
              <a href='/'>
                English
                <b className='caret'></b>
              </a>
            </li>
            <li>
              <a href='/'>
                Sign In
              </a>
            </li>
            <li>
              <a href='/' className='btn btn-lg' style={navBtnStyle}>
                GET STARTED
              </a>
            </li>
          </ul>
        </div>
    </nav>
  )
}
