import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/Header/HeaderSection';
import FooterSection from './components/Footer/FooterSection';
import SignInSection from './components/Authorization/SignIn/SignInSection';
import SuccessSection from './components/Authorization/Success/SuccessSection';
import ListPostCard from './components/Posts/ListPostCard';
import { PostCard } from './utils/interfacePosts';
import ViewPost from './components/Posts/ViewPost/ViewPost';

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
