import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from '../pages/SignIn';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('digite seu e-mail'), 'matheus.valente@mycalendar.com.br');
    userEvent.type(canvas.getByPlaceholderText('********'), '12345678');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    });
  }
};
