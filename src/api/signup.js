async function signup({
  first_name,
  last_name,
  password,
  passwordConfirmation,
  email,
}) {
  const loginURL = process.env.REACT_APP_SERVER_URL + "/users/signup";
  const resp = await fetch(loginURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name,
      last_name,
      password,
      passwordConfirmation,
      email,
    }),
  });

  if (resp.status === 400) {
    const data = await resp.json();
    throw data;
  }
}

export default signup;
