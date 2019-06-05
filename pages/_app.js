import App, { Container } from 'next/app';
import { withRouter } from 'next/router'
import * as Language from '../defaults/Language';
import { DEFAULT_LANGUAGE } from '../defaults/Languages';

class MyApp extends App {
  render() {
    const { router, Component, pageProps } = this.props;
    return (
      <Container>
        <Language.Provider locale={router.query.lang || DEFAULT_LANGUAGE}>
          <Language.Consumer>
            {({ locale }) => (
              <Component {...pageProps} />
            )}
          </Language.Consumer>
        </Language.Provider>
      </Container>
    );
  }
}

export default withRouter(MyApp);