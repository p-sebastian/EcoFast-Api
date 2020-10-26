import {Promo} from '@routes/promo/model/promo.model'
import {Ref, getModelForClass, prop} from '@typegoose/typegoose'

export class Restaurant {
  @prop({required: true})
  public name!: string

  @prop({required: true, ref: 'Promo'})
  public promos!: Ref<Promo>[]
}

export const RestaurantModel = getModelForClass(Restaurant)
