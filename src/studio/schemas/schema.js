import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import book from './documents/book.js'
import game from './documents/game.js'
import movie from './documents/movie.js'
import series from './documents/series.js'
import user from './documents/user.js'
import webcomic from './documents/webcomic.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user, book, game, movie, series, webcomic
  ]),
})
