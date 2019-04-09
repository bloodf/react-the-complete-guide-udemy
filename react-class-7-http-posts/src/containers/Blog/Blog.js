import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: response } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    this.setState({ posts: response });
  }
  render() {
    return (
      <div>
        <section className='Posts'>
          {this.state.posts.length
            ? this.state.posts.map((post, index) => (
                <Post title={post.title} author={post.author} key={post.id} />
              ))
            : null}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
