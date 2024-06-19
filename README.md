This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Active pages for the applications include,
- `/home`
- `/rsvp`
- `/story`
- `/resources`
- `/schedule`

Data is fetched from the Guests api at `{base_url}api/guests`
- `GET` - retrieves guestlist entries filtered by `last_name` query parameter.
- `POST` - updates guestlist entry response ('yes'/'no').

## Lint
To run the linter and resolve any fixable issues,
```bash
npm run lint:fix
```

## Testing
This project uses `jest` and `React Testing Library` for coverage.

```bash
npm run test
```

## Deployment

This project is deployed to Vercel. Details for the project can be found here - https://vercel.com/nicks-projects-5de592b8/wed-dev

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
