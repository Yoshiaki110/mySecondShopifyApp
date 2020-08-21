/*
Next.jsは、Appコンポーネントを使用して、クラスをアプリ内の他のファイルに渡します。
これにより、各ファイルにインポートを追加する必要がなくなります。
_app.jsファイルを設定して、Polarisのコンポーネント、スタイル、
およびインデックスファイルで一般的に見られるその他すべてを渡します。
*/
import App from 'next/app';
import Head from 'next/head';
// Polarisアプリプロバイダーコンポーネント
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
// Polarisスタイルのインポート
import '@shopify/polaris/dist/styles.css';
// 翻訳プロップを追加する
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations}>
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;