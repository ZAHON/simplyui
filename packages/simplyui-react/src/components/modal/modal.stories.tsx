import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { CloseButton } from '@/components/close-button';
import { Modal } from '.';

const meta: Meta<typeof Modal> = {
  title: 'Overlays/Modal',
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger asChild>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod excepturi consequatur sint mollitia
              qui id facere, voluptatum, sequi eaque enim. Similique corrupti iusto eius, ipsa mollitia vero molestias
              culpa dignissimos laudantium. Doloribus quidem aut veniam maiores. Maiores voluptas enim dolores natus
              dolore consequatur. Facere quam officia, enim aut reiciendis, magni non veritatis soluta voluptates rem
              delectus numquam? Repellat, fugiat dolorem quibusdam fugit cum qui maxime commodi labore recusandae, ipsa
              expedita provident quae quis assumenda. Necessitatibus, sequi! Consequuntur quasi dicta dolorem! Veniam
              perspiciatis, possimus alias at ducimus unde reiciendis iure minus facere. Neque corrupti voluptas amet
              facere minima voluptatum alias?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button>
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};

export const WithOverlayBackdropOpaque: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger asChild>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay backdrop="opaque" />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod excepturi consequatur sint mollitia
              qui id facere, voluptatum, sequi eaque enim. Similique corrupti iusto eius, ipsa mollitia vero molestias
              culpa dignissimos laudantium. Doloribus quidem aut veniam maiores. Maiores voluptas enim dolores natus
              dolore consequatur. Facere quam officia, enim aut reiciendis, magni non veritatis soluta voluptates rem
              delectus numquam? Repellat, fugiat dolorem quibusdam fugit cum qui maxime commodi labore recusandae, ipsa
              expedita provident quae quis assumenda. Necessitatibus, sequi! Consequuntur quasi dicta dolorem! Veniam
              perspiciatis, possimus alias at ducimus unde reiciendis iure minus facere. Neque corrupti voluptas amet
              facere minima voluptatum alias?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button>
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};

export const WithOverlayBackdropBlur: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger asChild>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay backdrop="blur" />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod excepturi consequatur sint mollitia
              qui id facere, voluptatum, sequi eaque enim. Similique corrupti iusto eius, ipsa mollitia vero molestias
              culpa dignissimos laudantium. Doloribus quidem aut veniam maiores. Maiores voluptas enim dolores natus
              dolore consequatur. Facere quam officia, enim aut reiciendis, magni non veritatis soluta voluptates rem
              delectus numquam? Repellat, fugiat dolorem quibusdam fugit cum qui maxime commodi labore recusandae, ipsa
              expedita provident quae quis assumenda. Necessitatibus, sequi! Consequuntur quasi dicta dolorem! Veniam
              perspiciatis, possimus alias at ducimus unde reiciendis iure minus facere. Neque corrupti voluptas amet
              facere minima voluptatum alias?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button>
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};

export const WithLargeContent: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas itaque necessitatibus repellendus in
              porro quas laboriosam quasi a dicta provident, est sint omnis, voluptate officiis nisi earum, repellat
              sequi exercitationem unde dolores. Dolorem qui nostrum libero nemo aut a voluptates voluptatem ea, minus
              necessitatibus ipsam atque voluptatibus maiores tempore deserunt expedita culpa, laudantium placeat?
              Commodi exercitationem maiores dignissimos, dolorem non iusto, quasi debitis rerum quaerat molestiae
              laboriosam amet suscipit tenetur, soluta et natus vero molestias iste perspiciatis! Quas dolore assumenda
              ipsa accusantium sint recusandae est ducimus expedita modi nobis dolorum corrupti, minus nostrum, eligendi
              aut iste natus ab, dolores rerum magni ea excepturi esse rem exercitationem. Excepturi, nihil ipsa aliquam
              eligendi ut placeat quos quae odit, assumenda beatae adipisci aliquid iste corporis animi, similique vero.
              Debitis quo expedita odio, laborum rem eos ut eaque consequatur, ratione recusandae earum mollitia ipsa
              quae distinctio nobis quas doloremque harum nihil iusto consectetur. Sed veniam animi nihil quibusdam iste
              maiores, ipsam perferendis at. Consequatur natus odit numquam sint consequuntur consectetur voluptatibus,
              et nulla incidunt maxime aut! Porro error animi facilis accusantium ducimus sunt inventore labore tenetur
              quidem? Vero unde vel quae aliquid! Dolores nihil ipsum tenetur nam delectus inventore accusamus sapiente
              cupiditate perspiciatis odit nobis praesentium temporibus repudiandae similique beatae velit voluptate,
              recusandae molestiae adipisci. Voluptates distinctio unde nam doloribus delectus asperiores tempora ea et
              quis quae eum, aperiam, necessitatibus eligendi explicabo dolorum provident consequatur illum atque. At
              quasi accusantium eius voluptatem cumque harum corporis recusandae consequuntur tempore reiciendis quam id
              amet non ipsa nostrum sunt esse possimus quaerat atque similique aliquid asperiores, accusamus explicabo.
              Est magnam qui distinctio totam tenetur porro, vel impedit cumque eos numquam. Ratione nobis accusantium
              asperiores non voluptatem deleniti ducimus totam inventore dolor ea illum explicabo id, deserunt, ipsa
              exercitationem quia. Consequatur ipsum quas minima dicta modi esse itaque nemo nesciunt placeat corporis
              veniam provident earum facere, obcaecati praesentium velit architecto quae cumque nulla perspiciatis animi
              neque. Accusantium illo earum porro pariatur delectus architecto ipsa ex, iste nihil cum nulla quaerat
              optio, molestias debitis. Quidem corporis vero, saepe voluptatem adipisci nam accusamus minima sed
              repellendus, officia omnis fuga dolore veniam impedit assumenda libero culpa quas quis quam. Perferendis
              nulla vero accusantium molestias et. Et iste fuga perferendis quaerat voluptatibus sunt temporibus
              repellendus odit eius quis, dolorem ea cumque. Ad similique accusantium mollitia unde alias quas
              cupiditate, qui dolor facere asperiores voluptates, molestias voluptate rem aut magnam. Dolores, maxime
              odio.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button>
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};

export const WithContentSizeSM: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger asChild>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content size="sm">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal" size="sm">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod excepturi consequatur sint mollitia
              qui id facere, voluptatum, sequi eaque enim. Similique corrupti iusto eius, ipsa mollitia vero molestias
              culpa dignissimos laudantium. Doloribus quidem aut veniam maiores. Maiores voluptas enim dolores natus
              dolore consequatur. Facere quam officia, enim aut reiciendis, magni non veritatis soluta voluptates rem
              delectus numquam? Repellat, fugiat dolorem quibusdam fugit cum qui maxime commodi labore recusandae, ipsa
              expedita provident quae quis assumenda. Necessitatibus, sequi! Consequuntur quasi dicta dolorem! Veniam
              perspiciatis, possimus alias at ducimus unde reiciendis iure minus facere. Neque corrupti voluptas amet
              facere minima voluptatum alias?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button size="sm" variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button size="sm">
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};

export const WithContentSizeMD: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger asChild>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content size="md">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal" size="md">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod excepturi consequatur sint mollitia
              qui id facere, voluptatum, sequi eaque enim. Similique corrupti iusto eius, ipsa mollitia vero molestias
              culpa dignissimos laudantium. Doloribus quidem aut veniam maiores. Maiores voluptas enim dolores natus
              dolore consequatur. Facere quam officia, enim aut reiciendis, magni non veritatis soluta voluptates rem
              delectus numquam? Repellat, fugiat dolorem quibusdam fugit cum qui maxime commodi labore recusandae, ipsa
              expedita provident quae quis assumenda. Necessitatibus, sequi! Consequuntur quasi dicta dolorem! Veniam
              perspiciatis, possimus alias at ducimus unde reiciendis iure minus facere. Neque corrupti voluptas amet
              facere minima voluptatum alias?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button size="md" variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button size="md">
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};

export const WithContentSizeLG: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger asChild>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content size="lg">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal" size="lg">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod excepturi consequatur sint mollitia
              qui id facere, voluptatum, sequi eaque enim. Similique corrupti iusto eius, ipsa mollitia vero molestias
              culpa dignissimos laudantium. Doloribus quidem aut veniam maiores. Maiores voluptas enim dolores natus
              dolore consequatur. Facere quam officia, enim aut reiciendis, magni non veritatis soluta voluptates rem
              delectus numquam? Repellat, fugiat dolorem quibusdam fugit cum qui maxime commodi labore recusandae, ipsa
              expedita provident quae quis assumenda. Necessitatibus, sequi! Consequuntur quasi dicta dolorem! Veniam
              perspiciatis, possimus alias at ducimus unde reiciendis iure minus facere. Neque corrupti voluptas amet
              facere minima voluptatum alias?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button size="lg" variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button size="lg">
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};

export const WithContentSizeXL: Story = {
  render: () => (
    <Modal defaultOpen>
      <Modal.Trigger asChild>
        <Button>
          <Button.Content>Open modal</Button.Content>
        </Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content size="xl">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal description</Modal.Description>
            <Modal.Close asChild position="top-end">
              <CloseButton aria-label="Close modal" size="xl">
                <CloseButton.Icon />
              </CloseButton>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod excepturi consequatur sint mollitia
              qui id facere, voluptatum, sequi eaque enim. Similique corrupti iusto eius, ipsa mollitia vero molestias
              culpa dignissimos laudantium. Doloribus quidem aut veniam maiores. Maiores voluptas enim dolores natus
              dolore consequatur. Facere quam officia, enim aut reiciendis, magni non veritatis soluta voluptates rem
              delectus numquam? Repellat, fugiat dolorem quibusdam fugit cum qui maxime commodi labore recusandae, ipsa
              expedita provident quae quis assumenda. Necessitatibus, sequi! Consequuntur quasi dicta dolorem! Veniam
              perspiciatis, possimus alias at ducimus unde reiciendis iure minus facere. Neque corrupti voluptas amet
              facere minima voluptatum alias?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button size="xl" variant="light" color="danger">
                <Button.Content>Close</Button.Content>
              </Button>
            </Modal.Close>
            <Button size="xl">
              <Button.Content>Action</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  ),
};
