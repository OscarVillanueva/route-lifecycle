const isAuthenticatedGuard = async (to, from, next) => {

  return new Promise(() => {

    const random = Math.random() * 100

    if (random > 50) {
      console.log('pásate')
      next()
    }
    else {
      console.log(random, 'nel')
      next({ name: 'pokemon-home' })
    }

  })

}

export default isAuthenticatedGuard