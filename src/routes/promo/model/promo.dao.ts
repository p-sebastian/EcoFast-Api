import {from} from 'rxjs'

import {PromoModel} from './promo.model'
import {TPromoCreate} from './promo.validator'

export const PromoDao = Object.freeze({
  findAll: () => from(PromoModel.find().exec()),
  findById: (id: string) => from(PromoModel.findById(id).exec()),
  create: (promo: TPromoCreate) => from(new PromoModel(promo).save()),
})
