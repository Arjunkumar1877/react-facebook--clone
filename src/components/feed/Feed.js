import './feed.css'
import Share from '../share/share'
import Post from '../post/Post'
import { posts } from '../../dummyData'

export default function Feed() {
  return (
    <div className='feed'>
     <div className="feedWrapper">
      <Share />
      {posts.map((p)=>(
        <Post key={p.id} post={p}/>
      ))}
      
     
     </div>
      </div>
  )
}
