export const emailValidation = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex?.test(email?.toLowerCase());
};

export const passwordValidation = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex?.test(password);
};
