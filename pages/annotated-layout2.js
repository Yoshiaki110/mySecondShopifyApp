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
    const contentStatus = enabled ? '������' : '�L����';
    const textStatus = enabled ? '�L��' : '����';

    return (
      <Page>
        <Layout>

          <Layout.AnnotatedSection
            title="�f�t�H���g�̊���"
            description="�T���v���A�v���ɏ��i��ǉ�����Ǝ����I�Ɋ�������܂��B"
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="������"
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
            title="���i�̍X�V"
            description="���ׂẴT���v���A�v���̉��i�X�V���ꎞ�I�ɖ����ɂ���"
          >
            <SettingToggle
              action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}
              enabled={enabled}
            >
              ���ݐݒ��{' '}
              <TextStyle variation="strong">{textStatus}</TextStyle>
              �ɂȂ��Ă��܂��B
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