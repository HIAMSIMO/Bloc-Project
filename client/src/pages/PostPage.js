import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';
import axios from 'axios';
import toast from 'axios';


export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  useEffect(() => {
    fetch(`https://blog-project-stage.onrender.com/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);


<<<<<<< HEAD
=======
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://blog-project-stage.onrender.com/post/${id}`);
      toast.success('POST deleted');
      setPostInfo(postInfo.filter((post) => post._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

>>>>>>> 20ac108a3b80e5b6ad7f345992573b472c5082aa
  if (!postInfo) return '';

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit this post
          </Link>
<<<<<<< HEAD
          <Link to={`/post/${postInfo._id}`} className="delete-btn" >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"style="fill:#FFFFFF;">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
              <g transform="scale(3.55556,3.55556)">
                <path d="M32,13c-1.105,0 -2,0.895 -2,2v1h-13c-2.209,0 -4,1.791 -4,4c0,1.97365 1.43236,3.60263 3.3125,3.92969l2.39453,28.73437c0.346,4.147 3.81361,7.33594 7.97461,7.33594h18.63672c4.161,0 7.62761,-3.18894 7.97461,-7.33594l2.39453,-28.73437c1.88014,-0.32705 3.3125,-1.95604 3.3125,-3.92969c0,-2.209 -1.791,-4 -4,-4h-13v-1c0,-1.105 -0.895,-2 -2,-2zM24.34766,24h23.30469l-2.25586,27.08203c-0.044,0.518 -0.47805,0.91797 -0.99805,0.91797h-16.79688c-0.52,0 -0.95409,-0.39997 -0.99609,-0.91797z">
                </path>
              </g>
            </g>
=======
          <Link to={`/post/${postInfo._id}`} className="delete-btn" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 72 72" style="fill:#FFFFFF;">
            <path d="M 32 13 C 30.895 13 30 13.895 30 15 L 30 16 L 17 16 C 14.791 16 13 17.791 13 20 C 13 21.973645 14.432361 23.602634 16.3125 23.929688 L 18.707031 52.664062 C 19.053031 56.811062 22.520641 60 26.681641 60 L 45.318359 60 C 49.479359 60 52.945969 56.811062 53.292969 52.664062 L 55.6875 23.929688 C 57.567639 23.602634 59 21.973645 59 20 C 59 17.791 57.209 16 55 16 L 42 16 L 42 15 C 42 13.895 41.105 13 40 13 L 32 13 z M 24.347656 24 L 47.652344 24 L 45.396484 51.082031 C 45.352484 51.600031 44.918438 52 44.398438 52 L 27.601562 52 C 27.081562 52 26.647469 51.600031 26.605469 51.082031 L 24.347656 24 z"></path>
>>>>>>> 20ac108a3b80e5b6ad7f345992573b472c5082aa
          </svg>
            Delete this post
          </Link>
        </div>
      )}
      <div className="image">
        <img src={`https://blog-project-stage.onrender.com/${postInfo.cover}`} alt=""/>
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  );
}