import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <!-- タイトルとボタン -->
        <TitleBar
          title="サンプル App"
          primaryAction={{
            content: '商品の選択',
            onAction: () => this.setState({ open: true }),
          }}
        />

        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />

        <Layout>
          <EmptyState
            heading="一時的に商品を割引"
            action={{
              content: '商品を選択',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>価格を一時的に変更する製品を選択してください。</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }

  // ResourcePickerでOK押されたら
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    console.log('idsFromResources', idsFromResources)
  };
}

export default Index;
