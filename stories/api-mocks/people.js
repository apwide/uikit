import { faker } from '@faker-js/faker'
import { many } from './helpers'

// eslint-disable-next-line
export const createPerson = ({
  name = faker.person.fullName(),
  key,
  avatar = `https://i.pravatar.cc/300?u=${faker.string.uuid()}`
} = {}) => {
  const person = {
    name,
    displayName: name,
    avatar,
    key: key || faker.helpers.slugify(name).toLowerCase(),
    username: key || faker.helpers.slugify(name).toLowerCase()
  }
  return person
}

export const createPersonsList = many(createPerson)
