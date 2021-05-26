
import './App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [final, setFinal] = useState(data)
  const [click, setclick] = useState()
  const responseGoogle = (response) => {
    console.log(response);
    setData(response)
    setclick("true")
  }
  const responseFacebook = (response) => {
    console.log(response);
    setData(response)
    setclick("false")
    debugger
  }
  console.log(data, 'data');
  // console.log(click, 'data');

  useEffect(() => {
    if (data) {
      setFinal(data)
    }
  }, [data])
  return (
  
    <>
      <div className="form">
        <h1>Choose one Option</h1>
        <GoogleLogin
          className="GButton"
          clientId="585809215339-29vgkd2avvcu8qnnkheoubforhpmil6a.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        // cookiePolicy={'single_host_origin'}
        />
        <br></br>
        <FacebookLogin
          className="FButton"
          appId="308734604124922"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Login with facebook</button>
          )}
        // cssClass="my-facebook-button-class"
        icon="fa-facebook"
        />
        <div className="asdf">
          {click === "true" ? <table className="showData">
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Google I'D</th>
              <th>Image</th>
            </thead>
            <tbody>
              <tr>
                <td>{final.profileObj.name}</td>
                <td>{final.profileObj.email}</td>
                <td>{final.profileObj.googleId}</td>
                <td><img className="image" src={final.profileObj.imageUrl} /></td>
              </tr>
            </tbody>
          </table> : ""
          }
          {
            click === "false" ? <table className="showData">
              <thead>
                <th>Name</th>
                <th>Email</th>
                <th>I'D</th>
                <th>Image</th>
              </thead>
              <tbody>
                <tr>
                  <td>{final.name}</td>
                  <td>{final.email}</td>
                  <td>{final.id}</td>
                  <td><img className="image" src={final.picture.data.url} /></td>
                </tr>

              </tbody>
            </table>
              : ""}
        </div>
      </div>
    </>

  );
}

export default App;
