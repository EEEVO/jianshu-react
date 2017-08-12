import Axios from 'axios'

/**
 * 
 * 
 */
export default function getPreview() {
  let foores
  Axios.post('http://api.noods.me/getPreview')
    .then((res) => {
      return foores
    })
}