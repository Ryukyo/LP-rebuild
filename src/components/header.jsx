export const Header = ({data}) => {
  
  return (
    <header id='header'>
      <div className='intro'>
        {/* <div id='intro-evil'>test</div> */}
          <div className='container'>
              <div className='col-md-7 col-md-offset-1 intro-text'>
                <h1>
                  {data.data.data.fields['page_title']}
                  <span></span>
                </h1>
                <a
                  href='/'
                  className='btn btn-custom-yellow btn-lg'
                >
                  SECURE MY DATA
                </a>
                <a
                  href='/'
                  className='btn btn-custom btn-lg'
                >
                  TAKE A CHANCE
                </a>
              </div>
          </div>
        </div>
        
    </header>
  )
}
