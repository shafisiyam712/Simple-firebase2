import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import auth from "../Firebase/Firebaseinit";


const Component = () => {
    const provider = new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();
    const twitterProvider=new TwitterAuthProvider();
    const handleClick=()=>{
        signInWithPopup(auth,provider)
        .then((result) => {
            console.log(result);
           
          }).catch((error) => {
            console.log('Error',error);
            
          });
    }
 
    const GithubClick=()=>{
        signInWithPopup(auth,githubProvider)
        .then((result) => {
            console.log(result);
           
          }).catch((error) => {
            console.log('Error',error);
            
          });
    }

    const TwitterClick=()=>{
        signInWithPopup(auth,twitterProvider)
        .then((result) => {
            console.log(result);
           
          }).catch((error) => {
            console.log('Error',error);
            
          });
    }
    return (
        <div>
            <h1>Login in please</h1>
            <button onClick={handleClick}>Google</button>
            <button onClick={GithubClick}>Github</button>
            <button  onClick={TwitterClick}>Twitter</button>
        </div>
    );
};

export default Component;