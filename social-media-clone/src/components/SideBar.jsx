const SideBar = ({setSelectedTab, selectedTab}) => {
    return <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: '280px', height: '550px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() => {setSelectedTab('Home')}}>
        <a href="#" className={` ${selectedTab === 'Home' ? 'nav-link active' : 'nav-link' } `} >
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Home
        </a>
      </li>
      
      <li className="nav-item" onClick={() => {setSelectedTab('CreatePost')}}>
        <a href="#" className={` ${selectedTab === 'CreatePost' ? 'nav-link active' : 'nav-link' } `} >
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Create Post
        </a>
      </li>
      
      
    </ul>
    <hr/>
    
  </div>
}

export default SideBar;