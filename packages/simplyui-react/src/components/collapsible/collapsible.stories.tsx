import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { Collapsible } from '.';

const meta: Meta<typeof Collapsible> = {
  title: 'Misc/Collapsible',
  component: Collapsible,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '36rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    return (
      <Collapsible>
        <Collapsible.Trigger asChild>
          <Button style={{ marginBottom: '1rem' }}>
            <Button.Content>Toggle content</Button.Content>
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <p>
            From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It
            has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout
            with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each
            of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown
            from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it
            with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
          </p>
        </Collapsible.Content>
      </Collapsible>
    );
  },
};
