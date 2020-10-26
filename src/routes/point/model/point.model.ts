import {Location} from '@routes/location/model/location.model'
import {User} from '@routes/user/model/user.model'
import {Ref, getModelForClass, prop} from '@typegoose/typegoose'

export class Point {
  @prop({required: true})
  public amount!: number

  @prop({required: true, ref: 'Location'})
  public location!: Ref<Location>

  @prop({required: true, ref: 'User'})
  public user!: Ref<User>
}

export const PointModel = getModelForClass(Point)
