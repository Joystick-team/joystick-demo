import React from 'react';
import postData from '../../../Store/postfile'
import Posts from '../../../component/Posts'

function MyPost(props) {
    return (
        <div>
            <div className="post-card-container">
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