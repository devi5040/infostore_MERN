export const isEmpty = value => {
  console.log ('isEmpty::', value.trim () === '');
  return value.trim () === '';
};

export const isValidEmail = value => {
  const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log ('isValidEmail:::', emailRegex.test (value));
  return emailRegex.test (value);
};

export const isValidPassword = value => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@*!]{8,}$/;
  console.log ('isValidPassword::', passwordRegex.test (value));
  return passwordRegex.test (value);
};
