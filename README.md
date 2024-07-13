This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Active pages for the applications include,
- `/`
- `/rsvp`
- `/story`
- `/resources`
- `/schedule`
- `/registry`
- `/contact`

Data is fetched from the Guests api at `{base_url}api/guests`
- `GET` - retrieves guestlist entries filtered by `full_name` query parameter.
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
### Preview Deployment Steps:
To deploy to the `Preview` environment,
- Merge your feature branch to `main`.
### Production Deployment Steps:
To deploy to the `Production` environment,
- Merge the current `main` branch to `prod`.
- Tag latest version (`v0.0.0`).
- Create release notes with full diff.


## Environments

- Production: [nickandkitty.com](http://nickandkitty.com)
- Preview: https://wed-dev.vercel.app
- Local: http://localhost:3000