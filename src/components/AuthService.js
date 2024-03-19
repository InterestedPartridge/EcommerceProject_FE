export const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if(token)
    return true;
    return false; // Return true if token exists
  };
  
export const getUserRole = () => {
    const role = localStorage.getItem('role');
    if (role) {
      
      return role; // Extract and return user's role
    }
    return null;
  };

export const getUserName=()=>{
  const name = localStorage.getItem('name');
  if( name){
    return name;
  }
  return null;
}