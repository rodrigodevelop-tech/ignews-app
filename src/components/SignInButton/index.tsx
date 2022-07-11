import { FaGithub } from 'react-icons/fa';
import  { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
  const { status, data }= useSession();

  return status === "authenticated" ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <img 
        src="https://avatars.githubusercontent.com/u/60670489?v=4"
        alt="Avatar" 
        className={styles.avatar}
      />
      {data.user?.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      SignIn in with Github
    </button>
  );
}