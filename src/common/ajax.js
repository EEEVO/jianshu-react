import Axios from 'axios'

/**
 * 
 * 
 */
class Ajax {
  getPreview() {
    return (
      Axios.post('http://api.noods.me/getPreview').then((res) => {
        return res.data
      })
    )
  }
}

export default new Ajax()
