
export function logoutUser() {
  localStorage.clear();
}


export function isAuthenticated() {
    if (
        localStorage.getItem('user') === null 
      ) {
        return false;
      }
      const user = localStorage.getItem('user');
      return JSON.parse(user);
}

export function storeUser(data) { 
    for (const [key, value] of Object.entries(data)) {
        localStorage.setItem(key, value);
      }
      localStorage.setItem('user', JSON.stringify(data));

}
