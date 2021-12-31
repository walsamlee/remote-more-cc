import react, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";

const Home = () => {
  const [username, setUsername] = useState('');
  const [notFound, setNotFound] = useState(false);

  const showError = () => {
    return (
      <div className="Home-form-error">
        <small>User not found!</small>
      </div>
    )
  }

  const submitHandler = async ({username, navigate}) => {
    const data = await fetchRepo(username);

    if (data !== 'error') navigate(`projects?id=${username}`, { state: data });
    else setNotFound(true);
  }
  
  const fetchRepo = async (username) => {
    const apiUrl = `https://api.github.com/users/${username}/repos`
    
    const response = await fetch(apiUrl);
  
    const data = await response.json();

    const { message } = data;
  
    return message ? 'error' : data;
  }

  const navigate = useNavigate();
  
  return (
    <div className="Home-form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>GitHub Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={
              e => {
                setUsername(e.target.value);
                
                // username === '' ? setEmpty(false) : setEmpty(true);
              }
            }
          />
        </Form.Group>
        <Button
          disabled={username === '' ? true : false}
          className="Home-submit"
          onClick={() => (submitHandler({username, navigate}))}
        >
          Submit
        </Button>
      </Form>
      {notFound && showError()}
    </div>
  )
}

export default Home;
