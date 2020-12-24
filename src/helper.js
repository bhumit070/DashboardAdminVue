export const isSignedIn = () => {
  if (typeof window == false) {
    return false;
  } else if (!localStorage.getItem(`token`)) {
    return false;
  } else {
    return JSON.parse(localStorage.getItem(`token`));
  }
};
