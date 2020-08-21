import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from '@shopify/polaris';

class AnnotatedLayout2 extends React.Component {
  state = {
    discount: '10%',
    enabled: false,
  };

  render() {
    const { discount, enabled } = this.state;
    const contentStatus = enabled ? '無効化' : '有効化';
    const textStatus = enabled ? '有効' : '無効';

    return (
      <Page>
        <Layout>

          <Layout.AnnotatedSection
            title="デフォルトの割引"
            description="サンプルアプリに商品を追加すると自動的に割引されます。"
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="割引率"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="割引率"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>


          <Layout.AnnotatedSection
            title="価格の更新"
            description="すべてのサンプルアプリの価格更新を一時的に無効にする"
          >
            <SettingToggle
              action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}
              enabled={enabled}
            >
              現在設定は{' '}
              <TextStyle variation="strong">{textStatus}</TextStyle>
              になっています。
            </SettingToggle>

            <SettingToggle
              action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}
              enabled={enabled}
            >
              現在設定は{' '}
              <TextStyle variation="strong">{textStatus}</TextStyle>
              になっています。
            </SettingToggle>
          </Layout.AnnotatedSection>

        </Layout>
      </Page>
    );
  }

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log('submission', this.state);
  };

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

  handleToggle = () => {
    this.setState(({ enabled }) => {
      return { enabled: !enabled };
    });
  };
}

export default AnnotatedLayout2;