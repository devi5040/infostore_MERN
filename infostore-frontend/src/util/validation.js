export const isEmpty = value => {
  return value.trim () === '';
};

export const isValidEmail = value => {
  const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test (value);
};

export const isValidPassword = value => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@*!]{8,}$/;
  return passwordRegex.test (value.trim ());
};

export const isValidName = value => {
  const nameRegex = /^[A-Za-z ]{3,}$/;
  return nameRegex.test (value);
};

export const isValidMobileNumber = value => {
  const mobileRegex = /^[6789]\d{9}$/;
  return mobileRegex.test (value);
};

export const isValidHeightWeight = value => {
  const heightWeightRegex = /^\d{1,3}$/;
  return heightWeightRegex.test (value);
};

export const isValidAge = value => {
  const ageRedux = /^\d{1,3}$/;
  return ageRedux.test (value);
};

export const passwordMatches = (password, confirmPassword) => {
  return password === confirmPassword;
};
