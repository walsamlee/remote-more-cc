import react from "react";
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserFriends,
  faListUl,
  faDesktop,
  faClone,
  faTrashAlt,
  faPencilAlt,
  faFile,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'

const Details = () => {
  const title = window.location.href.split('=')[1];
  const username = 'JaneDoe';

  const location = useLocation();

  const repo = location.state;

  const id = repo[0]['name'];

  const navigate = useNavigate();

  const navigateHandler = async ({ id, navigate }) => {
    navigate(`/projects?id=${id}`, { state: repo });
  }

  const getDetails = arr => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

      if (element['name'] === title) {
        return element;
      }
    }
    return {};
  }

  const repoData = getDetails(repo);

  console.log(repoData);

  return (
    <div className="Details-body">
      <div className="Details-title">
        <p><a onClick={() => (navigateHandler({ id, navigate }))}>{repoData['name']}</a> / <strong>README.md</strong></p>
      </div>

      <div className="Details-header">
        <div className="Details-header-top">
          <div className="Details-avatar"></div>
          <p><strong>{repoData['owner']['login']}</strong></p>
          &nbsp;
          <p>update</p>
          &nbsp;
          <p>README.md</p>
        </div>
        <div className="Details-bottom">
          <div className="Details-i">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <p>1 contributor</p>
        </div>
      </div>

      <div className="Details-readme-top">
        <div className="Details-readme-left">
          <div className="Details-i">
            <FontAwesomeIcon icon={faListUl} />
          </div>
          &nbsp;
          <p>1 line (3 sloc)</p>
          &nbsp;
          <p>|</p>
          &nbsp;
          <p>14 Bytes</p>
        </div>
        <div className="Details-readme-right">
          <div className="Details-readme-arrow">
            <div className="Details-readme-arr-left-2">
              <div className="Details-i">
                <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" />
              </div>
            </div>
            <div className="Details-readme-arr-right-2">
              <div className="Details-i-2">
                <FontAwesomeIcon icon={faFile} size="sm" />
              </div>
            </div>
          </div>
          <div className="Details-readme-arrow">
            <div className="Details-readme-arr-left">
              <p>Raw</p>
            </div>
            <div className="Details-readme-arr-right">
              <p>Blame</p>
            </div>
          </div>
          <div className="Details-i">
            <FontAwesomeIcon icon={faDesktop} />
          </div>
          <div className="Details-i">
            <FontAwesomeIcon icon={faClone} />
          </div>
          <div className="Details-i">
            <FontAwesomeIcon icon={faPencilAlt} />
          </div>
          <div className="Details-i">
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
      </div>
      <div className="Details-readme-bottom">
        <div className="Details-readme-title">
          <h2>{repoData['name']}</h2>
        </div>

        <p>Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut!
        </p>
        <p>
          Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
          Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        </p>
      </div>
    </div>
  )
}

export default Details;
