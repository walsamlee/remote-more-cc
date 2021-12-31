import react from "react";
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const RepoList = (props) => {
  const userName = window.location.href.split('=')[1] ? window.location.href.split('=')[1] : 'walsamlee';

  const location = useLocation();

  const repo = location.state;

  console.log(repo);

  const navigate = useNavigate();

  const navigateHandler = async ({ id, navigate }) => {

    navigate(`/details?id=${id}`, { state: repo });
  }

  const repoList = repo.map(
    item => {
      const id = item.name;

      return (
        <div className="Project-list" key={item.id}>
          <div className="Project-item">
            <a onClick={() => (navigateHandler({id, navigate}))}>
              {item.name}
            </a>
            {/* <Link to={`/details?id=${id}`} >
              {item.name}
            </Link> */}
            <div className="Project-badge">
              <p>{item.private ? 'Private' : 'Public'}</p>
            </div>
          </div>
          <div className="Project-rider">
            <p>{item.language}</p>
          </div>
        </div>)
    }
  );

  return (
    <div className="Project">
      <Container>
        <Row>
          <Col>
            <div className="Project-nav">
              <Link to={'/'}>Home</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Project-title">
              <h4>{repo[0]['owner']['login']}'s Projects</h4>
            </div>
            <div>
              {repoList}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RepoList;
