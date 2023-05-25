import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) =>
  fetch(import.meta.env.VITE_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => response.json())
);

const relayEnvironment = new Environment({
  network,
  store,
});

export default relayEnvironment;
