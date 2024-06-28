import Page from '@/components/Page';
import config from '../../config/config.json';

export default function RegistryPage() {
  const { title } = config.REGISTRY;
  const registryUrl = process.env.REGISTRY_URL || '/';
  console.log(registryUrl);
  return (
    <Page title={title}>
      Check out our registry on Zola!
      {/* TODO: update env with live link */}
      <a target="_blank" href={registryUrl} rel="noopener noreferrer">
        {' '}
        Click Here
      </a>
    </Page>
  );
}
