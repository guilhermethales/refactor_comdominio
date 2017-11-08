import http from 'src/http'

export default {
  getUltimosLancamentos (context) {
    http.get('lancamento/list')
    .then((response) => {
      context.commit('updateUltimosLancamentos', response.data)
    })
  }
}
