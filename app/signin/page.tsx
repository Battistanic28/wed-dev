export default async function SignIn() {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
