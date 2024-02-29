import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/components/card';
import { ScrollArea } from '.';

const meta: Meta<typeof ScrollArea> = {
  title: 'Misc/ScrollArea',
  component: ScrollArea,
  args: {
    scrollHideDelay: 600,
    type: 'hover',
  },
  argTypes: {
    asChild: { control: false },
    children: { control: false },
    type: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const WithScrollbarOrientationVertical: Story = {
  render: ({ ...props }) => {
    return (
      <ScrollArea {...props} asChild>
        <Card style={{ height: '16rem', width: '16rem' }}>
          <ScrollArea.Viewport>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni nihil deleniti aliquid error. Iusto
              officia nisi architecto commodi temporibus possimus consectetur mollitia. Quo consectetur, id quibusdam
              quidem veritatis unde facilis. Fuga libero expedita quibusdam, inventore at maiores praesentium. Debitis
              culpa officiis expedita voluptate reprehenderit doloremque, odit necessitatibus corrupti fugiat a facere
              similique, tempora quisquam accusantium aliquid. Ullam tempore aspernatur amet incidunt molestiae delectus
              autem cupiditate. Aspernatur porro assumenda aut aliquam eveniet officia, quasi ipsa natus quas quos
              quaerat, possimus numquam dolores necessitatibus doloremque modi neque explicabo quisquam illum amet non
              laborum ab? Quisquam ducimus excepturi quidem, ad impedit qui, dicta eos et voluptas dolorum magnam hic
              sapiente officiis enim veniam ipsum voluptatibus tempore nam. Expedita odio debitis minima quas
              repudiandae, molestiae, ipsam illum sint, tempora necessitatibus veritatis facilis obcaecati eligendi fuga
              autem error at nobis nam. Consequatur facilis dicta, ducimus labore esse quidem distinctio fugit in dolore
              officiis doloremque dolores itaque eveniet molestiae sint possimus dolorem! Totam ea distinctio cupiditate
              praesentium? Necessitatibus eveniet iure deserunt vero modi commodi labore beatae ullam quidem dolor
              eligendi, ad nemo quod saepe corrupti hic repellat provident. Veritatis labore modi adipisci explicabo
              neque, quasi ea reiciendis maiores magnam nam porro libero aperiam temporibus voluptas.
            </p>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </Card>
      </ScrollArea>
    );
  },
};

export const WithScrollbarOrientationHorizontal: Story = {
  render: ({ ...props }) => {
    return (
      <ScrollArea {...props} asChild>
        <Card style={{ height: '6rem', width: '16rem' }}>
          <ScrollArea.Viewport>
            <div style={{ width: '40rem' }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus dolorum voluptas sit assumenda
                ullam, nam ex adipisci, veritatis provident vitae deserunt eligendi in autem, tenetur exercitationem!
                Aperiam, accusamus. Tenetur.
              </p>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </Card>
      </ScrollArea>
    );
  },
};

export const WithScrollbarOrientationVerticalAndHorizontal: Story = {
  render: ({ ...props }) => {
    return (
      <ScrollArea {...props} asChild>
        <Card style={{ height: '16rem', width: '16rem' }}>
          <ScrollArea.Viewport>
            <div style={{ display: 'flex', columnGap: '1rem', width: '36rem' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni nihil deleniti aliquid error.
                Iusto officia nisi architecto commodi temporibus possimus consectetur mollitia. Quo consectetur, id
                quibusdam quidem veritatis unde facilis. Fuga libero expedita quibusdam, inventore at maiores
                praesentium. Debitis culpa officiis expedita voluptate reprehenderit doloremque, odit necessitatibus
                corrupti fugiat a facere similique, tempora quisquam accusantium aliquid. Ullam tempore aspernatur amet
                incidunt molestiae delectus autem cupiditate. Aspernatur porro assumenda aut aliquam eveniet officia,
                quasi ipsa natus quas quos quaerat, possimus numquam dolores necessitatibus doloremque modi neque
                explicabo quisquam illum amet non laborum ab? Quisquam ducimus excepturi quidem, ad impedit qui, dicta
                eos et voluptas dolorum magnam hic sapiente officiis enim veniam ipsum voluptatibus tempore nam.
                Expedita odio debitis minima quas repudiandae, molestiae, ipsam illum sint, tempora necessitatibus
                veritatis facilis obcaecati eligendi fuga autem error at nobis nam. Consequatur facilis dicta, ducimus
                labore esse quidem distinctio fugit in dolore officiis doloremque dolores itaque eveniet molestiae sint
                possimus dolorem! Totam ea distinctio cupiditate praesentium? Necessitatibus eveniet iure deserunt vero
                modi commodi labore beatae ullam quidem dolor eligendi, ad nemo quod saepe corrupti hic repellat
                provident. Veritatis labore modi adipisci explicabo neque, quasi ea reiciendis maiores magnam nam porro
                libero aperiam temporibus voluptas.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni nihil deleniti aliquid error.
                Iusto officia nisi architecto commodi temporibus possimus consectetur mollitia. Quo consectetur, id
                quibusdam quidem veritatis unde facilis. Fuga libero expedita quibusdam, inventore at maiores
                praesentium. Debitis culpa officiis expedita voluptate reprehenderit doloremque, odit necessitatibus
                corrupti fugiat a facere similique, tempora quisquam accusantium aliquid. Ullam tempore aspernatur amet
                incidunt molestiae delectus autem cupiditate. Aspernatur porro assumenda aut aliquam eveniet officia,
                quasi ipsa natus quas quos quaerat, possimus numquam dolores necessitatibus doloremque modi neque
                explicabo quisquam illum amet non laborum ab? Quisquam ducimus excepturi quidem, ad impedit qui, dicta
                eos et voluptas dolorum magnam hic sapiente officiis enim veniam ipsum voluptatibus tempore nam.
                Expedita odio debitis minima quas repudiandae, molestiae, ipsam illum sint, tempora necessitatibus
                veritatis facilis obcaecati eligendi fuga autem error at nobis nam. Consequatur facilis dicta, ducimus
                labore esse quidem distinctio fugit in dolore officiis doloremque dolores itaque eveniet molestiae sint
                possimus dolorem! Totam ea distinctio cupiditate praesentium? Necessitatibus eveniet iure deserunt vero
                modi commodi labore beatae ullam quidem dolor eligendi, ad nemo quod saepe corrupti hic repellat
                provident. Veritatis labore modi adipisci explicabo neque, quasi ea reiciendis maiores magnam nam porro
                libero aperiam temporibus voluptas.
              </p>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar orientation="horizontal">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </Card>
      </ScrollArea>
    );
  },
};
