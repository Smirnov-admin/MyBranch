import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/Header/HeaderSection';
import FooterSection from './components/Footer/FooterSection';
// import FilterInSite from './components/FilterInSite/FilterInSite';
import SignInSection from './components/Authorization/SignIn/SignInSection';
import SuccessSection from './components/Authorization/Success/SuccessSection';
import ListPostCard from './components/Blogs/ListPostCard';
import { PostCard } from './utils/interfacePosts';
import MiddlePosts from './components/Blogs/MiddlePost/MiddlePosts';
import LargePost from './components/Blogs/LargePost/LargePosts';
import LittlePost from './components/Blogs/LittlePost/LittlePosts';
import ViewPost from './components/Blogs/ViewPost/ViewPost';

function App() {

  const [postInfo, setPostInfo] = useState<PostCard | null>({
    text: '',
    date: '',
    title: '',
    image: ''
  });

  const getPost = async () => {
    const response = await fetch('https://studapi.teachmeskills.by/blog/posts/320/');
    const postData: PostCard = await response.json();

    setPostInfo(postData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="App">
      <HeaderSection />
      <SignInSection />
      <SuccessSection />
      <h2>Posts</h2>
      {postInfo && < ListPostCard date={postInfo.date}
                                  title={postInfo.title}
                                  text={postInfo.text}
                                  image={postInfo.image}/>}

      <h2>ViewPost</h2>
      {postInfo && < ViewPost date={postInfo.date}
                              title={postInfo.title}
                              text={postInfo.text}
                              image={postInfo.image}/>}

      <FooterSection />
    </div>
  );
}

export default App;
