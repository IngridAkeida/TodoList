const fetchBD = 'http://localhost:3000/api/v1/user/';

export const getUserInforLogin = async (email,password) => {
  try {
      return await fetch(fetchBD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
};

export const getSignUpUser = async (user_name, first_name, sur_name, email, age, birth, password, conf_password) => {
  try {
      return await fetch(fetchBD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_name, first_name, sur_name, email, age, birth, password, conf_password })
      });
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
};

