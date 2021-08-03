import { nasaApi } from './AxiosService'
import { AppState } from '../AppState'
import { Picture } from '../models/Picture';

class PicturesService {
  async getPicture(query) {
  try {
    const res = await nasaApi.get('apod?api_key=sdZzQa0qPTT44ek1t9bz7S4yUrbu6vqZc9XykWQG&date=' + query)
    console.log(res.data);
    AppState.picture = new Picture(res.data)
    console.log(AppState.picture);
  } catch (error) {
    console.log(error)
  }
}
}

export const picturesService = new PicturesService()