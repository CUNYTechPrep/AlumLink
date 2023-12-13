// This service object was adapted from here:
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

const Auth = {
  isAuthenticated: false,
async authenticate(RE_email, password) {
    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ RE_email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Login Failed");
        }

        const body = await response.json();
        this.isAuthenticated = true;
        return body;
    } catch (error) {
        console.error(error);
        throw error;
    }
},
  signout(cb) {
    return fetch("http://localhost:8080/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logout Failed");
        }
        
        return response.json();
      })
      .then((body) => {
        this.isAuthenticated = false;
        return body;
      });
  },
};

export default Auth;
