import { helpers } from 'faker';

type Options = {
  count: number;
};

type FakeData =
  | Faker.Card
  | Faker.ContextualCard
  | Faker.UserCard
  | Faker.Transaction;

const defaultOptions: Options = {
  count: 10,
};

const generateData = <T extends FakeData>(
  generator: () => T,
  { count }: Options = defaultOptions,
) => Array.from({ length: count }, () => generator());

export const getUserCards = (options: Options = defaultOptions) => {
  return generateData(helpers.contextualCard, options);
};
