import PropTypes from 'prop-types'
import { FaRegBell } from 'react-icons/fa';
import {Link} from 'react-router-dom';


function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100 " style={{backgroundColor: 'rgb(67, 67, 75)'}}>
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/users/${login}`}
            style={{color: 'gray'}}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}


UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem  