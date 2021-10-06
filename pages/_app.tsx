import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from 'components/layout';
import { SnackbarProvider } from 'notistack';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    new HttpLink({
      uri: 'http://localhost:3000/api/graphql',
    }),
  ]),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SnackbarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </ApolloProvider>
  );
}
export default MyApp;
