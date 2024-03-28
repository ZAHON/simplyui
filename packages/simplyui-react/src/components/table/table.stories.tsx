import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Card } from '@/components/card';
import { Text } from '@/components/text';
import { Separator } from '@/components/separator';
import { NativeScrollArea } from '@/components/native-scroll-area';
import * as ScrollArea from '@/components/scroll-area';
import * as Label from '@/components/label';
import * as NativeSelect from '@/components/native-select';
import * as Switch from '@/components/switch';
import * as Table from '.';

const meta: Meta<typeof Table.Root> = {
  title: 'Data Display/Table',
  component: Table.Root,
};

export default meta;
type Story = StoryObj<typeof Table.Root>;

export const Default: Story = {
  render: () => {
    return (
      <Table.Root>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Element position</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Element name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Symbol</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Atomic mass</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>6</Table.RowHeaderCell>
              <Table.Cell>Carbon</Table.Cell>
              <Table.Cell>C</Table.Cell>
              <Table.Cell>12.011</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>7</Table.RowHeaderCell>
              <Table.Cell>Nitrogen</Table.Cell>
              <Table.Cell>N</Table.Cell>
              <Table.Cell>14.007</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>39</Table.RowHeaderCell>
              <Table.Cell>Yttrium</Table.Cell>
              <Table.Cell>Y</Table.Cell>
              <Table.Cell>88.906</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>56</Table.RowHeaderCell>
              <Table.Cell>Barium</Table.Cell>
              <Table.Cell>Ba</Table.Cell>
              <Table.Cell>137.33</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>58</Table.RowHeaderCell>
              <Table.Cell>Cerium</Table.Cell>
              <Table.Cell>Ce</Table.Cell>
              <Table.Cell>140.12</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table.Root>
    );
  },
};

export const Playground: Story = {
  render: () => {
    // Table.Root
    const [variant, setVariant] = useState<'default' | 'transparent'>('default');
    const [radius, setRadius] = useState<'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
    const [highlightOnHover, setHighlightOnHover] = useState(false);
    const [striped, setStriped] = useState(false);

    // Table.Content
    const [layout, setLayout] = useState<'auto' | 'fixed'>('auto');
    const [size, setSize] = useState<'1' | '2' | '3' | '4'>('2');

    return (
      <>
        <Table.Root variant={variant} radius={radius} highlightOnHover={highlightOnHover} striped={striped}>
          <Table.Content layout={layout} size={size}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Element position</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Element name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Symbol</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Atomic mass</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>6</Table.RowHeaderCell>
                <Table.Cell>Carbon</Table.Cell>
                <Table.Cell>C</Table.Cell>
                <Table.Cell>12.011</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>7</Table.RowHeaderCell>
                <Table.Cell>Nitrogen</Table.Cell>
                <Table.Cell>N</Table.Cell>
                <Table.Cell>14.007</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>39</Table.RowHeaderCell>
                <Table.Cell>Yttrium</Table.Cell>
                <Table.Cell>Y</Table.Cell>
                <Table.Cell>88.906</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>56</Table.RowHeaderCell>
                <Table.Cell>Barium</Table.Cell>
                <Table.Cell>Ba</Table.Cell>
                <Table.Cell>137.33</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>58</Table.RowHeaderCell>
                <Table.Cell>Cerium</Table.Cell>
                <Table.Cell>Ce</Table.Cell>
                <Table.Cell>140.12</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.Root>

        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'start', columnGap: '1rem' }}>
          <Card>
            <Text weight="medium">Table.Root</Text>
            <Separator style={{ marginBlock: '0.5rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label.Root htmlFor="variant" size="2">
                  Variant
                </Label.Root>
                <NativeSelect.Root>
                  <NativeSelect.Input
                    id="variant"
                    value={variant}
                    onChange={(e) => setVariant(e.target.value as typeof variant)}
                  >
                    <option value="default">default</option>
                    <option value="transparent">transparent</option>
                  </NativeSelect.Input>
                  <NativeSelect.Icon />
                </NativeSelect.Root>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label.Root htmlFor="radius" size="2">
                  Radius
                </Label.Root>
                <NativeSelect.Root>
                  <NativeSelect.Input
                    id="radius"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value as typeof radius)}
                  >
                    <option value="none">none</option>
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl</option>
                    <option value="full">full</option>
                  </NativeSelect.Input>
                  <NativeSelect.Icon />
                </NativeSelect.Root>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                <Switch.Root
                  id="highlightOnHover"
                  checked={highlightOnHover}
                  onCheckedChange={() => setHighlightOnHover(!highlightOnHover)}
                >
                  <Switch.Thumb />
                </Switch.Root>
                <Label.Root htmlFor="highlightOnHover" size="2">
                  Highlight on hover
                </Label.Root>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                <Switch.Root id="striped" checked={striped} onCheckedChange={() => setStriped(!striped)}>
                  <Switch.Thumb />
                </Switch.Root>
                <Label.Root htmlFor="striped" size="2">
                  Striped
                </Label.Root>
              </div>
            </div>
          </Card>
          <Card>
            <Text weight="medium">Table.Content</Text>
            <Separator style={{ marginBlock: '0.5rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label.Root htmlFor="layout" size="2">
                  Layout
                </Label.Root>
                <NativeSelect.Root>
                  <NativeSelect.Input
                    id="layout"
                    value={layout}
                    onChange={(e) => setLayout(e.target.value as typeof layout)}
                  >
                    <option value="auto">auto</option>
                    <option value="fixed">fixed</option>
                  </NativeSelect.Input>
                  <NativeSelect.Icon />
                </NativeSelect.Root>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                <Label.Root htmlFor="size" size="2">
                  size
                </Label.Root>
                <NativeSelect.Root>
                  <NativeSelect.Input id="size" value={size} onChange={(e) => setSize(e.target.value as typeof size)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </NativeSelect.Input>
                  <NativeSelect.Icon />
                </NativeSelect.Root>
              </div>
            </div>
          </Card>
        </div>
      </>
    );
  },
};

export const WithScrollArea: Story = {
  render: () => {
    return (
      <ScrollArea.Root asChild>
        <Table.Root>
          <ScrollArea.Viewport>
            <Table.Content>
              <Table.Header>
                <Table.Row style={{ whiteSpace: 'nowrap' }}>
                  <Table.ColumnHeaderCell>Element position</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Element name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Symbol</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Atomic mass</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row style={{ whiteSpace: 'nowrap' }}>
                  <Table.RowHeaderCell>6</Table.RowHeaderCell>
                  <Table.Cell>Carbon</Table.Cell>
                  <Table.Cell>C</Table.Cell>
                  <Table.Cell>12.011</Table.Cell>
                  <Table.Cell>
                    Carbon (from Latin carbo 'coal') is a chemical element; it has symbol C and atomic number 6. It is
                    nonmetallic and tetravalent—meaning that its atoms are able to form up to four covalent bonds due to
                    its valence shell exhibiting 4 electrons. It belongs to group 14 of the periodic table.
                  </Table.Cell>
                </Table.Row>
                <Table.Row style={{ whiteSpace: 'nowrap' }}>
                  <Table.RowHeaderCell>7</Table.RowHeaderCell>
                  <Table.Cell>Nitrogen</Table.Cell>
                  <Table.Cell>N</Table.Cell>
                  <Table.Cell>14.007</Table.Cell>
                  <Table.Cell>
                    Nitrogen is a chemical element; it has symbol N and atomic number 7. Nitrogen is a nonmetal and the
                    lightest member of group 15 of the periodic table, often called the pnictogens.
                  </Table.Cell>
                </Table.Row>
                <Table.Row style={{ whiteSpace: 'nowrap' }}>
                  <Table.RowHeaderCell>39</Table.RowHeaderCell>
                  <Table.Cell>Yttrium</Table.Cell>
                  <Table.Cell>Y</Table.Cell>
                  <Table.Cell>88.906</Table.Cell>
                  <Table.Cell>
                    Yttrium is a chemical element; it has symbol Y and atomic number 39. It is a silvery-metallic
                    transition metal chemically similar to the lanthanides and has often been classified as a
                    "rare-earth element".
                  </Table.Cell>
                </Table.Row>
                <Table.Row style={{ whiteSpace: 'nowrap' }}>
                  <Table.RowHeaderCell>56</Table.RowHeaderCell>
                  <Table.Cell>Barium</Table.Cell>
                  <Table.Cell>Ba</Table.Cell>
                  <Table.Cell>137.33</Table.Cell>
                  <Table.Cell>
                    Barium is a chemical element; it has symbol Ba and atomic number 56. It is the fifth element in
                    group 2 and is a soft, silvery alkaline earth metal. Because of its high chemical reactivity, barium
                    is never found in nature as a free element.
                  </Table.Cell>
                </Table.Row>
                <Table.Row style={{ whiteSpace: 'nowrap' }}>
                  <Table.RowHeaderCell>58</Table.RowHeaderCell>
                  <Table.Cell>Cerium</Table.Cell>
                  <Table.Cell>Ce</Table.Cell>
                  <Table.Cell>140.12</Table.Cell>
                  <Table.Cell>
                    Cerium is a chemical element; it has symbol Ce and atomic number 58. Cerium is a soft, ductile, and
                    silvery-white metal that tarnishes when exposed to air.
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal" size="1">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </Table.Root>
      </ScrollArea.Root>
    );
  },
};

export const WithNativeScrollArea: Story = {
  render: () => {
    return (
      <NativeScrollArea asChild scrollbars="horizontal">
        <Table.Root>
          <Table.Content>
            <Table.Header>
              <Table.Row style={{ whiteSpace: 'nowrap' }}>
                <Table.ColumnHeaderCell>Element position</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Element name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Symbol</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Atomic mass</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row style={{ whiteSpace: 'nowrap' }}>
                <Table.RowHeaderCell>6</Table.RowHeaderCell>
                <Table.Cell>Carbon</Table.Cell>
                <Table.Cell>C</Table.Cell>
                <Table.Cell>12.011</Table.Cell>
                <Table.Cell>
                  Carbon (from Latin carbo 'coal') is a chemical element; it has symbol C and atomic number 6. It is
                  nonmetallic and tetravalent—meaning that its atoms are able to form up to four covalent bonds due to
                  its valence shell exhibiting 4 electrons. It belongs to group 14 of the periodic table.
                </Table.Cell>
              </Table.Row>
              <Table.Row style={{ whiteSpace: 'nowrap' }}>
                <Table.RowHeaderCell>7</Table.RowHeaderCell>
                <Table.Cell>Nitrogen</Table.Cell>
                <Table.Cell>N</Table.Cell>
                <Table.Cell>14.007</Table.Cell>
                <Table.Cell>
                  Nitrogen is a chemical element; it has symbol N and atomic number 7. Nitrogen is a nonmetal and the
                  lightest member of group 15 of the periodic table, often called the pnictogens.
                </Table.Cell>
              </Table.Row>
              <Table.Row style={{ whiteSpace: 'nowrap' }}>
                <Table.RowHeaderCell>39</Table.RowHeaderCell>
                <Table.Cell>Yttrium</Table.Cell>
                <Table.Cell>Y</Table.Cell>
                <Table.Cell>88.906</Table.Cell>
                <Table.Cell>
                  Yttrium is a chemical element; it has symbol Y and atomic number 39. It is a silvery-metallic
                  transition metal chemically similar to the lanthanides and has often been classified as a "rare-earth
                  element".
                </Table.Cell>
              </Table.Row>
              <Table.Row style={{ whiteSpace: 'nowrap' }}>
                <Table.RowHeaderCell>56</Table.RowHeaderCell>
                <Table.Cell>Barium</Table.Cell>
                <Table.Cell>Ba</Table.Cell>
                <Table.Cell>137.33</Table.Cell>
                <Table.Cell>
                  Barium is a chemical element; it has symbol Ba and atomic number 56. It is the fifth element in group
                  2 and is a soft, silvery alkaline earth metal. Because of its high chemical reactivity, barium is
                  never found in nature as a free element.
                </Table.Cell>
              </Table.Row>
              <Table.Row style={{ whiteSpace: 'nowrap' }}>
                <Table.RowHeaderCell>58</Table.RowHeaderCell>
                <Table.Cell>Cerium</Table.Cell>
                <Table.Cell>Ce</Table.Cell>
                <Table.Cell>140.12</Table.Cell>
                <Table.Cell>
                  Cerium is a chemical element; it has symbol Ce and atomic number 58. Cerium is a soft, ductile, and
                  silvery-white metal that tarnishes when exposed to air.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.Root>
      </NativeScrollArea>
    );
  },
};
