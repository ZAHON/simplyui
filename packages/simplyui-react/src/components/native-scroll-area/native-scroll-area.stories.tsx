import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/components/text';
import { NativeScrollArea } from '.';

const meta: Meta<typeof NativeScrollArea> = {
  title: 'Misc/NativeScrollArea',
  component: NativeScrollArea,
  args: {
    size: '2',
    scrollbars: 'both',
    scrollbarRadius: 'none',
    thumbRadius: 'full',
    scrollbarBackground: true,
    scrollbarPadding: true,
  },
  argTypes: {
    size: { control: 'select' },
    scrollbars: { control: 'select' },
    scrollbarRadius: { control: 'select' },
    asChild: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof NativeScrollArea>;

export const Default: Story = {
  render: ({ ...props }) => {
    const content = (
      <div style={{ display: 'flex', columnGap: '1rem', height: '20rem', width: '36rem' }}>
        <Text size="2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni nihil deleniti aliquid error. Iusto
          officia nisi architecto commodi temporibus possimus consectetur mollitia. Quo consectetur, id quibusdam quidem
          veritatis unde facilis. Fuga libero expedita quibusdam, inventore at maiores praesentium. Debitis culpa
          officiis expedita voluptate reprehenderit doloremque, odit necessitatibus corrupti fugiat a facere similique,
          tempora quisquam accusantium aliquid. Ullam tempore aspernatur amet incidunt molestiae delectus autem
          cupiditate. Aspernatur porro assumenda aut aliquam eveniet officia, quasi ipsa natus quas quos quaerat,
          possimus numquam dolores necessitatibus doloremque modi neque explicabo quisquam illum amet non laborum ab?
          Quisquam ducimus excepturi quidem, ad impedit qui, dicta eos et voluptas dolorum magnam hic sapiente officiis
          enim veniam ipsum voluptatibus tempore nam. Expedita odio debitis minima quas repudiandae, molestiae, ipsam
          illum sint, tempora necessitatibus veritatis facilis obcaecati eligendi fuga autem error at nobis nam.
          Consequatur facilis dicta, ducimus labore esse quidem distinctio fugit in dolore officiis doloremque dolores
          itaque eveniet molestiae sint possimus dolorem! Totam ea distinctio cupiditate praesentium? Necessitatibus
          eveniet iure deserunt vero modi commodi labore beatae ullam quidem dolor eligendi, ad nemo quod saepe corrupti
          hic repellat provident. Veritatis labore modi adipisci explicabo neque, quasi ea reiciendis maiores magnam nam
          porro libero aperiam temporibus voluptas.
        </Text>
        <Text size="2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni nihil deleniti aliquid error. Iusto
          officia nisi architecto commodi temporibus possimus consectetur mollitia. Quo consectetur, id quibusdam quidem
          veritatis unde facilis. Fuga libero expedita quibusdam, inventore at maiores praesentium. Debitis culpa
          officiis expedita voluptate reprehenderit doloremque, odit necessitatibus corrupti fugiat a facere similique,
          tempora quisquam accusantium aliquid. Ullam tempore aspernatur amet incidunt molestiae delectus autem
          cupiditate. Aspernatur porro assumenda aut aliquam eveniet officia, quasi ipsa natus quas quos quaerat,
          possimus numquam dolores necessitatibus doloremque modi neque explicabo quisquam illum amet non laborum ab?
          Quisquam ducimus excepturi quidem, ad impedit qui, dicta eos et voluptas dolorum magnam hic sapiente officiis
          enim veniam ipsum voluptatibus tempore nam. Expedita odio debitis minima quas repudiandae, molestiae, ipsam
          illum sint, tempora necessitatibus veritatis facilis obcaecati eligendi fuga autem error at nobis nam.
          Consequatur facilis dicta, ducimus labore esse quidem distinctio fugit in dolore officiis doloremque dolores
          itaque eveniet molestiae sint possimus dolorem! Totam ea distinctio cupiditate praesentium? Necessitatibus
          eveniet iure deserunt vero modi commodi labore beatae ullam quidem dolor eligendi, ad nemo quod saepe corrupti
          hic repellat provident. Veritatis labore modi adipisci explicabo neque, quasi ea reiciendis maiores magnam nam
          porro libero aperiam temporibus voluptas.
        </Text>
      </div>
    );

    return (
      <NativeScrollArea {...props} style={{ height: '20rem', width: '20rem' }}>
        {content}
      </NativeScrollArea>
    );
  },
};
