import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class RestaurantsService {
  async getAllRestaurants() {
    const response = await api.get('api/restaurants')
    logger.log('Getting all of the restaurants', response.data)
  }

}

export const restaurantsService = new RestaurantsService()