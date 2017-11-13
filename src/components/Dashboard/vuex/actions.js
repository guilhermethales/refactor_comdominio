import http from 'src/http'

export default {
  getUltimosLancamentos (context) {
    http.get('lancamento/lastfive')
    .then((response) => {
      context.commit('updateUltimosLancamentos', response.data)
    })
  }
}