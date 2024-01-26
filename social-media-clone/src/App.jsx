import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainContainer from './components/MainContainer'
import Post from './components/Post'
import PostForm from './components/PostForm'
import { useState } from 'react'
import ContextProvider from './store/PostStore'


function App() {

  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <>
    <ContextProvider>
    <MainContainer>
      <div className="col-3">
        <SideBar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} />
      </div>

      <div className="col">
        <Header/>
        
        {selectedTab === 'Home' && <Post></Post>}
        {selectedTab === 'CreatePost' && <PostForm></PostForm>}
        
      </div>

    </MainContainer>
    </ContextProvider>
    

  {/* sidebar */}
    </>
  )
}

export default App
