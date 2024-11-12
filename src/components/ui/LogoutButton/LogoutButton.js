'use client';

const { signOut } = require('next-auth/react');

const LogoutButton = () => {
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Déconnexion</button>
    </div>
  );
};

export default LogoutButton;
