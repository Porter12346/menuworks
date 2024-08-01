import { dbContext } from "../db/DbContext.js"

class ItemsService {
  async getAllItems() {
    const items = await dbContext.Items.find()
    return items
  }
  async getItemById(itemId) {
    const item = await dbContext.Items.findById(itemId)
    return item
  }
  async createItem(itemBody) {
    const response = await dbContext.Items.create(itemBody)
    return response
  }
  async changeItem(itemId, itemBody) {
    const foundItem = await dbContext.Items.findById(itemId)
    foundItem.name = itemBody.name
    foundItem.picture = itemBody.picture
    foundItem.price = itemBody.price
    foundItem.description = itemBody.description
    foundItem.isAvailable = itemBody.isAvailable
    foundItem.type = itemBody.type
    await foundItem.save()
    return foundItem

  }
}
export const itemsService = new ItemsService()