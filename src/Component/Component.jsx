import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebaseinit";


const Component = () => {
    const provider = new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

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
    return (
        <div>
            <h1>Login in please</h1>
            <button onClick={handleClick}>Google</button>
            <button onClick={GithubClick}>Github</button>
        </div>
    );
};

export default Component;