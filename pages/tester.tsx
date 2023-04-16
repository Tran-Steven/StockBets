import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

function LoginPage() {
  useEffect(() => {
    signIn(); // Show the sign-in form when the page loads
  }, []);

  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
}

export default LoginPage;


