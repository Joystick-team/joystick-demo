import React from 'react';
import postData from '../../../Store/postfile'
import Posts from '../../../component/Posts'
import MakePost from './Feeds/MakePost';

function MyPost(props) {
    return (
        <div>
            <MakePost/>
            <div className="post-card-container mt-3">
              {
                postData.map((data, idx) => {
                  return <Posts 
                        key={data.id}
                        img={data.images}
                        likeicon = {data.likeicon}
                        dislikeicon={data.dislikeicon}
                        messageicon={data.messageicon}
                        shareicon={data.shareicon}
                        likescount={data.likescount}
                        dislikescount={data.dislikescount}
                        name={data.name}
                        content={data.content}
                        />
                })
              }
              </div>
        </div>
    );
}

export default MyPost;