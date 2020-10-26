import {Types} from 'mongoose'
import {from} from 'rxjs'

import {PointModel} from './point.model'
import {TPointCreate} from './point.validator'

export const PointDao = Object.freeze({
  // findAll: () => from(PointModel.find().populate('location').exec()),
  findAll: () =>
    from(
      PointModel.aggregate([
        {
          $group: {
            _id: '$user',
            total: {$sum: '$amount'},
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: '_id',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $unwind: '$user',
        },
        {
          $project: {
            _id: 1,
            total: 1,
            'user.email': 1,
          },
        },
      ]).exec(),
    ),
  create: (point: TPointCreate) => from(PointModel.create(point)),
  pointsForUser: (userId: string) =>
    from(
      PointModel.aggregate([
        {$match: {user: Types.ObjectId(userId)}},
        {
          $group: {
            _id: null,
            total: {$sum: '$amount'},
          },
        },
      ]).exec(),
    ),
  findAndUpdate: (user: string, subtract: number) =>
    from(PointModel.findOneAndUpdate({user}, {$inc: {amount: -subtract}})),
})
