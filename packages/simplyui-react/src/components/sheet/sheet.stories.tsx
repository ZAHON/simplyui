import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { CloseButton } from '@/components/close-button';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { ScrollArea } from '@/components/scroll-area';
import { NativeScrollArea } from '@/components/native-scroll-area';
import { Sheet } from '.';

const meta: Meta<typeof Sheet> = {
  title: 'Overlays/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    const size = '2';

    return (
      <Sheet>
        <Sheet.Trigger asChild>
          <Button size={size}>
            <Button.Content>Open</Button.Content>
          </Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content size={size}>
            <Sheet.Header>
              <Sheet.Title>Edit profile</Sheet.Title>
              <Sheet.Description>Make changes to your profile.</Sheet.Description>
              <Sheet.CloseButton asChild>
                <CloseButton size={size} />
              </Sheet.CloseButton>
            </Sheet.Header>
            <Sheet.Body style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
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
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close asChild>
                <Button size={size} variant="light" color="danger">
                  <Button.Content>Cancel</Button.Content>
                </Button>
              </Sheet.Close>
              <Sheet.Close asChild>
                <Button size={size}>
                  <Button.Content>Save</Button.Content>
                </Button>
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet>
    );
  },
};

export const WithScrollArea: Story = {
  render: () => {
    const size = '2';

    return (
      <Sheet>
        <Sheet.Trigger asChild>
          <Button size={size}>
            <Button.Content>Open</Button.Content>
          </Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content size={size}>
            <Sheet.Header>
              <Sheet.Title>Edit profile</Sheet.Title>
              <Sheet.Description>Make changes to your profile.</Sheet.Description>
              <Sheet.CloseButton asChild>
                <CloseButton size={size} />
              </Sheet.CloseButton>
            </Sheet.Header>
            <ScrollArea type="always">
              <ScrollArea.Viewport>
                <Sheet.Body>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui fugiat facere blanditiis doloribus
                    quidem, harum voluptate perferendis similique ut eveniet recusandae, quia at, explicabo quo ipsa
                    necessitatibus illum soluta enim earum veniam commodi placeat sit hic! Placeat sit facilis
                    recusandae quas debitis fuga quibusdam dolor. Veritatis, quaerat voluptates? Repellat, ipsa
                    officiis. Perferendis, molestiae itaque placeat id aliquam omnis a maiores ex incidunt, laborum
                    iste! Commodi ipsum blanditiis repellendus, recusandae exercitationem corporis nesciunt ea sunt,
                    quasi pariatur quia expedita soluta minima. Dolorem maxime ab culpa et rerum corporis adipisci!
                    Omnis saepe culpa est aut reprehenderit quibusdam voluptatibus, sapiente, dignissimos autem quam
                    nulla ipsam ea? Temporibus minus cum iste eius, nam non tempora debitis quod a neque. Debitis beatae
                    eius, porro unde illum ducimus! Animi delectus nemo, a, rem reiciendis quibusdam numquam impedit
                    maxime exercitationem, dolor ex molestiae nam tempore in nobis natus voluptatum minus sequi ipsam
                    libero alias. Iste voluptatum facere rem laboriosam debitis vitae? Quod, pariatur maxime? Nemo quo
                    quaerat fugit dolores sit dolorem aspernatur, non sed unde vel facere a aperiam doloremque,
                    laudantium commodi praesentium? Ex reprehenderit aut veniam laborum necessitatibus neque id ipsum
                    ab, facilis ipsa quisquam illo deserunt ut modi quis facere eum corporis eos labore nihil
                    doloremque? Rem architecto ipsam eos pariatur quaerat sunt nostrum accusantium distinctio amet,
                    ratione temporibus, asperiores consectetur! Maxime, illo quam. Totam modi nostrum corrupti ipsa
                    fugiat placeat eveniet obcaecati, iste blanditiis excepturi commodi numquam veritatis eaque vel
                    natus perspiciatis cupiditate? Amet cumque tenetur magni officia quod ducimus odit sunt facere
                    eligendi sapiente deserunt voluptatibus, maxime eaque in aliquid tempore quos omnis et ea cum vel!
                    Hic sequi error dolore dolorem tempora magnam quos totam deleniti doloribus itaque laudantium neque
                    illum odit veritatis fugit, impedit voluptatem illo reprehenderit ea libero eum non! Odit assumenda
                    tempore quas saepe impedit veritatis dicta laudantium vitae aliquam dolore illo eum cupiditate
                    adipisci est suscipit esse sequi reprehenderit, quia facilis architecto magni neque corrupti
                    accusamus accusantium. Tempore atque molestiae harum modi sint corrupti qui, iure quidem, quis nam
                    iste autem amet rerum accusantium aperiam explicabo voluptate. Assumenda eligendi dolore, aliquam
                    odio sed cum nulla amet quo, veritatis soluta molestiae quos voluptatem a, explicabo iste dicta
                    minus possimus? Velit, nulla. Doloribus molestiae quisquam obcaecati perferendis sunt deserunt
                    cumque soluta, sequi, quidem vero dolorem voluptatem voluptatibus temporibus veniam eum accusamus
                    quia at placeat labore tempora beatae qui? Sapiente maiores beatae magni error. Sapiente asperiores
                    animi, praesentium facere impedit soluta dolore et nihil aliquid veniam consequatur vel incidunt
                    aperiam numquam libero veritatis quo, expedita necessitatibus pariatur quis mollitia! Unde maiores
                    perferendis vitae cum, totam nemo, incidunt maxime, et cupiditate dolorem ipsam. Iure, ducimus
                    laborum rem architecto a dolorem inventore quo mollitia nulla illum similique quas fugit id alias
                    laudantium culpa voluptates repellat minima pariatur voluptas cum? Voluptas unde, aspernatur ad
                    sapiente cum fugit illo, ipsam maiores atque repellat expedita omnis. Quod et quam ex quos molestiae
                    voluptatibus distinctio sapiente incidunt dolorem suscipit ea fugit, natus nulla veritatis fuga
                    pariatur asperiores expedita! Voluptatum optio illum, et deleniti non voluptate nihil! Itaque
                    voluptate eum maiores! Modi fuga ipsam assumenda commodi culpa nisi, voluptatum velit quo eius
                    repellendus! Laborum deserunt earum quae repellendus maiores ut dolores distinctio inventore ad
                    placeat quisquam, amet quam eos qui ipsum vel unde sapiente nisi perspiciatis suscipit voluptatum?
                    Qui eum sunt iusto natus fugiat ab rem facere est magnam tempora voluptate nostrum dignissimos
                    repudiandae adipisci quos saepe culpa quae, accusamus cumque commodi repellat? Reprehenderit,
                    consectetur officia velit sit dolore aut excepturi inventore similique a! Accusamus eius eaque error
                    itaque illum officiis sequi recusandae, tempore earum reprehenderit voluptatum labore iusto commodi
                    asperiores eligendi. Sequi autem in consequatur dolore, quia libero voluptates beatae praesentium
                    itaque quos consequuntur a dignissimos repellendus tempora iure vero quasi ab cumque est ratione
                    quidem necessitatibus animi excepturi possimus! Delectus, et eius! Enim libero consequatur eligendi
                    rerum. Inventore odio labore tempore! Id, ducimus odit iure voluptates, eum minima debitis eaque
                    nulla nostrum tempore corrupti, quisquam et! Cumque tempore dolore nemo deleniti illo enim vel
                    distinctio numquam maiores dolor corrupti, obcaecati praesentium sapiente perferendis saepe,
                    nesciunt quam qui facere! Minima laboriosam quos tempora ut dolores vitae enim doloribus, omnis
                    laudantium soluta quo voluptas animi eum nihil aliquid maxime tenetur culpa at veritatis et iste
                    vero! Quod, delectus perspiciatis. Suscipit commodi earum voluptas magnam! Distinctio tempore maxime
                    omnis at illum! Assumenda ab nihil iste aperiam itaque eligendi nemo aspernatur temporibus
                    inventore. Totam, quidem possimus assumenda perspiciatis aut tempora impedit nam esse iusto rerum
                    nisi atque quos, repellat expedita cum? Ipsum iusto vero nisi similique suscipit quaerat tempora
                    cumque odio optio fugit expedita alias eius soluta, quos laborum illum totam quisquam ipsa velit
                    distinctio libero nesciunt? Quaerat doloremque illo at nisi dolorem perferendis beatae voluptatibus
                    possimus quidem impedit. Doloremque, dolor. Sequi facere sunt atque rem quos perferendis consequatur
                    nobis sapiente? Eligendi neque veniam sapiente eum necessitatibus voluptatem accusamus quos
                    voluptatibus, dolor inventore iure perferendis consequatur nobis nam tenetur obcaecati perspiciatis
                    id labore nihil fugiat. Facilis quisquam necessitatibus, voluptatem facere eaque fugiat in delectus!
                    Eaque aperiam, quaerat maiores ab vero, doloremque ex vel quod possimus illo similique repellat
                    nemo? Dolorum deserunt adipisci quia et tempora impedit quod aut debitis dolore atque ex ratione
                    explicabo nisi, aperiam delectus dolorem consectetur molestiae harum, corporis velit maxime voluptas
                    id neque vitae? Tenetur quam dolorem libero? Quidem laboriosam ipsam libero eveniet, quod nesciunt.
                    Iure minus praesentium velit iusto sequi doloribus vitae tempora beatae corporis nobis, voluptatum
                    voluptates corrupti quisquam a, possimus vel dolor neque tempore. Esse dolorum rem numquam ipsum
                    mollitia voluptatum sint sunt sapiente quas asperiores, iusto amet aut quos nisi quibusdam corrupti
                    impedit ea, temporibus voluptates assumenda porro. Vel itaque tempora, consectetur quos ullam
                    temporibus, deleniti minus sapiente nemo voluptates incidunt unde recusandae exercitationem amet.
                    Corporis, repudiandae non quibusdam error nam magnam obcaecati. Magni sed, cupiditate assumenda
                    ipsam qui omnis non rem at, ex id quam fuga saepe veritatis sapiente, dolorum suscipit soluta
                    beatae. Ipsa rerum quia dolore incidunt adipisci porro saepe repellendus harum esse omnis officiis
                    tempora, repudiandae possimus sint obcaecati at debitis, mollitia repellat quidem minima enim earum
                    tenetur! Vero.
                  </p>
                </Sheet.Body>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar orientation="vertical" withBackground={false}>
                <ScrollArea.Thumb />
              </ScrollArea.Scrollbar>
            </ScrollArea>
            <Sheet.Footer>
              <Sheet.Close asChild>
                <Button size={size} variant="light" color="danger">
                  <Button.Content>Cancel</Button.Content>
                </Button>
              </Sheet.Close>
              <Sheet.Close asChild>
                <Button size={size}>
                  <Button.Content>Save</Button.Content>
                </Button>
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet>
    );
  },
};

export const WithNativeScrollArea: Story = {
  render: () => {
    const size = '2';

    return (
      <Sheet>
        <Sheet.Trigger asChild>
          <Button size={size}>
            <Button.Content>Open</Button.Content>
          </Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content size={size}>
            <Sheet.Header>
              <Sheet.Title>Edit profile</Sheet.Title>
              <Sheet.Description>Make changes to your profile.</Sheet.Description>
              <Sheet.CloseButton asChild>
                <CloseButton size={size} />
              </Sheet.CloseButton>
            </Sheet.Header>
            <NativeScrollArea asChild scrollbars="vertical" scrollbarBackground={false}>
              <Sheet.Body>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui fugiat facere blanditiis doloribus
                  quidem, harum voluptate perferendis similique ut eveniet recusandae, quia at, explicabo quo ipsa
                  necessitatibus illum soluta enim earum veniam commodi placeat sit hic! Placeat sit facilis recusandae
                  quas debitis fuga quibusdam dolor. Veritatis, quaerat voluptates? Repellat, ipsa officiis.
                  Perferendis, molestiae itaque placeat id aliquam omnis a maiores ex incidunt, laborum iste! Commodi
                  ipsum blanditiis repellendus, recusandae exercitationem corporis nesciunt ea sunt, quasi pariatur quia
                  expedita soluta minima. Dolorem maxime ab culpa et rerum corporis adipisci! Omnis saepe culpa est aut
                  reprehenderit quibusdam voluptatibus, sapiente, dignissimos autem quam nulla ipsam ea? Temporibus
                  minus cum iste eius, nam non tempora debitis quod a neque. Debitis beatae eius, porro unde illum
                  ducimus! Animi delectus nemo, a, rem reiciendis quibusdam numquam impedit maxime exercitationem, dolor
                  ex molestiae nam tempore in nobis natus voluptatum minus sequi ipsam libero alias. Iste voluptatum
                  facere rem laboriosam debitis vitae? Quod, pariatur maxime? Nemo quo quaerat fugit dolores sit dolorem
                  aspernatur, non sed unde vel facere a aperiam doloremque, laudantium commodi praesentium? Ex
                  reprehenderit aut veniam laborum necessitatibus neque id ipsum ab, facilis ipsa quisquam illo deserunt
                  ut modi quis facere eum corporis eos labore nihil doloremque? Rem architecto ipsam eos pariatur
                  quaerat sunt nostrum accusantium distinctio amet, ratione temporibus, asperiores consectetur! Maxime,
                  illo quam. Totam modi nostrum corrupti ipsa fugiat placeat eveniet obcaecati, iste blanditiis
                  excepturi commodi numquam veritatis eaque vel natus perspiciatis cupiditate? Amet cumque tenetur magni
                  officia quod ducimus odit sunt facere eligendi sapiente deserunt voluptatibus, maxime eaque in aliquid
                  tempore quos omnis et ea cum vel! Hic sequi error dolore dolorem tempora magnam quos totam deleniti
                  doloribus itaque laudantium neque illum odit veritatis fugit, impedit voluptatem illo reprehenderit ea
                  libero eum non! Odit assumenda tempore quas saepe impedit veritatis dicta laudantium vitae aliquam
                  dolore illo eum cupiditate adipisci est suscipit esse sequi reprehenderit, quia facilis architecto
                  magni neque corrupti accusamus accusantium. Tempore atque molestiae harum modi sint corrupti qui, iure
                  quidem, quis nam iste autem amet rerum accusantium aperiam explicabo voluptate. Assumenda eligendi
                  dolore, aliquam odio sed cum nulla amet quo, veritatis soluta molestiae quos voluptatem a, explicabo
                  iste dicta minus possimus? Velit, nulla. Doloribus molestiae quisquam obcaecati perferendis sunt
                  deserunt cumque soluta, sequi, quidem vero dolorem voluptatem voluptatibus temporibus veniam eum
                  accusamus quia at placeat labore tempora beatae qui? Sapiente maiores beatae magni error. Sapiente
                  asperiores animi, praesentium facere impedit soluta dolore et nihil aliquid veniam consequatur vel
                  incidunt aperiam numquam libero veritatis quo, expedita necessitatibus pariatur quis mollitia! Unde
                  maiores perferendis vitae cum, totam nemo, incidunt maxime, et cupiditate dolorem ipsam. Iure, ducimus
                  laborum rem architecto a dolorem inventore quo mollitia nulla illum similique quas fugit id alias
                  laudantium culpa voluptates repellat minima pariatur voluptas cum? Voluptas unde, aspernatur ad
                  sapiente cum fugit illo, ipsam maiores atque repellat expedita omnis. Quod et quam ex quos molestiae
                  voluptatibus distinctio sapiente incidunt dolorem suscipit ea fugit, natus nulla veritatis fuga
                  pariatur asperiores expedita! Voluptatum optio illum, et deleniti non voluptate nihil! Itaque
                  voluptate eum maiores! Modi fuga ipsam assumenda commodi culpa nisi, voluptatum velit quo eius
                  repellendus! Laborum deserunt earum quae repellendus maiores ut dolores distinctio inventore ad
                  placeat quisquam, amet quam eos qui ipsum vel unde sapiente nisi perspiciatis suscipit voluptatum? Qui
                  eum sunt iusto natus fugiat ab rem facere est magnam tempora voluptate nostrum dignissimos repudiandae
                  adipisci quos saepe culpa quae, accusamus cumque commodi repellat? Reprehenderit, consectetur officia
                  velit sit dolore aut excepturi inventore similique a! Accusamus eius eaque error itaque illum officiis
                  sequi recusandae, tempore earum reprehenderit voluptatum labore iusto commodi asperiores eligendi.
                  Sequi autem in consequatur dolore, quia libero voluptates beatae praesentium itaque quos consequuntur
                  a dignissimos repellendus tempora iure vero quasi ab cumque est ratione quidem necessitatibus animi
                  excepturi possimus! Delectus, et eius! Enim libero consequatur eligendi rerum. Inventore odio labore
                  tempore! Id, ducimus odit iure voluptates, eum minima debitis eaque nulla nostrum tempore corrupti,
                  quisquam et! Cumque tempore dolore nemo deleniti illo enim vel distinctio numquam maiores dolor
                  corrupti, obcaecati praesentium sapiente perferendis saepe, nesciunt quam qui facere! Minima
                  laboriosam quos tempora ut dolores vitae enim doloribus, omnis laudantium soluta quo voluptas animi
                  eum nihil aliquid maxime tenetur culpa at veritatis et iste vero! Quod, delectus perspiciatis.
                  Suscipit commodi earum voluptas magnam! Distinctio tempore maxime omnis at illum! Assumenda ab nihil
                  iste aperiam itaque eligendi nemo aspernatur temporibus inventore. Totam, quidem possimus assumenda
                  perspiciatis aut tempora impedit nam esse iusto rerum nisi atque quos, repellat expedita cum? Ipsum
                  iusto vero nisi similique suscipit quaerat tempora cumque odio optio fugit expedita alias eius soluta,
                  quos laborum illum totam quisquam ipsa velit distinctio libero nesciunt? Quaerat doloremque illo at
                  nisi dolorem perferendis beatae voluptatibus possimus quidem impedit. Doloremque, dolor. Sequi facere
                  sunt atque rem quos perferendis consequatur nobis sapiente? Eligendi neque veniam sapiente eum
                  necessitatibus voluptatem accusamus quos voluptatibus, dolor inventore iure perferendis consequatur
                  nobis nam tenetur obcaecati perspiciatis id labore nihil fugiat. Facilis quisquam necessitatibus,
                  voluptatem facere eaque fugiat in delectus! Eaque aperiam, quaerat maiores ab vero, doloremque ex vel
                  quod possimus illo similique repellat nemo? Dolorum deserunt adipisci quia et tempora impedit quod aut
                  debitis dolore atque ex ratione explicabo nisi, aperiam delectus dolorem consectetur molestiae harum,
                  corporis velit maxime voluptas id neque vitae? Tenetur quam dolorem libero? Quidem laboriosam ipsam
                  libero eveniet, quod nesciunt. Iure minus praesentium velit iusto sequi doloribus vitae tempora beatae
                  corporis nobis, voluptatum voluptates corrupti quisquam a, possimus vel dolor neque tempore. Esse
                  dolorum rem numquam ipsum mollitia voluptatum sint sunt sapiente quas asperiores, iusto amet aut quos
                  nisi quibusdam corrupti impedit ea, temporibus voluptates assumenda porro. Vel itaque tempora,
                  consectetur quos ullam temporibus, deleniti minus sapiente nemo voluptates incidunt unde recusandae
                  exercitationem amet. Corporis, repudiandae non quibusdam error nam magnam obcaecati. Magni sed,
                  cupiditate assumenda ipsam qui omnis non rem at, ex id quam fuga saepe veritatis sapiente, dolorum
                  suscipit soluta beatae. Ipsa rerum quia dolore incidunt adipisci porro saepe repellendus harum esse
                  omnis officiis tempora, repudiandae possimus sint obcaecati at debitis, mollitia repellat quidem
                  minima enim earum tenetur! Vero.
                </p>
              </Sheet.Body>
            </NativeScrollArea>
            <Sheet.Footer>
              <Sheet.Close asChild>
                <Button size={size} variant="light" color="danger">
                  <Button.Content>Cancel</Button.Content>
                </Button>
              </Sheet.Close>
              <Sheet.Close asChild>
                <Button size={size}>
                  <Button.Content>Save</Button.Content>
                </Button>
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet>
    );
  },
};
