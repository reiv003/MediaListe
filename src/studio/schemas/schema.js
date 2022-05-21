import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import book from './documents/book.js'
import game from './documents/game.js'
import movie from './documents/movie.js'
import series from './documents/series.js'
import user from './documents/user.js'
import webcomic from './documents/webcomic.js'

import booksLog from './documents/booksLog.js'
import gamesLog from './documents/gamesLog.js'
import moviesLog from './documents/moviesLog.js'
import seriesLog from './documents/seriesLog.js'
import webcomicsLog from './documents/webcomicsLog.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user, book, game, movie, series, webcomic, booksLog, gamesLog,
    moviesLog, seriesLog, webcomicsLog
  ]),
})
