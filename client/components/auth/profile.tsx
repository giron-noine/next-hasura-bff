import { useAuth0 } from "@auth0/auth0-react";

//test User
//tokiana.work+test@gmail.com
//pass: m9SZ5X82w9

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(isAuthenticated);
  console.log("user", user);
  return isAuthenticated ? (
    <div>
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  ) : (
    <div>
      <p>Not user</p>
    </div>
  );
};

export default Profile;
