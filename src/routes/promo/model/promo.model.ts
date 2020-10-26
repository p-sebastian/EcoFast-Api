import {getModelForClass, prop} from '@typegoose/typegoose'

export class Promo {
  @prop({required: true})
  public name!: string

  @prop({required: true})
  public points!: number
}

export const PromoModel = getModelForClass(Promo)
