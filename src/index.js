import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Notification from './pages/Notification';
import Trending from './pages/Trending';
import UserProfile from './pages/UserProfile';
import ViewPost from './pages/ViewPost';
import ViewProfile from './pages/ProfileView';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
// import Sidebar from './components/Sidebar';

import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Info from './pages/Info';

ReactDOM.render(

  <BrowserRouter>
    <AuthProvider>
      {/* <div className="nav sticky top-0 z-50">
      <Navbar />  
    </div> */}

      <Routes>
        <Route element={<PrivateRoute />} path="/" exact>
          <Route path="/" element={<App />} />
          <Route path="/trending" element={<Trending />}/>
          <Route path="/viewpost" element={<ViewPost />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/info" element={<Info />} />
          <Route path="/viewprofile/:id" element={<ViewProfile />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
