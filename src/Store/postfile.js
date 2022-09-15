import { BiDislike, BiLike } from 'react-icons/bi'
import { IoChatboxOutline } from 'react-icons/io5'
import { RiShareForward2Fill } from 'react-icons/ri'
import campaign from '../assets/images/campaign.png'
import nightwar from '../assets/images/nightwar.png'

const postData = [
    {
        id: 1,
        images: campaign,
        name: 'Campaign',
        content: 'Join the epic battle this weekend',
        likeicon: <BiLike />,
        likescount: 4,
        dislikeicon: <BiDislike />,
        dislikecount: 1,
        messageicon:<IoChatboxOutline />,
        shareicon: <RiShareForward2Fill />,
    },
    {
        id: 2,
        images: nightwar,
        name: 'Night Wars',
        content: 'Challenge me in this fight and win NFTs',
        likeicon: <BiLike /> ,
        likescount:  10,
        dislikeicon: <BiDislike />,
        dislikescount: 2,
        messageicon:<IoChatboxOutline />,
        shareicon: <RiShareForward2Fill />
    }
]
export default postData;