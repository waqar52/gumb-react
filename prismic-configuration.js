	
import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://gumb.prismic.io/api'
 
export const Client = (req = null) => Prismic.client(apiEndpoint)

 
