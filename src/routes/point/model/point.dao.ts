import {from} from 'rxjs'

import {PointModel} from './point.model'
import {TPointCreate} from './point.validator'

export const PointDao = Object.freeze({
  findAll: () => from(PointModel.find().populate('location').exec()),
  create: (point: TPointCreate) => from(PointModel.create(point)),
})
