var _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = blogs => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
  const reducer = (sum, blog) => {
    if(sum.likes < blog.likes) {
      return blog
    } else {
      return sum
    }
  }

  return blogs.length === 0
    ? {}
    : {
      title:blogs.reduce(reducer, blogs[0]).title,
      author:blogs.reduce(reducer, blogs[0]).author,
      likes:blogs.reduce(reducer, blogs[0]).likes
    }

}

const favoriteBlog2 = blogs => {
  const reducer = (sum, blog) => {
    if(sum[1] < blog[1]) {
      return blog
    } else {
      return sum
    }
  }

  return blogs.length === 0
    ? {}
    : {
      author:blogs.reduce(reducer, blogs[0])[0],
      blogs:blogs.reduce(reducer, blogs[0])[1]
    }

}

const mostBlogs = blogs => {
  const collectionA = _.groupBy(blogs, function(o) {return o.author})
  console.log('collectionA', collectionA)
  const collectionB = _.map(collectionA, function(value, key){return [ key, value.length ]  } )
  console.log('collectionB', collectionB)
  return favoriteBlog2 (collectionB)
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
