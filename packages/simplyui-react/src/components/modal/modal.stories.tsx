import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { CloseButton } from '@/components/close-button';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { Modal } from '.';

const meta: Meta<typeof Modal> = {
  title: 'Overlays/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const size = '2';

    return (
      <Modal>
        <Modal.Trigger asChild>
          <Button size={size}>
            <Button.Content>Open</Button.Content>
          </Button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content size={size}>
            <Modal.Header>
              <Modal.Title>Edit profile</Modal.Title>
              <Modal.Description>Make changes to your profile.</Modal.Description>
              <Modal.CloseButton asChild>
                <CloseButton size={size} />
              </Modal.CloseButton>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label size={size} htmlFor="name">
                  Name
                </Label>
                <Input size={size} id="name" defaultValue="Freja Johnsen" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label size={size} htmlFor="email">
                  Email
                </Label>
                <Input size={size} id="email" type="email" defaultValue="freja@example.com" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button size={size} variant="light" color="danger">
                  <Button.Content>Cancel</Button.Content>
                </Button>
              </Modal.Close>
              <Modal.Close asChild>
                <Button size={size}>
                  <Button.Content>Save</Button.Content>
                </Button>
              </Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    );
  },
};

export const WithContentFullScreen: Story = {
  render: () => {
    const size = '2';

    return (
      <Modal>
        <Modal.Trigger asChild>
          <Button size={size}>
            <Button.Content>Open</Button.Content>
          </Button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content fullScreen size={size}>
            <Modal.Header>
              <Modal.Title>Edit profile</Modal.Title>
              <Modal.Description>Make changes to your profile.</Modal.Description>
              <Modal.CloseButton asChild>
                <CloseButton size={size} />
              </Modal.CloseButton>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label size={size} htmlFor="name">
                  Name
                </Label>
                <Input size={size} id="name" defaultValue="Freja Johnsen" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label size={size} htmlFor="email">
                  Email
                </Label>
                <Input size={size} id="email" type="email" defaultValue="freja@example.com" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button size={size} variant="light" color="danger">
                  <Button.Content>Cancel</Button.Content>
                </Button>
              </Modal.Close>
              <Modal.Close asChild>
                <Button size={size}>
                  <Button.Content>Save</Button.Content>
                </Button>
              </Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    );
  },
};

export const WithLargeContent: Story = {
  render: () => {
    const size = '2';

    return (
      <Modal>
        <Modal.Trigger asChild>
          <Button size={size}>
            <Button.Content>Open</Button.Content>
          </Button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content size={size}>
            <Modal.Header>
              <Modal.Title>Edit profile</Modal.Title>
              <Modal.Description>Make changes to your profile.</Modal.Description>
              <Modal.CloseButton asChild>
                <CloseButton size={size} />
              </Modal.CloseButton>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quaerat. A beatae vero obcaecati amet
                nostrum, asperiores eveniet! Suscipit atque dicta recusandae, vero possimus alias! Libero quae, nemo
                saepe veniam odio doloribus rerum dolor at iste molestias eos, deserunt autem inventore in perferendis!
                Libero eum laudantium corrupti cumque reprehenderit nobis dolorem rerum totam placeat ratione aliquam
                aperiam dolor est voluptate ullam, minima quis tenetur in iusto pariatur laboriosam, impedit quia.
                Expedita qui perspiciatis repellat reiciendis quidem fugit natus harum, culpa dolorem sapiente fuga
                exercitationem. Adipisci praesentium quaerat, tempore velit beatae aliquid quod, maiores, quasi
                assumenda iste placeat sit in? Deleniti iure architecto labore dolorum magnam harum inventore aspernatur
                dolores dolor commodi perspiciatis quibusdam, qui sequi exercitationem officiis accusantium nesciunt,
                totam veritatis, consectetur ut. Quaerat quidem saepe nihil hic a omnis accusantium blanditiis dolorem,
                eius repudiandae dolore sunt harum nisi ea aspernatur fuga autem earum ab aperiam nostrum dignissimos
                ad! Odit, id! Quis vitae, tempore accusantium quam illum architecto nam voluptatum alias officiis
                corrupti provident veniam aliquam sapiente possimus perspiciatis recusandae enim? Ullam qui iusto animi
                ipsa a corporis ab optio eius assumenda culpa, reprehenderit non eveniet repellat minus quo voluptas
                harum possimus incidunt quod! Rem necessitatibus, expedita, laudantium sequi itaque laborum pariatur
                magni odio facilis, labore corrupti a. Nobis maxime adipisci repellat illo ex, recusandae libero nemo
                tempora voluptate odio eum veritatis doloribus praesentium, dignissimos autem sed rerum quam enim
                quaerat omnis a exercitationem qui. Optio numquam corporis magni cum hic laborum a nam iusto porro
                dolore! Sint mollitia est voluptas tempore, voluptates nisi tempora quia velit, soluta iure magnam,
                numquam dicta expedita dolorum molestias obcaecati laudantium accusamus labore dolor fugiat eligendi
                unde! Asperiores officiis beatae velit maxime fugiat laudantium. Voluptatum, nobis? Amet accusantium
                aliquid, eaque illo dolore, consequuntur iste cum blanditiis laudantium nisi nesciunt, quibusdam
                voluptas. Cum, minima voluptatum!
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button size={size} variant="light" color="danger">
                  <Button.Content>Cancel</Button.Content>
                </Button>
              </Modal.Close>
              <Modal.Close asChild>
                <Button size={size}>
                  <Button.Content>Save</Button.Content>
                </Button>
              </Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    );
  },
};
