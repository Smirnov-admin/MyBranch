import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/Header/HeaderSection';
import FooterSection from './components/Footer/FooterSection';
// import FilterInSite from './components/FilterInSite/FilterInSite';
import SignInSection from './components/Authorization/SignIn/SignInSection';
import SuccessSection from './components/Authorization/Success/SuccessSection';
import ListPostCard from './components/Blogs/ListPostCard';
import { PostCard } from './components/Blogs/interfacePosts';

function App() {

  const [postInfo, setPostInfo] = useState<PostCard>({
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
      <h2>Blogs</h2>
      <ListPostCard date={postInfo.date}
                    title={postInfo.title}
                    text={postInfo.text}
                    image={postInfo.image} />
      <FooterSection />
    </div>
  );
}

export default App;
